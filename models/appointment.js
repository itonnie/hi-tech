var mongoose = require('mongoose');

var appSchema = mongoose.Schema({
    time: String,
    date: String,
    timestamp: Date,
    county: String,
    fullname: String,
    town: String,
    street: String,
    phone: Number,
    category: String,
    sub: String,
    subsub: String,
    dispached_experts: [
        {
            tech_name: String,
            dispach_date: Date
        }
    ],
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
            time: Date
        }
    ]
}, { collection: 'appointments'});

var Appointment = mongoose.model('Appointment', appSchema);

module.exports = Appointment;

module.exports.sayHi = (data, callback) => {
    callback(true);
    return "hi" + data;
}

//Function that returns an array of appointments based on their status: "pending", "approved" etc
module.exports.getAppointments = (status, data) => {
    switch(status) {
        //return pending results
        case "pending":
            Appointment.find({ pending: true }, (err, results) => {
                if(err) {
                    console.log(err);
                } else {
                    data(results);
                }
            });
        break;

        case "quoted":
            Appointment.find({ quoted: true }, (err, results) => {
                if(err) {
                    console.log(err);
                } else {
                    data(results);
                }
            });
        break;

        case "approved":
            Appointment.find({ approved: true }, (err, result) => {
                if(err) throw err;
                else {
                    data(result);
                }
            });
        break;

        case "completed":
            Appointment.find({ completed: true }, (err, result) => {
                if(err) throw err;
                data(result);
            });
        break;

        case "cancelled":
            Appointment.find({ cancelled: true }, (err, result) => {
                if(err) throw err;
                data(result);
            });
        break;

        default:
            Appointment.find((err, result) => {
                if(err) throw err;
                else {
                    data(result);
                }
            });
        break;


    }
}

//Function that returns the appointment details based on it's ID
module.exports.appointmentDetails = (id, details) => {
    Appointment.findById({ _id: id }, (err, result) => {
        if(err) throw err;
        details(result);
    });
}
