const express = require("express");
const router = express.Router();

const assetController = require("../controllers/asset")

router.get("/get-all-fileName", assetController.getAllFileName)


module.exports = router;