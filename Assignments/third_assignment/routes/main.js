const path = require("path")
const express = require("express");

const router = express.Router();

router.get("/users", (req, res, next) => {
    res.sendFile(path.join(__dirname, "..", "view", "users.html"))
})

router.get("/", (req, res, next) => {
    res.sendFile(path.join(__dirname, "..", "view", "main.html"))
})

module.exports = router;