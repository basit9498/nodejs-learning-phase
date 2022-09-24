const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html >");
    res.write(" <head>");
    res.write("<title>Server Url Testing</title></head>");
    res.write("<body>");
    res.write(
      `<form method="POST" action="/message">message<input type="text" name="message" />author<input type="text" name="author" /><button type="submit">submit</button></form>`
    );
    res.write("  </body>");
    res.write("</html>");
    return res.end();
  } else if (url === "/message" && method == "POST") {
    res.setHeader("Content-Type", "text/html");
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const data = Buffer.concat(body).toString();
      console.log("data:", data);
      fs.writeFileSync("message.txt", data);
    });
    res.write("<h5>Wellcome to the Messages Pages</h5>");
    return res.end();
  } else {
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
});

server.listen(5000);
