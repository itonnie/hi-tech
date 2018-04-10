var mongoose = require('mongoose');

var adminSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
    permissions: {
        add_technician: Boolean,
        remove_technician: Boolean,
        edit_technician: Boolean,
        delete_order: Boolean,
        cancel_order: Boolean,
        generate_report: Boolean,
        generate_client_info: Boolean,
        view_clients: Boolean,
        quote_order: Boolean,
        approve_order: Boolean,
        complete_order: Boolean,
        email_client: Boolean
    }
}, { collection: 'admin' });

var Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;