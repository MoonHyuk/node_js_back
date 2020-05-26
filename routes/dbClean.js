var mysql = require('mysql');
var moment = require('moment');

// database setting
var connection = mysql.createConnection({
    host : '127.0.0.1', //이지우 ip주소는 58.121.58.139
    port : '3306',
    user : 'tester1',
    password : 'qwer1234',
    database : 'arduino'
});
connection.connect();
var fmt1 = 'YYYY-MM-DD HH:mm:ss';

function cleanPm1Live (){ // 최근 2분치만 저정하도록 구현
    var d = new Date();
    var now = moment(d).add("-2","minute").format(fmt1);
    console.log(now);
    connection.query('delete from co2live WHERE checkTime < \'' +now+'\'');
}


module.exports = {
    cleanPm1Live
}