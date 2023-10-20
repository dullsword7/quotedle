const express = require("express");
const router = express.Router();
const mainController = require('../controllers/mainController');

/**
 * App Routes
 */

router.get('/', mainController.homepage);
router.post('/check', mainController.check);

module.exports = router;
