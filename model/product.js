const fs = require("fs");
const path = require("path");

const p = path.join(__dirname, "..", "data", "products.josn");

const getProductsFromFile = (cb) => {
  fs.readFile(p, (err, content) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(content));
    }
  });
};

module.exports = class Product {
  constructor(title, imageUrl, price, description) {
    this.title = title;
    this.imageUrl = imageUrl,
    this.price = price,
    this.description = description
  }

  save() {
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};
