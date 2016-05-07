var mongoose = require('mongoose');
var strCon=process.env.MONGODB_URI;
var connection = mongoose.connect(strCon);

module.exports = connection;
