var mongoose = require("mongoose");

var feedbackSchema = mongoose.Schema({
    name: String,
    email: String,
    message: String,
    timestamp: { type: Date, default: Date.now() },
    ip: String
});

var Feedback = mongoose.model("Feedback", feedbackSchema, 'feedback');

module.exports = Feedback;