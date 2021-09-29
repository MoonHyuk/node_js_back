const db = require("../model/liveDB");

function processingData(result, res, num) {
	res.set({ "access-control-allow-origin": "*" });
	var responseData = {};
	var resultArr = new Array();
	if (!result.success) throw result.err;
	if (result.result[0].length > 0) {
		let rows = result.result[0];
		for (var i = 0; i < Math.min(num, rows.length); i++) {
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
	let result = await db.liveData("co2live", req.query.sensorId);
	processingData(result, res, 6);
}

async function coLive(req, res) {
	let result = await db.liveData("colive", req.query.sensorId);
	processingData(result, res, 6);
}

async function tolueneLive(req, res) {
	let result = await db.liveData("toluenelive", req.query.sensorId);
	processingData(result, res, 6);
}

async function pm1Live(req, res) {
	let result = await db.liveData("pm1live", req.query.sensorId);
	processingData(result, res, 12);
}

async function pm25Live(req, res) {
	let result = await db.liveData("pm25live", req.query.sensorId);
	processingData(result, res, 12);
}

async function pm10Live(req, res) {
	let result = await db.liveData("pm10live", req.query.sensorId);
	processingData(result, res, 12);
}

async function o2Live(req, res) {
	let result = await db.liveData("o2live", req.query.sensorId);
	processingData(result, res, 12);
}


async function o3Live(req, res) {
	let result = await db.liveData("o3live", req.query.sensorId);
	processingData(result, res, 12);
}

async function vocLive(req, res) {
	let result = await db.liveData("tvoclive", req.query.sensorId);
	processingData(result, res, 12);
}

async function h2hoLive(req, res) {
	let result = await db.liveData("h2holive", req.query.sensorId);
	processingData(result, res, 12);
}

async function radonLive(req, res) {
	let result = await db.liveData("radonlive", req.query.sensorId);
	processingData(result, res, 12);
}

module.exports = {
	co2Live,
	tolueneLive,
	pm1Live,
	pm10Live,
	pm25Live,
	o2Live,
	o3Live,
	vocLive,
	coLive,
	h2hoLive,
	radonLive,
};
