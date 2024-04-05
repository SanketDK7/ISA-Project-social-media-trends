const express = require('express');
const router = express.Router();
const {fetchPopularVideos} = require('../controllers/youtube.controller.js');

router.get('/popular', fetchPopularVideos);

module.exports = router;