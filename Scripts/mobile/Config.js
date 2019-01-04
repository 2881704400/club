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
{equip_no:300,setNo:1,yx_no: 1,value:null,name:"客房1-照明回路-卫生间防雾灯-开启",className:"wsj1_light_open",isFlag: false,Independent: 0},
{equip_no:300,setNo:2,yx_no: null,value:null,name:"客房1-照明回路-卫生间防雾灯-关闭",className:"wsj1_light_close",isFlag: false,Independent: 0},

{equip_no:300,setNo:3,yx_no: null,value:null,name:"客房1-调光回路-卧室门头灯-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:4,yx_no: null,value:null,name:"客房1-调光回路-卧室玄关灯-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:5,yx_no: null,value:null,name:"客房1-调光回路-卧室天花灯-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:6,yx_no: null,value:null,name:"客房1-调光回路-卧室床头左筒灯-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:7,yx_no: null,value:null,name:"客房1-调光回路-卧室床头右筒灯-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:8,yx_no: null,value:null,name:"客房1-调光回路-卧室小夜灯-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:9,yx_no: null,value:null,name:"客房1-调光回路-卧室灯带-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:10,yx_no: null,value:null,name:"客房1-调光回路-卧室窗帘灯带-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:11,yx_no: null,value:null,name:"客房1-调光回路-卫生间淋浴灯-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:12,yx_no: null,value:null,name:"客房1-调光回路-衣帽间灯-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:13,yx_no: null,value:null,name:"客房1-调光回路-卫生间灯带-设定值",className:"",isFlag: false,Independent: 0},

{equip_no:300,setNo:14,yx_no: 2,value:null,name:"客房1-卧室场景-全开模式-设置",className:"ws1_scene_allopen",isFlag: false,Independent: 1},
{equip_no:300,setNo:15,yx_no: 3,value:null,name:"客房1-卧室场景-全关模式-设置",className:"ws1_scene_allclose",isFlag: false,Independent: 1},
{equip_no:300,setNo:16,yx_no: 4,value:null,name:"客房1-卧室场景-迎宾模式-设置",className:"ws1_scene_wel",isFlag: false,Independent: 1},
{equip_no:300,setNo:17,yx_no: 5,value:null,name:"客房1-卧室场景-明亮模式-设置",className:"ws1_scene_ml",isFlag: false,Independent: 1},
{equip_no:300,setNo:18,yx_no: 6,value:null,name:"客房1-卧室场景-柔和模式-设置",className:"ws1_scene_rh",isFlag: false,Independent: 1},
{equip_no:300,setNo:19,yx_no: 7,value:null,name:"客房1-卧室场景-休闲模式-设置",className:"ws1_scene_xx",isFlag: false,Independent: 1},
{equip_no:300,setNo:20,yx_no: 8,value:null,name:"客房1-卧室场景-睡眠模式-设置",className:"ws1_scene_sm",isFlag: false,Independent: 1},
{equip_no:300,setNo:21,yx_no: 9,value:null,name:"客房1-卧室场景-夜起模式-设置",className:"ws1_scene_yq",isFlag: false,Independent: 1},
{equip_no:300,setNo:22,yx_no: 10,value:null,name:"客房1-卧室场景-晨起模式-设置",className:"ws1_scene_cq",isFlag: false,Independent: 1},
{equip_no:300,setNo:23,yx_no: 11,value:null,name:"客房1-卧室场景-阅读模式-设置",className:"ws1_scene_yd",isFlag: false,Independent: 1},

{equip_no:300,setNo:24,yx_no: 12,value:null,name:"客房1-卫生间场景-卫生间全开-设置",className:"ys1_scene_allopen",isFlag: false,Independent: 1},
{equip_no:300,setNo:25,yx_no: 13,value:null,name:"客房1-卫生间场景-卫生间全关-设置",className:"ys1_scene_allclose",isFlag: false,Independent: 1},
{equip_no:300,setNo:26,yx_no: 14,value:null,name:"客房1-卫生间场景-明亮模式-设置",className:"ys1_scene_ml",isFlag: false,Independent: 1},
{equip_no:300,setNo:27,yx_no: 15,value:null,name:"客房1-卫生间场景-柔和模式-设置",className:"ys1_scene_rh",isFlag: false,Independent: 1},
{equip_no:300,setNo:28,yx_no: 16,value:null,name:"客房1-卫生间场景-淋浴模式-设置",className:"ys1_scene_ly",isFlag: false,Independent: 1},
{equip_no:300,setNo:29,yx_no: 17,value:null,name:"客房1-卫生间场景-音乐模式-设置",className:"ys1_scene_yy",isFlag: false,Independent: 1},

{equip_no:300,setNo:30,yx_no: null,value:null,name:"客房1-窗帘-卧室布帘1-开启",className:"cl1_bl1_open",isFlag: true,Independent: 0},
{equip_no:300,setNo:31,yx_no: null,value:null,name:"客房1-窗帘-卧室布帘1-停止",className:"cl1_bl1_stop",isFlag: true,Independent: 0},
{equip_no:300,setNo:32,yx_no: null,value:null,name:"客房1-窗帘-卧室布帘1-关闭",className:"cl1_bl1_close",isFlag: true,Independent: 0},
{equip_no:300,setNo:33,yx_no: null,value:null,name:"客房1-窗帘-卧室纱帘1-开启",className:"cl1_sl1_open",isFlag: true,Independent: 0},
{equip_no:300,setNo:34,yx_no: null,value:null,name:"客房1-窗帘-卧室纱帘1-停止",className:"cl1_sl1_stop",isFlag: true,Independent: 0},
{equip_no:300,setNo:35,yx_no: null,value:null,name:"客房1-窗帘-卧室纱帘1-关闭",className:"cl1_sl1_close",isFlag: true,Independent: 0},
{equip_no:300,setNo:36,yx_no: null,value:null,name:"客房1-窗帘-卧室布帘2-开启",className:"cl1_bl2_open",isFlag: true,Independent: 0},
{equip_no:300,setNo:37,yx_no: null,value:null,name:"客房1-窗帘-卧室布帘2-停止",className:"cl1_bl2_stop",isFlag: true,Independent: 0},
{equip_no:300,setNo:38,yx_no: null,value:null,name:"客房1-窗帘-卧室布帘2-关闭",className:"cl1_bl2_close",isFlag: true,Independent: 0},
{equip_no:300,setNo:39,yx_no: null,value:null,name:"客房1-窗帘-卧室纱帘2-开启",className:"cl1_sl2_open",isFlag: true,Independent: 0},
{equip_no:300,setNo:40,yx_no: null,value:null,name:"客房1-窗帘-卧室纱帘2-停止",className:"cl1_sl2_stop",isFlag: true,Independent: 0},
{equip_no:300,setNo:41,yx_no: null,value:null,name:"客房1-窗帘-卧室纱帘2-关闭",className:"cl1_sl2_close",isFlag: true,Independent: 0},
{equip_no:300,setNo:42,yx_no: null,value:null,name:"客房1-窗帘-卫生间卷帘1-开启",className:"cl1_wj1_open",isFlag: true,Independent: 0},
{equip_no:300,setNo:43,yx_no: null,value:null,name:"客房1-窗帘-卫生间卷帘1-停止",className:"cl1_wj1_stop",isFlag: true,Independent: 0},
{equip_no:300,setNo:44,yx_no: null,value:null,name:"客房1-窗帘-卫生间卷帘1-关闭",className:"cl1_wj1_close",isFlag: true,Independent: 0},
{equip_no:300,setNo:45,yx_no: null,value:null,name:"客房1-窗帘-卫生间卷帘2-开启",className:"cl1_wj2_open",isFlag: true,Independent: 0},
{equip_no:300,setNo:46,yx_no: null,value:null,name:"客房1-窗帘-卫生间卷帘2-停止",className:"cl1_wj2_stop",isFlag: true,Independent: 0},
{equip_no:300,setNo:47,yx_no: null,value:null,name:"客房1-窗帘-卫生间卷帘2-关闭",className:"cl1_wj2_close",isFlag: true,Independent: 0},

{equip_no:300,setNo:48,yx_no: 18,value:null,name:"客房1-卧室空调-电源-开启",className:"kt1_open",isFlag: false,Independent: 0},
{equip_no:300,setNo:49,yx_no: null,value:null,name:"客房1-卧室空调-电源-关闭",className:"kt1_close",isFlag: false,Independent: 0},
{equip_no:300,setNo:50,yx_no: 19,value:null,name:"客房1-卧室空调-风速-自动",className:"kt1_01",isFlag: false,Independent: 0},
{equip_no:300,setNo:51,yx_no: 20,value:null,name:"客房1-卧室空调-风速-低速",className:"kt1_02",isFlag: false,Independent: 0},
{equip_no:300,setNo:52,yx_no: 21,value:null,name:"客房1-卧室空调-风速-中速",className:"kt1_03",isFlag: false,Independent: 0},
{equip_no:300,setNo:53,yx_no: 22,value:null,name:"客房1-卧室空调-风速-高速",className:"kt1_04",isFlag: false,Independent: 0},
{equip_no:300,setNo:54,yx_no: 23,value:null,name:"客房1-卧室空调-模式-制冷",className:"kt1_05",isFlag: false,Independent: 0},
{equip_no:300,setNo:55,yx_no: 24,value:null,name:"客房1-卧室空调-模式-制热",className:"kt1_06",isFlag: false,Independent: 0},
{equip_no:300,setNo:56,yx_no: 25,value:null,name:"客房1-卧室空调-模式-送风",className:"kt1_07",isFlag: false,Independent: 0},
{equip_no:300,setNo:57,yx_no: 26,value:null,name:"客房1-卧室空调-模式-抽湿",className:"kt1_08",isFlag: false,Independent: 0},
{equip_no:300,setNo:58,yx_no: null,value:null,name:"客房1-卧室空调-温度-设定值",className:"kt1_09",isFlag: false,Independent: 0},
{equip_no:null,setNo:null,yx_no: null,value:null,name:"空调温度增大",className:"kt1_yl_zj",isFlag: true,Independent: 0},
{equip_no:null,setNo:null,yx_no: null,value:null,name:"空调温度减小",className:"kt1_yl_jx",isFlag: true,Independent: 0},
{equip_no:null,setNo:null,yx_no: null,value:null,name:"空调风速调整",className:"kt1_fs_td",isFlag: true,Independent: 0},
{equip_no:null,setNo:null,yx_no: null,value:null,name:"空调模式切换",className:"kt1_ms_qh",isFlag: true,Independent: 0},

{equip_no:300,setNo:59,yx_no: 27,value:null,name:"客房1-卫生间音乐-电源-开启",className:"yy1_play",isFlag: false,Independent: 0},
{equip_no:300,setNo:60,yx_no: null,value:null,name:"客房1-卫生间音乐-电源-关闭",className:"yy1_stop",isFlag: false,Independent: 0},
{equip_no:300,setNo:61,yx_no: null,value:null,name:"客房1-卫生间音乐-状态设置-播放",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:62,yx_no: null,value:null,name:"客房1-卫生间音乐-状态设置-暂停",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:63,yx_no: null,value:null,name:"客房1-卫生间音乐-音源选择-USB",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:64,yx_no: null,value:null,name:"客房1-卫生间音乐-音源选择-AUX",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:65,yx_no: null,value:null,name:"客房1-卫生间音乐-播放模式设置-单曲循环",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:66,yx_no: null,value:null,name:"客房1-卫生间音乐-播放模式设置-列表播放",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:67,yx_no: null,value:null,name:"客房1-卫生间音乐-播放模式设置-随机播放",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:68,yx_no: null,value:null,name:"客房1-卫生间音乐-音量-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:363,yx_no: null,value:null,name:"上一曲",className:"yy1_prev",isFlag: true,Independent: 0},
{equip_no:300,setNo:364,yx_no: null,value:null,name:"下一曲",className:"yy1_next",isFlag: true,Independent: 0},
{equip_no:null,setNo:null,yx_no: null,value:null,name:"音量减小",className:"yy1_yljx",isFlag: true,Independent: 0},
{equip_no:null,setNo:null,yx_no: null,value:null,name:"音量增大",className:"yy1_ylzd",isFlag: true,Independent: 0},

// 客房2
{equip_no:300,setNo:69,yx_no: 35,value:null,name:"客房2-照明回路-卧室D9台灯-开启",className:"ws2_light_open",isFlag: false,Independent: 0},
{equip_no:300,setNo:70,yx_no: null,value:null,name:"客房2-照明回路-卧室D9台灯-关闭",className:"ws2_light_close",isFlag: false,Independent: 0},
{equip_no:300,setNo:71,yx_no: 36,value:null,name:"客房2-照明回路-防雾灯-开启",className:"ws2_light1_open",isFlag: false,Independent: 0},
{equip_no:300,setNo:72,yx_no: null,value:null,name:"客房2-照明回路-防雾灯-关闭",className:"ws2_light1_close",isFlag: false,Independent: 0},

{equip_no:300,setNo:73,yx_no: null,value:null,name:"客房2-调光回路-卧室灯带-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:74,yx_no: null,value:null,name:"客房2-调光回路-卧室床头右筒灯-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:75,yx_no: null,value:null,name:"客房2-调光回路-卧室天花筒灯-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:76,yx_no: null,value:null,name:"客房2-调光回路-卧室门口筒灯-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:77,yx_no: null,value:null,name:"客房2-调光回路-卧室灯带-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:78,yx_no: null,value:null,name:"客房2-调光回路-卧室床头左筒灯-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:79,yx_no: null,value:null,name:"客房2-调光回路-卧室小夜灯-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:80,yx_no: null,value:null,name:"客房2-调光回路-卫生间门口筒灯-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:81,yx_no: null,value:null,name:"客房2-调光回路-卫生间淋浴灯-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:82,yx_no: null,value:null,name:"客房2-调光回路-卫生间窗帘灯带-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:83,yx_no: null,value:null,name:"客房2-调光回路-卫生间淋浴灯-设定值",className:"",isFlag: false,Independent: 0},

{equip_no:300,setNo:84,yx_no: 37,value:null,name:"客房2-卧室场景-全开模式-设置",className:"ws2_scene_allopen",isFlag: false,Independent: 1},
{equip_no:300,setNo:85,yx_no: 38,value:null,name:"客房2-卧室场景-全关模式-设置",className:"ws2_scene_allclose",isFlag: false,Independent: 1},
{equip_no:300,setNo:86,yx_no: 39,value:null,name:"客房2-卧室场景-迎宾模式-设置",className:"ws2_scene_wel",isFlag: false,Independent: 1},
{equip_no:300,setNo:87,yx_no: 40,value:null,name:"客房2-卧室场景-明亮模式-设置",className:"ws2_scene_ml",isFlag: false,Independent: 1},
{equip_no:300,setNo:88,yx_no: 41,value:null,name:"客房2-卧室场景-柔和模式-设置",className:"ws2_scene_rh",isFlag: false,Independent: 1},
{equip_no:300,setNo:89,yx_no: 42,value:null,name:"客房2-卧室场景-休闲模式-设置",className:"ws2_scene_xx",isFlag: false,Independent: 1},
{equip_no:300,setNo:90,yx_no: 43,value:null,name:"客房2-卧室场景-睡眠模式-设置",className:"ws2_scene_sm",isFlag: false,Independent: 1},
{equip_no:300,setNo:91,yx_no: 44,value:null,name:"客房2-卧室场景-夜起模式-设置",className:"ws2_scene_yq",isFlag: false,Independent: 1},
{equip_no:300,setNo:92,yx_no: 45,value:null,name:"客房2-卧室场景-晨起模式-设置",className:"ws2_scene_cq",isFlag: false,Independent: 1},
{equip_no:300,setNo:93,yx_no: 46,value:null,name:"客房2-卧室场景-阅读模式-设置",className:"ws2_scene_yd",isFlag: false,Independent: 1},

{equip_no:300,setNo:94,yx_no: 47,value:null,name:"客房2-卫生间场景-卫生间全开-设置",className:"ys2_scene_allopen",isFlag: false,Independent: 1},
{equip_no:300,setNo:95,yx_no: 48,value:null,name:"客房2-卫生间场景-卫生间全关-设置",className:"ys2_scene_allclose",isFlag: false,Independent: 1},
{equip_no:300,setNo:96,yx_no: 49,value:null,name:"客房2-卫生间场景-明亮模式-设置",className:"ys2_scene_ml",isFlag: false,Independent: 1},
{equip_no:300,setNo:97,yx_no: 50,value:null,name:"客房2-卫生间场景-柔和模式-设置",className:"ys2_scene_rh",isFlag: false,Independent: 1},
{equip_no:300,setNo:98,yx_no: 51,value:null,name:"客房2-卫生间场景-淋浴模式-设置",className:"ys2_scene_ly",isFlag: false,Independent: 1},
{equip_no:300,setNo:99,yx_no: 52,value:null,name:"客房2-卫生间场景-音乐模式-设置",className:"ys2_scene_yy",isFlag: false,Independent: 1},

{equip_no:300,setNo:100,yx_no: null,value:null,name:"客房2-窗帘-卧室布帘-开启",className:"cl2_bl1_open",isFlag: true,Independent: 0},
{equip_no:300,setNo:101,yx_no: null,value:null,name:"客房2-窗帘-卧室布帘-停止",className:"cl2_bl1_stop",isFlag: true,Independent: 0},
{equip_no:300,setNo:102,yx_no: null,value:null,name:"客房2-窗帘-卧室布帘-关闭",className:"cl2_bl1_close",isFlag: true,Independent: 0},
{equip_no:300,setNo:103,yx_no: null,value:null,name:"客房2-窗帘-卧室纱帘-开启",className:"cl2_sl1_open",isFlag: true,Independent: 0},
{equip_no:300,setNo:104,yx_no: null,value:null,name:"客房2-窗帘-卧室纱帘-停止",className:"cl2_sl1_stop",isFlag: true,Independent: 0},
{equip_no:300,setNo:105,yx_no: null,value:null,name:"客房2-窗帘-卧室纱帘-关闭",className:"cl2_sl1_close",isFlag: true,Independent: 0},
{equip_no:300,setNo:106,yx_no: null,value:null,name:"客房2-窗帘-卫间卷帘-开启",className:"cl2_wj1_open",isFlag: true,Independent: 0},
{equip_no:300,setNo:107,yx_no: null,value:null,name:"客房2-窗帘-卫间卷帘-停止",className:"cl2_wj1_stop",isFlag: true,Independent: 0},
{equip_no:300,setNo:108,yx_no: null,value:null,name:"客房2-窗帘-卫间卷帘-关闭",className:"cl2_wj1_close",isFlag: true,Independent: 0},

{equip_no:300,setNo:109,yx_no: 53,value:null,name:"客房2-卧室空调-电源-开启",className:"kt2_open",isFlag: false,Independent: 0},
{equip_no:300,setNo:110,yx_no: null,value:null,name:"客房2-卧室空调-电源-关闭",className:"kt2_close",isFlag: false,Independent: 0},
{equip_no:300,setNo:111,yx_no: 54,value:null,name:"客房2-卧室空调-风速-自动",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:112,yx_no: 55,value:null,name:"客房2-卧室空调-风速-低速",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:113,yx_no: 56,value:null,name:"客房2-卧室空调-风速-中速",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:114,yx_no: 57,value:null,name:"客房2-卧室空调-风速-高速",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:115,yx_no: 58,value:null,name:"客房2-卧室空调-模式-制冷",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:116,yx_no: 59,value:null,name:"客房2-卧室空调-模式-制热",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:117,yx_no: 60,value:null,name:"客房2-卧室空调-模式-送风",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:118,yx_no: 61,value:null,name:"客房2-卧室空调-模式-抽湿",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:119,yx_no: null,value:null,name:"客房2-卧室空调-温度-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:null,setNo:null,yx_no: null,value:null,name:"空调温度增大",className:"kt2_yl_zj",isFlag: true,Independent: 0},
{equip_no:null,setNo:null,yx_no: null,value:null,name:"空调温度减小",className:"kt2_yl_jx",isFlag: true,Independent: 0},
{equip_no:null,setNo:null,yx_no: null,value:null,name:"空调风速调整",className:"kt2_fs_td",isFlag: true,Independent: 0},
{equip_no:null,setNo:null,yx_no: null,value:null,name:"空调模式切换",className:"kt2_ms_qh",isFlag: true,Independent: 0},

{equip_no:300,setNo:120,yx_no: 62,value:null,name:"客房2-卫生间音乐-电源-开启",className:"yy2_play",isFlag: false,Independent: 0},
{equip_no:300,setNo:121,yx_no: null,value:null,name:"客房2-卫生间音乐-电源-关闭",className:"yy2_stop",isFlag: false,Independent: 0},
{equip_no:300,setNo:122,yx_no: null,value:null,name:"客房2-卫生间音乐-状态设置-播放",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:123,yx_no: null,value:null,name:"客房2-卫生间音乐-状态设置-暂停",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:124,yx_no: null,value:null,name:"客房2-卫生间音乐-音源选择-USB",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:125,yx_no: null,value:null,name:"客房2-卫生间音乐-音源选择-AUX",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:126,yx_no: null,value:null,name:"客房2-卫生间音乐-播放模式设置-单曲循环",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:127,yx_no: null,value:null,name:"客房2-卫生间音乐-播放模式设置-列表播放",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:128,yx_no: null,value:null,name:"客房2-卫生间音乐-播放模式设置-随机播放",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:129,yx_no: null,value:null,name:"客房2-卫生间音乐-音量-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:365,yx_no: null,value:null,name:"上一曲",className:"yy2_prev",isFlag: true,Independent: 0},
{equip_no:300,setNo:366,yx_no: null,value:null,name:"下一曲",className:"yy2_next",isFlag: true,Independent: 0},
{equip_no:null,setNo:null,yx_no: null,value:null,name:"音量减小",className:"yy2_yljx",isFlag: true,Independent: 0},
{equip_no:null,setNo:null,yx_no: null,value:null,name:"音量增大",className:"yy2_ylzd",isFlag: true,Independent: 0},

// 客房3
{equip_no:300,setNo:130,yx_no: 70,value:null,name:"客房3-照明回路-卧室D9台灯-开启",className:"ws3_light_open",isFlag: false,Independent: 0},
{equip_no:300,setNo:131,yx_no: null,value:null,name:"客房3-照明回路-卧室D9台灯-关闭",className:"ws3_light_close",isFlag: false,Independent: 0},
{equip_no:300,setNo:132,yx_no: 71,value:null,name:"客房3-照明回路-防雾灯-开启",className:"ws3_light1_open",isFlag: false,Independent: 0},
{equip_no:300,setNo:133,yx_no: null,value:null,name:"客房3-照明回路-防雾灯-关闭",className:"ws3_light1_close",isFlag: false,Independent: 0},

{equip_no:300,setNo:134,yx_no: null,value:null,name:"客房3-调光回路-卧室床头左筒灯-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:135,yx_no: null,value:null,name:"客房3-调光回路-卧室床头右筒灯-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:136,yx_no: null,value:null,name:"客房3-调光回路-卧室天花筒灯-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:137,yx_no: null,value:null,name:"客房3-调光回路-卧室窗帘灯带-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:138,yx_no: null,value:null,name:"客房3-调光回路-卧室小夜灯-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:139,yx_no: null,value:null,name:"客房3-调光回路-卧室门口筒灯-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:140,yx_no: null,value:null,name:"客房3-调光回路-卧室灯带-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:141,yx_no: null,value:null,name:"客房3-调光回路-卫生间天花筒灯-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:142,yx_no: null,value:null,name:"客房3-调光回路-卫生间淋浴灯-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:143,yx_no: null,value:null,name:"客房3-调光回路-卫生间窗帘灯带-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:144,yx_no: null,value:null,name:"客房3-调光回路-卫生间天花灯带-设定值",className:"",isFlag: false,Independent: 0},

{equip_no:300,setNo:145,yx_no: 72,value:null,name:"客房3-卧室场景-全开模式-设置",className:"ws3_scene_allopen",isFlag: false,Independent: 1},
{equip_no:300,setNo:146,yx_no: 73,value:null,name:"客房3-卧室场景-全关模式-设置",className:"ws3_scene_allclose",isFlag: false,Independent: 1},
{equip_no:300,setNo:147,yx_no: 74,value:null,name:"客房3-卧室场景-迎宾模式-设置",className:"ws3_scene_wel",isFlag: false,Independent: 1},
{equip_no:300,setNo:148,yx_no: 75,value:null,name:"客房3-卧室场景-明亮模式-设置",className:"ws3_scene_ml",isFlag: false,Independent: 1},
{equip_no:300,setNo:149,yx_no: 76,value:null,name:"客房3-卧室场景-柔和模式-设置",className:"ws3_scene_rh",isFlag: false,Independent: 1},
{equip_no:300,setNo:150,yx_no: 77,value:null,name:"客房3-卧室场景-休闲模式-设置",className:"ws3_scene_xx",isFlag: false,Independent: 1},
{equip_no:300,setNo:151,yx_no: 78,value:null,name:"客房3-卧室场景-睡眠模式-设置",className:"ws3_scene_sm",isFlag: false,Independent: 1},
{equip_no:300,setNo:152,yx_no: 79,value:null,name:"客房3-卧室场景-夜起模式-设置",className:"ws3_scene_yq",isFlag: false,Independent: 1},
{equip_no:300,setNo:153,yx_no: 80,value:null,name:"客房3-卧室场景-晨起模式-设置",className:"ws3_scene_cq",isFlag: false,Independent: 1},
{equip_no:300,setNo:154,yx_no: 81,value:null,name:"客房3-卧室场景-阅读模式-设置",className:"ws3_scene_yd",isFlag: false,Independent: 1},

{equip_no:300,setNo:155,yx_no: 82,value:null,name:"客房3-卫生间场景-卫生间全开-设置",className:"ys3_scene_allopen",isFlag: false,Independent: 1},
{equip_no:300,setNo:156,yx_no: 83,value:null,name:"客房3-卫生间场景-卫生间全关-设置",className:"ys3_scene_allclose",isFlag: false,Independent: 1},
{equip_no:300,setNo:157,yx_no: 84,value:null,name:"客房3-卫生间场景-明亮模式-设置",className:"ys3_scene_ml",isFlag: false,Independent: 1},
{equip_no:300,setNo:158,yx_no: 85,value:null,name:"客房3-卫生间场景-柔和模式-设置",className:"ys3_scene_rh",isFlag: false,Independent: 1},
{equip_no:300,setNo:159,yx_no: 86,value:null,name:"客房3-卫生间场景-淋浴模式-设置",className:"ys3_scene_ly",isFlag: false,Independent: 1},
{equip_no:300,setNo:160,yx_no: 87,value:null,name:"客房3-卫生间场景-音乐模式-设置",className:"ys3_scene_yy",isFlag: false,Independent: 1},

{equip_no:300,setNo:161,yx_no: null,value:null,name:"客房3-窗帘-卧室布帘-开启",className:"cl3_bl1_open",isFlag: true,Independent: 0},
{equip_no:300,setNo:162,yx_no: null,value:null,name:"客房3-窗帘-卧室布帘-停止",className:"cl3_bl1_stop",isFlag: true,Independent: 0},
{equip_no:300,setNo:163,yx_no: null,value:null,name:"客房3-窗帘-卧室布帘-关闭",className:"cl3_bl1_close",isFlag: true,Independent: 0},
{equip_no:300,setNo:164,yx_no: null,value:null,name:"客房3-窗帘-卧室纱帘-开启",className:"cl3_sl1_open",isFlag: true,Independent: 0},
{equip_no:300,setNo:165,yx_no: null,value:null,name:"客房3-窗帘-卧室纱帘-停止",className:"cl3_sl1_stop",isFlag: true,Independent: 0},
{equip_no:300,setNo:166,yx_no: null,value:null,name:"客房3-窗帘-卧室纱帘-关闭",className:"cl3_sl1_close",isFlag: true,Independent: 0},
{equip_no:300,setNo:167,yx_no: null,value:null,name:"客房3-窗帘-卫生间卷帘1-开启",className:"cl3_wj1_open",isFlag: true,Independent: 0},
{equip_no:300,setNo:168,yx_no: null,value:null,name:"客房3-窗帘-卫生间卷帘1-停止",className:"cl3_wj1_stop",isFlag: true,Independent: 0},
{equip_no:300,setNo:169,yx_no: null,value:null,name:"客房3-窗帘-卫生间卷帘1-关闭",className:"cl3_wj1_close",isFlag: true,Independent: 0},
{equip_no:300,setNo:170,yx_no: null,value:null,name:"客房3-窗帘-卫生间卷帘2-开启",className:"cl3_wj2_open",isFlag: true,Independent: 0},
{equip_no:300,setNo:171,yx_no: null,value:null,name:"客房3-窗帘-卫生间卷帘2-停止",className:"cl3_wj2_stop",isFlag: true,Independent: 0},
{equip_no:300,setNo:172,yx_no: null,value:null,name:"客房3-窗帘-卫生间卷帘2-关闭",className:"cl3_wj2_close",isFlag: true,Independent: 0},

{equip_no:300,setNo:173,yx_no: 88,value:null,name:"客房3-卧室空调-电源-开启",className:"kt3_open",isFlag: false,Independent: 0},
{equip_no:300,setNo:174,yx_no: null,value:null,name:"客房3-卧室空调-电源-关闭",className:"kt3_close",isFlag: false,Independent: 0},
{equip_no:300,setNo:175,yx_no: 89,value:null,name:"客房3-卧室空调-风速-自动",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:176,yx_no: 90,value:null,name:"客房3-卧室空调-风速-低速",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:177,yx_no: 91,value:null,name:"客房3-卧室空调-风速-中速",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:178,yx_no: 92,value:null,name:"客房3-卧室空调-风速-高速",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:179,yx_no: 93,value:null,name:"客房3-卧室空调-模式-制冷",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:180,yx_no: 94,value:null,name:"客房3-卧室空调-模式-制热",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:181,yx_no: 95,value:null,name:"客房3-卧室空调-模式-送风",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:182,yx_no: 96,value:null,name:"客房3-卧室空调-模式-抽湿",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:183,yx_no: null,value:null,name:"客房3-卧室空调-温度-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:null,setNo:null,yx_no: null,value:null,name:"空调温度增大",className:"kt3_yl_zj",isFlag: true,Independent: 0},
{equip_no:null,setNo:null,yx_no: null,value:null,name:"空调温度减小",className:"kt3_yl_jx",isFlag: true,Independent: 0},
{equip_no:null,setNo:null,yx_no: null,value:null,name:"空调风速调整",className:"kt3_fs_td",isFlag: true,Independent: 0},
{equip_no:null,setNo:null,yx_no: null,value:null,name:"空调模式切换",className:"kt3_ms_qh",isFlag: true,Independent: 0},

{equip_no:300,setNo:184,yx_no: 97,value:null,name:"客房3-卫生间音乐-电源-开启",className:"yy3_play",isFlag: false,Independent: 0},
{equip_no:300,setNo:185,yx_no: null,value:null,name:"客房3-卫生间音乐-电源-关闭",className:"yy3_stop",isFlag: false,Independent: 0},
{equip_no:300,setNo:186,yx_no: null,value:null,name:"客房3-卫生间音乐-状态设置-播放",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:187,yx_no: null,value:null,name:"客房3-卫生间音乐-状态设置-暂停",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:188,yx_no: null,value:null,name:"客房3-卫生间音乐-音源选择-USB",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:189,yx_no: null,value:null,name:"客房3-卫生间音乐-音源选择-AUX",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:190,yx_no: null,value:null,name:"客房3-卫生间音乐-播放模式设置-单曲循环",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:191,yx_no: null,value:null,name:"客房3-卫生间音乐-播放模式设置-列表播放",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:192,yx_no: null,value:null,name:"客房3-卫生间音乐-播放模式设置-随机播放",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:193,yx_no: null,value:null,name:"客房3-卫生间音乐-音量-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:367,yx_no: null,value:null,name:"上一曲",className:"yy3_prev",isFlag: true,Independent: 0},
{equip_no:300,setNo:368,yx_no: null,value:null,name:"下一曲",className:"yy3_next",isFlag: true,Independent: 0},
{equip_no:null,setNo:null,yx_no: null,value:null,name:"音量减小",className:"yy3_yljx",isFlag: true,Independent: 0},
{equip_no:null,setNo:null,yx_no: null,value:null,name:"音量增大",className:"yy3_ylzd",isFlag: true,Independent: 0},

// 客房4
{equip_no:300,setNo:194,yx_no: 105,value:null,name:"客房4-照明回路-卧室台灯-开启",className:"ws4_light_open",isFlag: false,Independent: 0},
{equip_no:300,setNo:195,yx_no: null,value:null,name:"客房4-照明回路-卧室台灯-关闭",className:"ws4_light_close",isFlag: false,Independent: 0},
{equip_no:300,setNo:196,yx_no: 106,value:null,name:"客房4-照明回路-起居室台灯-开启",className:"qjtd4_light_open",isFlag: false,Independent: 0},
{equip_no:300,setNo:197,yx_no: null,value:null,name:"客房4-照明回路-起居室台灯-关闭",className:"qjtd4_light_close",isFlag: false,Independent: 0},
{equip_no:300,setNo:198,yx_no: 107,value:null,name:"客房4-照明回路-起居室卫生间防雾灯-开启",className:"qjfw4_light_open",isFlag: false,Independent: 0},
{equip_no:300,setNo:199,yx_no: null,value:null,name:"客房4-照明回路-起居室卫生间防雾灯-关闭",className:"qjfw4_light_close",isFlag: false,Independent: 0},

{equip_no:300,setNo:200,yx_no: null,value:null,name:"客房4-调光回路-卧室门口筒灯-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:201,yx_no: null,value:null,name:"客房4-调光回路-卧室衣帽间灯-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:202,yx_no: null,value:null,name:"客房4-调光回路-卧室床头左筒灯-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:203,yx_no: null,value:null,name:"客房4-调光回路-卧室床头右筒灯-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:204,yx_no: null,value:null,name:"客房4-调光回路-卧室窗帘灯带-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:205,yx_no: null,value:null,name:"客房4-调光回路-卫生间门口筒灯-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:206,yx_no: null,value:null,name:"客房4-调光回路-卫生间天花筒灯-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:207,yx_no: null,value:null,name:"客房4-调光回路-卫生间天花灯带-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:208,yx_no: null,value:null,name:"客房4-调光回路-卫生间窗帘灯带-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:209,yx_no: null,value:null,name:"客房4-调光回路-起居室灯带-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:210,yx_no: null,value:null,name:"客房4-调光回路-起居室玄关筒灯-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:211,yx_no: null,value:null,name:"客房4-调光回路-起居室天花筒灯-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:212,yx_no: null,value:null,name:"客房4-调光回路-景光灯-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:213,yx_no: null,value:null,name:"客房4-调光回路-起居室卫生间筒灯-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:214,yx_no: null,value:null,name:"客房4-调光回路-起居室卫生间灯带-设定值",className:"",isFlag: false,Independent: 0},

{equip_no:300,setNo:215,yx_no: 108,value:null,name:"客房4-卧室场景-全开模式-设置",className:"ws4_scene_allopen",isFlag: false,Independent: 1},
{equip_no:300,setNo:216,yx_no: 109,value:null,name:"客房4-卧室场景-全关模式-设置",className:"ws4_scene_allclose",isFlag: false,Independent: 1},
{equip_no:300,setNo:217,yx_no: 110,value:null,name:"客房4-卧室场景-迎宾模式-设置",className:"ws4_scene_wel",isFlag: false,Independent: 1},
{equip_no:300,setNo:218,yx_no: 111,value:null,name:"客房4-卧室场景-明亮模式-设置",className:"ws4_scene_ml",isFlag: false,Independent: 1},
{equip_no:300,setNo:219,yx_no: 112,value:null,name:"客房4-卧室场景-柔和模式-设置",className:"ws4_scene_rh",isFlag: false,Independent: 1},
{equip_no:300,setNo:220,yx_no: 113,value:null,name:"客房4-卧室场景-休闲模式-设置",className:"ws4_scene_xx",isFlag: false,Independent: 1},
{equip_no:300,setNo:221,yx_no: 114,value:null,name:"客房4-卧室场景-睡眠模式-设置",className:"ws4_scene_sm",isFlag: false,Independent: 1},
{equip_no:300,setNo:222,yx_no: 115,value:null,name:"客房4-卧室场景-夜起模式-设置",className:"ws4_scene_yq",isFlag: false,Independent: 1},
{equip_no:300,setNo:223,yx_no: 116,value:null,name:"客房4-卧室场景-晨起模式-设置",className:"ws4_scene_cq",isFlag: false,Independent: 1},
{equip_no:300,setNo:224,yx_no: 117,value:null,name:"客房4-卧室场景-阅读模式-设置",className:"ws4_scene_yd",isFlag: false,Independent: 1},

{equip_no:300,setNo:225,yx_no: 118,value:null,name:"客房4-卧室卫生间场景-卫生间全开-设置",className:"ys4_scene_allopen",isFlag: false,Independent: 1},
{equip_no:300,setNo:226,yx_no: 119,value:null,name:"客房4-卧室卫生间场景-卫生间全关-设置",className:"ys4_scene_allclose",isFlag: false,Independent: 1},
{equip_no:300,setNo:227,yx_no: 120,value:null,name:"客房4-卧室卫生间场景-明亮模式-设置",className:"ys4_scene_ml",isFlag: false,Independent: 1},
{equip_no:300,setNo:228,yx_no: 121,value:null,name:"客房4-卧室卫生间场景-柔和模式-设置",className:"ys4_scene_rh",isFlag: false,Independent: 1},
{equip_no:300,setNo:229,yx_no: 122,value:null,name:"客房4-卧室卫生间场景-淋浴模式-设置",className:"ys4_scene_ly",isFlag: false,Independent: 1},
{equip_no:300,setNo:230,yx_no: 123,value:null,name:"客房4-卧室卫生间场景-音乐模式-设置",className:"ys4_scene_yy",isFlag: false,Independent: 1},

{equip_no:300,setNo:231,yx_no: 124,value:null,name:"客房4-起居室场景-全开模式-设置",className:"qjws4_scene_allopen",isFlag: false,Independent: 1},
{equip_no:300,setNo:232,yx_no: 125,value:null,name:"客房4-起居室场景-全关模式-设置",className:"qjws4_scene_allclose",isFlag: false,Independent: 1},
{equip_no:300,setNo:233,yx_no: 126,value:null,name:"客房4-起居室场景-迎宾模式-设置",className:"qjws4_scene_wel",isFlag: false,Independent: 1},
{equip_no:300,setNo:234,yx_no: 127,value:null,name:"客房4-起居室场景-明亮模式-设置",className:"qjws4_scene_ml",isFlag: false,Independent: 1},
{equip_no:300,setNo:235,yx_no: 128,value:null,name:"客房4-起居室场景-柔和模式-设置",className:"qjws4_scene_rh",isFlag: false,Independent: 1},
{equip_no:300,setNo:236,yx_no: 129,value:null,name:"客房4-起居室场景-休闲模式-设置",className:"qjws4_scene_xx",isFlag: false,Independent: 1},
{equip_no:300,setNo:237,yx_no: 130,value:null,name:"客房4-起居室场景-睡眠模式-设置",className:"qjws4_scene_sm",isFlag: false,Independent: 1},
{equip_no:300,setNo:238,yx_no: 131,value:null,name:"客房4-起居室场景-夜起模式-设置",className:"qjws4_scene_yq",isFlag: false,Independent: 1},
{equip_no:300,setNo:239,yx_no: 132,value:null,name:"客房4-起居室场景-晨起模式-设置",className:"qjws4_scene_cq",isFlag: false,Independent: 1},
{equip_no:300,setNo:240,yx_no: 133,value:null,name:"客房4-起居室场景-阅读模式-设置",className:"qjws4_scene_yd",isFlag: false,Independent: 1},

{equip_no:300,setNo:241,yx_no: 134,value:null,name:"客房4-起居室卫生间场景-卫生间全开-设置",className:"qjys4_scene_allopen",isFlag: false,Independent: 1},
{equip_no:300,setNo:242,yx_no: 135,value:null,name:"客房4-起居室卫生间场景-卫生间全关-设置",className:"qjys4_scene_allclose",isFlag: false,Independent: 1},
{equip_no:300,setNo:243,yx_no: 136,value:null,name:"客房4-起居室卫生间场景-明亮模式-设置",className:"qjys4_scene_ml",isFlag: false,Independent: 1},
{equip_no:300,setNo:244,yx_no: 137,value:null,name:"客房4-起居室卫生间场景-柔和模式-设置",className:"qjys4_scene_rh",isFlag: false,Independent: 1},
{equip_no:300,setNo:245,yx_no: 138,value:null,name:"客房4-起居室卫生间场景-淋浴模式-设置",className:"qjys4_scene_ly",isFlag: false,Independent: 1},
{equip_no:300,setNo:246,yx_no: 139,value:null,name:"客房4-起居室卫生间场景-音乐模式-设置",className:"qjys4_scene_yy",isFlag: false,Independent: 1},

{equip_no:300,setNo:247,yx_no: null,value:null,name:"客房4-窗帘-卧室布帘1-开启",className:"cl4_bl1_open",isFlag: true,Independent: 0},
{equip_no:300,setNo:248,yx_no: null,value:null,name:"客房4-窗帘-卧室布帘1-停止",className:"cl4_bl1_stop",isFlag: true,Independent: 0},
{equip_no:300,setNo:249,yx_no: null,value:null,name:"客房4-窗帘-卧室布帘1-关闭",className:"cl4_bl1_close",isFlag: true,Independent: 0},
{equip_no:300,setNo:250,yx_no: null,value:null,name:"客房4-窗帘-卧室纱帘1-开启",className:"cl4_sl1_open",isFlag: true,Independent: 0},
{equip_no:300,setNo:251,yx_no: null,value:null,name:"客房4-窗帘-卧室纱帘1-停止",className:"cl4_sl1_stop",isFlag: true,Independent: 0},
{equip_no:300,setNo:252,yx_no: null,value:null,name:"客房4-窗帘-卧室纱帘1-关闭",className:"cl4_sl1_close",isFlag: true,Independent: 0},
{equip_no:300,setNo:253,yx_no: null,value:null,name:"客房4-窗帘-卧室布帘2-开启",className:"cl4_bl2_open",isFlag: true,Independent: 0},
{equip_no:300,setNo:254,yx_no: null,value:null,name:"客房4-窗帘-卧室布帘2-停止",className:"cl4_bl2_stop",isFlag: true,Independent: 0},
{equip_no:300,setNo:255,yx_no: null,value:null,name:"客房4-窗帘-卧室布帘2-关闭",className:"cl4_bl2_close",isFlag: true,Independent: 0},
{equip_no:300,setNo:256,yx_no: null,value:null,name:"客房4-窗帘-卧室纱帘2-开启",className:"cl4_sl2_open",isFlag: true,Independent: 0},
{equip_no:300,setNo:257,yx_no: null,value:null,name:"客房4-窗帘-卧室纱帘2-停止",className:"cl4_sl2_stop",isFlag: true,Independent: 0},
{equip_no:300,setNo:258,yx_no: null,value:null,name:"客房4-窗帘-卧室纱帘2-关闭",className:"cl4_sl2_close",isFlag: true,Independent: 0},
{equip_no:300,setNo:259,yx_no: null,value:null,name:"客房4-窗帘-卫生间卷帘-开启",className:"cl4_wj1_open",isFlag: true,Independent: 0},
{equip_no:300,setNo:260,yx_no: null,value:null,name:"客房4-窗帘-卫生间卷帘-停止",className:"cl4_wj1_stop",isFlag: true,Independent: 0},
{equip_no:300,setNo:261,yx_no: null,value:null,name:"客房4-窗帘-卫生间卷帘-关闭",className:"cl4_wj1_close",isFlag: true,Independent: 0},
{equip_no:300,setNo:262,yx_no: null,value:null,name:"客房4-窗帘-起居室布帘1-开启",className:"qjcl4_bl1_open",isFlag: true,Independent: 0},
{equip_no:300,setNo:263,yx_no: null,value:null,name:"客房4-窗帘-起居室布帘1-停止",className:"qjcl4_bl1_stop",isFlag: true,Independent: 0},
{equip_no:300,setNo:264,yx_no: null,value:null,name:"客房4-窗帘-起居室布帘1-关闭",className:"qjcl4_bl1_close",isFlag: true,Independent: 0},
{equip_no:300,setNo:265,yx_no: null,value:null,name:"客房4-窗帘-起居室纱帘1-开启",className:"qjcl4_sl1_open",isFlag: true,Independent: 0},
{equip_no:300,setNo:266,yx_no: null,value:null,name:"客房4-窗帘-起居室纱帘1-停止",className:"qjcl4_sl1_stop",isFlag: true,Independent: 0},
{equip_no:300,setNo:267,yx_no: null,value:null,name:"客房4-窗帘-起居室纱帘1-关闭",className:"qjcl4_sl1_close",isFlag: true,Independent: 0},
{equip_no:300,setNo:268,yx_no: null,value:null,name:"客房4-窗帘-起居室布帘2-开启",className:"qjcl4_bl2_open",isFlag: true,Independent: 0},
{equip_no:300,setNo:269,yx_no: null,value:null,name:"客房4-窗帘-起居室布帘2-停止",className:"qjcl4_bl2_stop",isFlag: true,Independent: 0},
{equip_no:300,setNo:270,yx_no: null,value:null,name:"客房4-窗帘-起居室布帘2-关闭",className:"qjcl4_bl2_close",isFlag: true,Independent: 0},
{equip_no:300,setNo:271,yx_no: null,value:null,name:"客房4-窗帘-起居室纱帘2-开启",className:"qjcl4_sl2_open",isFlag: true,Independent: 0},
{equip_no:300,setNo:272,yx_no: null,value:null,name:"客房4-窗帘-起居室纱帘2-停止",className:"qjcl4_sl2_stop",isFlag: true,Independent: 0},
{equip_no:300,setNo:273,yx_no: null,value:null,name:"客房4-窗帘-起居室纱帘2-关闭",className:"qjcl4_sl2_close",isFlag: true,Independent: 0},

{equip_no:300,setNo:274,yx_no: 140,value:null,name:"客房4-卧室空调-电源-开启",className:"kt4_open",isFlag: false,Independent: 0},
{equip_no:300,setNo:275,yx_no: null,value:null,name:"客房4-卧室空调-电源-关闭",className:"kt4_close",isFlag: false,Independent: 0},
{equip_no:300,setNo:276,yx_no: 141,value:null,name:"客房4-卧室空调-风速-自动",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:277,yx_no: 142,value:null,name:"客房4-卧室空调-风速-低速",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:278,yx_no: 143,value:null,name:"客房4-卧室空调-风速-中速",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:279,yx_no: 144,value:null,name:"客房4-卧室空调-风速-高速",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:280,yx_no: 145,value:null,name:"客房4-卧室空调-模式-制冷",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:281,yx_no: 146,value:null,name:"客房4-卧室空调-模式-制热",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:282,yx_no: 147,value:null,name:"客房4-卧室空调-模式-送风",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:283,yx_no: 148,value:null,name:"客房4-卧室空调-模式-抽湿",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:284,yx_no: null,value:null,name:"客房4-卧室空调-温度-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:null,setNo:null,yx_no: null,value:null,name:"空调温度增大",className:"kt4_yl_zj",isFlag: true,Independent: 0},
{equip_no:null,setNo:null,yx_no: null,value:null,name:"空调温度减小",className:"kt4_yl_jx",isFlag: true,Independent: 0},
{equip_no:null,setNo:null,yx_no: null,value:null,name:"空调风速调整",className:"kt4_fs_td",isFlag: true,Independent: 0},
{equip_no:null,setNo:null,yx_no: null,value:null,name:"空调模式切换",className:"kt4_ms_qh",isFlag: true,Independent: 0},

{equip_no:300,setNo:285,yx_no: 149,value:null,name:"客房4-起居室空调-电源-开启",className:"qjkt4_open",isFlag: false,Independent: 0},
{equip_no:300,setNo:286,yx_no: null,value:null,name:"客房4-起居室空调-电源-关闭",className:"qjkt4_close",isFlag: false,Independent: 0},
{equip_no:300,setNo:287,yx_no: 150,value:null,name:"客房4-起居室空调-风速-自动",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:288,yx_no: 151,value:null,name:"客房4-起居室空调-风速-低速",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:289,yx_no: 152,value:null,name:"客房4-起居室空调-风速-中速",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:290,yx_no: 153,value:null,name:"客房4-起居室空调-风速-高速",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:291,yx_no: 154,value:null,name:"客房4-起居室空调-模式-制冷",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:292,yx_no: 155,value:null,name:"客房4-起居室空调-模式-制热",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:293,yx_no: 156,value:null,name:"客房4-起居室空调-模式-送风",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:294,yx_no: 157,value:null,name:"客房4-起居室空调-模式-抽湿",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:295,yx_no: null,value:null,name:"客房4-起居室空调-温度-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:null,setNo:null,yx_no: null,value:null,name:"空调温度增大",className:"qjkt4_yl_zj",isFlag: true,Independent: 0},
{equip_no:null,setNo:null,yx_no: null,value:null,name:"空调温度减小",className:"qjkt4_yl_jx",isFlag: true,Independent: 0},
{equip_no:null,setNo:null,yx_no: null,value:null,name:"空调风速调整",className:"qjkt4_fs_td",isFlag: true,Independent: 0},
{equip_no:null,setNo:null,yx_no: null,value:null,name:"空调模式切换",className:"qjkt4_ms_qh",isFlag: true,Independent: 0},

{equip_no:300,setNo:296,yx_no: 158,value:null,name:"客房4-卫生间音乐-电源-开启",className:"yy4_play",isFlag: false,Independent: 0},
{equip_no:300,setNo:297,yx_no: null,value:null,name:"客房4-卫生间音乐-电源-关闭",className:"yy4_stop",isFlag: false,Independent: 0},
{equip_no:300,setNo:298,yx_no: null,value:null,name:"客房4-卫生间音乐-状态设置-播放",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:299,yx_no: null,value:null,name:"客房4-卫生间音乐-状态设置-暂停",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:300,yx_no: null,value:null,name:"客房4-卫生间音乐-音源选择-USB",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:301,yx_no: null,value:null,name:"客房4-卫生间音乐-音源选择-AUX",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:302,yx_no: null,value:null,name:"客房4-卫生间音乐-播放模式设置-单曲循环",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:303,yx_no: null,value:null,name:"客房4-卫生间音乐-播放模式设置-列表播放",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:304,yx_no: null,value:null,name:"客房4-卫生间音乐-播放模式设置-随机播放",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:305,yx_no: null,value:null,name:"客房4-卫生间音乐-音量-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:369,yx_no: null,value:null,name:"上一曲",className:"yy4_prev",isFlag: true,Independent: 0},
{equip_no:300,setNo:370,yx_no: null,value:null,name:"下一曲",className:"yy4_next",isFlag: true,Independent: 0},
{equip_no:null,setNo:null,yx_no: null,value:null,name:"音量减小",className:"yy4_yljx",isFlag: true,Independent: 0},
{equip_no:null,setNo:null,yx_no: null,value:null,name:"音量增大",className:"yy4_ylzd",isFlag: true,Independent: 0},

// 客房5
{equip_no:300,setNo:306,yx_no: 167,value:null,name:"客房5-照明回路-卫生间防雾灯-开启",className:"wsj5_light_open",isFlag: false,Independent: 0},
{equip_no:300,setNo:307,yx_no: null,value:null,name:"客房5-照明回路-卫生间防雾灯-关闭",className:"wsj5_light_close",isFlag: false,Independent: 0},

{equip_no:300,setNo:308,yx_no: null,value:null,name:"客房5-调光回路-窗帘灯带-",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:309,yx_no: null,value:null,name:"客房5-调光回路-小夜灯-",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:310,yx_no: null,value:null,name:"客房5-调光回路-沙发筒灯-",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:311,yx_no: null,value:null,name:"客房5-调光回路-床头筒灯-",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:312,yx_no: null,value:null,name:"客房5-调光回路-灯带-",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:313,yx_no: null,value:null,name:"客房5-调光回路-门口筒灯-",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:314,yx_no: null,value:null,name:"客房5-调光回路-卫生间窗帘灯带-",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:315,yx_no: null,value:null,name:"客房5-调光回路-卫生间灯带-",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:316,yx_no: null,value:null,name:"客房5-调光回路-卫生间筒灯-",className:"",isFlag: false,Independent: 0},

{equip_no:300,setNo:317,yx_no: 168,value:null,name:"客房5-卧室场景-全开模式-设置",className:"ws5_scene_allopen",isFlag: false,Independent: 1},
{equip_no:300,setNo:318,yx_no: 169,value:null,name:"客房5-卧室场景-全关模式-设置",className:"ws5_scene_allclose",isFlag: false,Independent: 1},
{equip_no:300,setNo:319,yx_no: 170,value:null,name:"客房5-卧室场景-迎宾模式-设置",className:"ws5_scene_wel",isFlag: false,Independent: 1},
{equip_no:300,setNo:320,yx_no: 171,value:null,name:"客房5-卧室场景-明亮模式-设置",className:"ws5_scene_ml",isFlag: false,Independent: 1},
{equip_no:300,setNo:321,yx_no: 172,value:null,name:"客房5-卧室场景-柔和模式-设置",className:"ws5_scene_rh",isFlag: false,Independent: 1},
{equip_no:300,setNo:322,yx_no: 173,value:null,name:"客房5-卧室场景-休闲模式-设置",className:"ws5_scene_xx",isFlag: false,Independent: 1},
{equip_no:300,setNo:323,yx_no: 174,value:null,name:"客房5-卧室场景-睡眠模式-设置",className:"ws5_scene_sm",isFlag: false,Independent: 1},
{equip_no:300,setNo:324,yx_no: 175,value:null,name:"客房5-卧室场景-夜起模式-设置",className:"ws5_scene_yq",isFlag: false,Independent: 1},
{equip_no:300,setNo:325,yx_no: 176,value:null,name:"客房5-卧室场景-晨起模式-设置",className:"ws5_scene_cq",isFlag: false,Independent: 1},
{equip_no:300,setNo:326,yx_no: 177,value:null,name:"客房5-卧室场景-阅读模式-设置",className:"ws5_scene_yd",isFlag: false,Independent: 1},

{equip_no:300,setNo:327,yx_no: 178,value:null,name:"客房5-卫生间场景-卫生间全开-设置",className:"ys5_scene_allopen",isFlag: false,Independent: 1},
{equip_no:300,setNo:328,yx_no: 179,value:null,name:"客房5-卫生间场景-卫生间全关-设置",className:"ys5_scene_allclose",isFlag: false,Independent: 1},
{equip_no:300,setNo:329,yx_no: 180,value:null,name:"客房5-卫生间场景-明亮模式-设置",className:"ys5_scene_ml",isFlag: false,Independent: 1},
{equip_no:300,setNo:330,yx_no: 181,value:null,name:"客房5-卫生间场景-柔和模式-设置",className:"ys5_scene_rh",isFlag: false,Independent: 1},
{equip_no:300,setNo:331,yx_no: 182,value:null,name:"客房5-卫生间场景-淋浴模式-设置",className:"ys5_scene_ly",isFlag: false,Independent: 1},
{equip_no:300,setNo:332,yx_no: 183,value:null,name:"客房5-卫生间场景-音乐模式-设置",className:"ys5_scene_yy",isFlag: false,Independent: 1},

{equip_no:300,setNo:333,yx_no: null,value:null,name:"客房5-窗帘-卧室布帘-开启",className:"cl5_bl1_open",isFlag: true,Independent: 0},
{equip_no:300,setNo:334,yx_no: null,value:null,name:"客房5-窗帘-卧室布帘-停止",className:"cl5_bl1_stop",isFlag: true,Independent: 0},
{equip_no:300,setNo:335,yx_no: null,value:null,name:"客房5-窗帘-卧室布帘-关闭",className:"cl5_bl1_close",isFlag: true,Independent: 0},
{equip_no:300,setNo:336,yx_no: null,value:null,name:"客房5-窗帘-卧室纱帘-开启",className:"cl5_sl1_open",isFlag: true,Independent: 0},
{equip_no:300,setNo:337,yx_no: null,value:null,name:"客房5-窗帘-卧室纱帘-停止",className:"cl5_sl1_stop",isFlag: true,Independent: 0},
{equip_no:300,setNo:338,yx_no: null,value:null,name:"客房5-窗帘-卧室纱帘-关闭",className:"cl5_sl1_close",isFlag: true,Independent: 0},
{equip_no:300,setNo:339,yx_no: null,value:null,name:"客房5-窗帘-卫间卷帘-开启",className:"cl5_wj1_open",isFlag: true,Independent: 0},
{equip_no:300,setNo:340,yx_no: null,value:null,name:"客房5-窗帘-卫间卷帘-停止",className:"cl5_wj1_stop",isFlag: true,Independent: 0},
{equip_no:300,setNo:341,yx_no: null,value:null,name:"客房5-窗帘-卫间卷帘-关闭",className:"cl5_wj1_close",isFlag: true,Independent: 0},

{equip_no:300,setNo:342,yx_no: 184,value:null,name:"客房5-卧室空调-电源-开启",className:"kt5_open",isFlag: false,Independent: 0},
{equip_no:300,setNo:343,yx_no: null,value:null,name:"客房5-卧室空调-电源-关闭",className:"kt5_close",isFlag: false,Independent: 0},
{equip_no:300,setNo:344,yx_no: 185,value:null,name:"客房5-卧室空调-风速-自动",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:345,yx_no: 186,value:null,name:"客房5-卧室空调-风速-低速",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:346,yx_no: 187,value:null,name:"客房5-卧室空调-风速-中速",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:347,yx_no: 188,value:null,name:"客房5-卧室空调-风速-高速",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:348,yx_no: 189,value:null,name:"客房5-卧室空调-模式-制冷",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:349,yx_no: 190,value:null,name:"客房5-卧室空调-模式-制热",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:350,yx_no: 191,value:null,name:"客房5-卧室空调-模式-送风",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:351,yx_no: 192,value:null,name:"客房5-卧室空调-模式-抽湿",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:352,yx_no: null,value:null,name:"客房5-卧室空调-温度-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:null,setNo:null,yx_no: null,value:null,name:"空调温度增大",className:"kt5_yl_zj",isFlag: true,Independent: 0},
{equip_no:null,setNo:null,yx_no: null,value:null,name:"空调温度减小",className:"kt5_yl_jx",isFlag: true,Independent: 0},
{equip_no:null,setNo:null,yx_no: null,value:null,name:"空调风速调整",className:"kt5_fs_td",isFlag: true,Independent: 0},
{equip_no:null,setNo:null,yx_no: null,value:null,name:"空调模式切换",className:"kt5_ms_qh",isFlag: true,Independent: 0},

{equip_no:300,setNo:353,yx_no: 193,value:null,name:"客房5-卫生间音乐-电源-开启",className:"yy5_play",isFlag: false,Independent: 0},
{equip_no:300,setNo:354,yx_no: null,value:null,name:"客房5-卫生间音乐-电源-关闭",className:"yy5_stop",isFlag: false,Independent: 0},
{equip_no:300,setNo:355,yx_no: null,value:null,name:"客房5-卫生间音乐-状态设置-播放",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:356,yx_no: null,value:null,name:"客房5-卫生间音乐-状态设置-暂停",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:357,yx_no: null,value:null,name:"客房5-卫生间音乐-音源选择-USB",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:358,yx_no: null,value:null,name:"客房5-卫生间音乐-音源选择-AUX",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:359,yx_no: null,value:null,name:"客房5-卫生间音乐-播放模式设置-单曲循环",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:360,yx_no: null,value:null,name:"客房5-卫生间音乐-播放模式设置-列表播放",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:361,yx_no: null,value:null,name:"客房5-卫生间音乐-播放模式设置-随机播放",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:362,yx_no: null,value:null,name:"客房5-卫生间音乐-音量-设定值",className:"",isFlag: false,Independent: 0},
{equip_no:300,setNo:371,yx_no: null,value:null,name:"上一曲",className:"yy5_prev",isFlag: true,Independent: 0},
{equip_no:300,setNo:372,yx_no: null,value:null,name:"下一曲",className:"yy5_next",isFlag: true,Independent: 0},
{equip_no:null,setNo:null,yx_no: null,value:null,name:"音量减小",className:"yy5_yljx",isFlag: true,Independent: 0},
{equip_no:null,setNo:null,yx_no: null,value:null,name:"音量增大",className:"yy5_ylzd",isFlag: true,Independent: 0},
    ];





//排班人员
var userName_work = [
{
 name: "zkx",
},
{
 name: 'admin',
}
];

