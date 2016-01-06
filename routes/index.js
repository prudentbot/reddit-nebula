var express = require('express');
var rest = require('../rest');
var router = express.Router();
var path = require("path");
/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("sending thing");
  res.sendFile(path.resolve("./public/intro.html"));
});

router.get('/graph', function(req, res, next) {
  console.log("graph")
  console.log(req.body.threadurl);
  rest.getJSON(req.body.url, function(err, result){
    if(err || !result){
      res.send(err);
      return
    }
    console.log(result);
  });
});

module.exports = router;
