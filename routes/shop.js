const path = require("path");

const express = require("express");

const dirName = require("../utils/dir_name");
const adminData = require("./admin");

const products = adminData.products;

const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("shop", {
    products,
    title: "Shop",
    path: "/",
    pageTitle: "Shop",
    hasProduct: products.length > 0,
    activeShop: true,
    productCss:true,
  });
});

module.exports = router;
