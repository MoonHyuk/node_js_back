var express = require('express');
var router = express.Router();
var db = require('./db');
var fcm = require('./sendFCM');

/* GET home page. */
router.get('/', function(req, res) {
  res.set({'access-control-allow-origin': '*'});
  res.status(200).json(
    {
      "success" : true
    }
  );
});

//router.get('/dust_1', db.dust_1);               //localhost:3030/dust_1에 db.dust_1 함수를 매핑
//router.get('/dust_25',db.dust_25);
//router.get('/dust_10',db.dust_10);
//router.post('/dbins', db.dbinsert);
//router.get('/fcm', fcm.sendNoti);               //send FCM Message
router.get('/co2Live', db.co2Live);
router.get('/tolueneLive', db.tolueneLive);
router.get('/pm1Live', db.pm1Live);
router.get('/pm25Live', db.pm25Live);
router.get('/pm10Live', db.pm10Live);
router.get('/o2Live', db.o2Live);
router.get('/vocLive', db.vocLive);


 
module.exports = router;
