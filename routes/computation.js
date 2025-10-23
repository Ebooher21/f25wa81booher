var express = require('express');
var router = express.Router();

/* GET mydata page. */
router.get('/', function(req, res, next) {
  if (req.query.x) {
  	var x = parseInt(req.query.x);
  } else {
  	var x = Math.random() * 100;
  }
  var y = Math.sin(x);

  res.send(`Math.sin() applied to ${x} is ${y}`);
});

module.exports = router;
