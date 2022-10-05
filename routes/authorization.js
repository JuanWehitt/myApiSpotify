const { Router } = require("express");
const request = require("request")
const { loguearse, callback, refresh_token } = require("../controllers/authorization")

const router = Router()

router.get('/login', loguearse)
router.get('/callback', callback)  
router.get('/refresh_token', refresh_token) 

module.exports = router