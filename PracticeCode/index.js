// const http = require("http");
// const data = require("./data");
// const fileHandler = require("fs");
// const path = require("path");

// const PORT = 4500;
// http
//   .createServer((req, res) => {
//     // res.write("<h3>Update File</h3>");
//     // res.end();

//     // Simple File Sytem
//     // fileHandler.writeFileSync("file.txt", "My First File makeing in node js");

//     // File Create using with path modeul
//     const createFilePath = path.join(__dirname, "files");
//     // fileHandler.writeFileSync(
//     //   createFilePath + "/second2File.txt",
//     //   "My Update file create using path modeule"
//     // );
//     fileHandler.readdir(createFilePath, (err, files) => {
//       console.log(files);
//     });
//     res.writeHead(200, { "Content-Type": "applicationjson" });
//     res.write(JSON.stringify(data));
//     res.end();
//   })

const http = require("http");

const PORT = 5000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plane");
  res.end("My Router is running now");
});

server.listen(PORT, () => {
  console.log("http://localhost:5000");
});
