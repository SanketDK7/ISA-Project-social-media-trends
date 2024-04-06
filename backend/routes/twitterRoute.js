const express = require('express');
const router = express.Router();
const twitterController = require('../controllers/twitterController');

// Define the route to handle the Twitter API request
router.get('/twitterData', twitterController.getTwitterData);

module.exports = router;
