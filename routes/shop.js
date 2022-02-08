const express = require("express");

const shopController = require("../controllers/shop");

// * Routes -----------------
const router = express.Router();

router.get("/", shopController.getIndex);

router.get("/product-details/:productID", shopController.getProductDetails);

router.post("/add-to-cart", shopController.postAddToCart);

router.get("/cart", shopController.getCart);

router.get("/delete-cart-product/:id", shopController.deleteCartProduct);

module.exports = router;
