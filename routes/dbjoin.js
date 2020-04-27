// join.js
var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');
var mysql = require('mysql');
 
// database setting
var connection = mysql.createConnection({
    host : '107.20.75.172',
    port : '3306',
    user : 'root',
    password : '1234',
    database : 'test'
});
connection.connect();
 


function Dbconnect (req,res){
    console.log("get join url");
    var email = req.body.email;
    var responseData = {};
    var result  = new Array();
    var query = connection.query('select * from testtable ORDER BY colomn1 ASC', function(err, rows){
    if(err) throw err;
    if(!err){
      
      for(var i=0; i<rows.length;i++){
        console.log("데이터 조회 : " +rows[i].colomn1+'/'+rows[i].colomn2);
            result[i]=rows[i].colomn1
                        +'/'+rows[i].colomn2;
        }
        
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
    Dbconnect : Dbconnect,
    dbinsert : dbinsert
}
 
