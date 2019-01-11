//websocket测试服务器
var url, receiveUser, radioBroadcast, connection, isData;
function shortMessage() {
    var chatObject = myApp.views.main.history,
        urlLength = chatObject.length - 1,
        receiveUser = chatObject[urlLength].split("?")[1];
    $(".tabbar").addClass("displayNone");
    $(".auth_name_msg").html(receiveUser);
    $(".buttonSend,input[name='info-checkbox'],.back").unbind();
    $(".buttonSend").bind("click", function() {
        send_msg();
    });
    $(".shortMessageBack,.inputInfo").unbind();
    $(".shortMessageBack").bind("click", function() {
        $(".tabbar").removeClass("displayNone");
    });
    $(".inputInfo").bind("touchstart", function() {
        setTimeout(function() {
            document.body.scrollTop = document.body.scrollHeight;
        }, 300);
    })
    viewClass = window.localStorage.userName + "-" + receiveUser;
    readyFileTxt1(window.localStorage.userName, receiveUser);
    window.localStorage.receiveUserName = receiveUser;
}
//读取最后一条记录
function readyFileTxt1(sendName, receiveName) {
    var Record_url = "/api/GWServiceWebAPI/readyEndRecord";
    var Record_data = {
        sendName: sendName,
        receiveName: receiveName
    };
    JQajaxo("post", Record_url, true, Record_data, Record_success, Record_error, Record_complete);
    function Record_success(data) {
        var result = data.HttpData.concenTxt;
        if (result) {
            var filUrlStr = result.replace(fileUrl + "\\", "").split("\\"),
                fileNameStr = filUrlStr[1].replace(".txt", ""),
                fileDateTime = filUrlStr[0];
            viewClass = fileNameStr + "-" + fileDateTime;
            $(".shortContainer section").removeClass().addClass(viewClass);
            readerFile(result, true);
        }
    }
    function Record_error(e) {}
    function Record_complete(xmlhttprequest, status) {}
}
function send_msg() {
    if (ws != null) {
        var inputInfo = document.getElementById("inputInfo").value.trim();
        if (inputInfo == "") {
            return;
        }
        inputInfo = {sendName: window.localStorage.userName,receiveName:window.localStorage.receiveUserName,msg: inputInfo,time: GetDateStrValue(0)};//window.localStorage.userName + "@" + window.localStorage.receiveUserName + ":::" + inputInfo;
        try {
            ws.send(JSON.stringify(inputInfo));
        } catch (e) {
            initWebSocket();
            send_msg();
        }
        document.getElementById("inputInfo").value = "";
    } else {
        myApp.dialog.alert("连接服务错误...");
    }
};

function closews() {
    try {
        ws.close(3005, userName);
    } catch (e) {}
};
//判断字符是否存在数组中
function returnIsString(value, str) {
    var array = str.split("-");
    for (var i = 0; i < array.length; i++) {
        if (array[i] == value) return true;
    }
    return false;
}
//处理日期
function handleString(value) {
    var str = value.replace(/\-/g, "").substring(0, 8);
    return str;
}

//获取几天之后的日期
function GetDateStrValue(AddDayCount) {
    var dd = new Date();
    dd.setDate(dd.getDate() + AddDayCount);
    var y = dd.getFullYear();
    var m = dd.getMonth() + 1;
    var d = dd.getDate();
    var h = dd.getHours();
    var mo = dd.getMinutes();
    var s = dd.getSeconds();
    return y + "-" + addZero(m) + "-" + addZero(d) + " " + addZero(h) + ":" + addZero(mo) + ":" + addZero(s);
}