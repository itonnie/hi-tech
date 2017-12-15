var mongoose = require('mongoose');

var appSchema = mongoose.Schema({
    from: Date,
    to: Date,
    county: String,
    fullname: String,
    town: String,
    street: String,
    phone: Number,
    category: String,
    sub: String,
    name: String,
    quoted: Boolean
}, { collection: 'appointments'});

var Appointment = mongoose.model('Appointment', appSchema);

module.exports = Appointment;