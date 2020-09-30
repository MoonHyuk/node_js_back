const fcm = require("../service/sendFCM");

function sendNotification(req, res) {
	fcm.sendNoti(req, res);
}

module.exports = {
	sendNotification,
};
