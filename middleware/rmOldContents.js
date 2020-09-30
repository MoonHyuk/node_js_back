const pool = require("../model/db");
var moment = require("moment");
const db = require("../model/cleanDB");

let flag = true;
//서버 최초 실행시 1번만 실행
function cleanInterval(req, res, next) {
	if (flag) {
		setInterval(() => {
			cleanCo2Live();
			cleanCoLive();
			cleanTolueneLive();
			cleanO2Live();
			cleanVocLive();
			cleanH2hoLive();
			cleanRadonLive();
		}, 1000);
		flag = false;
	}
	next();
}

async function getCurrTime() {
	var fmt1 = "YYYY-MM-DD HH:mm:ss";
	var d = new Date();
	var now = moment(d).add("-2", "minute").format(fmt1);
	return now;
}

async function cleanCo2Live() {
	// 최근 2분치만 저정하도록 구현
	const now = getCurrTime();
	const result = await db.cleanLive("co2live", now);
	if (!result.success) {
		return err;
	}
	console.log("co2 Wipe : " + now);
}

async function cleanTolueneLive() {
	// 최근 2분치만 저정하도록 구현
	const now = getCurrTime();
	const result = await db.cleanLive("toluenelive", now);
	if (!result.success) {
		return err;
	}
	console.log("toluene Wipe : " + now);
}

async function cleanPm1Live() {
	// 최근 2분치만 저정하도록 구현
	const now = getCurrTime();
	const result = await db.cleanLive("pm1live", now);
	if (!result.success) {
		return err;
	}
	console.log("pm1 Wipe : " + now);
}

async function cleanPm25Live() {
	// 최근 2분치만 저정하도록 구현
	const now = getCurrTime();
	const result = await db.cleanLive("pm25live", now);
	if (!result.success) {
		return err;
	}
	console.log("pm25 Wipe : " + now);
}

async function cleanPm10Live() {
	// 최근 2분치만 저정하도록 구현
	const now = getCurrTime();
	const result = await db.cleanLive("pm10live", now);
	if (!result.success) {
		return err;
	}
	console.log("pm10 Wipe : " + now);
}

async function cleanO2Live() {
	// 최근 2분치만 저정하도록 구현
	const now = getCurrTime();
	const result = await db.cleanLive("o2live", now);
	if (!result.success) {
		return err;
	}
	console.log("o2 Wipe : " + now);
}

async function cleanVocLive() {
	// 최근 2분치만 저정하도록 구현
	const now = getCurrTime();
	const result = await db.cleanLive("tvoclive", now);
	if (!result.success) {
		return err;
	}
	console.log("tvoc Wipe : " + now);
}

async function cleanCoLive() {
	// 최근 2분치만 저정하도록 구현
	const now = getCurrTime();
	const result = await db.cleanLive("colive", now);
	if (!result.success) {
		return err;
	}
	console.log("co Wipe : " + now);
}

async function cleanH2hoLive() {
	// 최근 2분치만 저정하도록 구현
	const now = getCurrTime();
	const result = await db.cleanLive("h2holive", now);
	if (!result.success) {
		return err;
	}
	console.log("h2ho Wipe : " + now);
}

async function cleanRadonLive() {
	// 최근 2분치만 저정하도록 구현
	const now = getCurrTime();
	const result = await db.cleanLive("radonlive", now);
	if (!result.success) {
		return err;
	}
	console.log("radon Wipe : " + now);
}

module.exports = {
	cleanInterval,
};
