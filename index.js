const http = require("http");

http
  .createServer((req, res) => {
    res.write("<h3>Result</h3>");
    res.end();
  })
  .listen(4500);
