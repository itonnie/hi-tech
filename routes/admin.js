var express = require('express');
var Appointment = require('../models/appointment');
var Admin = require('../models/admin');
var Technician = require("../models/technician");
var Manager = require("../models/manager");
var session = require('express-session');
var router = express.Router();

router.get('/schedules/:type', (req, res, next) => {
    var type = req.params.type;
    Appointment.getAppointments(type, data => {
        res.json({
            ok: true,
            data: data
        });
    });
});

router.get('/paid/:id', (req, res, next) => {
    var id = req.params.id;

    Appointment.findOneAndUpdate({ _id: id  }, {
        $set: { completed: true, quoted: false, approved: false, paid: true }
    }, (err, result) => {
        if(err) throw err;
        else {
            Appointment.getAppointments("approved", approved => {
                Appointment.getAppointments("completed", completed => {
                    res.json({
                        ok: true,
                        approved: approved,
                        completed: completed
                    });
                });
            });
        }
    });
});

router.get("/cancel/:id", (req, res, next) => {
    Appointment.update({ _id: req.params.id }, {
        cancelled: true,
        pending: false,
        quoted: false,
        approved: false,
        completed: false
    }, {new: true }, (err, cancelledOrder) => {
        Appointment.getAppointments("pending", pending => {
            Appointment.getAppointments("quoted", quoted => {
                Appointment.getAppointments("approved", approved => {
                    Appointment.getAppointments("completed", completed => {
                        res.json({
                            ok: true,
                            doc: cancelledOrder,
                            pending: pending,
                            quoted: quoted,
                            approved: approved,
                            completed: completed
                        });
                    });
                });
            });
        });
    });
});

//Information about the order
router.post("/order", (req, res, next) => {
    var _id = req.body.id;

    Appointment.findById(_id, (err, response) => {
        if(err) {
            res.json({
                ok: false,
                message: "Order could not be found."
            })
        }
        else {
            res.json({
                ok: true,
                data: response
            });
        }
    })
})

//make a quotation on the order
router.post('/quote', (req, res, next) => {
    var id = req.body.id;
    var quotation = req.body.quotation;

    if(quotation == undefined) {
        res.json({
            ok: false,
            message: "Please add a valid price."
        });
    } else {
        Appointment.findOneAndUpdate({ _id: id }, {
            $set: { quoted: true, price: quotation, pending: false}
        }, {new: true }, (err, doc) => {
            if(err) throw err;
            else {
                res.json({
                    ok: true,
                    data: doc
                });
            }
        });
    }
});

router.post('/approve', (req, res, next) => {
    var id = req.body.id;

    Appointment.findOneAndUpdate({ _id: id }, {
        $set: { approved: true }
    }, (err, data) => {
        if(err) throw err;
        else {
            Appointment.getAppointments("quoted", quoted => {
                Appointment.getAppointments("approved", approved => {
                    res.json({
                        ok: true,
                        quoted: quoted,
                        approved: approved
                    });
                });
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
            Technician.findOne({ _id: id }, (err, data) => {
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

router.post('/comment', (req, res, next) => {
    var id = req.body.id;
    Appointment.update({ _id: id }, {
        $push: {
            comments: {
                username: req.body.username,
                comment: req.body.comment
            }
        }
    }, { new: true },(err, result) => {
        if(err) throw err;
        else {
            Appointment.findOne({ _id: id }, (err, data) => {
                if(err) throw err;
                else {
                    res.json({
                        ok: true,
                        data: data
                    });
                }
            })
            
        }
    })
});

router.post("/changepassword", (req, res, next) => {
    var username = req.body.username;
    var currentPassword = req.body.current;
    var newpassword = req.body.newpassword;

    Admin.findOne({ username: username, password: currentPassword }, (err, result) => {
        if(err) throw err;
        else if(result == null) {
            res.json({
                ok: false,
                message: "Unable to change passwords for this account, contact admin."
            });
        } else {
            Admin.update({username: username }, {
                password: newpassword
            }, { new: true }, (err, result) => {
                if(err) throw err;
                else {
                    res.json({
                        ok: true,
                        message: "Password has been successfully changed."
                    })
                }
            })
        }
    })
})

module.exports = router;