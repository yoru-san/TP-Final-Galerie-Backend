var express = require('express');
var router = express.Router();
var favorisController = require('./controllers/favoris.controller');
var imagesController = require('./controllers/images.controller');


router.get('/images', imagesController.getImages);
router.get('/favoris', favorisController.getFavoris);
router.put('/toggleFavori/:id', favorisController.toggleFavori);

module.exports = router;
