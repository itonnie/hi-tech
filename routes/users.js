var express = require('express');
var Technician = require("../models/technician");
var Manager = require('../models/manager');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/technicians', (req, res, next) => {
  Technician.find((err, result) => {
    if(err) {
      res.json({
        ok: false,
        error: err,
        message: "Couldn't get a list of technicians"
      });
    } else {
      res.json({
        ok: true,
        data: result
      });
    }
  });
});

router.get('/technician/:id', (req, res, next) => {
  let id = req.params.id;

  Technician.findById({ _id: id }, (err, result) => {
    if(err) {
      res.json({
        ok:false,
        error: err,
        message: "User could not be found"
      });
    } else {
      res.json({
        ok: true,
        data: result
      })
    }
  })
});

router.get("/managers", (req, res, next) => {
  Manager.find((err, result) => {
    if(err) throw err;
    else {
      res.json({
        ok: true,
        data: result
      });
    }
  });
});

router.get("/manager/:id", (req, res, next) => {
  let id = req.params.id;

  Manager.findById({ _id: id }, (err, response) => {
    if(err) {
      res.json({
        ok: false,
        error: err,
        message: "Couldn't find the manager"
      });
    } else {
      res.json({
        ok: true,
        data: response
      });
    }
  });
});

module.exports = router;
