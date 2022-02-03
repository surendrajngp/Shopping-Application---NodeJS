const express = require("express");

const shopController = require("../controllers/shop");

// * Routes -----------------
const router = express.Router();

router.get("/", shopController.getIndex);

router.get("/product-details/:productID", shopController.getProductDetails);

module.exports = router;
