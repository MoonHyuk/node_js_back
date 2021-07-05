const { DB_HOST } = process.env;

const mysql = require("mysql2/promise");

const pool = mysql.createPool({
	host: DB_HOST || "127.0.0.1",
	port: "3306",
	user: "tester1",
	password: "qwer1234",
	database: "arduino",
	waitForConnections: true,
	connectionLimit: 10,
	typeCast: true,
	dateStrings: true,
});

module.exports = pool;
