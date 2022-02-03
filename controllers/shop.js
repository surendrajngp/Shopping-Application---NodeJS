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
