const { createUser, batchCreateUser } = require("..");
const express = require("express");
const router = express.Router();

router.post("/createUser", createUser);
router.post("/batchCreateUser", batchCreateUser);

module.exports = router;
