const Product = require("../model/product");

exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    path: "/admin/add-product",
    pageTitle: "Add Product",
    formsCss: true,
    productCss: true,
    activeAddproduct: true,
  });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

exports.getProduct = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop", {
      products,
      title: "Shop",
      path: "/",
      pageTitle: "Shop",
      hasProduct: products.length > 0,
      activeShop: true,
      productCss: true,
    });
  });
};
