const express = require("express");

//common Code
const PORT = 5000;

// # Basic Server
const app = express();

app.get("", (req, res) => {
  res.send("<h1>My Express is running</h1>");
});

app.get("/about", (req, res) => {
  res.send("my About Page");
});

const data = [
  {
    id: "1",
    name: "Ali",
  },
  {
    id: "2",
    name: "Aslam",
  },
];
app.get("/user", (req, res) => {
  console.log("data", req.query);
  const { id } = req.query;
  console.log("id", typeof id);

  if (!id) {
    res.send("Please Provide the User ID");
  }
  const userfind = data.filter((user) => user.id == id && user);

  console.log("getData", userfind);

  if (userfind.length > 0) {
    // res.send(`user name:${userfind["0"].name}`);
    // Send is a Json
    res.send({ user: userfind, message: "Find" });
  } else {
    res.send("user not founded");
  }
});

// # make html pages and call them

// condition no 1 : call all pages
const path = require("path");
const publicFolderPath = path.join(__dirname, "public");
app.use(express.static(publicFolderPath));

// Condition No 2 using routes

app.get("/htmlpage/contact", (req, res) => {
  res.sendFile(`${publicFolderPath}/contactus.html`);
});

app.get("/htmlpage/userlogin", (req, res) => {
  res.sendFile(`${publicFolderPath}/userLogin.html`);
});

// 404
app.get("*", (req, res) => {
  res.send("<p>Page is Not Found 404</p>");
});
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
