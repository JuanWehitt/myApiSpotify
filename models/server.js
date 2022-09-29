const express = require('express')
const cors = require('cors')
class Server{


    constructor(){
        this.app = express()
        this.middelware()
        this.router()
        this.port=process.env.PORT         
        this.scopes = 'user-read-private user-read-email'
        
    }

    middelware(){
        this.app.use(cors())
        this.app.use(express.static('public'))
        //this.app.use(cookieParser())
    }

    router(){
        this.app.use('/',require('../routes/authorization'))
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Example app listening on port ${this.port}`)
        })
    }

}

module.exports = Server


