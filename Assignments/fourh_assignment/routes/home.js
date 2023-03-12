const express = require("express");

const router = express.Router();

const users = [];

router.get("/", (req, res, next) => {
  res.render("form", { path: "/home", users: users });
});

router.post("/", (req, res, next) => {
  users.push({ name: req.body.name });
  res.status(301).redirect("/users");
});

exports.router = router;
exports.users = users;
