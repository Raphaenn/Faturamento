const express = require("express");
const router = express.Router();

router.get("/", function(req, res) {
    res.render("home/index");
});

router.get("/registro", function(req, res) {
    res.render("home/registro")
});

module.exports = router;