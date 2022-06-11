const express = require("express");
const router = express.Router();

exports.router.get("/test", function (req, res, next) {
  res.render("index");
});
