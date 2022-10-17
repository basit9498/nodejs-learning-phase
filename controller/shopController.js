const ProductModel = require("../model/productModel");

exports.getProducts = (req, res) => {
  console.log("Session", req.session);
  console.log("Session islogg", req.session.isLoggin);
  ProductModel.fetchAll((prod) =>
    res.render("shop/product.ejs", {
      current: "/",
      products: prod,
    })
  );
};

exports.login = (req, res, next) => {
  req.session.isLoggin = true;
  res.redirect("/");
};
