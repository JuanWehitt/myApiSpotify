require('dotenv').config();
const Server = require('./models/server');

//const axios = require('axios').default;


const server = new Server()

server.listen()