const express = require("express");
const ejs = require("ejs");

//common Code
const PORT = 5000;

// # Basic Server
const app = express();

app.set("view engine", "ejs");
// Home Page
app.get("", (req, res) => {
  res.render("index");
});

app.get("/user", (req, res) => {
  res.render("user", { user: "Ali Khan Baba" });
});
// 404
app.get("*", (req, res) => {
  res.send("<p>Page is Not Found 404</p>");
});
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
