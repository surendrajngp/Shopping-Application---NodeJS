const express = require("express");
const adminController = require("../controllers/admin");

const router = express.Router();

router.get("/admin/add-product", adminController.getAddProduct);

router.post("/add-product", adminController.postAddProduct);

router.get("/admin/edit-product/:productID", adminController.getEditProduct);

router.get("/admin/products", adminController.getAdminProducts);

router.post("/edit-product", adminController.postEditProduct);

router.get("/delete-product/:productID", adminController.getDeleteProduct);

module.exports = router;
