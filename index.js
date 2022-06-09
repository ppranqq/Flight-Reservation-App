const port = 3000;

const express = require("express");

const path = require("path");

const app = express();

app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "files")));

app.use("/", (req, res, next) => {
  console.log("This middleware works");
  res.render("index");
});

app.listen(port);
