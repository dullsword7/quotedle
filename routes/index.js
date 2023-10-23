const express = require("express");
const router = express.Router();
const mainController = require('../controllers/mainController');

/**
 * App Routes
 */

router.get('/', mainController.homepage);
router.post('/check', mainController.check);
router.get('/success', mainController.guessSuccessful);
router.get('/failure', mainController.guessFailure);
router.get('/playAgain', mainController.playAgain);

module.exports = router;
