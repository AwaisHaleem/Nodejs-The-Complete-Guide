const Product = require("../model/product");

exports.getProduct = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/products-list", {
      products,
      path: "/products",
      pageTitle: "All Products",
    });
  });
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/index", {
      products,
      path: "/",
      pageTitle: "Shop",
    });
  });
};

exports.getCart = (req, res, next) => {
  res.render("shop/cart", { path: "/cart", pageTitle: "Cart" });
};

exports.getOrders = (req, res, next) => {
  res.render("shop/orders", { path: "/orders", pageTitle: "Orders" });
};

exports.checkout = (req, res, next) => {
  res.render("shop/checkout", { path: "/checkout", pageTitle: "Checkout" });
};
