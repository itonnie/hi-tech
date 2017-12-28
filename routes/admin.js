var express = require('express');
var Appointment = require('../models/appointment');
var Admin = require('../models/admin');
var session = require('express-session');
var router = express.Router();

router.get('/', checkSignIn, (req, res, next) => {
    res.render('admin', {
        title: 'Admin'
    });
});

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

router.get('/login', (req, res, next) => {
    res.render('login', {
        title: "Admin login"
    });
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

router.post('/login', (req, res, next) => {
    if(!req.body.email || !req.body.password) {
        res.status("400");
        res.send("Invalid data");
    } else {
        var email = req.body.email;
        var password = req.body.password;
        Admin.findOne({ email: email, password: password }, (err, result) => {
            if(err) throw err;
            else if(result == null) {
                res.json({
                    ok: false,
                    message: "Incorrect passwords or email"
                });
            }
            else {
                var user = {
                    email: email,
                    password: password
                };
                req.session.user = user;
                res.json({
                    title: "Home",
                    username: result.username
                });
            }
        });
    }
});

router.post('/signup', (req, res, next) => {
    if(!req.body.email || !req.body.username || !req.body.password) {
        res.status("400");
        res.send("Invalid data");
    } else {
        var email = req.body.email;
        var username = req.body.username;
        var password = req.body.password;

        Admin.findOne({ email: email }, (err, result) => {
            if(err) throw err;
            else if(!result) {
                //user doesnt exist
                var newuser = new Admin({
                    username: username,
                    password: password,
                    email: email
                });

                //save session
                var user = {
                    email: email,
                    password: password
                };

                req.session.user = user;

                newuser.save((err, saved) => {
                    if(err) throw err;
                    else {
                        res.json({
                            ok: true
                        })
                    }
                })
            } else {
                res.json({
                    ok: false,
                    message: "The user exists, please login."
                });
            }
        });
    }
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

router.get('/logout', (req, res, next) => {
    req.session.destroy(function() {
        //user logged out
    });
    res.redirect('/admin/login');
})

function checkSignIn(req, res, next) {
    if(req.session.user) {
        next();
    } else {
        var err = new Error("Not Logged in!");
        res.redirect('/admin/login');
    }
}

module.exports = router;