var express = require('express');
var Appointment = require('../models/appointment');
var router = express.Router();

router.get('/', (req, res, next) => {
    res.render('admin', {
        title: 'Admin'
    });
});

router.get('/schedules', (req, res, next) => {
    Appointment.find((err, result) => {
        if(err) throw err;
        else {
            res.json({
                ok: true,
                data: result
            });
        }
    });
});

router.get('/quoted/:id', (req, res, next) => {
    var id = req.params.id;
    Appointment.findOneAndUpdate({ _id: id }, { $set: { quoted: true }}, { new: true }, (err, doc) => {
        if(err) throw err;
        else {
            Appointment.find((err, response) => {
                if(err) throw err;
                else {
                    res.json({
                        ok: true,
                        result: response
                    })
                }
            });
        }
    });
});

module.exports = router;