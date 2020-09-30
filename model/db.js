const mysql = require("mysql2/promise");

const pool = mysql.createPool({
	host: "127.0.0.1", //이지우 ip주소는 58.121.58.139
	port: "3306",
	user: "tester1",
	password: "qwer1234",
	database: "arduino",
	waitForConnections: true,
	connectionLimit: 10,
});

module.exports = pool;
