//*************************************************
//------------------视频配置 start---------------
//*************************************************
var map, infoPoint = [ //经纬度+设备号+通道号
    [113.960046, 22.535688, 2003, 1],
    [113.922468, 22.497125, 2003, 2]
];
// *************************************************
// ------------------视频配置 end-----------------  Android
// *************************************************
var myJavaFuntion = function() {};
myJavaFuntion.StartVoice = function(a) {
    try {
        window.webkit.messageHandlers.StartVoice.postMessage(a);
    } catch (ex) {
        try {
            myJavaFun.StartVoice(a);
        } catch (ex) {}
    }
};
myJavaFuntion.StopVoice = function() {
    try {
        window.webkit.messageHandlers.StopVoice.postMessage('');
    } catch (ex) {
        try {
            myJavaFun.StopVoice();
        } catch (ex) {
            myJavaFun.StopVoice();
        }
    }
};
myJavaFuntion.StopVice = function() {
    try {
        window.webkit.messageHandlers.StopVice.postMessage('');
    } catch (ex) {
        try {
            myJavaFun.StopVice();
        } catch (ex) {
            myJavaFun.StopVice();
        }
    }
};
myJavaFuntion.StartVice = function() {
    try {
        window.webkit.messageHandlers.StartVice.postMessage('');
    } catch (ex) {
        try {
            myJavaFun.StartVice();
        } catch (ex) {}
    }
};
myJavaFuntion.AppCacheClear = function() {
    try {
        window.webkit.messageHandlers.AppCacheClear.postMessage('');
    } catch (ex) {
        try {
            myJavaFun.AppCacheClear();
        } catch (ex) {}
    }
};
myJavaFuntion.OpenLocalUrl = function(url) {
    try {
        window.webkit.messageHandlers.OpenLocalUrl.postMessage(url);
    } catch (ex) {
        try {
            myJavaFun.OpenLocalUrl(url);
        } catch (ex1) {
            if(window.localStorage.terminal != "Mobile.App")
               window.location.href = "/Views/login.html";
            else
                myApp.dialog.alert("退出登陆异常");
        }
    }
};
myJavaFuntion.AppShare = function(url) {
    try {
        window.webkit.messageHandlers.AppShare.postMessage(url);
    } catch (ex) {
        try {
            myJavaFun.AppShare(url);
        } catch (ex) {}
    }
};
myJavaFuntion.RichScan = function() {
    try {
        window.webkit.messageHandlers.RichScan.postMessage('');
    } catch (ex) {
        try {
            myJavaFun.RichScan();
        } catch (ex) {}
    }
};
myJavaFuntion.AppShare2 = function() {
    try {
        window.webkit.messageHandlers.AppShare2.postMessage('');
    } catch (ex) {}
};
myJavaFuntion.VideoShow = function(json) {
    try {
        window.webkit.messageHandlers.VideoShow.postMessage(json);
    } catch (ex) {
        try {
            myJavaFun.VideoShow(json);
        } catch (ex) {myJavaFun.VideoShow(json);}
    }
};
myJavaFuntion.HikYunVideoShow = function(json) {
    try {
        window.webkit.messageHandlers.HikYunVideoShow.postMessage(json);
    } catch (ex) {
        try {
            myJavaFun.HikYunVideoShow(json);
        } catch (ex) {}
    }
};
myJavaFuntion.Hik8700VideoShow = function(json) {
    try {
        window.webkit.messageHandlers.Hik8700VideoShow.postMessage(json);
    } catch (ex) {}
};
myJavaFuntion.setOrientation = function() {
    try {
        window.webkit.messageHandlers.setOrientation.postMessage('');
    } catch (ex) {}
};
myJavaFuntion.GetCookie = function() {
    try {
        window.webkit.messageHandlers.GetCookie.postMessage('');
    } catch (ex) {}
};
GetCookieCallback = function(cookie) {
    var cookie_json = JSON.parse(cookie);
    window.localStorage.terminal = cookie_json.terminalString;
    window.localStorage.ac_appkey = cookie_json.ac_appkeyString;
    window.localStorage.ac_infokey = cookie_json.ac_infokeyString;
    window.localStorage.service_url = cookie_json.service_urlString;
};
myJavaFuntion.SetCookie = function(cookie) {
    try {
        window.webkit.messageHandlers.SetCookie.postMessage(cookie);
    } catch (ex) {}
};
myJavaFuntion.OpenMapNav = function(url) {
    try {
        window.webkit.messageHandlers.OpenMapNav.postMessage(url);
    } catch (ex) {
        try {
            myJavaFun.OpenMapNav(url);
        } catch (ex) {}
    }
};
myJavaFuntion.OpenApp = function(url) {
    try {
        window.webkit.messageHandlers.OpenApp.postMessage(url);
    } catch (ex) {
        try {
            myJavaFun.OpenApp(url);
        } catch (ex) {}
    }
};
// *************************************************
// ---------------------用户配置--------------------  
// *************************************************

var getUser ={
    singleGroup:["zkx","admin","zkx2018"],
    multipleGroup:[
    {All0:["zkx","admin","zkx2018"]},
    {All1:["zkx","zkx2018"]}]
};

// *************************************************
// ---------------------客房配置--------------------  
// *************************************************
var homeDeatilsDataunCheck =[
    {name: '灯光控制-房间-开',equipNo: '300',setNo: '1',values: "",className:"lightHourseOpen",isFlag: false},
    {name: '灯光控制-房间-关',equipNo: '300',setNo: '1',values: "",className:"lightHourseClose",isFlag: false},
    {name: '灯光控制-厕所-开',equipNo: '300',setNo: '1',values: "",className:"lightWcOpen",isFlag: false},
    {name: '灯光控制-厕所-关',equipNo: '300',setNo: '1',values: "",className:"lightWcClose",isFlag: false},
    {name: '空调控制-开',equipNo: '300',setNo: '1',values: "",className:"kt_Open",isFlag: false},
    {name: '空调控制-关',equipNo: '300',setNo: '1',values: "",className:"kt_Close",isFlag: false},
    {name: '空调控制-温度增大',equipNo: '300',setNo: '1',values: "",className:"kt_wdzd",isFlag: true},
    {name: '空调控制-温度减小',equipNo: '300',setNo: '1',values: "",className:"kt_wdjx",isFlag: true},
    {name: '空调控制-风速调档',equipNo: '300',setNo: '1',values: "",className:"kt_fstd",isFlag: true},
    {name: '空调控制-模式切换',equipNo: '300',setNo: '1',values: "",className:"kt_msqh",isFlag: true},
    {name: '音乐控制-上一首',equipNo: '300',setNo: '1',values: "",className:"yy_prev",isFlag: true},
    {name: '音乐控制-下一首',equipNo: '300',setNo: '1',values: "",className:"yy_next",isFlag: true},
    {name: '音乐控制-播放',equipNo: '300',setNo: '1',values: "",className:"yy_play",isFlag: false},
    {name: '音乐控制-暂停',equipNo: '300',setNo: '1',values: "",className:"yy_stop",isFlag: false},
    {name: '音乐控制-音量增大',equipNo: '300',setNo: '1',values: "",className:"yy_ylzd",isFlag: true},
    {name: '音乐控制-音量减小',equipNo: '300',setNo: '1',values: "",className:"yy_yljx",isFlag: true},
    {name: '窗帘控制-关闭',equipNo: '300',setNo: '1',values: "",className:"cl_close",isFlag: true},
    {name: '窗帘控制-停止',equipNo: '300',setNo: '1',values: "",className:"cl_stop",isFlag: true},
    {name: '窗帘控制-打开',equipNo: '300',setNo: '1',values: "",className:"cl_open",isFlag: true},
    ];