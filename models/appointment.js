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
    cancelled: Boolean,
    pending: Boolean,
    quoted: Boolean,
    //quoted: {
    //  ok: Boolean,
    //  created: Date,
    //  price: Number
    //}
    approved: Boolean,
    //approved: {
    //  ok: Boolean,
    //  created: Date,
    //}
    completed: Boolean,
    price: Number,
    paid: Boolean,
    email: String
}, { collection: 'appointments'});

var Appointment = mongoose.model('Appointment', appSchema);

module.exports = Appointment;