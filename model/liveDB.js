const pool = require("./db");

async function liveData(to) {
	try {
		const sql = `SELECT * FROM ${to} order by checkTime DESC LIMIT 20;`;
		let result = await pool.query(sql, [to]);

		return { success: true, result };
	} catch (err) {
		return { success: false, err };
	}
}

module.exports = {
	liveData,
};
