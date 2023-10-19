var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('math', { title: 'Math運算' });
});

router.post('/:num1/:num2/:op', (req, res) => {
  // 允許其他網站的網頁存取此服務
  res.setHeader('Access-Control-Allow-Origin', '*');

  let num1 = req.params.num1;
  let num2 = req.params.num2;
  let op = req.params.op;
  let ans;

  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  op = parseInt(op);

  if(op == 1)
  {
    ans = num1+num2;
    ans = ans.toFixed(2);
  }
  else if(op == 2)
  {
    ans = num1-num2;
    ans = ans.toFixed(2);
  }
  else if(op == 3)
  {
    ans = num1*num2;
    ans = ans.toFixed(4);
  }
  else
  {
    ans = num1/num2;
    ans = ans.toFixed(4);
  }
  res.send({result: ans});
});

module.exports = router;
