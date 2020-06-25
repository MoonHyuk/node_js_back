var express = require('express');
var app = express();
var router = express.Router();
var admin = require("firebase-admin");
var serviceAccount = require("../firebase/fcm-client-1de43-firebase-adminsdk-ot5u0-ab310da5fd.json");
var moment = require('moment');


var initTime = moment();

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    //databaseURL: "https://fcm-client-1de43.firebaseio.com"
});
function sendMesssage() {
    // 보낼 메시지를 작성하는 부분 입니다.
    var fcm_message = {
        topic: '/topics/ALL',
        data: {
            title: '비상 대피알림입니다.',
            body: '작업장에서 유해가스가 검출되었습니다. 대피해주세',
            dataa: '11',
            dada: "ddd"
        }
        //token: fcm_target_token
    };
    // 메시지를 보내는 부분 입니다.
    admin.messaging().send(fcm_message)
        .then(function (response) {
            console.log('보내기 성공 메시지:' + response);
        })
        .catch(function (error) {
            console.log('보내기 실패 메시지:' + error);
        });
}
function sendNoti(req, res) {
    res.set({ 'access-control-allow-origin': '*' });

    var reqTime = moment();
   
    var millsDiff =moment.duration(reqTime.diff(initTime)).asMilliseconds();
    millsDiff/=1000;
    if(millsDiff>=180){
        console.log('초 차이= '+millsDiff);
        sendMesssage();
        res.json({ message: '200 OK' });
        initTime = reqTime;
    }else{
        initTime = reqTime;
        res.json({ message: 'too frequently send message' });
    }
}
module.exports = {
    sendNoti
}
