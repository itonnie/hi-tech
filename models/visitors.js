var mongoose = require("mongoose");

var visitorSchema = mongoose.Schema({
    ip: String,
    time: { type: Date, default: Date.now() },
    isMobile: Boolean,
    coords: {
        accuracy: Number,
        altitude: Number,
        altitudeAccuracy: String,
        heading: String,
        latitude: Number,
        longitude: Number,
        speed: Number
    }
});

var Visitor = mongoose.model("Visitor", visitorSchema, "visitors");

module.exports = Visitor;