async function cleanLive(to, now) {
	try {
		const sql = `DELETE FROM ${to} WHERE checkTime < '${now}' ;`;
		let result = await pool.query(sql, [to, now]);

		return { success: true, result };
	} catch (err) {
		return { success: false, err };
	}
}

module.exports = {
	cleanLive,
};
