var mongoose = require("mongoose");

var feedbackSchema = mongoose.Schema({
    name: String,
    email: String,
    message: String,
    timestamp: Date,
    ip: String,
    replied: Boolean
});

var Feedback = mongoose.model("Feedback", feedbackSchema, 'feedback');

module.exports = Feedback;