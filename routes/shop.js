const express = require("express");

const shopController = require("../controllers/shop");

// * Routes -----------------
const router = express.Router();

router.get("/", shopController.getIndex);

module.exports = router;
