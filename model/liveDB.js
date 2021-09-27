const pool = require("./db");

async function liveData(to, sensorId = 1) {
	try {
		const sql = `SELECT * FROM ${to} where sensorID = ${sensorId} order by checkTime DESC LIMIT 20;`;
		console.log(sql)
		let result = await pool.query(sql, [to, sensorId]);

		return { success: true, result };
	} catch (err) {
		return { success: false, err };
	}
}

module.exports = {
	liveData,
};
