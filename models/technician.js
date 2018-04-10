var mongoose = require('mongoose');
var Appointment = require("./appointment");

var technicianSchema = mongoose.Schema({
    username: String,
    phone: Number,
    email: String,
    password: String,
    staff_id: String,
    title: String,
    current_job: String,
    active_jobs: Array,
    job_history: Array,
    account_created: { type: Date },
    last_login: { type: Date },
    permissions: {
        add_technician: Boolean,
        remove_technician: Boolean,
        edit_technician: Boolean,
        delete_order: Boolean,
        cancel_order: Boolean,
        generate_report: Boolean,
        view_clients: Boolean,
        generate_client_info: Boolean,
        quote_order: Boolean,
        approve_order: Boolean,
        complete_order: Boolean,
        email_client: Boolean
    }
});

var Technician = mongoose.model("Technician", technicianSchema, "technicians");

module.exports = Technician;

module.exports.getJobInfo = function getJobInfo(id) {
    Appointment.findOne({ _id: id }, (err, data) => {
        if(err) throw err;
        else {
            return data;
        }
    });
}