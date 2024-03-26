const express = require('express');
const User = require("../models/user.model.js");
const router = express.Router();
const {getUsers} = require('../controllers/user.controller.js')

router.get( '/', getUsers);

router.get('/:id', getSingle);



module.exports = router;
