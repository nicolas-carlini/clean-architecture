const {createUser, batchCreateUser} = require("./user");
const express = require('express');
const router = express.Router();

router.post('/createUser', createUser);
router.post('/batchCreateUser', batchCreateUser);

module.exports = router;
