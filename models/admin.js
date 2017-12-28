var mongoose = require('mongoose');

var adminSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String
}, { collection: 'admin' });

var Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;