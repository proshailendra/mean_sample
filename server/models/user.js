var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var connection = require("../config/db");
autoIncrement = require('mongoose-auto-increment');

//Now you can create user entity which will have an _id field added of type Number and will automatically increment with each new document
autoIncrement.initialize(connection);

var userSchema = new Schema({
    _id: {type: Number, required: true, unique: true}, //you can skip it with auto increment
    name: {type: String, required: true},
    address: {type: String, required: true}
});

userSchema.plugin(autoIncrement.plugin, 'users');
var user = mongoose.model('users', userSchema);

module.exports = user;