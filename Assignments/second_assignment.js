const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("first middleware");
  next();
});

app.use((req, res, next) => {
  console.log("Second middleware");
  next();
});

app.use((req, res, next) => {
  res.send("<h1> Hello from Last</h1>");
  next();
});

app.listen(100);
