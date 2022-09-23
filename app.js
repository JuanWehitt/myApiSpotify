const axios = require('axios').default;
require('dotenv').config();

const express = require('express')
const app = express()
const port=process.env.PORT 
const api_key = process.env.API_KEY;

app.get('/',(req,res) => {
    res.send('hola hola')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})