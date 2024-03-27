const express = require('express');
const router = express.Router();
const twitterController = require('../controllers/twitter.controllers.js');

router.get('/trends', twitterController.fetchTwitterTrends);

module.exports = router;
