const fs = require("fs");
const path = require("path");
const pathDir = require("../utils/path");

const pathFile = path.join(pathDir, "data", "product_data.json");

const getFileData = (path, cb) => {
  fs.readFile(path, (err, fileData) => {
    if (!err) {
      cb([...JSON.parse(fileData)]);
    } else {
      cb([]);
    }
  });
};
module.exports = class Product {
  constructor(sku, name, price) {
    (this.sku = sku), (this.name = name), (this.price = price);
  }

  save() {
    this.id = Math.random();
    getFileData(pathFile, (prod) => {
      let products = [];
      products = prod;
      products.push(this);
      fs.writeFile(pathFile, JSON.stringify(products), (err) => {
        if (err) console.log("err file write:", err);
      });
    });
  }

  static fetchAll(cb) {
    getFileData(pathFile, (data) => {
      cb(data);
    });
  }

  static deleteById(id, cb) {
    getFileData(pathFile, (prod) => {
      const updateProducts = prod.filter((data) => data.id != id);
      fs.writeFile(pathFile, JSON.stringify(updateProducts), (err) => {
        if (err) {
          console.log("err", err);
          cb();
        } else {
          cb();
        }
      });
    });
  }
};
