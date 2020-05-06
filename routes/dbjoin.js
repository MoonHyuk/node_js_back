// join.js
var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');
var mysql = require('mysql');
 
// database setting
var connection = mysql.createConnection({
    host : 'localhost',
    port : '3306',
    user : 'tester1',
    password : '1111',
    database : 'arduino'
});
connection.connect();
 


function dust_1 (req,res){
    console.log("dust_1 DB Query");
    var responseData = {};
    var result  = new Array();
    connection.query('select * from dust_1', function(err, rows){
    if(err) throw err;
    if(!err){
      for(var i=0; i<12;i++) {
          result.push(rows[i]['ppm']);
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


function dbinsert (req,res){
    console.log("post join url");
    var body = req.body;
    var colomn1 = body.colomn1;
    var test2 = body.test2;
   
    var sql = {colomn1 : colomn1, test2 : test2};
    var query = connection.query('INSERT INTO testtable VALUES', sql, function(err, rows){
      if(err) {throw err;}
      console.log("ok db insert");
      res.render('welcome.ejs', {'colomn1':colomn1, 'test2':test2});
    })
}


 
module.exports = {
    dust_1 : dust_1,
    dbinsert : dbinsert
}
 
