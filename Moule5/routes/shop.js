const express = require("express");
const path = require("path");
const path_dir = require("../../utils/path");

const route = express.Router();

route.get("/", (req, res, next) => {
  res.sendFile(path.join(path_dir, "Moule5", "view", "shop.html"));
});

module.exports = route;
