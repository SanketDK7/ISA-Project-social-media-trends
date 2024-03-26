const express = require('express');
const User = require("../models/user.model.js");
const router = express.Router();
const {fetchPopularVideos} = require('../controllers/youtube.controller.js')
const {getUsers,singleUser,createUser,updateUser,delUser} = require('../controllers/user.controller.js')

router.get('/', getUsers);

router.get('/:id', singleUser);

router.post("/", createUser);

router.put('/:id', updateUser);

router.delete('/:id', delUser);

router.get('/ytTrends', fetchPopularVideos);


module.exports = router;
