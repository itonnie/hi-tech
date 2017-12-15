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

module.exports = router;