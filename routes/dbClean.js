var mysql = require('mysql');
var moment = require('moment');

// database setting
var connection = mysql.createConnection({
    host : '58.121.58.139', //이지우 ip주소는 58.121.58.139
    port : '3306',
    user : 'tester1',
    password : 'qwer1234',
    database : 'arduino'
});
connection.connect();
var fmt1 = 'YYYY-MM-DD HH:mm:ss';

function cleanCo2Live (){ // 최근 2분치만 저정하도록 구현
    var d = new Date();
    var now = moment(d).add("-2","minute").format(fmt1);
    console.log("co2 Wipe : "+now);
    connection.query('delete from co2live WHERE checkTime < \'' +now+'\'');
}

function cleanTolueneLive (){ // 최근 2분치만 저정하도록 구현
    var d = new Date();
    var now = moment(d).add("-2","minute").format(fmt1);
    console.log("toluene Wipe : "+now);
    connection.query('delete from toluenelive WHERE checkTime < \'' +now+'\'');
}

function cleanPm1Live (){ // 최근 2분치만 저정하도록 구현
    var d = new Date();
    var now = moment(d).add("-2","minute").format(fmt1);
    console.log("pm1 Wipe : "+now);
    connection.query('delete from pm1live WHERE checkTime < \'' +now+'\'');
}

function cleanPm25Live (){ // 최근 2분치만 저정하도록 구현
    var d = new Date();
    var now = moment(d).add("-2","minute").format(fmt1);
    console.log("pm25 Wipe : "+now);
    connection.query('delete from pm25live WHERE checkTime < \'' +now+'\'');
}

function cleanPm10Live (){ // 최근 2분치만 저정하도록 구현
    var d = new Date();
    var now = moment(d).add("-2","minute").format(fmt1);
    console.log("pm10 Wipe : "+now);
    connection.query('delete from pm10live WHERE checkTime < \'' +now+'\'');
}

function cleanO2Live (){ // 최근 2분치만 저정하도록 구현
    var d = new Date();
    var now = moment(d).add("-2","minute").format(fmt1);
    console.log("o2 Wipe : "+now);
    connection.query('delete from o2live WHERE checkTime < \'' +now+'\'');
}

function cleanVocLive (){ // 최근 2분치만 저정하도록 구현
    var d = new Date();
    var now = moment(d).add("-2","minute").format(fmt1);
    console.log("tvoc Wipe : "+now);
    connection.query('delete from tvoclive WHERE checkTime < \'' +now+'\'');
}


module.exports = {
    cleanCo2Live, cleanTolueneLive, cleanPm1Live, cleanPm10Live, cleanPm25Live, cleanO2Live
    ,cleanVocLive
}