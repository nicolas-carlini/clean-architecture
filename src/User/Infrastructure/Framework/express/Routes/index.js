const { create, batchCreate } = require("..");
const express = require("express");
const router = express.Router();

router.post("/create", create);
router.post("/batchCreate", batchCreate);

module.exports = router;
