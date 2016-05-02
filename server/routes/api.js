var express = require('express');
var router = express.Router();

router.use("/userservice",require("../controllers/user.api"));

module.exports = router;
