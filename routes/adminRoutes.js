const express = require("express");
const adminController = require("../controller/adminController");

const route = express.Router();

route.get("/add-product", adminController.addProduct);

route.post("/product", adminController.product);
route.get("/get-product", adminController.getProducts);
route.post("/del-product/:id", adminController.deleteProduct);

module.exports = route;
