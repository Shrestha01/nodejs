//using HTTP module to run file file server.

const http = require("http");
http
  .createServer((req, resp) => {
    resp.write("Hello I am from server side");
    resp.end();
  })
  .listen(5050),
  () => {
    console.log("server is listening");
  };

// benefit of arrow function, it makes code very small and easy rather than other function.
