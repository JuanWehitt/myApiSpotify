const { Router } = require("express");
//const request = require("request")

//Quitar si no se utiliza
const { acces_token_g } = require("../controllers/authorization")
const { getArtista, getAlbumsArtista, getTracksAlbums} = require("../controllers/artist")

const router = Router()

router.get('/artist/:id', getArtista)
router.get('/artist/:id/albums', getAlbumsArtista)
router.get('/albums/:id/tracks', getTracksAlbums)
module.exports = router;