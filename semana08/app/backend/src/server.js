const express = require("express");

const server = express();

server.get("/", (req, res) => {
  res.send(`Hello ${req.query.name}`);
});

server.listen(3333);
