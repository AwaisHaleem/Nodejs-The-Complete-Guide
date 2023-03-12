const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const homeData = require("./routes/home");
const userRouter = require("./routes/users");

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", "views");

app.use(homeData.router);
app.use(userRouter);

app.use((req, res, next) => {
  res.status(404).send("<h1>Page Not Found</h1>");
});

app.listen(2000);
