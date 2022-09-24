const express = require("express");
const bodyParse = require("body-parser");
const path = require("path");

const adminRoute = require("./Moule5/routes/admin");
const shopRoute = require("./Moule5/routes/shop");

const app = express();

app.use(bodyParse.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(shopRoute);
app.use("/admin", adminRoute);

app.use("/", (req, res, next) => {
  res.send("<h3>404 Page Not Founded</h3>");
});

app.listen(5000);
