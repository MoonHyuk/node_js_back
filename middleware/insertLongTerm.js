const { liveData } = require("../model/liveDB");

const pool = require("../model/db");
const moment = require('moment-timezone');
const { sensors } = require("../model/sensors");

let flag = true;
//서버 최초 실행시 1번만 실행
async function insertInterval(req, res, next) {
	if (flag) {
		setInterval(() => {
			sensors.forEach(sensor => {
				liveData(sensor).then(res => {
					if (res.result[0].length === 0) return;

					const recentValue = res.result[0][0];
					const now = moment().tz("Asia/Seoul");
					const minuteDiff = moment.tz(recentValue['checkTime'], "Asia/Seoul").diff(now, 'minutes');

					if (Math.abs(minuteDiff) > 1) return;

					let type = sensor.slice(0, sensor.length - 4);
					if (type === "pm25") {
						type = "pm2.5";
					}

					const sql = "INSERT INTO long_term (type, checkTime, ppm, sensorId, factoryId) VALUES (?, ?, ?, ?, ?);";
					pool.query(sql, [
						type,
						recentValue['checkTime'],
						recentValue['ppm'],
						recentValue['sensorId'],
						recentValue['factoryId'],
					]);
				});
			})
		}, 30000);
		flag = false;
	}
	next();
}

module.exports = {
	insertInterval,
};
