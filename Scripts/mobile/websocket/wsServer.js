﻿var ws = require("nodejs-websocket");
const jsdom = require("jsdom");
const {JSDOM} = jsdom;
const {window} = new JSDOM(`<!DOCTYPE html>`);
const $ = require('jQuery')(window);
console.log("开始建立连接...")
var stringAll, stringAllUser, stringAllKey,userArray=[];
const http = require('http');
const express = require('express');
const app = express();
const session = require('express-session');
//设置session
app.use(session({
  secret: 'session',
  name: 'name',
  cookie: {maxAge: 360000000000},
  resave: true,
  saveUninitialized: true,
}));

//设置跨域访问
app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
});
var server = ws.createServer(function(conn) {
    stringAll = conn.path.replace("/?", "").trim();
    
    stringAllUser = getValueByKeystr(stringAll,"userName").trim(), stringAllKey = getValueByKeystr(stringAll, "key");
    // console.log(decodeURIComponent(stringAllUser));
    //通道保存在session
    session[decodeURIComponent(stringAllUser)] = conn;
    //用户ID，根据ID查询全部成员通道
     
    conn.on("text", function(str) {
        radioBroadcast(str);
    });
    conn.on("close", function(code, reason) {
        //console.log("connection关闭")
    });
    conn.on("error", function(code, reason) {
        //console.log("异常关闭")
    });
}).listen(8001);
console.log("WebSocket建立完毕");
//广播
function radioBroadcast(str) {
    var publicString = JSON.parse(str);

    console.log(session[publicString.sendName]);

    try { 
        session[publicString.sendName].sendText(str);
    } catch (e) {
        // console.log(publicString.sendName+"的session是临时的，没保存该通道，错误为： "+e);
    }

    try {  

        session[publicString.receiveName].sendText(str);
    } catch (e) {
        // console.log(publicString.receiveName+"的session是临时的，没保存该通道，错误为： "+e);
    }  

}




// // del data
// function delConnectionInfo(conn) {
//     let post_data = {
//         "tableName": "GW_websocket",
//         "tableVlue": "userName='" + stringAllUser + "'",
//     };
//     let content = JSON.stringify(post_data);
//     let options = {
//         host: '192.168.0.165',
//         port: 8032,
//         path: '/api/GWServiceWebAPI/set_DeleteTableData',
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Content-Length': content.length,
//             'Authorization': stringAllKey
//         }
//     };
//     let req = http.request(options, function(res) {
//         let _data = '';
//         res.on('data', function(chunk) {
//             _data += chunk;
//         });
//         res.on('end', function() {
//             insertConnectionInfo(conn);
//         });
//     });
//     req.write(content);
//     req.end();
// }
// //insert data
// function insertConnectionInfo(conn) {
//     let post_data = {
//         "tableName": "GW_websocket(userName,conn)",
//         "tableVlue": "values('" + stringAllUser + "','" + conn + "')"
//     };
//     let content = JSON.stringify(post_data);
//     let options = {
//         host: '192.168.0.165',
//         port: 8032,
//         path: '/api/GWServiceWebAPI/set_InsertNewTable',
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Content-Length': content.length,
//             'Authorization': stringAllKey
//         }
//     };
//     let req = http.request(options, function(res) {
//         let _data = '';
//         res.on('data', function(chunk) {
//             _data += chunk;
//         });
//         res.on('end', function() {
//             console.log(_data);
//             // selectConnectionInfo();
//         });
//     });
//     req.write(content);
//     req.end();
// }
// //读取数据库数据
// function selectConnectionInfo() {
//     let post_data = {
//         "TableName": " GW_websocket where IsNumber=0"
//     }; //这是需要提交的数据
//     let content = JSON.stringify(post_data);
//     let options = {
//         host: '192.168.0.165',
//         port: 8032,
//         path: '/api/GWServiceWebAPI/get_DataByTableName',
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Content-Length': content.length,
//             'Authorization': stringAllKey
//         }
//     };
//     let req = http.request(options, function(res) {
//         let _data = '';
//         res.on('data', function(chunk) {
//             _data += chunk;
//         });
//         res.on('end', function() {
//             let result = JSON.parse(_data).HttpData.data[0].conn;
//             console.log(result);
//             // result.sendText("123213213213123");
//         });
//     });
//     req.write(content);
//     req.end();
// }


//字符串处理
function getValueByKeystr(str, key) {
    var urlSearchSplit = str.split('&');
    for (var i = 0; i < urlSearchSplit.length; i++) {
        var stringSplitValue = urlSearchSplit[i].split('=');
        if (stringSplitValue[0].toLowerCase() === key.toLowerCase()) {
            return stringSplitValue[1]
        }
    }
    return '';
}
//处理日期
function addZero(n) {
    return n < 10 ? n = '0' + n : n;
}
