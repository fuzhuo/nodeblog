var express = require('express');
var router = express.Router();

function post(req, res, next) {
    console.log("req: " + req.params.filename);
    res.render('post',{'filename':req.params.filename});
}

module.exports = post;
