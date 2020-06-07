// join.js
var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');
var mysql = require('mysql');
 
// database setting
var connection = mysql.createConnection({
    host : '58.121.58.139', //이지우 ip주소는 58.121.58.139
    port : '3306',
    user : 'tester1',
    password : 'qwer1234',
    database : 'arduino',
    timezone: 'Asia/Seoul'
});
connection.connect();

function co2Live (req,res){
    res.set({'access-control-allow-origin': '*'});
    var responseData = {};
    var result  = new Array();
    connection.query('select * from co2live order by checkTime DESC', function(err, rows){
        if(err) throw err;
        if(!err&&rows.length>0){
            for(var i=0; i<6;i++) {
                result.push(rows[i]['ppm']);
                result.push(rows[i]['checkTime']);
            }
            res.set({'access-control-allow-origin': '*'});
            res.json(result);

        } else {
            console.log("데이터 조회 안됨 ");
            responseData.result = "none";
            responseData.name = "";
        }
    });
}

function tolueneLive (req,res){
    res.set({'access-control-allow-origin': '*'});
    var responseData = {};
    var result  = new Array();
    connection.query('select * from toluenelive order by checkTime DESC', function(err, rows){
        if(err) throw err;
        if(!err&&rows.length>0){
            for(var i=0; i<6;i++) {
                result.push(rows[i]['ppm']);
                result.push(rows[i]['checkTime']);
            }
            res.set({'access-control-allow-origin': '*'});
            res.json(result);

        } else {
            console.log("데이터 조회 안됨 ");
            responseData.result = "none";
            responseData.name = "";
        }
    });
}

function pm1Live (req,res){
    res.set({'access-control-allow-origin': '*'});
    var responseData = {};
    var result  = new Array();
    connection.query('select * from pm1live order by checkTime DESC', function(err, rows){
        if(err) throw err;
        if(!err&&rows.length>0){
            for(var i=0; i<12;i++) {
                result.push(rows[i]['ppm']);
                result.push(rows[i]['checkTime']);
            }
            res.set({'access-control-allow-origin': '*'});
            res.json(result);

        } else {
            console.log("데이터 조회 안됨 ");
            responseData.result = "none";
            responseData.name = "";
        }
    });
}

function pm25Live (req,res){
    res.set({'access-control-allow-origin': '*'});
    var responseData = {};
    var result  = new Array();
    connection.query('select * from pm25live order by checkTime DESC', function(err, rows){
        if(err) throw err;
        if(!err&&rows.length>0){
            for(var i=0; i<12;i++) {
                result.push(rows[i]['ppm']);
                result.push(rows[i]['checkTime']);
            }
            res.set({'access-control-allow-origin': '*'});
            res.json(result);

        } else {
            console.log("데이터 조회 안됨 ");
            responseData.result = "none";
            responseData.name = "";
        }
    });
}

function pm10Live (req,res){
    res.set({'access-control-allow-origin': '*'});
    var responseData = {};
    var result  = new Array();
    connection.query('select * from pm10live order by checkTime DESC', function(err, rows){
        if(err) throw err;
        if(!err&&rows.length>0){
            for(var i=0; i<12;i++) {
                result.push(rows[i]['ppm']);
                result.push(rows[i]['checkTime']);
            }
            res.set({'access-control-allow-origin': '*'});
            res.json(result);

        } else {
            console.log("데이터 조회 안됨 ");
            responseData.result = "none";
            responseData.name = "";
        }
    });
}

function o2Live (req,res){
    res.set({'access-control-allow-origin': '*'});
    var responseData = {};
    var result  = new Array();
    connection.query('select * from o2live order by checkTime DESC', function(err, rows){
        if(err) throw err;
        if(!err&&rows.length>0){
            for(var i=0; i<12;i++) {
                result.push(rows[i]['ppm']);
                result.push(rows[i]['checkTime']);
            }
            res.set({'access-control-allow-origin': '*'});
            res.json(result);

        } else {
            console.log("데이터 조회 안됨 ");
            responseData.result = "none";
            responseData.name = "";
        }
    });
}

function vocLive (req,res){
    res.set({'access-control-allow-origin': '*'});
    var responseData = {};
    var result  = new Array();
    connection.query('select * from tvoclive order by checkTime DESC', function(err, rows){
        if(err) throw err;
        if(!err&&rows.length>0){
            for(var i=0; i<12;i++) {
                result.push(rows[i]['ppm']);
                result.push(rows[i]['checkTime']);
            }
            res.set({'access-control-allow-origin': '*'});
            res.json(result);

        } else {
            console.log("데이터 조회 안됨 ");
            responseData.result = "none";
            responseData.name = "";
        }
    });
}
 
module.exports = {
    co2Live, tolueneLive, pm1Live, pm10Live, pm25Live, o2Live, vocLive
}
 
