const user = require('./user/routes/routes');
const express = require('express');
const router = express.Router();

router.use(user)

module.exports = router;