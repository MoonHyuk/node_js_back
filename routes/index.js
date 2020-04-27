var express = require('express');
var router = express.Router();
var main = require('./main');
var db = require('./dbjoin');

/* GET home page. */
router.get('/', function(req, res) {
  res.status(200).json(
    {
      "success" : true
    }
  );
});

router.get('/testm', function(req, res) {
  res.status(200).json(
    {
      "success" : true
    }
  );
});

router.post('/test', function(req, res) {
  const testm = req.body.message;
  res.status(200).json(
    {
      "message" : testm
    }
  );
});

 
router.get('/main', main.main);
router.get('/dbcon', db.Dbconnect);
router.post('/dbins', db.dbinsert);
 
module.exports = router;
