var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('bmi', { title: 'BMI服務' });
});

module.exports = router;
