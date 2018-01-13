var express = require("express");
var request = require("request");
var Admin = require("../models/admin");
var router = express.Router();

router.post("/login", (req, res, next) => {
    var email = req.body.email;
    var password = req.body.password;

    Admin.findOne({ email: email, password: password }, (err, result) => {
        if(err) throw err;
        else if(result == null) {
            res.json({
                ok: false,
                message: "Wrong username and password combination"
            });
        } else {
            var params = {
                "user-id": "tony",
                "api-key": "s1tvPxDKVvt4HmVGAqLow8liZqlUvEElElc0F5nnMG3ewBKM",
                "number": "+254727321766",
                "code-length": 6
            };

            request.post("https://neutrinoapi.com/sms-verify", {form: params}, (error, response, body) => {
                if(error) throw error;
                else if(response.statusCode == 200) {
                    var data = JSON.parse(body);
                    res.json({
                        ok: true,
                        verification_info: data,
                        userData: result
                    });
                }
        
            });
        }
    });
});

module.exports = router;