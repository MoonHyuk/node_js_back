var express = require('express');
var router = express.Router();


function main (req,res){
    res.status(200).json(
        {
          "success" : true
        }
    );
}

module.exports = {
    main : main
}
 