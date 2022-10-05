const { Router } = require("express");
//const request = require("request")

const { acces_token_g } = require("../controllers/authorization")
const { getArtista } = require("../controllers/artist")

const router = Router()

router.get('/artist/:id', getArtista)
//router.get('/artist/:id/tracks', getTracks)
module.exports = router;