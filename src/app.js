const express = require("express");
const { adminAuth } = require("./middlewares/auth");

const app = express();

app.get("/test", adminAuth);

app.get("/test", (req, res, next) => {
  // next();
  res.send("Hello World!");
});

app.post("/test", (req, res) => {
  console.log(req);
  return res.send(req.body);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000...");
});
