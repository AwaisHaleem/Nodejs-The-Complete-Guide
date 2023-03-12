const path = require("path");

const express = require("express");

const dirName = require("../utils/dir_name");

const router = express.Router();

const products = [];

router.get("/add-product", (req, res, next) => {
  res.render("add-product", {
    path: "/admin/add-product",
    pageTitle: "Add Product",
    formsCss: true,
    productCss: true,
    activeAddproduct: true,
  });
  // res.sendFile(path.join(dirName, "views", "add-product.html"));
});

router.post("/add-product", (req, res, next) => {
  
  products.push({ title: req.body.title });
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
