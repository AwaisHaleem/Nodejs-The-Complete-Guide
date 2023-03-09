const express = require("express");

const app = express();

app.use("/book", (req, res, next) => {
  console.log("in book");
  res.send("<h1> Hello </h1>");
});

app.use("/", (req, res, next) => {
  // use for adding middleware
  console.log("In another middleware");
  res.send("<h1> Hello From Express</h1>");
});
app.listen(3100);
