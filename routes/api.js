var express = require('express');
var router = express.Router();
var articles = require('../modules/articles');
var post = require('../modules/post');

router.get('/home.json', function(req, res, next) {
    articles(1,5, function(ans){
        //console.log(JSON.stringify(ans));
        res.jsonp(ans);
    });
});
router.get('/post.json', function(req, res, next) {
    var filename = req.query.filename;
    console.log("filename: " + filename);
    post(filename, function(j){
        res.jsonp(j);
    });
});

module.exports = router;
