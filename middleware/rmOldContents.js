const pool = require("../model/db");
const moment = require("moment-timezone");
const db = require("../model/cleanDB");
const { sensors } = require("../model/sensors");

let flag = true;
//서버 최초 실행시 1번만 실행
async function cleanInterval(req, res, next) {
	if (flag) {
		setInterval(() => {
			sensors.forEach(sensor => {
				const now = getCurrTime();
				db.cleanLive(sensor, now);
			})
		}, 600000);
		flag = false;
	}
	next();
}

function getCurrTime() {
	const fmt1 = "YYYY-MM-DD HH:mm:ss";
	const now = moment().tz("Asia/Seoul").add("-2", "minute").format(fmt1);
	return now;
}

module.exports = {
	cleanInterval,
};
