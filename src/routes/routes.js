const {createUser} = require('./user');
const express = require('express');
var router = express.Router();

router.post('/user', createUser);

module.exports = router;


