const express = require("express");
const adminController = require("../controllers/admin");

const router = express.Router();

router.get("/admin/add-product", adminController.getAddProduct);

router.post("/add-product", adminController.postAddProduct);

router.get("/admin/products", adminController.getAdminProducts);

module.exports = router;
