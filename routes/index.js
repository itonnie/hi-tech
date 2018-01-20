var express = require('express');
var Appointment = require('../models/appointment');
var Activity = require("../models/activity");
var path = require("path");
var router = express.Router();

/* GET home page. */
router.get('/', function(req,  res, next) {
  res.sendFile("index.html")
});

router.post('/addschedule', (req, res, next) => {

  var Apoint = new Appointment({
    from: req.body.from,
    to: req.body.to,
    county: req.body.county,
    fullname: req.body.fullname,
    town: req.body.town,
    street: req.body.street,
    phone: req.body.phone,
    category: req.body.category,
    sub: req.body.sub,
    name: req.body.name,
    quoted: false,
    pending: true,
    approved: false,
    completed: false,
    price: "",
    paid: false,
    cancelled: false,
    email: req.body.email
  });

  Apoint.save((err, result) => {
    if (err) throw err;
    else {
      Activity.registerActivity(email, result.id, "successful appointment schedule under " + category, req.ip, (data) => {
        if(data == false) {
          console.log("couldn't save activity");
        }
      });

      res.json({
        ok: true,
        id: result._id
      });
    }
  })
  
});

module.exports = router;
