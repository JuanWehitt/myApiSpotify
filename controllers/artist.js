const express = require("express")
const cors = require('cors')
const axios = require('axios').default

const validar = (id) => {
    let isValid = false;
    const input = id
    const longitud = 22
    
    const pattern = new RegExp('^[A-Z,0-9]+$', 'i');
    //console.log("la longitud es de "+id.length+" el id es "+id+" input="+input)
    // si input esta vacio entonces no es valido
    if(!input) {
        isValid = false;
    } else {    
        if(input.length != longitud) {
            isValid = false;
        } else {
            // si input contiene caracteres diferentes a los permitidos
            if(!pattern.test(input)){ 
                isValid = false;
            } else {            
                isValid = true;
            }
        }
    }
    return isValid
}

const getArtista = (req, res) => {
    const {id} = req.params;
    //console.log(req.headers.access_token);
    const valido = validar(id)
    if (valido) {
        var options = {
            'method': 'GET',
            'url': `https://api.spotify.com/v1/artists/${id}`,
            headers: {
                'Authorization': 'Bearer ' + req.headers.access_token ,
                'Content-Type': 'application/json',
                'Host': 'api.spotify.com'
            },
        };
        const url = `https://api.spotify.com/v1/artists/${id}`
        axios.get(url,options)
        .then((response) =>{
            // handle success
            res.status(200).json({data:response.data});            
        }).catch(
        (error) => {
            res.status(400).json({
                    code: response.status,
                    msg: error
            });  
            }
        ); 
    }else{
        res.status(403).json({
            mesnaje: "El id no es correcto"
        })
    }
}

const getTraksArtista = (req,res) =>{
    const {id} = req.params;
    var options = {
        'method': 'GET',
        'url': `https://api.spotify.com/v1/artists/${id}`,
        headers: {
        'Authorization': 'Bearer ' + req.headers.access_token ,
        'Content-Type': 'application/json',
        'Host': 'api.spotify.com'},
    };
}



module.exports = {
    getArtista,
    //getTraksArtista
}