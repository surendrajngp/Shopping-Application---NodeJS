const Product = require("../models/product_mysql");

exports.getAddProduct = (req, res, next) => {
  res.render("admin/add-product", {
    title: "Add Product",
    path: "/admin/add-product",
  });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(
    req.body.title,
    req.body.description,
    req.body.imgUrl,
    req.body.price
  );

  product
    .save()
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getAdminProducts = (req, res, next) => {
  Product.findAll().then(([result]) => {
    res.render("admin/products", {
      title: "Admin Products",
      path: "/admin/products",
      products: result,
    });
  });
};
