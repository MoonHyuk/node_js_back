const express = require("express");
const router = express.Router();
const liveController = require("./live.controller");
const fcmController = require("./fcm.controller");
const longTermController = require("./longTerm.controller");

//send FCM Message
router.get("/api/fcm", fcmController.sendNotification);

router.get("/api/co2Live", liveController.co2Live);
router.get("/api/coLive", liveController.coLive);
router.get("/api/tolueneLive", liveController.tolueneLive);
router.get("/api/pm1Live", liveController.pm1Live);
router.get("/api/pm25Live", liveController.pm25Live);
router.get("/api/pm10Live", liveController.pm10Live);
router.get("/api/vocLive", liveController.vocLive);
router.get("/api/o2Live", liveController.o2Live);
router.get("/api/o3Live", liveController.o3Live);
router.get("/api/h2hoLive", liveController.h2hoLive);
router.get("/api/radonLive", liveController.radonLive);
router.get("/api/long-term", longTermController.get);

module.exports = router;
