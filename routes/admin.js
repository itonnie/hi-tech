var express = require('express');
var Appointment = require('../models/appointment');
var Admin = require('../models/admin');
var Technician = require("../models/technician");
var Manager = require("../models/manager");
var session = require('express-session');
var router = express.Router();

router.get('/schedules/:type', (req, res, next) => {
    var type = req.params.type;
    switch(type) {
        case "pending":
            Appointment.find({ pending: true }, (err, result) => {
                if(err) throw err;
                res.json({
                    ok: true,
                    data: result
                });
            });
        break;

        case "quoted":
            Appointment.find({ quoted: true }, (err, result) => {
                if(err) throw err;
                res.json({
                    ok: true,
                    data: result
                });
            });
        break;

        case "approved":
            Appointment.find({ approved: true }, (err, result) => {
                if(err) throw err;
                res.json({
                    ok: true,
                    data: result
                });
            });
        break;

        case "completed":
            Appointment.find({ completed: true }, (err, result) => {
                if(err) throw err;
                res.json({
                    ok: true,
                    data: result
                });
            });
        break;

        case "cancelled":
            Appointment.find({ cancelled: true }, (err, result) => {
                if(err) throw err;
                res.json({
                    ok: true,
                    data: result
                });
            });
        break;

        default:
            Appointment.find((err, result) => {
                if(err) throw err;
                else {
                    res.json({
                        ok: true,
                        data: result
                    });
                }
            });
        break;
    }
});

router.get('/paid/:id', (req, res, next) => {
    var id = req.params.id;

    Appointment.findOneAndUpdate({ _id: id  }, {
        $set: { completed: true, quoted: false, approved: false, paid: true }
    }, (err, result) => {
        if(err) throw err;
        else {
            Appointment.find({ approved: true }, (err, completedOrders) => {
                if(err) throw err;
                else {
                    res.json({
                        ok: true,
                        data: completedOrders
                    });
                }
            });
        }
    });
});

router.post('/quote', (req, res, next) => {
    var id = req.body.id;
    var quotation = req.body.quotation;

    Appointment.findOneAndUpdate({ _id: id }, {
        $set: { quoted: true, price: quotation, pending: false}
    }, (err, doc) => {
        if(err) throw err;
        else {
            Appointment.find({ pending: true }, (err, data) => {
                if(err) throw err;
                else {
                    res.json({
                        ok: true,
                        data: data
                    });
                }
            });
        }
    });
});

router.post('/approve', (req, res, next) => {
    var id = req.body.id;

    Appointment.findOneAndUpdate({ _id: id }, {
        $set: { approved: true }
    }, (err, data) => {
        if(err) throw err;
        else {
            Appointment.find({ quoted: true }, (err, result) => {
                if(err) throw err;
                else {
                    res.json({
                        ok: true,
                        data: result
                    });
                }
            });
        }
    });
});

router.get('/search/:search', (req, res, next) => {
    var search = req.params.search;
    Appointment.find({
        $or: [
            { county: search },
            { fullname: search },
            { town: search },
            { street: search }
        ]
    }, (err, result) => {
        if(err) throw err;
        else {
            res.json({
                data: result,
                length: result.length
            });
            console.log(result);
        }
    });
});

router.get("/removetechnician/:id", (req, res, next)=> {
    var id = req.params.id;

    Technician.findByIdAndRemove(id, (err, response) => {
        if(err) throw err;
        else {
           Technician.find((err, data) => {
               if(err) throw err;
               else {
                   res.json({
                       ok: true,
                       data: data
                   });
               }
           });
        }
    });
});

router.post("/manager_permissions", (req, res, next) => {
    var id = req.body.id;

    Manager.update({ _id: id }, { permissions: {
        generate_report: req.body.g_r,
        quote_order: req.body.q_o,
        add_technician: req.body.a_t,
        remove_technician: req.body.r_t,
        edit_technician: req.body.e_t,
        delete_order : req.body.d_o,
        cancel_order : req.body.c_o,
        view_clients : req.body.v_c,
        generate_client_info : req.body.g_c_i,
        approve_order : req.body.a_o,
        complete_order : req.body.com_o,
        email_client : req.body.e_c
    } }, { "new": true }, (err, data) => {
        if(err) throw err;
        else {
            res.json({
                ok: true,
                data: data
            });
        }
    });
});

router.post("/technician_permissions", (req, res, next) => {
    var id = req.body.id;

    Technician.update({ _id: id }, { permissions: {
        generate_report : req.body.g_r,
        quote_order : req.body.q_o,
        add_technician : req.body.a_t,
        remove_technician : req.body.r_t,
        edit_technician : req.body.e_t,
        delete_order : req.body.d_o,
        cancel_order : req.body.c_o,
        view_clients : req.body.v_c,
        generate_client_info : req.body.g_c_i,
        approve_order : req.body.a_o,
        complete_order : req.body.com_o,
        email_client : req.body.e_c
    } }, { new: true }, (err, data) => {
        if(err) throw err;
        else {
            res.json({
                ok: true,
                data: data
            });
        }
    });
});

router.get("/removemanager/:id", (req, res, next)=> {
    var id = req.params.id;

    Manager.findByIdAndRemove(id, (err, response) => {
        if(err) throw err;
        else {
            Manager.find((err, data) => {
                if(err) throw err;
                else {
                    res.json({
                        ok: true,
                        data: data
                    });
                }
            });
        }
    });
});

router.post("/addtechnician", (req, res, next) => {
    var username = req.body.username;
    var phone = req.body.phone;
    var email = req.body.email;
    var staff_id = req.body.staff_id;
    var title = req.body.title;

    var newTech = new Technician({
        username: username,
        phone: phone,
        email: email,
        password: "12345678",
        staff_id: staff_id,
        title: title,
        account_created: Date.now(),
        last_login: Date.now(),
        permissions: {
            generate_report: true,
            quote_order: true,
            add_technician: false,
            remove_technician: false,
            edit_technician: false,
            delete_order: false,
            cancel_order: false,
            view_clients: false,
            generate_client_info: false,
            approve_order: false,
            complete_order: false,
            email_client: false
        }
    });

    Technician.findOne({ email: email }, (err, result) => {
        if(err) throw err;
        else if(result == null) {
            newTech.save((error, data) => {
                if(error) throw error;
                else {
                    Technician.find((erro, data2) => {
                        if(erro) throw erro;
                        else {
                            res.json({
                                ok: true,
                                data: data2,
                                info: data
                            });
                        }
                    });
                }
            });
        } else {
            res.json({
                ok: false,
                data: result,
                message: "Technitian already exists."
            });
        }
    });
});

router.post("/addmanager", (req, res, next) => {
    var username = req.body.username;
    var phone = req.body.phone;
    var email = req.body.email;
    var staff_id = req.body.staff_id;

    var newManager = new Manager({
        username: username,
        phone: phone,
        email: email,
        password: "12345678",
        staff_id: staff_id,
        account_created: Date.now(),
        last_login: Date.now(),
        permissions: {
            generate_report: true,
            quote_order: true,
            add_technician: true,
            remove_technician: true,
            edit_technician: true,
            delete_order: false,
            cancel_order: false,
            view_clients: true,
            generate_client_info: true,
            approve_order: true,
            complete_order: true,
            email_client: true
        }
    });

    Manager.findOne({ email: email }, (err, result) => {
        if(err) throw err;
        else if(result == null) {
            newManager.save((error, data) => {
                if(error) throw error;
                else {
                    Manager.find((erro, data2) => {
                        if(erro) throw erro;
                        else {
                            res.json({
                                ok: true,
                                data: data2,
                                info: data
                            });
                        }
                    });
                }
            });
        } else {
            res.json({
                ok: false,
                data: result,
                message: "Manager already exists."
            });
        }
    });
});

module.exports = router;