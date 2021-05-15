const user = require("./User/Routes");
const express = require("express");
const router = express.Router();

router.use(user);

module.exports = router;
