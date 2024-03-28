const express = require('express');
const router = express.Router();
const redditController = require('../controllers/reddit.controller.js');

router.get('/popular-posts', redditController.getPopularPosts);

module.exports = router; 