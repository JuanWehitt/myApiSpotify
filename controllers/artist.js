const { request, response } = require("express")
//Los cors van importados en nuestro modelo de servidor
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
    //return isValid
    
    //Sugerencia para acortar el código      
    return (input && input.length == longitud && pattern.test(input));
}

const getArtista = (req = request, res = response) => {
    const {id} = req.params;

    //En caso que el token no venga por headers se puede obtener internamente de nuestra api, en este caso por variable de entorno
    const access_token = req.headers.access_token || process.env.ACCESS_TOKEN;
    
    const valido = validar(id)
    if (valido) {        
        const config = {
            method: 'get',
            url: `https://api.spotify.com/v1/artists/${id}`,
            headers: {                
                'Authorization': 'Bearer ' + access_token ,
                'Content-Type': 'application/json',
                'Host': 'api.spotify.com'
            }
        }
        //const url = `https://api.spotify.com/v1/artists/${id}`
        axios(config)
        .then((response) =>{
            // handle success
            // :-) 
            res.status(200).json({
                code: 200,
                status:'OK', 
                data:response.data});            
        }).catch(
        (error) => {
            console.log(error.code)
            //Siempre emitir una respuesta
            if(error.code == 'ERR_BAD_REQUEST'){                
                 // :-) 
                res.status(404).json({
                                code: 404,
                                status: 'NOT_FOUND',
                                msg: "El id no coincide con ningun artista"
                        });
            }
        }          
        ); 
    }else{
        // Utilizar el 400 para el badrequest, el 403 es Forbidden
        res.status(403).json({
            code: 400,
            status: 'BAD_REQUEST',
            mesnaje: "El id no es correcto"
        })
    }
}

const getAlbumsArtista = (req,res) =>{
    const {id} = req.params;
    //console.log(id)
    //En caso que el token no venga por headers se puede obtener internamente de nuestra api, en este caso por variable de entorno
    const access_token = req.headers.access_token || process.env.ACCESS_TOKEN;

    var config = {
        'method': 'GET',
        'url': `https://api.spotify.com/v1/artists/${id}/albums`,
        headers: {
        'Authorization': 'Bearer ' + access_token ,
        'Content-Type': 'application/json',
        'Host': 'api.spotify.com'},
    }
    axios(config)
    .then((response) =>{
        // handle success
         // :-) 
        res.status(200).json({  
            code: 200,
            status:'OK',          
            data:response.data
        });            
    }).catch(
    (error) => {
        //Siempre emitir una respuesta
        if(error.code == 'ERR_BAD_REQUEST'){
             // :-) 
            res.status(400).json({
                            code: 400,
                            status: 'BAD_REQUEST',
                            msg: error
                    });
            }          
        }
    ); 
}

const getTracksAlbums = (req, res) =>{
    const {id} = req.params;//del album
    const {limit} = req.query;
    //console.log(limit)

    //En caso que el token no venga por headers se puede obtener internamente de nuestra api, en este caso por variable de entorno
    const access_token = req.headers.access_token || process.env.ACCESS_TOKEN;

    //¿El limit es obligatorio ? De no ser así validar el llamado cuando no se pasa por query params
    var config = {
        'method': 'GET',
        'url': `https://api.spotify.com/v1/albums/${id}/tracks?limit=${limit}`,
        headers: {
        'Authorization': 'Bearer ' + access_token ,
        'Content-Type': 'application/json',
        'Host': 'api.spotify.com'},
    }
    axios(config)
    .then((response) =>{
        // handle success
         // :-) 
        res.status(200).json({  
            code: 200,
            status:'OK',          
            data:response.data
        });            
    }).catch(
    (error) => {
         //Siempre emitir una respuesta
        if(error.code == 'ERR_BAD_REQUEST'){
             // :-) 
            res.status(400).json({
                            code: 400,
                            status: 'BAD_REQUEST',
                            msg: "no se encontro"
                    });
            }          
        }
    ); 
}

module.exports = {
    getArtista,
    getAlbumsArtista,
    getTracksAlbums
}