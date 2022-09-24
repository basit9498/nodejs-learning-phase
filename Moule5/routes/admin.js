const express = require("express");
const path = require("path");
const path_dir = require("../../utils/path");

const route = express.Router();

route.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(path_dir, "Moule5", "view", "product.html"));
});

route.post("/product", (req, res, next) => {
  console.log("req.body:", req.body);
  res.redirect("/");
});

module.exports = route;
