var express = require('express');
var Appointment = require('../models/appointment');
var router = express.Router();

/* GET home page. */
router.get('/', function(req,  res, next) {
  res.sendFile("index.html");
});

router.post('/addschedule', (req, res, next) => {
  var from = req.body.from;
  var to = req.body.to;
  var county = req.body.county;
  var fullname = req.body.fullname;
  var town = req.body.town;
  var street = req.body.street;
  var phone = req.body.phone;
  var category = req.body.category;
  var sub = req.body.sub;
  var name = req.body.name;
  var email = req.body.email;

  var Apoint = new Appointment({
    from: from,
    to: to,
    county: county,
    fullname: fullname,
    town: town,
    street: street,
    phone: phone,
    category: category,
    sub: sub,
    name: name,
    quoted: false,
    pending: true,
    approved: false,
    completed: false,
    price: "",
    paid: false,
    cancelled: false,
    email: email
  });

  Apoint.save((err, result) => {
    if (err) throw err;
    else {
      res.json({
        ok: true,
        id: result._id
      });
    }
  })
  
});

module.exports = router;
