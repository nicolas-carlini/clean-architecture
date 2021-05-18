import { create, batchCreate } from ".."
import express from "express"
const router = express.Router();

router.post("/create", create);
router.post("/batchCreate", batchCreate);

module.exports = router;
