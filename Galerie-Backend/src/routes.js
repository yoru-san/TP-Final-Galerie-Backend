var express = require('express');
var router = express.Router();
var favoriController = require('./controllers/favori.controller');


router.get('/:id', favoriController.getFavori);
// router.get('/me/routine/:id', routineController.showRoutine);
// router.post('/me/routine', routineController.addRoutine);
// router.put('/me/routine/activate/:id', routineController.activateRoutine);
// router.delete('/me/routine/:id', routineController.deleteRoutine);

module.exports = router;
