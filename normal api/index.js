const http = require("http");
const data = require("./app.js");
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(data));
    res.end();
  })
  .listen(8000, () => {
    console.log("Server listening on port 5273");
  });
