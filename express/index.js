// first program using express js module.

const express = require("express"); // importing express js
const app = express();

app.get("", (req, res) => {
  // using get() to navigate to homepage and send response using res.send()
  res.send("Hello, this is Home page");
});
app.get("/about", (req, res) => {
  res.send("Hello, this is About page");
});
app.get("/contact", (req, res) => {
  res.send("Hello, this is Contactus page");
});

app.listen(8000); // starting server on port 8000.
