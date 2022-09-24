const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Server run");
});

server.listen(5000);
