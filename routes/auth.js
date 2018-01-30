var express = require("express");
var Admin = require("../models/admin");
var Activity = require("../models/activity");
var Technician = require("../models/technician");
var Manager = require("../models/manager");
var router = express.Router();

router.post("/login", (req, res, next) => {
    var type = req.body.type;
    var email = req.body.email;
    var password = req.body.password;

    switch(type) {
        case "admin":
            Admin.findOne({ email: email, password: password }, (err, result) => {
                if(err) throw err;
                else if(result == null) {
        
                    Activity.registerActivity(email, null, "failed login", req.ip, (data) => {
                        if(data == false) {
                            console.log("unsuccessful");
                        }
                    });
        
                    res.json({
                        ok: false,
                        message: "Wrong username and password combination"
                    });
        
                } else {
        
                    Activity.registerActivity(result.email, result.id,"Successful login", req.ip, (data) => {
                        if(data == false) {
                            console.log("unsuccessful");
                        }
                    });
        
                    res.json({
                        ok: true,
                        message: "Login successful and activity registered",
                        data: result
                    });
                }
            });
        break;

        case "technician":
            Technician.findOne({ email: email, password: password }, (err, result) => {
                if(err) throw err;
                else if(result == null) {
        
                    Activity.registerActivity(email, null, "failed login", req.ip, (data) => {
                        if(data == false) {
                            console.log("unsuccessful");
                        }
                    });
        
                    res.json({
                        ok: false,
                        message: "Wrong username and password combination"
                    });
        
                } else {
        
                    Activity.registerActivity(result.email, result.id,"Successful login", req.ip, (data) => {
                        if(data == false) {
                            console.log("unsuccessful");
                        }
                    });
        
                    res.json({
                        ok: true,
                        message: "Login successful and activity registered",
                        data: result
                    });
                }
            });
        break;

        case "manager":
            Manager.findOne({ email: email, password: password }, (err, result) => {
                if(err) throw err;
                else if(result == null) {
        
                    Activity.registerActivity(email, null, "failed login", req.ip, (data) => {
                        if(data == false) {
                            console.log("unsuccessful");
                        }
                    });
        
                    res.json({
                        ok: false,
                        message: "Wrong username and password combination"
                    });
        
                } else {
        
                    Activity.registerActivity(result.email, result.id,"Successful login", req.ip, (data) => {
                        if(data == false) {
                            console.log("unsuccessful");
                        }
                    });
        
                    res.json({
                        ok: true,
                        message: "Login successful and activity registered",
                        data: result
                    });
                }
            });
        break;

        default:
        break;
    }

});

module.exports = router;