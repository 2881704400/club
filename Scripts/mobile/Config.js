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
// 客房1
{equip_no:300,setNo:1,value:null,name:"客房1-照明回路-卫生间防雾灯-开启",className:"wsj1_light_open",isFlag: false,Independent: 0},
{equip_no:300,setNo:2,value:null,name:"客房1-照明回路-卫生间防雾灯-关闭",className:"wsj1_light_close",isFlag: false,Independent: 0},

{equip_no:300,setNo:3,value:null,name:"客房1-调光回路-卧室门头灯-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:4,value:null,name:"客房1-调光回路-卧室玄关灯-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:5,value:null,name:"客房1-调光回路-卧室天花灯-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:6,value:null,name:"客房1-调光回路-卧室床头左筒灯-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:7,value:null,name:"客房1-调光回路-卧室床头右筒灯-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:8,value:null,name:"客房1-调光回路-卧室小夜灯-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:9,value:null,name:"客房1-调光回路-卧室灯带-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:10,value:null,name:"客房1-调光回路-卧室窗帘灯带-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:11,value:null,name:"客房1-调光回路-卫生间淋浴灯-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:12,value:null,name:"客房1-调光回路-衣帽间灯-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:13,value:null,name:"客房1-调光回路-卫生间灯带-设定值",className:"",isFlag: false,Independent: 0},

{equip_no:300,setNo:14,value:null,name:"客房1-卧室场景-全开模式-设置",className:"ws1_scene_allopen",isFlag: false,Independent: 1},
{equip_no:300,setNo:15,value:null,name:"客房1-卧室场景-全关模式-设置",className:"ws1_scene_allclose",isFlag: false,Independent: 1},
{equip_no:300,setNo:16,value:null,name:"客房1-卧室场景-迎宾模式-设置",className:"ws1_scene_wel",isFlag: false,Independent: 1},
{equip_no:300,setNo:17,value:null,name:"客房1-卧室场景-明亮模式-设置",className:"ws1_scene_ml",isFlag: false,Independent: 1},
{equip_no:300,setNo:18,value:null,name:"客房1-卧室场景-柔和模式-设置",className:"ws1_scene_rh",isFlag: false,Independent: 1},
{equip_no:300,setNo:19,value:null,name:"客房1-卧室场景-休闲模式-设置",className:"ws1_scene_xx",isFlag: false,Independent: 1},
{equip_no:300,setNo:20,value:null,name:"客房1-卧室场景-睡眠模式-设置",className:"ws1_scene_sm",isFlag: false,Independent: 1},
{equip_no:300,setNo:21,value:null,name:"客房1-卧室场景-夜起模式-设置",className:"ws1_scene_yq",isFlag: false,Independent: 1},
{equip_no:300,setNo:22,value:null,name:"客房1-卧室场景-晨起模式-设置",className:"ws1_scene_cq",isFlag: false,Independent: 1},
{equip_no:300,setNo:23,value:null,name:"客房1-卧室场景-阅读模式-设置",className:"ws1_scene_yd",isFlag: false,Independent: 1},

{equip_no:300,setNo:24,value:null,name:"客房1-卫生间场景-卫生间全开-设置",className:"ys1_scene_allopen",isFlag: false,Independent: 1},
{equip_no:300,setNo:25,value:null,name:"客房1-卫生间场景-卫生间全关-设置",className:"ys1_scene_allclose",isFlag: false,Independent: 1},
{equip_no:300,setNo:26,value:null,name:"客房1-卫生间场景-明亮模式-设置",className:"ys1_scene_ml",isFlag: false,Independent: 1},
{equip_no:300,setNo:27,value:null,name:"客房1-卫生间场景-柔和模式-设置",className:"ys1_scene_rh",isFlag: false,Independent: 1},
{equip_no:300,setNo:28,value:null,name:"客房1-卫生间场景-淋浴模式-设置",className:"ys1_scene_ly",isFlag: false,Independent: 1},
{equip_no:300,setNo:29,value:null,name:"客房1-卫生间场景-音乐模式-设置",className:"ys1_scene_yy",isFlag: false,Independent: 1},

{equip_no:300,setNo:30,value:null,name:"客房1-窗帘-卧室布帘1-开启",className:"cl1_bl1_open",isFlag: true,Independent: 0},
{equip_no:300,setNo:31,value:null,name:"客房1-窗帘-卧室布帘1-停止",className:"cl1_bl1_stop",isFlag: true,Independent: 0},
{equip_no:300,setNo:32,value:null,name:"客房1-窗帘-卧室布帘1-关闭",className:"cl1_bl1_close",isFlag: true,Independent: 0},
{equip_no:300,setNo:33,value:null,name:"客房1-窗帘-卧室纱帘1-开启",className:"cl1_sl1_open",isFlag: true,Independent: 0},
{equip_no:300,setNo:34,value:null,name:"客房1-窗帘-卧室纱帘1-停止",className:"cl1_sl1_stop",isFlag: true,Independent: 0},
{equip_no:300,setNo:35,value:null,name:"客房1-窗帘-卧室纱帘1-关闭",className:"cl1_sl1_close",isFlag: true,Independent: 0},
{equip_no:300,setNo:36,value:null,name:"客房1-窗帘-卧室布帘2-开启",className:"cl1_bl2_open",isFlag: true,Independent: 0},
{equip_no:300,setNo:37,value:null,name:"客房1-窗帘-卧室布帘2-停止",className:"cl1_bl2_stop",isFlag: true,Independent: 0},
{equip_no:300,setNo:38,value:null,name:"客房1-窗帘-卧室布帘2-关闭",className:"cl1_bl2_close",isFlag: true,Independent: 0},
{equip_no:300,setNo:39,value:null,name:"客房1-窗帘-卧室纱帘2-开启",className:"cl1_sl2_open",isFlag: true,Independent: 0},
{equip_no:300,setNo:40,value:null,name:"客房1-窗帘-卧室纱帘2-停止",className:"cl1_sl2_stop",isFlag: true,Independent: 0},
{equip_no:300,setNo:41,value:null,name:"客房1-窗帘-卧室纱帘2-关闭",className:"cl1_sl2_close",isFlag: true,Independent: 0},
{equip_no:300,setNo:42,value:null,name:"客房1-窗帘-卫生间卷帘1-开启",className:"cl1_wj1_open",isFlag: true,Independent: 0},
{equip_no:300,setNo:43,value:null,name:"客房1-窗帘-卫生间卷帘1-停止",className:"cl1_wj1_stop",isFlag: true,Independent: 0},
{equip_no:300,setNo:44,value:null,name:"客房1-窗帘-卫生间卷帘1-关闭",className:"cl1_wj1_close",isFlag: true,Independent: 0},
{equip_no:300,setNo:45,value:null,name:"客房1-窗帘-卫生间卷帘2-开启",className:"cl1_wj2_open",isFlag: true,Independent: 0},
{equip_no:300,setNo:46,value:null,name:"客房1-窗帘-卫生间卷帘2-停止",className:"cl1_wj2_stop",isFlag: true,Independent: 0},
{equip_no:300,setNo:47,value:null,name:"客房1-窗帘-卫生间卷帘2-关闭",className:"cl1_wj2_close",isFlag: true,Independent: 0},

{equip_no:300,setNo:48,value:null,name:"客房1-卧室空调-电源-开启",className:"kt1_open",isFlag: false,Independent: 0},
{equip_no:300,setNo:49,value:null,name:"客房1-卧室空调-电源-关闭",className:"kt1_close",isFlag: false,Independent: 0},
{equip_no:300,setNo:50,value:null,name:"客房1-卧室空调-风速-自动",className:"kt1_01",isFlag: false,Independent: 0},
{equip_no:300,setNo:51,value:null,name:"客房1-卧室空调-风速-低速",className:"kt1_02",isFlag: false,Independent: 0},
{equip_no:300,setNo:52,value:null,name:"客房1-卧室空调-风速-中速",className:"kt1_03",isFlag: false,Independent: 0},
{equip_no:300,setNo:53,value:null,name:"客房1-卧室空调-风速-高速",className:"kt1_04",isFlag: false,Independent: 0},
{equip_no:300,setNo:54,value:null,name:"客房1-卧室空调-模式-制冷",className:"kt1_05",isFlag: false,Independent: 0},
{equip_no:300,setNo:55,value:null,name:"客房1-卧室空调-模式-制热",className:"kt1_06",isFlag: false,Independent: 0},
{equip_no:300,setNo:56,value:null,name:"客房1-卧室空调-模式-送风",className:"kt1_07",isFlag: false,Independent: 0},
{equip_no:300,setNo:57,value:null,name:"客房1-卧室空调-模式-抽湿",className:"kt1_08",isFlag: false,Independent: 0},
{equip_no:300,setNo:58,value:null,name:"客房1-卧室空调-温度-设定值",className:"kt1_09",isFlag: false,Independent: 0},
{equip_no:null,setNo:null,value:null,name:"空调温度增大",className:"kt1_yl_zj",isFlag: true,Independent: 0},
{equip_no:null,setNo:null,value:null,name:"空调温度减小",className:"kt1_yl_jx",isFlag: true,Independent: 0},
{equip_no:null,setNo:null,value:null,name:"空调风速调整",className:"kt1_fs_td",isFlag: true,Independent: 0},
{equip_no:null,setNo:null,value:null,name:"空调模式切换",className:"kt1_ms_qh",isFlag: true,Independent: 0},

{equip_no:300,setNo:59,value:null,name:"客房1-卫生间音乐-电源-开启",className:"yy1_play",isFlag: false,Independent: 0},
{equip_no:300,setNo:60,value:null,name:"客房1-卫生间音乐-电源-关闭",className:"yy1_stop",isFlag: false,Independent: 0},
{equip_no:300,setNo:61,value:null,name:"客房1-卫生间音乐-状态设置-播放",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:62,value:null,name:"客房1-卫生间音乐-状态设置-暂停",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:63,value:null,name:"客房1-卫生间音乐-音源选择-USB",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:64,value:null,name:"客房1-卫生间音乐-音源选择-AUX",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:65,value:null,name:"客房1-卫生间音乐-播放模式设置-单曲循环",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:66,value:null,name:"客房1-卫生间音乐-播放模式设置-列表播放",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:67,value:null,name:"客房1-卫生间音乐-播放模式设置-随机播放",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:68,value:null,name:"客房1-卫生间音乐-音量-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:363,value:null,name:"上一曲",className:"yy1_prev",isFlag: true,Independent: 0},
{equip_no:300,setNo:364,value:null,name:"下一曲",className:"yy1_next",isFlag: true,Independent: 0},
{equip_no:null,setNo:null,value:null,name:"音量减小",className:"yy1_yljx",isFlag: true,Independent: 0},
{equip_no:null,setNo:null,value:null,name:"音量增大",className:"yy1_ylzd",isFlag: true,Independent: 0},

// 客房2
{equip_no:300,setNo:69,value:null,name:"客房2-照明回路-卧室D9台灯-开启",className:"ws2_light_open",isFlag: false,Independent: 0},
{equip_no:300,setNo:70,value:null,name:"客房2-照明回路-卧室D9台灯-关闭",className:"ws2_light_close",isFlag: false,Independent: 0},
{equip_no:300,setNo:71,value:null,name:"客房2-照明回路-防雾灯-开启",className:"ws2_light1_open",isFlag: false,Independent: 0},
{equip_no:300,setNo:72,value:null,name:"客房2-照明回路-防雾灯-关闭",className:"ws2_light1_close",isFlag: false,Independent: 0},

{equip_no:300,setNo:73,value:null,name:"客房2-调光回路-卧室灯带-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:74,value:null,name:"客房2-调光回路-卧室床头右筒灯-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:75,value:null,name:"客房2-调光回路-卧室天花筒灯-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:76,value:null,name:"客房2-调光回路-卧室门口筒灯-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:77,value:null,name:"客房2-调光回路-卧室灯带-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:78,value:null,name:"客房2-调光回路-卧室床头左筒灯-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:79,value:null,name:"客房2-调光回路-卧室小夜灯-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:80,value:null,name:"客房2-调光回路-卫生间门口筒灯-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:81,value:null,name:"客房2-调光回路-卫生间淋浴灯-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:82,value:null,name:"客房2-调光回路-卫生间窗帘灯带-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:83,value:null,name:"客房2-调光回路-卫生间淋浴灯-设定值",className:"",isFlag: false,Independent: 0},

{equip_no:300,setNo:84,value:null,name:"客房2-卧室场景-全开模式-设置",className:"ws2_scene_allopen",isFlag: false,Independent: 1},
{equip_no:300,setNo:85,value:null,name:"客房2-卧室场景-全关模式-设置",className:"ws2_scene_allclose",isFlag: false,Independent: 1},
{equip_no:300,setNo:86,value:null,name:"客房2-卧室场景-迎宾模式-设置",className:"ws2_scene_wel",isFlag: false,Independent: 1},
{equip_no:300,setNo:87,value:null,name:"客房2-卧室场景-明亮模式-设置",className:"ws2_scene_ml",isFlag: false,Independent: 1},
{equip_no:300,setNo:88,value:null,name:"客房2-卧室场景-柔和模式-设置",className:"ws2_scene_rh",isFlag: false,Independent: 1},
{equip_no:300,setNo:89,value:null,name:"客房2-卧室场景-休闲模式-设置",className:"ws2_scene_xx",isFlag: false,Independent: 1},
{equip_no:300,setNo:90,value:null,name:"客房2-卧室场景-睡眠模式-设置",className:"ws2_scene_sm",isFlag: false,Independent: 1},
{equip_no:300,setNo:91,value:null,name:"客房2-卧室场景-夜起模式-设置",className:"ws2_scene_yq",isFlag: false,Independent: 1},
{equip_no:300,setNo:92,value:null,name:"客房2-卧室场景-晨起模式-设置",className:"ws2_scene_cq",isFlag: false,Independent: 1},
{equip_no:300,setNo:93,value:null,name:"客房2-卧室场景-阅读模式-设置",className:"ws2_scene_yd",isFlag: false,Independent: 1},

{equip_no:300,setNo:94,value:null,name:"客房2-卫生间场景-卫生间全开-设置",className:"ys2_scene_allopen",isFlag: false,Independent: 1},
{equip_no:300,setNo:95,value:null,name:"客房2-卫生间场景-卫生间全关-设置",className:"ys2_scene_allclose",isFlag: false,Independent: 1},
{equip_no:300,setNo:96,value:null,name:"客房2-卫生间场景-明亮模式-设置",className:"ys2_scene_ml",isFlag: false,Independent: 1},
{equip_no:300,setNo:97,value:null,name:"客房2-卫生间场景-柔和模式-设置",className:"ys2_scene_rh",isFlag: false,Independent: 1},
{equip_no:300,setNo:98,value:null,name:"客房2-卫生间场景-淋浴模式-设置",className:"ys2_scene_ly",isFlag: false,Independent: 1},
{equip_no:300,setNo:99,value:null,name:"客房2-卫生间场景-音乐模式-设置",className:"ys2_scene_yy",isFlag: false,Independent: 1},

{equip_no:300,setNo:100,value:null,name:"客房2-窗帘-卧室布帘-开启",className:"cl2_bl1_open",isFlag: true,Independent: 0},
{equip_no:300,setNo:101,value:null,name:"客房2-窗帘-卧室布帘-停止",className:"cl2_bl1_stop",isFlag: true,Independent: 0},
{equip_no:300,setNo:102,value:null,name:"客房2-窗帘-卧室布帘-关闭",className:"cl2_bl1_close",isFlag: true,Independent: 0},
{equip_no:300,setNo:103,value:null,name:"客房2-窗帘-卧室纱帘-开启",className:"cl2_sl1_open",isFlag: true,Independent: 0},
{equip_no:300,setNo:104,value:null,name:"客房2-窗帘-卧室纱帘-停止",className:"cl2_sl1_stop",isFlag: true,Independent: 0},
{equip_no:300,setNo:105,value:null,name:"客房2-窗帘-卧室纱帘-关闭",className:"cl2_sl1_close",isFlag: true,Independent: 0},
{equip_no:300,setNo:106,value:null,name:"客房2-窗帘-卫间卷帘-开启",className:"cl2_wj1_open",isFlag: true,Independent: 0},
{equip_no:300,setNo:107,value:null,name:"客房2-窗帘-卫间卷帘-停止",className:"cl2_wj1_stop",isFlag: true,Independent: 0},
{equip_no:300,setNo:108,value:null,name:"客房2-窗帘-卫间卷帘-关闭",className:"cl2_wj1_close",isFlag: true,Independent: 0},

{equip_no:300,setNo:109,value:null,name:"客房2-卧室空调-电源-开启",className:"kt2_open",isFlag: false,Independent: 0},
{equip_no:300,setNo:110,value:null,name:"客房2-卧室空调-电源-关闭",className:"kt2_close",isFlag: false,Independent: 0},
{equip_no:300,setNo:111,value:null,name:"客房2-卧室空调-风速-自动",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:112,value:null,name:"客房2-卧室空调-风速-低速",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:113,value:null,name:"客房2-卧室空调-风速-中速",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:114,value:null,name:"客房2-卧室空调-风速-高速",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:115,value:null,name:"客房2-卧室空调-模式-制冷",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:116,value:null,name:"客房2-卧室空调-模式-制热",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:117,value:null,name:"客房2-卧室空调-模式-送风",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:118,value:null,name:"客房2-卧室空调-模式-抽湿",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:119,value:null,name:"客房2-卧室空调-温度-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:null,setNo:null,value:null,name:"空调温度增大",className:"kt2_yl_zj",isFlag: true,Independent: 0},
{equip_no:null,setNo:null,value:null,name:"空调温度减小",className:"kt2_yl_jx",isFlag: true,Independent: 0},
{equip_no:null,setNo:null,value:null,name:"空调风速调整",className:"kt2_fs_td",isFlag: true,Independent: 0},
{equip_no:null,setNo:null,value:null,name:"空调模式切换",className:"kt2_ms_qh",isFlag: true,Independent: 0},

{equip_no:300,setNo:120,value:null,name:"客房2-卫生间音乐-电源-开启",className:"yy2_play",isFlag: false,Independent: 0},
{equip_no:300,setNo:121,value:null,name:"客房2-卫生间音乐-电源-关闭",className:"yy2_stop",isFlag: false,Independent: 0},
{equip_no:300,setNo:122,value:null,name:"客房2-卫生间音乐-状态设置-播放",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:123,value:null,name:"客房2-卫生间音乐-状态设置-暂停",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:124,value:null,name:"客房2-卫生间音乐-音源选择-USB",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:125,value:null,name:"客房2-卫生间音乐-音源选择-AUX",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:126,value:null,name:"客房2-卫生间音乐-播放模式设置-单曲循环",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:127,value:null,name:"客房2-卫生间音乐-播放模式设置-列表播放",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:128,value:null,name:"客房2-卫生间音乐-播放模式设置-随机播放",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:129,value:null,name:"客房2-卫生间音乐-音量-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:365,value:null,name:"上一曲",className:"yy2_prev",isFlag: true,Independent: 0},
{equip_no:300,setNo:366,value:null,name:"下一曲",className:"yy2_next",isFlag: true,Independent: 0},
{equip_no:null,setNo:null,value:null,name:"音量减小",className:"yy2_yljx",isFlag: true,Independent: 0},
{equip_no:null,setNo:null,value:null,name:"音量增大",className:"yy2_ylzd",isFlag: true,Independent: 0},

// 客房3
{equip_no:300,setNo:130,value:null,name:"客房3-照明回路-卧室D9台灯-开启",className:"ws3_light_open",isFlag: false,Independent: 0},
{equip_no:300,setNo:131,value:null,name:"客房3-照明回路-卧室D9台灯-关闭",className:"ws3_light_close",isFlag: false,Independent: 0},
{equip_no:300,setNo:132,value:null,name:"客房3-照明回路-防雾灯-开启",className:"ws3_light1_open",isFlag: false,Independent: 0},
{equip_no:300,setNo:133,value:null,name:"客房3-照明回路-防雾灯-关闭",className:"ws3_light1_close",isFlag: false,Independent: 0},

{equip_no:300,setNo:134,value:null,name:"客房3-调光回路-卧室床头左筒灯-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:135,value:null,name:"客房3-调光回路-卧室床头右筒灯-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:136,value:null,name:"客房3-调光回路-卧室天花筒灯-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:137,value:null,name:"客房3-调光回路-卧室窗帘灯带-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:138,value:null,name:"客房3-调光回路-卧室小夜灯-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:139,value:null,name:"客房3-调光回路-卧室门口筒灯-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:140,value:null,name:"客房3-调光回路-卧室灯带-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:141,value:null,name:"客房3-调光回路-卫生间天花筒灯-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:142,value:null,name:"客房3-调光回路-卫生间淋浴灯-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:143,value:null,name:"客房3-调光回路-卫生间窗帘灯带-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:144,value:null,name:"客房3-调光回路-卫生间天花灯带-设定值",className:"",isFlag: false,Independent: 0},

{equip_no:300,setNo:145,value:null,name:"客房3-卧室场景-全开模式-设置",className:"ws3_scene_allopen",isFlag: false,Independent: 1},
{equip_no:300,setNo:146,value:null,name:"客房3-卧室场景-全关模式-设置",className:"ws3_scene_allclose",isFlag: false,Independent: 1},
{equip_no:300,setNo:147,value:null,name:"客房3-卧室场景-迎宾模式-设置",className:"ws3_scene_wel",isFlag: false,Independent: 1},
{equip_no:300,setNo:148,value:null,name:"客房3-卧室场景-明亮模式-设置",className:"ws3_scene_ml",isFlag: false,Independent: 1},
{equip_no:300,setNo:149,value:null,name:"客房3-卧室场景-柔和模式-设置",className:"ws3_scene_rh",isFlag: false,Independent: 1},
{equip_no:300,setNo:150,value:null,name:"客房3-卧室场景-休闲模式-设置",className:"ws3_scene_xx",isFlag: false,Independent: 1},
{equip_no:300,setNo:151,value:null,name:"客房3-卧室场景-睡眠模式-设置",className:"ws3_scene_sm",isFlag: false,Independent: 1},
{equip_no:300,setNo:152,value:null,name:"客房3-卧室场景-夜起模式-设置",className:"ws3_scene_yq",isFlag: false,Independent: 1},
{equip_no:300,setNo:153,value:null,name:"客房3-卧室场景-晨起模式-设置",className:"ws3_scene_cq",isFlag: false,Independent: 1},
{equip_no:300,setNo:154,value:null,name:"客房3-卧室场景-阅读模式-设置",className:"ws3_scene_yd",isFlag: false,Independent: 1},

{equip_no:300,setNo:155,value:null,name:"客房3-卫生间场景-卫生间全开-设置",className:"ys3_scene_allopen",isFlag: false,Independent: 1},
{equip_no:300,setNo:156,value:null,name:"客房3-卫生间场景-卫生间全关-设置",className:"ys3_scene_allclose",isFlag: false,Independent: 1},
{equip_no:300,setNo:157,value:null,name:"客房3-卫生间场景-明亮模式-设置",className:"ys3_scene_ml",isFlag: false,Independent: 1},
{equip_no:300,setNo:158,value:null,name:"客房3-卫生间场景-柔和模式-设置",className:"ys3_scene_rh",isFlag: false,Independent: 1},
{equip_no:300,setNo:159,value:null,name:"客房3-卫生间场景-淋浴模式-设置",className:"ys3_scene_ly",isFlag: false,Independent: 1},
{equip_no:300,setNo:160,value:null,name:"客房3-卫生间场景-音乐模式-设置",className:"ys3_scene_yy",isFlag: false,Independent: 1},

{equip_no:300,setNo:161,value:null,name:"客房3-窗帘-卧室布帘-开启",className:"cl3_bl1_open",isFlag: true,Independent: 0},
{equip_no:300,setNo:162,value:null,name:"客房3-窗帘-卧室布帘-停止",className:"cl3_bl1_stop",isFlag: true,Independent: 0},
{equip_no:300,setNo:163,value:null,name:"客房3-窗帘-卧室布帘-关闭",className:"cl3_bl1_close",isFlag: true,Independent: 0},
{equip_no:300,setNo:164,value:null,name:"客房3-窗帘-卧室纱帘-开启",className:"cl3_sl1_open",isFlag: true,Independent: 0},
{equip_no:300,setNo:165,value:null,name:"客房3-窗帘-卧室纱帘-停止",className:"cl3_sl1_stop",isFlag: true,Independent: 0},
{equip_no:300,setNo:166,value:null,name:"客房3-窗帘-卧室纱帘-关闭",className:"cl3_sl1_close",isFlag: true,Independent: 0},
{equip_no:300,setNo:167,value:null,name:"客房3-窗帘-卫生间卷帘1-开启",className:"cl3_wj1_open",isFlag: true,Independent: 0},
{equip_no:300,setNo:168,value:null,name:"客房3-窗帘-卫生间卷帘1-停止",className:"cl3_wj1_stop",isFlag: true,Independent: 0},
{equip_no:300,setNo:169,value:null,name:"客房3-窗帘-卫生间卷帘1-关闭",className:"cl3_wj1_close",isFlag: true,Independent: 0},
{equip_no:300,setNo:170,value:null,name:"客房3-窗帘-卫生间卷帘2-开启",className:"cl3_wj2_open",isFlag: true,Independent: 0},
{equip_no:300,setNo:171,value:null,name:"客房3-窗帘-卫生间卷帘2-停止",className:"cl3_wj2_stop",isFlag: true,Independent: 0},
{equip_no:300,setNo:172,value:null,name:"客房3-窗帘-卫生间卷帘2-关闭",className:"cl3_wj2_close",isFlag: true,Independent: 0},

{equip_no:300,setNo:173,value:null,name:"客房3-卧室空调-电源-开启",className:"kt3_open",isFlag: false,Independent: 0},
{equip_no:300,setNo:174,value:null,name:"客房3-卧室空调-电源-关闭",className:"kt3_close",isFlag: false,Independent: 0},
{equip_no:300,setNo:175,value:null,name:"客房3-卧室空调-风速-自动",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:176,value:null,name:"客房3-卧室空调-风速-低速",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:177,value:null,name:"客房3-卧室空调-风速-中速",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:178,value:null,name:"客房3-卧室空调-风速-高速",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:179,value:null,name:"客房3-卧室空调-模式-制冷",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:180,value:null,name:"客房3-卧室空调-模式-制热",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:181,value:null,name:"客房3-卧室空调-模式-送风",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:182,value:null,name:"客房3-卧室空调-模式-抽湿",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:183,value:null,name:"客房3-卧室空调-温度-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:null,setNo:null,value:null,name:"空调温度增大",className:"kt3_yl_zj",isFlag: true,Independent: 0},
{equip_no:null,setNo:null,value:null,name:"空调温度减小",className:"kt3_yl_jx",isFlag: true,Independent: 0},
{equip_no:null,setNo:null,value:null,name:"空调风速调整",className:"kt3_fs_td",isFlag: true,Independent: 0},
{equip_no:null,setNo:null,value:null,name:"空调模式切换",className:"kt3_ms_qh",isFlag: true,Independent: 0},

{equip_no:300,setNo:184,value:null,name:"客房3-卫生间音乐-电源-开启",className:"yy3_play",isFlag: false,Independent: 0},
{equip_no:300,setNo:185,value:null,name:"客房3-卫生间音乐-电源-关闭",className:"yy3_stop",isFlag: false,Independent: 0},
{equip_no:300,setNo:186,value:null,name:"客房3-卫生间音乐-状态设置-播放",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:187,value:null,name:"客房3-卫生间音乐-状态设置-暂停",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:188,value:null,name:"客房3-卫生间音乐-音源选择-USB",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:189,value:null,name:"客房3-卫生间音乐-音源选择-AUX",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:190,value:null,name:"客房3-卫生间音乐-播放模式设置-单曲循环",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:191,value:null,name:"客房3-卫生间音乐-播放模式设置-列表播放",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:192,value:null,name:"客房3-卫生间音乐-播放模式设置-随机播放",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:193,value:null,name:"客房3-卫生间音乐-音量-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:367,value:null,name:"上一曲",className:"yy3_prev",isFlag: true,Independent: 0},
{equip_no:300,setNo:368,value:null,name:"下一曲",className:"yy3_next",isFlag: true,Independent: 0},
{equip_no:null,setNo:null,value:null,name:"音量减小",className:"yy3_yljx",isFlag: true,Independent: 0},
{equip_no:null,setNo:null,value:null,name:"音量增大",className:"yy3_ylzd",isFlag: true,Independent: 0},

// 客房4
{equip_no:300,setNo:194,value:null,name:"客房4-照明回路-卧室台灯-开启",className:"ws4_light_open",isFlag: false,Independent: 0},
{equip_no:300,setNo:195,value:null,name:"客房4-照明回路-卧室台灯-关闭",className:"ws4_light_close",isFlag: false,Independent: 0},
{equip_no:300,setNo:196,value:null,name:"客房4-照明回路-起居室台灯-开启",className:"qjtd4_light_open",isFlag: false,Independent: 0},
{equip_no:300,setNo:197,value:null,name:"客房4-照明回路-起居室台灯-关闭",className:"qjtd4_light_close",isFlag: false,Independent: 0},
{equip_no:300,setNo:198,value:null,name:"客房4-照明回路-起居室卫生间防雾灯-开启",className:"qjfw4_light_open",isFlag: false,Independent: 0},
{equip_no:300,setNo:199,value:null,name:"客房4-照明回路-起居室卫生间防雾灯-关闭",className:"qjfw4_light_close",isFlag: false,Independent: 0},

{equip_no:300,setNo:200,value:null,name:"客房4-调光回路-卧室门口筒灯-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:201,value:null,name:"客房4-调光回路-卧室衣帽间灯-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:202,value:null,name:"客房4-调光回路-卧室床头左筒灯-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:203,value:null,name:"客房4-调光回路-卧室床头右筒灯-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:204,value:null,name:"客房4-调光回路-卧室窗帘灯带-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:205,value:null,name:"客房4-调光回路-卫生间门口筒灯-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:206,value:null,name:"客房4-调光回路-卫生间天花筒灯-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:207,value:null,name:"客房4-调光回路-卫生间天花灯带-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:208,value:null,name:"客房4-调光回路-卫生间窗帘灯带-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:209,value:null,name:"客房4-调光回路-起居室灯带-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:210,value:null,name:"客房4-调光回路-起居室玄关筒灯-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:211,value:null,name:"客房4-调光回路-起居室天花筒灯-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:212,value:null,name:"客房4-调光回路-景光灯-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:213,value:null,name:"客房4-调光回路-起居室卫生间筒灯-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:214,value:null,name:"客房4-调光回路-起居室卫生间灯带-设定值",className:"",isFlag: false,Independent: 0},

{equip_no:300,setNo:215,value:null,name:"客房4-卧室场景-全开模式-设置",className:"ws4_scene_allopen",isFlag: false,Independent: 1},
{equip_no:300,setNo:216,value:null,name:"客房4-卧室场景-全关模式-设置",className:"ws4_scene_allclose",isFlag: false,Independent: 1},
{equip_no:300,setNo:217,value:null,name:"客房4-卧室场景-迎宾模式-设置",className:"ws4_scene_wel",isFlag: false,Independent: 1},
{equip_no:300,setNo:218,value:null,name:"客房4-卧室场景-明亮模式-设置",className:"ws4_scene_ml",isFlag: false,Independent: 1},
{equip_no:300,setNo:219,value:null,name:"客房4-卧室场景-柔和模式-设置",className:"ws4_scene_rh",isFlag: false,Independent: 1},
{equip_no:300,setNo:220,value:null,name:"客房4-卧室场景-休闲模式-设置",className:"ws4_scene_xx",isFlag: false,Independent: 1},
{equip_no:300,setNo:221,value:null,name:"客房4-卧室场景-睡眠模式-设置",className:"ws4_scene_sm",isFlag: false,Independent: 1},
{equip_no:300,setNo:222,value:null,name:"客房4-卧室场景-夜起模式-设置",className:"ws4_scene_yq",isFlag: false,Independent: 1},
{equip_no:300,setNo:223,value:null,name:"客房4-卧室场景-晨起模式-设置",className:"ws4_scene_cq",isFlag: false,Independent: 1},
{equip_no:300,setNo:224,value:null,name:"客房4-卧室场景-阅读模式-设置",className:"ws4_scene_yd",isFlag: false,Independent: 1},

{equip_no:300,setNo:225,value:null,name:"客房4-卧室卫生间场景-卫生间全开-设置",className:"ys4_scene_allopen",isFlag: false,Independent: 1},
{equip_no:300,setNo:226,value:null,name:"客房4-卧室卫生间场景-卫生间全关-设置",className:"ys4_scene_allclose",isFlag: false,Independent: 1},
{equip_no:300,setNo:227,value:null,name:"客房4-卧室卫生间场景-明亮模式-设置",className:"ys4_scene_ml",isFlag: false,Independent: 1},
{equip_no:300,setNo:228,value:null,name:"客房4-卧室卫生间场景-柔和模式-设置",className:"ys4_scene_rh",isFlag: false,Independent: 1},
{equip_no:300,setNo:229,value:null,name:"客房4-卧室卫生间场景-淋浴模式-设置",className:"ys4_scene_ly",isFlag: false,Independent: 1},
{equip_no:300,setNo:230,value:null,name:"客房4-卧室卫生间场景-音乐模式-设置",className:"ys4_scene_yy",isFlag: false,Independent: 1},

{equip_no:300,setNo:231,value:null,name:"客房4-起居室场景-全开模式-设置",className:"qjws4_scene_allopen",isFlag: false,Independent: 1},
{equip_no:300,setNo:232,value:null,name:"客房4-起居室场景-全关模式-设置",className:"qjws4_scene_allclose",isFlag: false,Independent: 1},
{equip_no:300,setNo:233,value:null,name:"客房4-起居室场景-迎宾模式-设置",className:"qjws4_scene_wel",isFlag: false,Independent: 1},
{equip_no:300,setNo:234,value:null,name:"客房4-起居室场景-明亮模式-设置",className:"qjws4_scene_ml",isFlag: false,Independent: 1},
{equip_no:300,setNo:235,value:null,name:"客房4-起居室场景-柔和模式-设置",className:"qjws4_scene_rh",isFlag: false,Independent: 1},
{equip_no:300,setNo:236,value:null,name:"客房4-起居室场景-休闲模式-设置",className:"qjws4_scene_xx",isFlag: false,Independent: 1},
{equip_no:300,setNo:237,value:null,name:"客房4-起居室场景-睡眠模式-设置",className:"qjws4_scene_sm",isFlag: false,Independent: 1},
{equip_no:300,setNo:238,value:null,name:"客房4-起居室场景-夜起模式-设置",className:"qjws4_scene_yq",isFlag: false,Independent: 1},
{equip_no:300,setNo:239,value:null,name:"客房4-起居室场景-晨起模式-设置",className:"qjws4_scene_cq",isFlag: false,Independent: 1},
{equip_no:300,setNo:240,value:null,name:"客房4-起居室场景-阅读模式-设置",className:"qjws4_scene_yd",isFlag: false,Independent: 1},

{equip_no:300,setNo:241,value:null,name:"客房4-起居室卫生间场景-卫生间全开-设置",className:"qjys4_scene_allopen",isFlag: false,Independent: 1},
{equip_no:300,setNo:242,value:null,name:"客房4-起居室卫生间场景-卫生间全关-设置",className:"qjys4_scene_allclose",isFlag: false,Independent: 1},
{equip_no:300,setNo:243,value:null,name:"客房4-起居室卫生间场景-明亮模式-设置",className:"qjys4_scene_ml",isFlag: false,Independent: 1},
{equip_no:300,setNo:244,value:null,name:"客房4-起居室卫生间场景-柔和模式-设置",className:"qjys4_scene_rh",isFlag: false,Independent: 1},
{equip_no:300,setNo:245,value:null,name:"客房4-起居室卫生间场景-淋浴模式-设置",className:"qjys4_scene_ly",isFlag: false,Independent: 1},
{equip_no:300,setNo:246,value:null,name:"客房4-起居室卫生间场景-音乐模式-设置",className:"qjys4_scene_yy",isFlag: false,Independent: 1},

{equip_no:300,setNo:247,value:null,name:"客房4-窗帘-卧室布帘1-开启",className:"cl4_bl1_open",isFlag: true,Independent: 0},
{equip_no:300,setNo:248,value:null,name:"客房4-窗帘-卧室布帘1-停止",className:"cl4_bl1_stop",isFlag: true,Independent: 0},
{equip_no:300,setNo:249,value:null,name:"客房4-窗帘-卧室布帘1-关闭",className:"cl4_bl1_close",isFlag: true,Independent: 0},
{equip_no:300,setNo:250,value:null,name:"客房4-窗帘-卧室纱帘1-开启",className:"cl4_sl1_open",isFlag: true,Independent: 0},
{equip_no:300,setNo:251,value:null,name:"客房4-窗帘-卧室纱帘1-停止",className:"cl4_sl1_stop",isFlag: true,Independent: 0},
{equip_no:300,setNo:252,value:null,name:"客房4-窗帘-卧室纱帘1-关闭",className:"cl4_sl1_close",isFlag: true,Independent: 0},
{equip_no:300,setNo:253,value:null,name:"客房4-窗帘-卧室布帘2-开启",className:"cl4_bl2_open",isFlag: true,Independent: 0},
{equip_no:300,setNo:254,value:null,name:"客房4-窗帘-卧室布帘2-停止",className:"cl4_bl2_stop",isFlag: true,Independent: 0},
{equip_no:300,setNo:255,value:null,name:"客房4-窗帘-卧室布帘2-关闭",className:"cl4_bl2_close",isFlag: true,Independent: 0},
{equip_no:300,setNo:256,value:null,name:"客房4-窗帘-卧室纱帘2-开启",className:"cl4_sl2_open",isFlag: true,Independent: 0},
{equip_no:300,setNo:257,value:null,name:"客房4-窗帘-卧室纱帘2-停止",className:"cl4_sl2_stop",isFlag: true,Independent: 0},
{equip_no:300,setNo:258,value:null,name:"客房4-窗帘-卧室纱帘2-关闭",className:"cl4_sl2_close",isFlag: true,Independent: 0},
{equip_no:300,setNo:259,value:null,name:"客房4-窗帘-卫生间卷帘-开启",className:"cl4_wj1_open",isFlag: true,Independent: 0},
{equip_no:300,setNo:260,value:null,name:"客房4-窗帘-卫生间卷帘-停止",className:"cl4_wj1_stop",isFlag: true,Independent: 0},
{equip_no:300,setNo:261,value:null,name:"客房4-窗帘-卫生间卷帘-关闭",className:"cl4_wj1_close",isFlag: true,Independent: 0},
{equip_no:300,setNo:262,value:null,name:"客房4-窗帘-起居室布帘1-开启",className:"qjcl4_bl1_open",isFlag: true,Independent: 0},
{equip_no:300,setNo:263,value:null,name:"客房4-窗帘-起居室布帘1-停止",className:"qjcl4_bl1_stop",isFlag: true,Independent: 0},
{equip_no:300,setNo:264,value:null,name:"客房4-窗帘-起居室布帘1-关闭",className:"qjcl4_bl1_close",isFlag: true,Independent: 0},
{equip_no:300,setNo:265,value:null,name:"客房4-窗帘-起居室纱帘1-开启",className:"qjcl4_sl1_open",isFlag: true,Independent: 0},
{equip_no:300,setNo:266,value:null,name:"客房4-窗帘-起居室纱帘1-停止",className:"qjcl4_sl1_stop",isFlag: true,Independent: 0},
{equip_no:300,setNo:267,value:null,name:"客房4-窗帘-起居室纱帘1-关闭",className:"qjcl4_sl1_close",isFlag: true,Independent: 0},
{equip_no:300,setNo:268,value:null,name:"客房4-窗帘-起居室布帘2-开启",className:"qjcl4_bl2_open",isFlag: true,Independent: 0},
{equip_no:300,setNo:269,value:null,name:"客房4-窗帘-起居室布帘2-停止",className:"qjcl4_bl2_stop",isFlag: true,Independent: 0},
{equip_no:300,setNo:270,value:null,name:"客房4-窗帘-起居室布帘2-关闭",className:"qjcl4_bl2_close",isFlag: true,Independent: 0},
{equip_no:300,setNo:271,value:null,name:"客房4-窗帘-起居室纱帘2-开启",className:"qjcl4_sl2_open",isFlag: true,Independent: 0},
{equip_no:300,setNo:272,value:null,name:"客房4-窗帘-起居室纱帘2-停止",className:"qjcl4_sl2_stop",isFlag: true,Independent: 0},
{equip_no:300,setNo:273,value:null,name:"客房4-窗帘-起居室纱帘2-关闭",className:"qjcl4_sl2_close",isFlag: true,Independent: 0},

{equip_no:300,setNo:274,value:null,name:"客房4-卧室空调-电源-开启",className:"kt4_open",isFlag: false,Independent: 0},
{equip_no:300,setNo:275,value:null,name:"客房4-卧室空调-电源-关闭",className:"kt4_close",isFlag: false,Independent: 0},
{equip_no:300,setNo:276,value:null,name:"客房4-卧室空调-风速-自动",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:277,value:null,name:"客房4-卧室空调-风速-低速",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:278,value:null,name:"客房4-卧室空调-风速-中速",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:279,value:null,name:"客房4-卧室空调-风速-高速",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:280,value:null,name:"客房4-卧室空调-模式-制冷",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:281,value:null,name:"客房4-卧室空调-模式-制热",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:282,value:null,name:"客房4-卧室空调-模式-送风",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:283,value:null,name:"客房4-卧室空调-模式-抽湿",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:284,value:null,name:"客房4-卧室空调-温度-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:null,setNo:null,value:null,name:"空调温度增大",className:"kt4_yl_zj",isFlag: true,Independent: 0},
{equip_no:null,setNo:null,value:null,name:"空调温度减小",className:"kt4_yl_jx",isFlag: true,Independent: 0},
{equip_no:null,setNo:null,value:null,name:"空调风速调整",className:"kt4_fs_td",isFlag: true,Independent: 0},
{equip_no:null,setNo:null,value:null,name:"空调模式切换",className:"kt4_ms_qh",isFlag: true,Independent: 0},

{equip_no:300,setNo:285,value:null,name:"客房4-起居室空调-电源-开启",className:"qjkt4_open",isFlag: false,Independent: 0},
{equip_no:300,setNo:286,value:null,name:"客房4-起居室空调-电源-关闭",className:"qjkt4_close",isFlag: false,Independent: 0},
{equip_no:300,setNo:287,value:null,name:"客房4-起居室空调-风速-自动",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:288,value:null,name:"客房4-起居室空调-风速-低速",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:289,value:null,name:"客房4-起居室空调-风速-中速",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:290,value:null,name:"客房4-起居室空调-风速-高速",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:291,value:null,name:"客房4-起居室空调-模式-制冷",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:292,value:null,name:"客房4-起居室空调-模式-制热",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:293,value:null,name:"客房4-起居室空调-模式-送风",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:294,value:null,name:"客房4-起居室空调-模式-抽湿",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:295,value:null,name:"客房4-起居室空调-温度-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:null,setNo:null,value:null,name:"空调温度增大",className:"qjkt4_yl_zj",isFlag: true,Independent: 0},
{equip_no:null,setNo:null,value:null,name:"空调温度减小",className:"qjkt4_yl_jx",isFlag: true,Independent: 0},
{equip_no:null,setNo:null,value:null,name:"空调风速调整",className:"qjkt4_fs_td",isFlag: true,Independent: 0},
{equip_no:null,setNo:null,value:null,name:"空调模式切换",className:"qjkt4_ms_qh",isFlag: true,Independent: 0},

{equip_no:300,setNo:296,value:null,name:"客房4-卫生间音乐-电源-开启",className:"yy4_play",isFlag: false,Independent: 0},
{equip_no:300,setNo:297,value:null,name:"客房4-卫生间音乐-电源-关闭",className:"yy4_stop",isFlag: false,Independent: 0},
{equip_no:300,setNo:298,value:null,name:"客房4-卫生间音乐-状态设置-播放",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:299,value:null,name:"客房4-卫生间音乐-状态设置-暂停",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:300,value:null,name:"客房4-卫生间音乐-音源选择-USB",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:301,value:null,name:"客房4-卫生间音乐-音源选择-AUX",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:302,value:null,name:"客房4-卫生间音乐-播放模式设置-单曲循环",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:303,value:null,name:"客房4-卫生间音乐-播放模式设置-列表播放",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:304,value:null,name:"客房4-卫生间音乐-播放模式设置-随机播放",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:305,value:null,name:"客房4-卫生间音乐-音量-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:369,value:null,name:"上一曲",className:"yy4_prev",isFlag: true,Independent: 0},
{equip_no:300,setNo:370,value:null,name:"下一曲",className:"yy4_next",isFlag: true,Independent: 0},
{equip_no:null,setNo:null,value:null,name:"音量减小",className:"yy4_yljx",isFlag: true,Independent: 0},
{equip_no:null,setNo:null,value:null,name:"音量增大",className:"yy4_ylzd",isFlag: true,Independent: 0},

// 客房5
{equip_no:300,setNo:306,value:null,name:"客房5-照明回路-卫生间防雾灯-开启",className:"wsj5_light_open",isFlag: false,Independent: 0},
{equip_no:300,setNo:307,value:null,name:"客房5-照明回路-卫生间防雾灯-关闭",className:"wsj5_light_close",isFlag: false,Independent: 0},

{equip_no:300,setNo:308,value:null,name:"客房5-调光回路-窗帘灯带-",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:309,value:null,name:"客房5-调光回路-小夜灯-",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:310,value:null,name:"客房5-调光回路-沙发筒灯-",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:311,value:null,name:"客房5-调光回路-床头筒灯-",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:312,value:null,name:"客房5-调光回路-灯带-",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:313,value:null,name:"客房5-调光回路-门口筒灯-",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:314,value:null,name:"客房5-调光回路-卫生间窗帘灯带-",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:315,value:null,name:"客房5-调光回路-卫生间灯带-",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:316,value:null,name:"客房5-调光回路-卫生间筒灯-",className:"",isFlag: false,Independent: 0},

{equip_no:300,setNo:317,value:null,name:"客房5-卧室场景-全开模式-设置",className:"ws5_scene_allopen",isFlag: false,Independent: 1},
{equip_no:300,setNo:318,value:null,name:"客房5-卧室场景-全关模式-设置",className:"ws5_scene_allclose",isFlag: false,Independent: 1},
{equip_no:300,setNo:319,value:null,name:"客房5-卧室场景-迎宾模式-设置",className:"ws5_scene_wel",isFlag: false,Independent: 1},
{equip_no:300,setNo:320,value:null,name:"客房5-卧室场景-明亮模式-设置",className:"ws5_scene_ml",isFlag: false,Independent: 1},
{equip_no:300,setNo:321,value:null,name:"客房5-卧室场景-柔和模式-设置",className:"ws5_scene_rh",isFlag: false,Independent: 1},
{equip_no:300,setNo:322,value:null,name:"客房5-卧室场景-休闲模式-设置",className:"ws5_scene_xx",isFlag: false,Independent: 1},
{equip_no:300,setNo:323,value:null,name:"客房5-卧室场景-睡眠模式-设置",className:"ws5_scene_sm",isFlag: false,Independent: 1},
{equip_no:300,setNo:324,value:null,name:"客房5-卧室场景-夜起模式-设置",className:"ws5_scene_yq",isFlag: false,Independent: 1},
{equip_no:300,setNo:325,value:null,name:"客房5-卧室场景-晨起模式-设置",className:"ws5_scene_cq",isFlag: false,Independent: 1},
{equip_no:300,setNo:326,value:null,name:"客房5-卧室场景-阅读模式-设置",className:"ws5_scene_yd",isFlag: false,Independent: 1},

{equip_no:300,setNo:327,value:null,name:"客房5-卫生间场景-卫生间全开-设置",className:"ys5_scene_allopen",isFlag: false,Independent: 1},
{equip_no:300,setNo:328,value:null,name:"客房5-卫生间场景-卫生间全关-设置",className:"ys5_scene_allclose",isFlag: false,Independent: 1},
{equip_no:300,setNo:329,value:null,name:"客房5-卫生间场景-明亮模式-设置",className:"ys5_scene_ml",isFlag: false,Independent: 1},
{equip_no:300,setNo:330,value:null,name:"客房5-卫生间场景-柔和模式-设置",className:"ys5_scene_rh",isFlag: false,Independent: 1},
{equip_no:300,setNo:331,value:null,name:"客房5-卫生间场景-淋浴模式-设置",className:"ys5_scene_ly",isFlag: false,Independent: 1},
{equip_no:300,setNo:332,value:null,name:"客房5-卫生间场景-音乐模式-设置",className:"ys5_scene_yy",isFlag: false,Independent: 1},

{equip_no:300,setNo:333,value:null,name:"客房5-窗帘-卧室布帘-开启",className:"cl5_bl1_open",isFlag: true,Independent: 0},
{equip_no:300,setNo:334,value:null,name:"客房5-窗帘-卧室布帘-停止",className:"cl5_bl1_stop",isFlag: true,Independent: 0},
{equip_no:300,setNo:335,value:null,name:"客房5-窗帘-卧室布帘-关闭",className:"cl5_bl1_close",isFlag: true,Independent: 0},
{equip_no:300,setNo:336,value:null,name:"客房5-窗帘-卧室纱帘-开启",className:"cl5_sl1_open",isFlag: true,Independent: 0},
{equip_no:300,setNo:337,value:null,name:"客房5-窗帘-卧室纱帘-停止",className:"cl5_sl1_stop",isFlag: true,Independent: 0},
{equip_no:300,setNo:338,value:null,name:"客房5-窗帘-卧室纱帘-关闭",className:"cl5_sl1_close",isFlag: true,Independent: 0},
{equip_no:300,setNo:339,value:null,name:"客房5-窗帘-卫间卷帘-开启",className:"cl5_wj1_open",isFlag: true,Independent: 0},
{equip_no:300,setNo:340,value:null,name:"客房5-窗帘-卫间卷帘-停止",className:"cl5_wj1_stop",isFlag: true,Independent: 0},
{equip_no:300,setNo:341,value:null,name:"客房5-窗帘-卫间卷帘-关闭",className:"cl5_wj1_close",isFlag: true,Independent: 0},

{equip_no:300,setNo:342,value:null,name:"客房5-卧室空调-电源-开启",className:"kt5_open",isFlag: false,Independent: 0},
{equip_no:300,setNo:343,value:null,name:"客房5-卧室空调-电源-关闭",className:"kt5_close",isFlag: false,Independent: 0},
{equip_no:300,setNo:344,value:null,name:"客房5-卧室空调-风速-自动",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:345,value:null,name:"客房5-卧室空调-风速-低速",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:346,value:null,name:"客房5-卧室空调-风速-中速",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:347,value:null,name:"客房5-卧室空调-风速-高速",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:348,value:null,name:"客房5-卧室空调-模式-制冷",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:349,value:null,name:"客房5-卧室空调-模式-制热",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:350,value:null,name:"客房5-卧室空调-模式-送风",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:351,value:null,name:"客房5-卧室空调-模式-抽湿",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:352,value:null,name:"客房5-卧室空调-温度-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:null,setNo:null,value:null,name:"空调温度增大",className:"kt5_yl_zj",isFlag: true,Independent: 0},
{equip_no:null,setNo:null,value:null,name:"空调温度减小",className:"kt5_yl_jx",isFlag: true,Independent: 0},
{equip_no:null,setNo:null,value:null,name:"空调风速调整",className:"kt5_fs_td",isFlag: true,Independent: 0},
{equip_no:null,setNo:null,value:null,name:"空调模式切换",className:"kt5_ms_qh",isFlag: true,Independent: 0},

{equip_no:300,setNo:353,value:null,name:"客房5-卫生间音乐-电源-开启",className:"yy5_play",isFlag: false,Independent: 0},
{equip_no:300,setNo:354,value:null,name:"客房5-卫生间音乐-电源-关闭",className:"yy5_stop",isFlag: false,Independent: 0},
{equip_no:300,setNo:355,value:null,name:"客房5-卫生间音乐-状态设置-播放",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:356,value:null,name:"客房5-卫生间音乐-状态设置-暂停",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:357,value:null,name:"客房5-卫生间音乐-音源选择-USB",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:358,value:null,name:"客房5-卫生间音乐-音源选择-AUX",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:359,value:null,name:"客房5-卫生间音乐-播放模式设置-单曲循环",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:360,value:null,name:"客房5-卫生间音乐-播放模式设置-列表播放",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:361,value:null,name:"客房5-卫生间音乐-播放模式设置-随机播放",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:362,value:null,name:"客房5-卫生间音乐-音量-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:371,value:null,name:"上一曲",className:"yy5_prev",isFlag: true,Independent: 0},
{equip_no:300,setNo:372,value:null,name:"下一曲",className:"yy5_next",isFlag: true,Independent: 0},
{equip_no:null,setNo:null,value:null,name:"音量减小",className:"yy5_yljx",isFlag: true,Independent: 0},
{equip_no:null,setNo:null,value:null,name:"音量增大",className:"yy5_ylzd",isFlag: true,Independent: 0},
    ];

