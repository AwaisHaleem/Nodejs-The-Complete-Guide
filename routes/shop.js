const path = require("path");

const express = require("express");

const dirName = require("../utils/dir_name");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.sendFile(path.join(dirName, "views", "shop.html"));
});

module.exports = router;
