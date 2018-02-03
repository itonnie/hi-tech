var express = require('express');
var Appointment = require('../models/appointment');
var Activity = require("../models/activity");
var Visitor = require("../models/visitors");
var Feedback = require("../models/feedback");
var path = require("path");
var router = express.Router();

/* GET home page. */
router.get('/', function(req,  res, next) {
  Visitor.findOne({ ip: req.ip }, (err, response) => {
    if(err) throw err;
    else if(response == null) {
      var newVisitor = new Visitor({
        ip: req.ip,
        isMobile: false,
        n_o_v: 1,
        coords: {
          accuracy: 0,
          altitude: 0,
          altitudeAccuracy: "null",
          heading: "null",
          latitude: 0,
          longitude: 0,
          speed: 0
        }
      });
    
      newVisitor.save((err, response) => {
        console.log(response);
        if(err) throw err;
        else {
          res.sendFile("index.html");
        }
      });
    } else {
      Visitor.findOneAndUpdate({ ip: req.ip}, {
        $inc: {
          n_o_v: 1
        }
      });
    }
  });

});

router.get("/func", (req, res, next) => {
  Appointment.appointmentDetails("5a6358a61e3d8c06e4977c0d", data => {
    res.json({
      ok: true,
      data: data
    });
  });
});

router.post('/updateinfo', (req, res, next) => {
  Visitor.findOneAndUpdate({ ip: req.ip }, {
    $set: {
      coords: {
        accuracy: req.body.accuracy,
        altitude: req.body.altitude,
        altitudeAccuracy: req.body.altitudeAccuracy,
        heading: req.body.heading,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        speed: req.body.speed
      }
    }
  },{ new: true }, (err, document) => {
    if(err) throw err;
    else {
      res.json({
        ok: true,
        data: document
      });
    }
  })
});

router.get('/customersupport', (req, res, next) => {
  res.sendFile(path.join(__dirname, "..","public","customersupport.html"));
});

router.get("/technician", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "public", "tech.html"));
})

router.post('/addschedule', (req, res, next) => {

  var Apoint = new Appointment({
    time: req.body.time,
    date: req.body.date,
    timestamp: Date.now(),
    county: req.body.county,
    fullname: req.body.fullname,
    town: req.body.town,
    street: req.body.street,
    phone: req.body.phone,
    category: req.body.category,
    sub: req.body.sub,
    subsub: req.body.subsub,
    quoted: false,
    pending: true,
    approved: false,
    completed: false,
    price: "", 
    paid: false,
    cancelled: false,
    email: req.body.email,
    desc: req.body.desc,
    warranty: req.body.warranty
  });

  Apoint.save((err, result) => {
    if (err) throw err;
    else {
      Activity.registerActivity(req.body.email, result.id, "successful appointment schedule under " + req.body.category, req.ip, (data) => {
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

router.post("/feedback", (req, res, next) => {
  var newFeed = new Feedback({
    ip: req.ip,
    name: req.body.name,
    email: req.body.email,
    message: req.body.message
  });

  newFeed.save((err, response) => {
    if(err) throw err;
    else {
      res.json({
        ok: true,
        message: "Thanks for your feedback, we will get in touch with you shortly via your email."
      });
    }
  });
});

module.exports = router;
