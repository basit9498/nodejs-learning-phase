const ProductModel = require("../model/productModel");

exports.addProduct = (req, res) => {
  res.render("admin/add-product.ejs", {
    redirect_path: "/",
    current: "/admin/add-product",
  });
};

exports.product = (req, res) => {
  const ProductCreate = new ProductModel(
    req.body.sku,
    req.body.name,
    req.body.price
  );
  ProductCreate.save();
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  ProductModel.fetchAll((product) => {
    res.render("admin/admin-projects.ejs", {
      current: "/admin/get-product",
      products: product,
    });
  });
};

exports.deleteProduct = (req, res, next) => {
  ProductModel.deleteById(req.params.id, () => {
    res.redirect("/admin/get-product");
  });
};
