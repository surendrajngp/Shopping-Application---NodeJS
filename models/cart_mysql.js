const db = require("../utils/mysqlDB");

module.exports = class Cart {
  static addToCart(productID) {
    return db.execute("INSERT INTO cart (productID) VALUES(?)", [productID]);
  }

  static findAll() {
    return db.execute("SELECT * FROM cart");
  }

  static findOne(productID) {
    return db.execute("SELECT * FROM cart where productID = ?", [productID]);
  }

  static update(productID, quantity) {
    return db.execute(
      "UPDATE cart SET quantity = quantity + ? WHERE productID = ?",
      [quantity, productID]
    );
  }
};
