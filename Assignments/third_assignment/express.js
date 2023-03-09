const path = require("path");

const express = require("express");

const router = require("./routes/main");

const app = express();

app.use(express.static(path.join(__dirname, "public")));



app.use(router);

app.listen(100);
