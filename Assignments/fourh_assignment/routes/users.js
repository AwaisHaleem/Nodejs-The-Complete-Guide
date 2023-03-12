const express = require("express");

const homeData = require("./home");

const router = express.Router();

router.get("/users", (req, res, next) => {
  res.render("users", { path: "/users", users: homeData.users });
});

module.exports = router;
