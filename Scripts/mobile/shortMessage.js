//websocket测试服务器
var url, receiveUser, radioBroadcast,  connection, isData;

function shortMessage() {
    var chatObject = myApp.views.main.history,
        urlLength = chatObject.length - 1;
    var chatTime = chatObject[urlLength].split("?")[1].split(",")[1];
    receiveUser = window.localStorage.receiveUser = chatObject[urlLength].split("?")[1].split(",")[0];
    //init 
    $(".tabbar").addClass("displayNone");
    $(".auth_name_msg").html(window.localStorage.receiveUser);
    viewClass = "InfoView_" + userName + "_" + window.localStorage.receiveUser;
    $(".shortContainer section").removeClass().addClass(viewClass);
    $(".buttonSend,input[name='info-checkbox'],.back").unbind();
    $(".buttonSend").bind("click", function() {
        send_msg();
    });
    $(".shortMessageBack,.inputInfo").unbind();
    $(".shortMessageBack").bind("click", function() {
        $(".tabbar").removeClass("displayNone");
    });
    $(".inputInfo").bind("touchstart",function() {
        setTimeout(function(){  
            document.body.scrollTop = document.body.scrollHeight;  
        },300);
    })
    readerFile(fileUrl, userName, receiveUser, handleString(chatTime), true);
    console.log(chatObject); // 1.5 1500 *4 = 6000
}

function send_msg() {
    if (ws != null) {
        var inputInfo = document.getElementById("inputInfo").value.trim();
        if (inputInfo == "") {
            return;
        }
        inputInfo = userName + "@" + receiveUser + ":::" + inputInfo;
        try {
            ws.send(inputInfo);
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
function userClick(that) {
    $("input[name='info-checkbox']").attr("checked", false);
    $(that).find("input").attr("checked", true);
    receiveUser = $(that).find(".item-title").html(); //item-title
    $(".infoUserName").html(receiveUser);
    viewClass = "InfoView_" + userName + "_" + receiveUser;
    window.localStorage.receiveUser = receiveUser;
    $(".shortContainer section").removeClass().addClass(viewClass);
    //本地读取记录
    document.getElementsByClassName(viewClass)[0].innerHTML = "";
    try {
        readerFile(fileUrl, userName, receiveUser, GetDateStr(0, 0), true);
    } catch (e) {}
}
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

