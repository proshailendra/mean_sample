var express = require('express');
var router = express.Router();
var path= require("path");

var absPath= path.join(__dirname,"../../app/views/");
router.get('/', function(req, res, next) {
  res.sendFile(absPath+"layout.html");
});

module.exports = router;
