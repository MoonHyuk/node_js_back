var express = require("express");
var router = express.Router();
var liveController = require("./live.controller");
var fcm = require("../service/sendFCM");

/* GET home page. */
router.get("/", function (req, res) {
	res.set({ "access-control-allow-origin": "*" });
	res.status(200).json({
		success: true,
	});
});

//router.get('/dust_1', db.dust_1);
//localhost:3030/dust_1에 db.dust_1 함수를 매핑
//router.get('/dust_25',db.dust_25);
//router.get('/dust_10',db.dust_10);
//router.post('/dbins', db.dbinsert);

//send FCM Message
//router.get('/api/fcm', fcm.sendNoti);

router.get("/api/co2Live", liveController.co2Live);
router.get("/api/coLive", liveController.coLive);
router.get("/api/tolueneLive", liveController.tolueneLive);
router.get("/api/pm1Live", liveController.pm1Live);
router.get("/api/pm25Live", liveController.pm25Live);
router.get("/api/pm10Live", liveController.pm10Live);
router.get("/api/vocLive", liveController.vocLive);
router.get("/api/o2Live", liveController.o2Live);
router.get("/api/h2hoLive", liveController.h2hoLive);
router.get("/api/radonLive", liveController.radonLive);

module.exports = router;
