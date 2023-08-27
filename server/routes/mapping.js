const express = require("express");
const router = express.Router();

const bodyParser = require('body-parser')
jsonParser = bodyParser.json();

const mappingController = require("../controllers/mapping")

router.get("/get-all-mapping", mappingController.getAllMapping)

router.post("/add-mapping", jsonParser, mappingController.postAddProduct)


module.exports = router;