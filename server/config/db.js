var mongoose = require('mongoose');
var connection = mongoose.connect('mongodb://localhost/mean_app');

module.exports = connection;