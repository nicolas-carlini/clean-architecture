const { createUser, batchCreateUser } = require("../Framework/express");
const express = require("express");
const router = express.Router();

router.post("/createUser", createUser);
router.post("/batchCreateUser", batchCreateUser);

module.exports = router;
