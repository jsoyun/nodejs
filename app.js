// const express = require("express");
// const router = express.Router()
// const app = express();

const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer(function (req, res) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("hello world");
});

server.listen(port, hostname, function () {
  console.log(`server 연결됨 ${hostname}:${port}`);
});
