const { createUser, batchCreateUser } = require("../Adapters/Rest");
const express = require("express");
const router = express.Router();

router.post("/createUser", createUser);
router.post("/batchCreateUser", batchCreateUser);

module.exports = router;
