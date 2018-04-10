//This route handles anything to do with customer feedback
//Feedback starts when the customer initiates a comment that can be of help

var express = require("express");
var Activity = require("../models/activity");
var Feedback = require("../models/feedback");
var router = express.Router();

//This route get's all the feedback required.
router.get("/", (req, res, next) => {
    Feedback.find((err, result) => {
        if(err) throw err;
        else {
            res.json({
                ok: true,
                data: result
            });
        }
    });
});

//Marks a feedback comment as replied, this should remove it from unread stack.
router.get("/replied/:id", (req, res, next) => {
    var id = req.params.id;

    Feedback.update({ _id: id }, {
        replied: true
    }, { "new": true }, (err, result) => {
        if(err) throw err;
        else {
            Feedback.find((err, feedback) => {
                if(err) throw err;
                else {
                    res.json({
                        ok: true,
                        data: feedback,
                        feedback: result
                    });
                }
            });
        }
    });
})

//This route posts a new feedback to the stack
router.post("/", (req, res, next) => {
    var newFeed = new Feedback({
      ip: req.ip,
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
      timestamp: Date.now(),
      replied: false
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