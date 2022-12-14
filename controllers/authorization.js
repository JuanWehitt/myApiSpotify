const express = require("express");
const cors = require('cors');
const request = require('request');
const cookieParser = require('cookie-parser');

const stateKey = 'spotify_auth_state'
const client_id = process.env.CLIENT_ID
const client_secret = process.env.CLIENT_SECRET
const redirect_uri = process.env.REDIRECT_URI 
var acces_token_g = ""

const loguearse = (req, res) => {

    var state = generateRandomString(16);
    res.cookie(stateKey, state);    
    // your application requests authorization
    var scope = 'user-read-private user-read-email';
    res.status(200).redirect(`https://accounts.spotify.com/authorize?response_type=code&client_id=${client_id}&scope=${scope}&redirect_uri=${redirect_uri}&state=${state}`)

  }

const callback = (req, res) => {
  
    // your application requests refresh and access tokens
    // after checking the state parameter
  
    var code = req.query.code || null;
    var state = req.query.state || null;
    var storedState = req.cookies ? req.cookies[stateKey] : null;

    if (state === null || state !== storedState) {
      res.redirect(`/#error=state_mismatch`);
    } else {
      res.clearCookie(stateKey);
      var authOptions = {
        url: 'https://accounts.spotify.com/api/token',
        form: {
          code: code,
          redirect_uri: redirect_uri,
          grant_type: 'authorization_code'
        },
        headers: {
          'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64'))
        },
        json: true
      };
  
      request.post(authOptions, (error, response, body) => {
        if (!error && response.statusCode === 200) {
  
          const access_token = body.access_token
          const refresh_token = body.refresh_token
          acces_token_g = body.access_token
          const options = {
            url: 'https://api.spotify.com/v1/me',
            headers: { 'Authorization': 'Bearer ' + access_token },
            json: true
          };
  
          // use the access token to access the Spotify Web API
          request.get(options, (error, response, body) => {
            //console.log(response.headers);
            res.status(200).json({
              message: "Acceso consedido a: "+body.display_name,  
              token: acces_token_g         
            })
          });
  
          // we can also pass the token to the browser to make requests from there
          //res.redirect(`/#access_token=${access_token}&refresh_token={refresh_token}`);
        } else {
          const invalid_token = body.invalid_token
          res.redirect(`/#error=${invalid_token}`);          
        }
      });
    }
}

const refresh_token = (req, res) => {
  
  // requesting access token from refresh token
  var refresh_token = req.query.refresh_token;
  var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: { 'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64')) },
    form: {
      grant_type: 'refresh_token',
      refresh_token: refresh_token
    },
    json: true
  };

  request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      var access_token = body.access_token;
      res.send({
        'access_token': access_token
      });
    }
  });
}

const token = ()=>{
  console.log(acces_token_g)
  return acces_token_g
}

  /**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */
 var generateRandomString = function(length) {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  };

  module.exports = {
    loguearse,
    callback,
    refresh_token,
    acces_token_g
  }