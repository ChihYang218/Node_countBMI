var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('bmi', { title: 'BMI服務' });
});

router.post('/:gender/:height/:weight', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');

  let gender = req.params.gender;
  let height = req.params.height;
  let weight = req.params.weight;
  let bmi;
  let result;

  height = parseFloat(height);
  weight = parseFloat(weight);

  bmi = weight/Math.pow(height, 2);
  bmi = bmi.toFixed(2);

  if(gender == 'vboy')
    result = (height*100-80)*0.7;
  else
    result = (height*100-70)*0.6;
  
  result = result.toFixed(2);

  res.send({bmi: bmi, result: result});
});

module.exports = router;
