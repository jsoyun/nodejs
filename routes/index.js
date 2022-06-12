const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  console.log("야야ㅑㅇ");
  res.render("index");
  console.log("라우터연ㅇ결");
});

module.exports = router;
