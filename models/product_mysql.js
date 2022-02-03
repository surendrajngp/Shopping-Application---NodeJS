const db = require("../utils/mysqlDB");

module.exports = class Product {
  constructor(title, description, imgUrl, price) {
    this.title = title;
    this.description = description;
    this.imgUrl = imgUrl;
    this.price = price;
  }

  save() {
    return db.execute(
      "INSERT INTO products (title, price, description, imgUrl) VALUES(?,?,?,?)",
      [this.title, this.price, this.description, this.imgUrl]
    );
  }

  static findAll() {
    return db.execute("SELECT * FROM products");
  }

  static findOne(id) {
    return db.execute("SELECT * FROM products WHERE id = ?", [id]);
  }
};
