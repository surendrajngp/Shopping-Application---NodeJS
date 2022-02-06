const Product = require("../models/product_mysql");

exports.getAddProduct = (req, res, next) => {
  res.render("admin/add-product", {
    title: "Add Product",
    path: "/admin/add-product",
    editing: false,
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

exports.getEditProduct = (req, res, next) => {
  const prodID = req.params.productID;

  Product.findOne(prodID)
    .then(([[product]]) => {
      res.render("admin/add-product", {
        title: "Edit Product",
        path: "/admin/edit-product",
        editing: true,
        product: product,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postEditProduct = (req, res, next) => {
  const prodID = req.body.productID;
  const product = new Product(
    req.body.title,
    req.body.description,
    req.body.imgUrl,
    req.body.price
  );

  product
    .updateOne(prodID)
    .then(() => {
      res.redirect("/admin/products");
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
