const {createUser,batchCreateUser} = require('./user');
const express = require('express');
var router = express.Router();

router.post('/create_user', createUser);
router.post('/batchCreateUser', batchCreateUser);

module.exports = router;


