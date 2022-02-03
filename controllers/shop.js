const Product = require("../models/product_mysql");

exports.getIndex = (req, res, next) => {
  Product.findAll()
    .then(([products, fieldData]) => {
      res.render("shop/index", {
        title: "Shop",
        path: "/",
        products: products,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getProductDetails = (req, res, next) => {
  const prodID = req.params.productID; // productId by user

  Product.findOne(prodID)
    .then(([[product]]) => {
      res.render("shop/product-details", {
        title: "Product Details",
        path: "",
        product: product,
      });
    })
    .catch((err) => console.log(err));
};
