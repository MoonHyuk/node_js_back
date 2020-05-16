var express = require('express');
var app = express();
var router = express.Router();

var admin = require("firebase-admin");

var serviceAccount = require("../firebase/fcm-client-1de43-firebase-adminsdk-ot5u0-cab785eaa9.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    //databaseURL: "https://fcm-client-1de43.firebaseio.com"
});


function sendMesssage() {
    // 보낼 메시지를 작성하는 부분 입니다.

    var fcm_message = {
        //token: "d_DNytyunR4:APA91bHR7Y4SyJVi1KQCDUHxKtphjx7fEBDTQh0Xykra9fq1UCeTaa1XOXxun_HK9lqoWlbNXOjzedUOGneD7fxQSkdU2Kr7yV5hIy3GiCU9Ju3oDORu-yNJpwInFeiP4Xiih8kzQHSo",
        topic: '/topics/ALL',
        data: {
            title: '시범 데이터 발송',
            body: '클라우드 메시지 전송이 잘 되는지 확인하기 위한, 메시지 입니다.',
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

    console.log("noti");
    var result = 'fcm message 보내기';
    sendMesssage();
    res.json({ message: '200 OK' });
}



module.exports = {
    sendNoti
}