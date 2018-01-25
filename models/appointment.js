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
    subsub: String,
    name: String,
    cancelled: Boolean,
    pending: Boolean,
    quoted: Boolean,
    approved: Boolean,
    completed: Boolean,
    price: Number,
    paid: Boolean,
    email: String,
    desc: String,
    warranty: Boolean,
    comments: [
        {
            username: String,
            comment: String,
            time: { type: Date, default: Date.now() }
        }
    ]
}, { collection: 'appointments'});

var Appointment = mongoose.model('Appointment', appSchema);

module.exports = Appointment;