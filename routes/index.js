var express = require('express');
var router = express.Router();
var db = require('./dbjoin');

/* GET home page. */
router.get('/', function(req, res) {
  res.status(200).json(
    {
      "success" : true
    }
  );
});

router.get('/dust_1', db.dust_1); //localhost:3030/dust_1에 db.dust_1 함수를 매핑
router.post('/dbins', db.dbinsert);
 
module.exports = router;
