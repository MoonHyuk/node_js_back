const moment = require("moment-timezone");
const db = require("../model/cleanDB");
const { sensors } = require("../model/sensors");

let flag = true;
//서버 최초 실행시 1번만 실행
async function cleanInterval(req, res, next) {
	if (flag) {
		setInterval(() => {
			sensors.forEach(sensor => {
				db.cleanLive(sensor, getTimeBeforeMinutes(2));
			})

			db.cleanLive("long_term", getTimeBeforeMinutes(60 * 24 * 15));
		}, 600000);
		flag = false;
	}
	next();
}

function getTimeBeforeMinutes(minutes) {
	const fmt1 = "YYYY-MM-DD HH:mm:ss";
	return moment().tz("Asia/Seoul").add(-minutes, "minute").format(fmt1);
}

module.exports = {
	cleanInterval,
};
