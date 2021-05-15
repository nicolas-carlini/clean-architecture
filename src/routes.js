const user = require("./User/Infrastructure/Framework/express/Routes");
const express = require("express");
const router = express.Router();

router.use(user);

module.exports = router;
