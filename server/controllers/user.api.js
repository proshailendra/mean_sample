var express = require("express");
var router = express.Router();

var user = require("../models/user.js");

router.get("/users", function (req, res) {
    user.find({}, function (err, data) {
        if (err) {
            res.send("error");
            return;
        }
        res.send(data);
    });
});

router.get("/user/:id", function (req, res) {
    var id = req.params.id;
    user.find({_id: id}, function (err, data) {
        if (err) {
            res.send("error");
            return;
        }
        res.send(data[0]);
    });
});

router.post("/create", function (req, res) {
    var obj = req.body;
    var model = new user(obj);
    model.save(function (err, data) {
        if (err) {
            res.send("error");
            return;
        }
        res.send("added");
    });
});

router.put("/update/:id", function (req, res) {
    var id = req.params.id;
    var obj = req.body;

    user.findOneAndUpdate({_id: id}, {name: obj.name, address: obj.address}, function (err, data) {
        if (err) {
            res.send("error");
            return;
        }
        res.send("updated");
    })
});

router.delete("/delete/:id", function (req, res) {
    var id = req.params.id;
    user.findByIdAndRemove(id, function (err, data) {
        if (err) {
            res.send("error");
            return;
        }
        res.send("deleted");
    });
});

module.exports = router;