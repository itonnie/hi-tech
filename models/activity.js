var mongoose = require("mongoose");
var ActivitySchema = mongoose.Schema({
    usermail: String,
    userid: String,
    activity: String,
    ip: { type: String, default: "couldn't resolve IP"},
    timestamp: {type: Date, default: Date.now()}
});

var Activity = mongoose.model("Activity", ActivitySchema, "activities");

module.exports = Activity;

module.exports.registerActivity = function registerActivity(usermail, userid, activity, ip, callback) {
    var newactivity = new Activity({
        usermail: usermail,
        userid: userid,
        activity: activity,
        ip: ip
    });

    newactivity.save((err,result) => {
        if(err) {
            return false;
        } else {
            return true;
        }
    })
}