const Product = require("../models/product_mysql");
const Cart = require("../models/cart_mysql");

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

exports.postAddToCart = (req, res, next) => {
  const prodID = req.body.productID;

  Cart.findOne(prodID)
    .then(([product]) => {
      if (product.length > 0) {
        Cart.update(prodID, 1)
          .then(() => {
            res.redirect("/");
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        Cart.addToCart(prodID)
          .then(() => {
            res.redirect("/");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getCart = (req, res, next) => {
  Cart.findAll()
    .then(([cart]) => {
      Product.findAll()
        .then(([products]) => {
          const cartProducts = [];
          for (let item of cart) {
            for (let product of products) {
              if (item.productID === product.id) {
                cartProducts.push({
                  product: product,
                  quantity: item.quantity,
                });
              }
            }
          }

          res.render("shop/cart", {
            title: "Cart",
            path: "/cart",
            cartItems: cartProducts,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.deleteCartProduct = (req, res, next) => {
  const prodID = req.params.id;

  Cart.findOne(prodID)
    .then(([[cartItem]]) => {
      if (cartItem.quantity > 1) {
        Cart.update(prodID, -1).then(() => {
          res.redirect("/cart");
        });
      } else {
        Cart.delete(prodID).then(() => {
          res.redirect("/cart");
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
