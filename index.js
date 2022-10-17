const express = require("express");
const path = require("path");
const bodyParse = require("body-parser");
const errorController = require("./controller/errorController");
const session = require("express-session");
// local File import
const adminRoute = require("./routes/adminRoutes");
const shopRoute = require("./routes/shopRoute");

const app = express();

// middleware
app.use(bodyParse.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(session({ secret: "mykey", resave: false, saveUninitialized: false }));
// engine working
app.set("view engine", "ejs");
app.set("views", "view");

app.use("/admin", adminRoute);
app.use(shopRoute);

app.use("/", errorController.pageNotFound);

app.listen(5000);
