const db = require("../model/liveDB");

function processingData(result, res, num) {
	res.set({ "access-control-allow-origin": "*" });
	var responseData = {};
	var resultArr = new Array();
	if (!result.success) throw result.err;
	if (result.result[0].length > 0) {
		let rows = result.result[0];
		for (var i = 0; i < num; i++) {
			resultArr.push(rows[i]["ppm"]);
			resultArr.push(rows[i]["checkTime"]);
		}
		res.json(resultArr);
	} else {
		console.log("데이터 조회 안됨 ");
		responseData.result = "none";
		responseData.name = "";
		res.json(responseData);
	}
}

async function co2Live(req, res) {
	let result = await db.liveData("co2live");
	processingData(result, res, 6);
}

async function coLive(req, res) {
	let result = await db.liveData("colive");
	processingData(result, res, 6);
}

async function tolueneLive(req, res) {
	let result = await db.liveData("toluenelive");
	processingData(result, res, 6);
}

async function pm1Live(req, res) {
	let result = await db.liveData("pm1live");
	processingData(result, res, 12);
}

async function pm25Live(req, res) {
	let result = await db.liveData("pm25live");
	processingData(result, res, 12);
}

async function pm10Live(req, res) {
	let result = await db.liveData("pm10live");
	processingData(result, res, 12);
}

async function o2Live(req, res) {
	let result = await db.liveData("o2live");
	processingData(result, res, 12);
}

async function vocLive(req, res) {
	let result = await db.liveData("tvoclive");
	processingData(result, res, 12);
}

async function h2hoLive(req, res) {
	let result = await db.liveData("h2holive");
	processingData(result, res, 12);
}

async function radonLive(req, res) {
	let result = await db.liveData("radonlive");
	processingData(result, res, 12);
}

module.exports = {
	co2Live,
	tolueneLive,
	pm1Live,
	pm10Live,
	pm25Live,
	o2Live,
	vocLive,
	coLive,
	h2hoLive,
	radonLive,
};
