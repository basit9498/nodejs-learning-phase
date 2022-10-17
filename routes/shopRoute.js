const express = require("express");
const shopController = require("../controller/shopController");

const route = express.Router();

route.get("/", shopController.getProducts);
route.get("/login", shopController.login);

module.exports = route;
