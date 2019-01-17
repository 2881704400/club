//移动端js主入口
var setHomeTime, setHomeTime0, setHomeTime1, setHomeTime2, setHomeTime3, setHomeTime4;
var myApp = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'My App',
    // App id
    id: 'com.myapp.test',
    // Enable swipe panel
    panel: {
        swipe: 'left',
        swipeOnlyClose: true,
    },
    statusbar: {
        enabled: true,
        overlay: true,
    },
    smartSelect: {
        sheetCloseLinkText: "关闭",
        closeOnSelect: true,
    },
    // Add default routes
    routes: [{
        path: '/home/',
        url: 'home.html',
    }, {
        path: '/Message/',
        url: 'Message.html',
    }, {
        path: '/notice/',
        url: 'notice.html',
    }, {
        path: '/Voice/',
        url: 'Voice.html',
    }, {
        path: '/shortMessage/',
        url: 'shortMessage.html',
    }, {
        path: '/UserInfor/',
        url: 'UserInfor.html',
    }, {
        path: '/homeDeatils0/',
        url: 'homeDeatils0.html',
    }, {
        path: '/homeDeatils1/',
        url: 'homeDeatils1.html',
    }, {
        path: '/homeDeatils2/',
        url: 'homeDeatils2.html',
    }, {
        path: '/homeDeatils3/',
        url: 'homeDeatils3.html',
    }, {
        path: '/homeDeatils4/',
        url: 'homeDeatils4.html',
    }, {
        path: '/userList/',
        url: 'userList.html',
    }, {
        path: '/initSet/',
        url: 'initSet.html',
    }, {
        path: '/historyInfo/',
        url: 'historyInfo.html',
    }, {
        path: '/videoControl/',
        url: 'videoControl.html',
    }, {
        path: '/guestControl/',
        url: '/Views/Mobile/Ipad/guestControl.html',
    }, {
        path: '/serviceManage/',
        url: '/Views/Mobile/Ipad/serviceManage.html',
    }, {
        path: '/serviceCall/',
        url: '/Views/Mobile/Ipad/serviceCall.html',
    }, {
        path: '/serviceSchedu/',
        url: '/Views/Mobile/Ipad/serviceSchedu.html',
    }, {
        path: '/historyNotice/',
        url: '/Views/Mobile/Ipad/historyNotice.html',
    }, {
        path: '/noticeDetails/',
        url: '/Views/Mobile/Ipad/noticeDetails.html',
    }, , {
        path: '/noticeSet/',
        url: '/Views/Mobile/Ipad/noticeSet.html',
    }, {
        path: '/bgMusic/',
        url: '/Views/Mobile/Ipad/bgMusic.html',
    }, {
        path: '/infoComm/',
        url: '/Views/Mobile/Ipad/infoComm.html',
    }, {
        path: '/electManager/',
        url: '/Views/Mobile/Ipad/electManager.html',
    }, {
        path: '/scenceCus/',
        url: '/Views/Mobile/Ipad/scenceCus.html',
    }, {
        path: '/sysOverview/',
        url: '/Views/Mobile/Ipad/sysOverview.html',
    }],
    on: {
        pageInit: function(page) {
            $(".tabbar").removeClass("displayNone");
            //clearInterval(setHomeTime);
            clearInterval(setHomeTime0);
            clearInterval(setHomeTime1);
            clearInterval(setHomeTime2);
            clearInterval(setHomeTime3);
            clearInterval(setHomeTime4);
        },
        popupOpen: function(popup) {},
        init: function() {}
    },
});
var mainView = myApp.views.create('.view-main');
//web接口地址
var service = "/GWService.asmx";
var $$ = Framework7.$;
window.localStorage.timeVal = getDateTimeNotice(0);
loadNameMobile();
$$(document).on('ajaxError', function() {
    myApp.dialog.create({
        title: "",
        text: '请求出错，请查看网络是否已连接！',
        buttons: [{
            text: '确定'
        }]
    }).open();
});

function onPages() {
    if (!$(".navbar").hasClass("navbar-hidden")) {
        $(".navbar").addClass("navbar-hidden");
        $(".toolbar").addClass("toolbar-hidden");
    } else {
        $(".navbar").removeClass("navbar-hidden");
        $(".toolbar").removeClass("toolbar-hidden");
    }
}

function JQajaxo(_type, _url, _asycn, _data, _success) {
    var ajaxs = $.ajax({
        type: _type,
        url: _url,
        timeout: 5000,
        async: _asycn,
        data: _data,
        success: _success,
        complete: function(XMLHttpRequest, status) { //请求完成后最终执行参数
            if (status == 'timeout') { //超时,status还有success,error等值的情况
                ajaxs.abort();
                myApp.dialog.create({
                    title: "系统提示",
                    text: '请求超时，请查看网络是否已连接！',
                    buttons: [{
                        text: '确定'
                    }]
                }).open();
            }
            XMLHttpRequest = null;
        },
        error: function() {
            myApp.dialog.create({
                title: "系统提示",
                text: '请求错误，请查看网络是否已连接！',
                buttons: [{
                    text: '确定'
                }]
            }).open();
        }
    });
}

function ajaxService(_type, _url, _asycn, _data, _success, _error) {
    var ajaxs = $.ajax({
        type: _type,
        url: _url,
        timeout: 5000,
        async: _asycn,
        data: _data,
        success: _success,
        error: _error,
        complete: function(XMLHttpRequest, status) { //请求完成后最终执行参数
            if (status == 'timeout') { //超时,status还有success,error等值的情况
                ajaxs.abort();
                myApp.dialog.create({
                    title: "系统提示",
                    text: '请求超时，请查看网络是否已连接！',
                    buttons: [{
                        text: '确定'
                    }]
                }).open();
            }
            XMLHttpRequest = null;
        }
    });
}
var IsAdministrator, getWebUser, GWAddinModule, GWEquipPages;
//连接服务器
function InitEnsure() {
    var ajaxs = $.ajax({
        type: "post",
        timeout: 10000,
        url: service + "/ConnectService",
        data: "user_name=" + window.localStorage.userName,
        success: function(dt) {
            var analyze = $(dt).children("string").text();
            if (analyze != "" || analyze != "false") {
                $("#homeContents").show();
                $.ajax({
                    type: "post",
                    url: service + "/UserPermissions",
                    data: "userName=" + window.localStorage.userName,
                    success: function(usersDt) {
                        getWebUser = $(usersDt).children("UserItem");
                        authPage(dt);
                    }
                });
            }
        },
        complete: function(XMLHttpRequest, status) { //请求完成后最终执行参数
            if (status == 'timeout') { //超时,status还有success,error等值的情况
                ajaxs.abort();
                myApp.dialog.create({
                    title: "系统提示",
                    text: '请求超时，请查看网络是否已连接！',
                    buttons: [{
                        text: '确定'
                    }]
                }).open();
            }
        }
    });
}
//重连服务器
function initEnsureChonglian(fun) {
    var _url = service + "/GetName2SFService";
    var _data = "userName=" + window.localStorage.userName;

    function _success(data) {
        var analyze = $(data).children("string").text();
        if (analyze != "" || analyze != "false") {
            // console.log("重连成功！");
            if (fun != null) {
                fun();
            }
        }
    }
    JQajaxo("post", _url, true, _data, _success);
}
//页面访问权限
function isAddinModule_List(hr) {
    var shows = false;
    getWebUser.find("HomePage_List").find("string").each(function() {
        for (var i = 0; i < GWAddinModule.length; i++) {
            if (GWAddinModule[i][0] == $(this).text().trim().substring(2) && hr == GWAddinModule[i][2].split('.')[2]) {
                shows = true;
            }
        }
    });
    shows ? $("#" + hr).show() : $("#" + hr).hide();
}
//定制页面访问权限
function isEquipPages_List(hr) {
    var shows = false;
    if (getWebUser.find("IsAdministrator").text() != "true") {
        getWebUser.find("RoleItem").each(function() {
            $(this).find("Browse_Pages_List").find("int").each(function() {
                for (var i = 0; i < GWEquipPages.length; i++) {
                    if (GWEquipPages[i][0] == $(this).text()) {
                        if (hr == GWEquipPages[i][2].split('.')[2]) {
                            shows = true;
                        }
                    }
                }
            });
        });
    } else {
        shows = true;
    }
    return shows;
}
//权限设置
function authPage(dt) {
    $.ajax({
        type: "post",
        url: service + "/QueryTableData",
        async: false,
        data: "tableName=GWAddinModule",
        success: function(dtGWAddinModule) {
            GWAddinModule = new Array();
            var datas = $(dtGWAddinModule).children("string").text();
            var usera = JSON.parse(datas);
            for (var i = 0, j = 0; i < usera.length; i++) {
                var userb = usera[i];
                if (userb.WebPage == "1" && userb.ClassName.split('.').length > 2) {
                    var userc = new Array(userb.ID, userb.Name, userb.ClassName, userb.HelpPath, userb.MultiScreens, userb.WebPage);
                    GWAddinModule[j++] = userc;
                }
            }
        }
    });
}
//判断当前设备是否可查看
function Browse_Equip_List(equips) {
    var equipBool = false;
    if (getWebUser.find("IsAdministrator").text() != "true") {
        getWebUser.find("RoleItem").each(function() {
            $(this).find("Browse_Equip_List").find("int").each(function() {
                if (equips == $(this).text()) {
                    equipBool = true;
                }
            });
        });
    } else {
        equipBool = true;
    }
    return equipBool;
}
//判断当前设备是否可查看(子集)
function Browse_SpecialEquip_List(equips, num) {
    var equipBool = false;
    if (getWebUser.find("IsAdministrator").text() != "true") {
        getWebUser.find("RoleItem").each(function() {
            $(this).find("Browse_SpecialEquip_List").find("string").each(function() {
                if (equips == $(this).text().split('.')[0]) {
                    if (num != false) {
                        if ($(this).text().split('.')[1] == num) {
                            equipBool = true;
                        }
                    } else {
                        equipBool = true;
                    }
                }
            });
        });
    } else {
        equipBool = true;
    }
    return equipBool;
}
//查询用户可查看设备
function Browse_Equip_List_Get() {
    var equipList = '';
    if (getWebUser.find("IsAdministrator").text() != "true") {
        getWebUser.find("RoleItem").each(function() {
            $(this).find("Browse_Equip_List").find("int").each(function() {
                equipList += $(this).text() + ',';
            });
        });
        equipList = equipList.substring(0, equipList.length - 1);
    } else {
        equipList = '';
    }
    return equipList;
}
//判断当前设备是否可控制
function Control_Equip_List(equips) {
    var equipBool = false;
    if (getWebUser.find("IsAdministrator").text() != "true") {
        getWebUser.find("RoleItem").each(function() {
            $(this).find("Control_Equip_List").find("int").each(function() {
                if (equips == $(this).text()) {
                    equipBool = true;
                }
            });
        });
    } else {
        equipBool = true;
    }
    return equipBool;
}
//判断当前设备是否可控制（子集）
function Control_SetItem_List(equips, num) {
    var equipBool = false;
    if (getWebUser.find("IsAdministrator").text() != "true") {
        getWebUser.find("RoleItem").each(function() {
            $(this).find("Control_SetItem_List").find("string").each(function() {
                if (equips == $(this).text().split('.')[0]) {
                    if (num != false) {
                        if ($(this).text().split('.')[1] == num) {
                            equipBool = true;
                        }
                    } else {
                        equipBool = true;
                    }
                }
            });
        });
    } else {
        equipBool = true;
    }
    return equipBool;
}

function getValueByKey(str, key) {
    var urlSearchSplit = str.split('&');
    for (var i = 0; i < urlSearchSplit.length; i++) {
        var stringSplitValue = urlSearchSplit[i].split('=');
        if (stringSplitValue[0].toLowerCase() === key.toLowerCase()) {
            return stringSplitValue[1]
        }
    }
    return '';
}
//载入界面
function loadNameMobile() {
    if (location.search) {
        try {
            var urlSearch = location.search.split('?')[1];
            var terminal = getValueByKey(urlSearch, "terminal");
            var ac_appkey = getValueByKey(urlSearch, "appkey");
            var ac_infokey = getValueByKey(urlSearch, "infokey");
            var service_url = getValueByKey(urlSearch, "service_url");
            var jsonString = {
                "terminalString": terminal,
                "ac_appkeyString": ac_appkey,
                "ac_infokeyString": ac_infokey,
                "service_urlString": service_url
            };
            window.localStorage.ac_appkey = ac_appkey;
            window.localStorage.terminal = terminal;
            window.localStorage.ac_infokey = ac_infokey;
            window.localStorage.service_url = service_url;
            myJavaFuntion.SetCookie(JSON.stringify(jsonString));
        } catch (ex) {
            window.localStorage.terminal = '';
            window.localStorage.ac_appkey = '';
            window.localStorage.ac_infokey = '';
            window.localStorage.service_url = '';
        }
    } else {
        myJavaFuntion.GetCookie();
    }
    setTimeout(function() {
        var jsonData = {
            "url": "/api/GWServiceWebAPI/getClientTypeInfo",
            "success": _success,
            "error": _error,
            "complete": _complete
        };
        $.fn.axpost(jsonData);

        function _success(dt) {
            var codeString = dt.HttpData;
            if (codeString.code == 200) {
                window.localStorage.userName = codeString.data.userName;
            } else {
                window.localStorage.userName = '';
            }
        }

        function _error(e) {
            window.localStorage.userName = '';
            myJavaFuntion.OpenLocalUrl("login");
        }

        function _complete(XMLHttpRequest, status) {
            if (window.localStorage.userName != "" && window.localStorage.userName != null) {
                $("#userName").html("我(" + window.localStorage.userName + ")");
                InitEnsure();
                AppShows();
                onHomePage();
                $("#app").css("visibility", "visible");
                initWebSocket(); //socket
                //初始化状态值-房间有无人
                yxpHome();
                pushInfoMessage();
                setHomeTime = setInterval(function() {
                    yxpHome();
                }, setInterTimeValue);
            } else {
                myJavaFuntion.OpenLocalUrl("login");
            }
        }
    }, 100);
}

function pageLists() {
    $(".page_list").find("a").each(function() {
        if ($(this).attr("href") != "#") {
            var listName;
            try {
                listName = $(this).attr("href").split('/')[1].split('.')[0];
            } catch (ex) {
                listName = $(this).attr("pageName").split('.')[0];
            }
            var isep = isEquipPages_List(listName);
            if (!isep) {
                $(this).addClass("disabled");
            }
        }
    });
}
//app显示
function AppShows() {
    $("#appCacheClearLi").show();
    $("#appRichScan").show();
}
//获取App版本信息
function BackAppVersion(versionCode, versionName) {
    window.localStorage.versionCode = versionCode;
    window.localStorage.versionName = versionName;
}
//获取系统信息
function BackSystemInfor(phoneName, phoneModel, phoneVersion) {
    window.localStorage.phoneName = phoneName;
    window.localStorage.phoneModel = phoneModel;
    window.localStorage.phoneVersion = phoneVersion;
    try {
        myJavaFun.GetPushID(); //获取推送ID
    } catch (ex) {}
}
//获取推送ID
function BackPushID(data) {
    // 先删除记录
    $.when(AlarmCenterContext.post("/api/GWServiceWebAPI/set_DeleteTableData", {
        getDataTable: 'GW_PushMessage',
        tableVlue: "name = '" + window.localStorage.userName + "'"
    })).done(function(dt) {
        //插入新记录
        insertPushMessage();
    }).fail(function(e) {
        //插入新记录
        insertPushMessage();
    });

    function insertPushMessage() {
        $.when($.fn.XmlRequset.httpPost("/api/GWServiceWebAPI/set_InsertNewTable", {
            data: {
                getDataTable: 'GW_PushMessage(id,name,phoneName,phoneModel,phoneVersion)',
                tableVlue: "values('" + data + "','" + window.localStorage.userName + "','" + window.localStorage.phoneName + "','" + window.localStorage.phoneModel + "','" + window.localStorage.phoneVersion + "')"
            },
            async: false
        })).done(function(dt) {}).fail(function(e) {});
    }
}
//推送消息
function pushInfo(stringID, stringMessage, stringAuth) {
    var jsonData = {
        "url": "/api/jpush/send_push_msg",
        "data": {
            "id": stringID,
            "message": stringMessage,
        },
        "success": push_success,
        "error": push_error,
        "complete": push_complete
    };
    $.fn.axpost(jsonData);

    function push_success(dt) {
        // window.location.href="https://www.baidu.com/"
    }

    function push_error(e) {}

    function push_complete(xhr, status) {}
}
//百度SDK位置信息回调
function locationDBData(dt) {
    window.testIframe.gpsBack(dt);
}
//清空缓存
function onAppCacheClear() {
    myApp.dialog.create({
        title: "清空",
        text: '是否清空缓存，重新加载？',
        buttons: [{
            text: '取消'
        }, {
            text: '确定',
            onClick: function() {
                myJavaFun.AppCacheClear();
            }
        }]
    }).open();
}

function AppCacheClearCallback(dt) {
    if (dt == "true") {location.reload();} else {}
}

function toolbarActive(ids) {
    $(".toolbar-inner").find("a").each(function() {
        if ($(this).hasClass("active")) {
            var cls = $(this).find("i").attr("cls");
            $(this).find("i").removeClass("icon-" + cls + "_a");
            $(this).find("i").addClass("icon-" + cls + "_b");
            $(this).removeClass("active");
        }
    });
    if (ids != '') {
        $("#" + ids).addClass("active");
        var cls = $("#" + ids).find("i").attr("cls");
        $("#" + ids).find("i").removeClass("icon-" + cls + "_b");
        $("#" + ids).find("i").addClass("icon-" + cls + "_a");
    }
}

function toolbarActiveImg(ids) {
    $(".toolbar-inner a").each(function() {
        $(this).removeClass("active");
        $(this).find("img").eq(0).show();
        $(this).find("img").eq(1).hide();
    })
    $("#" + ids).addClass("active");
    $("#" + ids).find("img").eq(0).hide();
    $("#" + ids).find("img").eq(1).show();
}
//注销事件
function onUserLogout() {
    myApp.dialog.create({
        cssClass: "exit",
        title: "注销",
        text: '确定要注销当前账户吗？',
        buttons: [{
            text: '取消'
        }, {
            text: '确定',
            onClick: function() {
                window.localStorage.userName = "";
                window.localStorage.userPWD = "";
                myJavaFuntion.OpenLocalUrl("login");
            }
        }]
    }).open();
}
//关于事件
function onAbout() {
    var _url = "/api/server/version";

    function _success(data) {
        var version = data.HttpData.data;
        var versionNameHTML = '';
        if (window.localStorage.versionName != "" && window.localStorage.versionName != null) {
            versionNameHTML = '<br/>App版本：v' + window.localStorage.versionName;
        }
        myApp.dialog.create({
            title: "关于",
            text: 'API版本：v' + version + versionNameHTML,
            buttons: [{
                text: '确定'
            }]
        }).open();
    }
    JQajaxo("get", _url, true, "", _success);
}

function backss() {
    var mainView = myApp.addView('.view-main');
    var pages = new Array();
    $(".page").each(function(i) {
        pages[i] = $(this).attr("data-page");
    });
    if (pages.length == 2) {
        //mainView.router.loadPage(pages[0] + ".html");
        mainView.router.back()
    }
}
/* 
 * formatMoney(s,type) 
 * 功能：金额按千位逗号分割 
 * 参数：s，需要格式化的金额数值. 
 * 参数：type,判断格式化后的金额是否需要小数位. 
 * 返回：返回格式化后的数值字符串. 
 */
function formatMoney(s, type) {
    if (/[^0-9\.]/.test(s)) return "0";
    if (s == null || s == "") return "0";
    s = s.toString().replace(/^(\d*)$/, "$1.");
    s = (s + "00").replace(/(\d*\.\d\d)\d*/, "$1");
    s = s.replace(".", ",");
    var re = /(\d)(\d{3},)/;
    while (re.test(s)) s = s.replace(re, "$1,$2");
    s = s.replace(/,(\d\d)$/, ".$1");
    if (type == 0) { // 不带小数位(默认是有小数位)  
        var a = s.split(".");
        if (a[1] == "00") {
            s = a[0];
        }
    }
    return s;
}
//首页
$$(document).on("page:beforein", ".page[data-page='home']", function(e) {
    if ($(this).hasClass("page-on-left")) {
        var ids = $(this).next().attr("id");
        if (ids == 'home') {
            if (sUserAgentFlag) {
                toolbarActive('ipadHomeTool');
            } else {
                toolbarActive('homeTool');
            }
        } else {
            initPageJS(ids, '');
        }
    } else {
        onHomePage();
        $("#homeContents").show();
        if (sUserAgentFlag) {
            toolbarActive('ipadHomeTool');
        } else {
            toolbarActive('homeTool');
        }
    }
});
$$(document).on("pageBeforeAnimation", function(e) {
    if (e.target.id == "home") {
        onHomePage();
        $("#homeContents").show();
    }
});
//消息
$$(document).on("page:beforein", ".page[data-page='message']", function(e) {
    if ($(this).hasClass("page-on-left")) {
        var ids = $(this).next().attr("id");
        if (ids == "home") {
            toolbarActive('homeTool');
        } else {
            initPageJS(ids, '');
        }
    } else {
        initPageJS('Message', '');
    }
});
//通知
$$(document).on("page:beforein", ".page[data-page='notice']", function(e) {
    if ($(this).hasClass("page-on-left")) {
        var ids = $(this).next().attr("id");
        if (ids == "home") {
            toolbarActive('homeTool');
        } else {
            initPageJS(ids, '');
        }
    } else {
        initPageJS('notice', '');
    }
});
//语音控制
$$(document).on("page:beforein", ".page[data-page='Voice']", function(e) {
    if ($(this).hasClass("page-on-left")) {
        var ids = $(this).next().attr("id");
        if (ids == "home") {
            toolbarActive('homeTool');
        } else {
            initPageJS(ids, '');
        }
    } else {
        initPageJS('Voice', '');
    }
});
//实时视频
$$(document).on("page:beforein", ".page[data-page='Video']", function(e) {
    if ($(this).hasClass("page-on-left")) {
        var ids = $(this).next().attr("id");
        if (ids == "home") {
            toolbarActive('homeTool');
        } else {
            initPageJS(ids, '');
        }
    } else {
        initPageJS('Video', '');
    }
});
//信息交流
$$(document).on("page:beforein", ".page[data-page='shortMessage']", function(e) {
    if ($(this).hasClass("page-on-left")) {
        var ids = $(this).next().attr("id");
        if (ids == "home") {
            toolbarActive('homeTool');
        } else {
            initPageJS(ids, '');
        }
    } else {
        initPageJS('shortMessage', '');
    }
});
//用户列表
$$(document).on("page:beforein", ".page[data-page='userList']", function(e) {
    if ($(this).hasClass("page-on-left")) {
        var ids = $(this).next().attr("id");
        if (ids == "home") {
            toolbarActive('homeTool');
        } else {
            initPageJS(ids, '');
        }
    } else {
        initPageJS('userList', '');
    }
});
//设置
$$(document).on("page:beforein", ".page[data-page='initSet']", function(e) {
    if ($(this).hasClass("page-on-left")) {
        var ids = $(this).next().attr("id");
        if (ids == "home") {
            toolbarActive('homeTool');
        } else {
            initPageJS(ids, '');
        }
    } else {
        initPageJS('initSet', '');
    }
});
//欢迎词
$$(document).on("page:beforein", ".page[data-page='welcomeWords']", function(e) {
    if ($(this).hasClass("page-on-left")) {
        var ids = $(this).next().attr("id");
        if (ids == "home") {
            toolbarActive('homeTool');
        } else {
            initPageJS(ids, '');
        }
    } else {
        initPageJS('welcomeWords', '');
    }
});
//视频监控
$$(document).on("page:beforein", ".page[data-page='videoControl']", function(e) {
    if ($(this).hasClass("page-on-left")) {
        var ids = $(this).next().attr("id");
        if (ids == "home") {
            toolbarActive('homeTool');
        } else {
            initPageJS(ids, '');
        }
    } else {
        initPageJS('videoControl', '');
    }
});
//聊天记录
$$(document).on("page:beforein", ".page[data-page='Record']", function(e) {
    if ($(this).hasClass("page-on-left")) {
        var ids = $(this).next().attr("id");
        if (ids == "home") {
            toolbarActive('homeTool');
        } else {
            initPageJS(ids, '');
        }
    } else {
        initPageJS('Record', '');
    }
});
//个人信息
$$(document).on("page:beforein", ".page[data-page='UserInfor']", function(e) {
    if ($(this).hasClass("page-on-left")) {
        var ids = $(this).next().attr("id");
        if (ids == "home") {
            toolbarActive('homeTool');
        } else {
            initPageJS(ids, '');
        }
    } else {
        initPageJS('UserInfor', '');
    }
});
//历史信息
$$(document).on("page:beforein", ".page[data-page='historyInfo']", function(e) {
    if ($(this).hasClass("page-on-left")) {
        var ids = $(this).next().attr("id");
        if (ids == "home") {
            toolbarActive('homeTool');
        } else {
            initPageJS(ids, '');
        }
    } else {
        initPageJS('historyInfo', '');
    }
});
window.onresize = function() {
    onResizeCustomized();
}
//执行子界面方法
function initPageJS(dt, ext) { //ext扩展界面地址
    if ($("#" + dt + "_id").length == 0) {
        var pagejs = document.createElement("script");
        pagejs.id = dt + "_id";
        if (ext == "") {
            pagejs.setAttribute("src", "/Scripts/mobile/" + dt + ".js?v" + Math.random());
        } else {
            pagejs.setAttribute("src", ext + dt + ".js?v" + Math.random());
        }
        document.body.appendChild(pagejs);
        pagejs.onload = function() {
            evil(dt + "()");
        }
    } else {
        evil(dt + "()");
    }
}
//微信分享id
var wxShareStr = "wxd2a573967e43f6c6";
//div分享到微信
function divShareToWX(byID) {
    //html2canvas(document.getElementById(byID), {
    //    onrendered: function (canvas) {
    //        var url = canvas.toDataURL("image/png").split(',')[1];
    //        myJavaFun.AppShare(url, wxShareStr);
    //    }
    //});
    myJavaFun.AppShare('', wxShareStr);
}
//图表分享到微信
function chartShareToWX(myChart) {
    //var url = myChart.getDataURL().split(',')[1];
    //myJavaFun.AppShare(url, wxShareStr);
    myJavaFun.AppShare('', wxShareStr);
}
var classObj = {
    ToUnicode: function(str) {
        return escape(str).replace(/%/g, "\\").toLowerCase();
    },
    UnUnicode: function(str) {
        return unescape(str.replace(/\\/g, "%"));
    }
}
//扫一扫返回结果
function onRichScanCallback(dt) {
    var _url = service + "/ExecuteRichScan";
    var _data = "userName=" + window.localStorage.userName + "&&data=" + dt;

    function _success(data) {
        var str = $(data).children("string").text();
        if (str != "false") {
            realShow(str);
        }
    }
    JQajaxo("post", _url, true, _data, _success);
}
/**
 * JS获取n至m随机整数
 */
function rd(n, m) {
    var c = m - n + 1;
    return Math.floor(Math.random() * c + n);
}

function TimeJSONToString2(dt) {
    var timeDate = new Date(dt * 1000).format("yyyy-MM-dd hh:mm:ss");
    return timeDate.toLocaleString();
}
//日期格式化
Date.prototype.format = function(fmt) { //author: meizz   
    var o = {
        "M+": this.getMonth() + 1, //月份   
        "d+": this.getDate(), //日   
        "h+": this.getHours(), //小时   
        "m+": this.getMinutes(), //分   
        "s+": this.getSeconds(), //秒   
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度   
        "S": this.getMilliseconds() //毫秒   
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

function evil(fn) {
    var Fn = Function; //一个变量指向Function，防止有些前端编译工具报错
    return new Fn('return ' + fn)();
}
//获取几天之后的日期
function GetDateStr(AddDayCount, number) {
    var dd = new Date();
    dd.setDate(dd.getDate() + AddDayCount); //获取AddDayCount天后的日期 
    var y = dd.getFullYear();
    var m = dd.getMonth() + 1; //获取当前月份的日期 
    var d = dd.getDate();
    if (m < 10) {
        m = '0' + m;
    }
    if (d < 10) {
        d = '0' + d;
    }
    if (number == 1) return y + "-" + m + "-" + d;
    else return y + "" + m + "" + d;
}
//时间格式化
function newDate(date) {
    var s = date;
    var ps = s.split(" ");
    var pd;
    if (ps[0].indexOf('-') > 0) {
        pd = ps[0].split("-");
    } else {
        pd = ps[0].split("/");
    }
    var pt = ps.length > 1 ? ps[1].split(":") : [0, 0, 0];
    var st = new Date(pd[0], pd[1] - 1, pd[2], pt[0], pt[1], pt[2]);
    return st;
}
//计算时间差
function dateCost(data1, data2) {
    var s1 = data1.getTime(),
        s2 = data2.getTime();
    var total = (s2 - s1) / 1000;
    var day = parseInt(total / (24 * 60 * 60)); //计算整数天数
    var afterDay = total - day * 24 * 60 * 60; //取得算出天数后剩余的秒数
    var hour = parseInt(afterDay / (60 * 60)); //计算整数小时数
    var afterHour = total - day * 24 * 60 * 60 - hour * 60 * 60; //取得算出小时数后剩余的秒数
    var min = parseInt(afterHour / 60); //计算整数分
    var afterMin = total - day * 24 * 60 * 60 - hour * 60 * 60 - min * 60; //取得算出分后剩余的秒数
    return day + "," + hour + "," + min + "," + afterMin;
}
//发送命令
function get_no(dt, set_equip, set_no, values) {
    var set_equipOld, set_noOld, valuesOld, main_instrOld, mino_instrOld;
    if (set_equip == "") {
        set_equipOld = $(dt).attr("set_equip");
        set_noOld = $(dt).attr("set_no");
    } else {
        set_equipOld = set_equip;
        set_noOld = set_no;
    }
    $.ajax({
        type: "POST",
        url: "/GWService.asmx/GetDataTableFromSQL",
        timeout: 5000,
        data: {
            sql: "select * from setParm where equip_no =" + set_equipOld + " and set_no=" + set_noOld,
            userName: window.localStorage.userName,
        },
        success: function(data) {
            var result = $(data).find('DataTable'); //返回XML格式的DataTable
            if (result.find("equip_no").html() != "") {
                if (values == "") onSetCommand11(dt, set_equipOld, result.find("main_instruction").html(), result.find("minor_instruction").html(), result.find("value").html());
                else onSetCommand11(dt, set_equipOld, result.find("main_instruction").html(), result.find("minor_instruction").html(), values);
            } else {
                alertMsgError.open();
            }
        },
        error: function(e) {
            alert(e);
        }
    });
}

function onSetCommand11(dt, equip_no, main_instr, mino_instr, valueset) {
    $.ajax({
        type: "POST",
        url: "/GWService.asmx/SetupsCommand",
        timeout: 5000,
        data: {
            equip_no: equip_no,
            main_instruction: main_instr,
            minor_instruction: mino_instr,
            value: valueset,
            user_name: window.localStorage.userName
        },
        success: function(data) {
            alertMsgSuccess.open();
        }
    });
}
var alertMsgSuccess = myApp.notification.create({
    title: '系统提示',
    titleRightText: '',
    subtitle: '<br />',
    text: '操作成功',
    closeTimeout: 2000,
});
var alertMsgError = myApp.notification.create({
    title: '系统提示',
    titleRightText: '',
    subtitle: '<br />',
    text: '操作失败或没有该命令配置',
    closeTimeout: 1000,
});
//判断是否在视口内部
$.fn.isOnScreen = function() {
    var win = $(window);
    var viewport = {
        top: win.scrollTop(),
        left: win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height(); //375
    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();
    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
};

function _errorfSet(that) {
    if ($(that).hasClass("volumebtn1") || $(that).hasClass("volumebtn2") || $(that).hasClass("volumebtn3") || $(that).hasClass("volumebtn4")) {} else if ($(that).attr("id") == "viewsSave") //照相
        $(that).attr("disabled", false);
    else {
        $(that).removeClass("displayNone").siblings("a").addClass("displayNone");
    }
    $(".tooipSpan").addClass("displayNone");
    alertMsgError.open();
}
//提取名称
function getNmae(name) {
    return name.split("\\")[name.split("\\").length - 1];
}
//引入javascript
function loadJs(url, callback, id) {
    var script = document.createElement('script');
    script.type = "text/javascript";
    script.src = url;
    script.id = id + "_1";
    document.body.appendChild(script);
    if (typeof(callback) != "undefined") {
        if (script.readyState) {
            script.onreadystatechange = function() {
                if (script.readyState == "loaded" || script.readyState == "complete") {
                    script.onreadystatechange = null;
                    callback();
                }
            }
        } else {
            script.onload = function() {
                callback();
            }
        }
    }
}
//创建websocket
var viewClass = "",
    userName = window.localStorage.userName,
    fileUrl = "c:\\MsgChat";

function createws(value) {
    url = "ws://10.8.80.1:8001?" + value;
    // url = "ws://192.168.0.152:8001?" + value;
    if ('WebSocket' in window) ws = new WebSocket(encodeURI(url));
    else if ('MOzWebSocket' in window) ws = new MozWebSocket(url);
    // else console.log("浏览器太旧，不支持");
}

function initWebSocket() {
    createws("userName=" + window.localStorage.userName + "&key=" + window.localStorage.ac_appkey + '-' + window.localStorage.ac_infokey);
    //成功建立WebSocket连接时触发onopen事件，通常客户端发送数据都是放在open事件里面
    ws.onopen = function(e) {
        if (ws != null) {
            console.log("websocket connected");
            try {
                var inputInfo = document.getElementById("inputInfo").value.trim();
                if (inputInfo == "") {
                    return;
                }
                inputInfo = {
                    sendName: window.localStorage.userName,
                    receiveName: window.localStorage.receiveUserName,
                    msg: inputInfo,
                    time: GetDateStrValue(0)
                }; //window.localStorage.userName + "@" + window.localStorage.receiveUserName + ":::" + inputInfo;
                try {
                    ws.send(JSON.stringify(inputInfo));
                } catch (e) {
                    initWebSocket();
                    send_msg();
                }
                document.getElementById("inputInfo").value = "";
            } catch (e) {}
        } else {
            myApp.dialog.alert("连接服务错误...");
        }
    };
    //接受服务器响应数据时触发onmessage事件
    ws.onmessage = function(event) {
        var dt = JSON.parse(event.data);
        var fileUrl, sendUser, receiveUser, DateTime, concentext;
        if (dt.sendName == window.localStorage.userName) {
            writeFile("c:\\MsgChat", dt.sendName, dt.receiveName, GetDateStr(0, 0), event.data, "");
        } else {
            var value = dt;
            var times = value.time.substring(11, 16)
            var html = "<div class='pannel-chat-info' >" + "           <div class='chart-person'>" + "               <img src='/Image/Ipad/person_img.png' />" + "           </div>" + "           <div class='chart-content'>" + "               " + dt.msg + "" + "           </div>" + "       </div>";
            var receName = $("#chatOtherInfoId").attr("recename"); //消息列表
            var receNames = $("#chatOtherContactId").attr("receNames"); //人员列表
            var hasClass, hasId;
            hasId = $("#" + value.sendName).hasClass('active');
            hasClass = $("." + value.sendName).hasClass('active'); //人员列表
            var nameArr = [];
            $("#mesList li").each(function(index, el) {
                var str = $(this).attr("dataId");
                nameArr.push(str)
            });
            if(!nameArr.some(function(computer){return computer == value.sendName;}))
           {
             var html = '<li onclick="loadThisMesage(this,\'' + value.sendName + '\')" class="' + value.sendName + '">' + '<div><img src="../../Image/Ipad/person_img.png" /></div>' + '<p class="item-title">' + value.sendName + ' <label>' + times + '</label></p>' + '<span class="con">' + dt.msg + '</span>' + '<font ><span class="num">0</span></font>' + '</li>';
                $("#mesList").append(html);
           }
            // if (nameArr.indexOf(value.sendName) == -1 && nameArr.indexOf(value.sendName + " active") == -1) {
            //     var html = '<li onclick="loadThisMesage(this,\'' + value.sendName + '\')" class="' + value.sendName + '">' + '<div><img src="../../Image/Ipad/person_img.png" /></div>' + '<p class="item-title">' + value.sendName + ' <label>' + times + '</label></p>' + '<span class="con">' + dt.msg + '</span>' + '<font ><span class="num">0</span></font>' + '</li>';
            //     $("#mesList").append(html);
            // }
            
            if (receName == value.sendName && hasClass) {
                $("#chatOtherInfoId").append(html);
                $("#chatOtherInfoId").scrollTop($("#chatOtherInfoId")[0].scrollHeight);
                //消息列表
                $("." + value.sendName).find(".item-title label").html(times)
                $("." + value.sendName).find(".con").html(dt.msg)
            } else {
                $("." + value.sendName).find(".item-title label").html(times)
                $("." + value.sendName).find(".con").html(dt.msg)
                var num = parseInt($("." + value.sendName).find(".num").text());
                if (num == 0) {
                    $("." + value.sendName).find("font").show().find(".num").text(num + 1);
                } else if (num < 99) {
                    $("." + value.sendName).find(".num").text(num + 1);
                }
                window.localStorage.setItem(value.sendName,1);
                $("."+value.sendName).addClass("newNotice");
            }
            if (receNames == value.sendName && hasId) {
                $("#chatOtherContactId").append(html);
                $("#chatOtherContactId").scrollTop($("#chatOtherContactId")[0].scrollHeight);
            }
        }
        try {
            //判断接收者是否选中发送者或者是发送者本人页面，是则在版面显示信息
            $(".shortContainer>section").addClass(viewClass);
            var received_msg, old_msg, msg_board = document.getElementsByClassName(viewClass)[0],
                messageView = document.getElementsByClassName("messageSection")[0];
            //底部菜单添加红点
 
            //聊天界面添加信息
            if (msg_board && viewClass.split("-").indexOf(dt.sendName) != -1 && viewClass.split("-").indexOf(dt.receiveName) != -1) {
                if (dt.sendName == window.localStorage.userName) received_msg = '<p class="img_right"><img src="/image/ic_launcher.png" /><span>' + dt.msg + "</span></p>"; //新信息
                else received_msg = '<p class="img_left"><img src="/image/ic_launcher.png" /><span>' + dt.msg + "</span></p>"; //新信息
                addRecord(msg_board, received_msg);
            }
            //再列表页面实时更新
            if (messageView) {
                $(".messageInfoList li").each(function(index) {
                    if ($(this).find(".item-title").text() == dt.sendName) {
                        $(this).find(".item-media").addClass("newNotice");
                        $(this).find(".item-after").text(dt.time);
                        $(this).find(".item-text").text(dt.msg);
                        window.localStorage.setItem(dt.sendName,1);
                    }
                });
            }
        } catch (e) {
            //推送
           
            try {
                myJavaFun.GetSystemInfor();
            } catch (ex) {}
        }
    };
    //服务器处理异常，通常在服务器里try-catch发生异常时或者连接异常时触发onerror事件
    ws.onerror = function(err) {
        // myApp.dialog.alert('err');
        // console.log("error: " + err);
    };
    //websocket连接关闭时触发onclose事件
    ws.onclose = function(event) {
        // console.log("close reason: " + event.reason);
        try {
            document.getElementsByClassName("inputInfo")[0].innerHTML = "";
        } catch (e) {}
    };
};
//写记录
function writeFile(fileUrl, sendUser, receiveUser, DateTime, concentext) {
    $.when($.fn.XmlRequset.httpPost("/api/GWServiceWebAPI/insertChatInfo", {
        data: {
            fileUrl: fileUrl,
            sendName: sendUser,
            receiveName: receiveUser,
            DateTime: DateTime,
            concentext: concentext
        },
        async: false
    })).done(function(n) {}).fail(function(e) {});
}
//读记录
function readerFile(path, isFlag) {
    $.when($.fn.XmlRequset.httpPost("/api/GWServiceWebAPI/readUrlRecord", {
        data: {
            Url: path,
        },
        async: false
    })).done(function(n) {
        let rt = n.HttpData.concenTxt;
        formatRecord(rt);
    }).fail(function(e) {
        if (isFlag) {
            var filUrlStr = result.split("\\");
            readerFile(path, false);
        }
    });
}
//处理日期
function addZero(n) {
    return n < 10 ? n = '0' + n : n;
}
//检测网络
function networkAuth() {
    navigator.onLine ? "" : exitLogin();
}
//退出登陆
function exitLogin() {
    try {
        myJavaFun.OpenLocalUrl("login");
    } catch (e) {
        if (window.localStorage.terminal != "Mobile.App") window.location.href = "/Views/login.html";
        else myApp.dialog.alert("退出登陆异常");
    }
}
//处理记录
function formatRecord(str) {
    var strArray = str.split("<br />");
    var received_msg, msg_board = document.getElementsByClassName(viewClass)[0];
    strArray.forEach(function(item, index) {
        if (item) {
            let dt = JSON.parse(item);
            if (dt.sendName == window.localStorage.userName) {
                received_msg = '<p class="img_right"><img src="/image/ic_launcher.png" /><span>' + dt.msg + "</span></p>";
                addRecord(msg_board, received_msg);
            } else {
                received_msg = '<p class="img_left"><img src="/image/ic_launcher.png" /><span>' + dt.msg + "</span></p>";
                addRecord(msg_board, received_msg);
            }
        }
    });
}
//添加记录
function addRecord(msg_board, received_msg) {
    var old_msg = msg_board.innerHTML;
    msg_board.innerHTML = old_msg + received_msg + "<br />";
    msg_board.scrollTop = msg_board.scrollTop + 60;
}
//查找实时状态
function publicAjaxData(equip_no_0) {
    var jsonData = {
        "url": "/api/real/equip_item_state",
        "data": {
            equip_no: equip_no_0
        },
        "success": _success,
        "error": _error,
        "complete": _complete
    };
    jQuery.axpost(jsonData);

    function _success(dt) {
        var result = dt.HttpData.data.YCItemDict;
        for (var ycp in result) {
            handleString(result[ycp].m_iYCNo, result[ycp].m_YCValue);
        }
        handleString(4, 76);
    }

    function _error(e) {
        // console.log(e);
    }

    function _complete(XMLHttpRequest, status) {}

    function handleString(ycp_no, value) {
        switch (ycp_no.toString()) { //console.log(value+","+ycp_no);
            case "1":
                $(".agv_ConnectState").html(value);
                break;
            case "2":
                $(".agv_AGVNo").html(value);
                break;
            case "3":
                $(".agv_MoveState").html(value);
                break;
            case "4":
                $(".agv_ElectricQuantityValue").html(value);
                $(".foxbotRight>div>span i").width(parseInt(value) + "%");
                break;
            case "5":
                $(".agv_TaskState").html(value);
                break;
            case "6":
                $(".agv_CoordX").html(value);
                break;
            case "7":
                $(".agv_CoordY").html(value);
                break;
            case "8":
                $(".agv_ExceptionState").html(value);
                break;
        }
    }
}
//温度处理
function temperatureHandle(parentId, className, equip_noPublic, set_noPublic) {
    var value;
    if (className == "qjkt4_yl_zj" || className == "qjkt4_yl_jx") value = parseInt($(parentId + " .wd_conditioner1 i").text());
    else value = parseInt($(parentId + " .wd_conditioner i").text());
    if (className == "kt1_yl_zj" || className == "kt2_yl_zj" || className == "kt3_yl_zj" || className == "kt4_yl_zj" || className == "kt5_yl_zj" || className == "qjkt4_yl_zj") {
        if (value < 34) {
            value++;
        }
    } else {
        if (value > 16) {
            value--;
        }
    }
    get_no("", equip_noPublic, set_noPublic, value);
    if (className == "qjkt4_yl_zj" || className == "qjkt4_yl_jx") $(parentId + " .wd_conditioner1 i").html(value);
    else $(parentId + " .wd_conditioner i").html(value);
}
//空调控制风速
function airConditionerControl(parentId, windSpeedLevel) {
    $(parentId + " .conditioner_view_p1 em[windSpeedIndex='" + windSpeedLevel + "']").addClass("selectFontWhite").siblings("em").removeClass("selectFontWhite");
}

function airConditionerModul(parentId, windSpeedLevel) {
    $(parentId + " .conditioner_view_p2 i[windSpeedIndex='" + windSpeedLevel + "']").addClass("selectFontWhite").siblings("i").removeClass("selectFontWhite");
}

function returnIndex(className) {
    var windspeedIndex = parseInt($(className).attr("windSpeedIndex"));
    windspeedIndex++;
    if (windspeedIndex <= 4) {} else {
        windspeedIndex = 1;
    }
    return windspeedIndex;
}
//遥信表
function getStatus() { //检测实时状态，1为开，0为关
    var jsonData = {
        "url": "/api/real/equip_item_state",
        "data": {
            equip_no: equipNo_1,
            ycp_no: ycp_no_1
        },
        "success": _successfYxp,
        "error": _errorfYxp,
        "complete": _completefYxp
    };
    jQuery.axpost(jsonData);

    function _successfYxp(data) {
        var resultJs = data.HttpData;
        if (resultJs.code == 200) {
            //设备号 50 ，状态 开--
        }
    }

    function _errorfYxp(e) {}

    function _completefYxp(XMLHttpRequest, status) {}
}
var allEquipNo = 300,levels = 6,setInterTimeValue = 5000,publicStr = ':呼叫';

function inithistoryInfoHTML_all(obj, className_child, className_parent) {
    var domHTML = "<li dataTime='" + obj.time + "'>" + "<a href=\"#\" class=\"item-link item-content\" data_obj='" + JSON.stringify(obj) + "' >" + "<div class=\"item-media " + (!obj.confirmname ? className_child : 1) + "\"><img src=\"/image/notice/" + obj.ycyx_no + ".png\" width=\"60\"/></div>" + "<div class=\"item-inner\">" + "<div class=\"item-title-row\">" + "<div class=\"item-title\">呼叫通知</div>" + "<div class=\"item-after\">" + obj.time.substr(-8) + "</div>" + "</div>" + "<div class=\"item-text\">" + getCallAddress(obj.event) + "</div>" + "</div>" + "</a>" + "</li>";
    $(className_parent).prepend(domHTML);
    $(".noticeInfoList  li a,.allInfoList li a,.swimmingInfoList li a,.msg_comfig").unbind();
    $(".noticeInfoList  li a,.allInfoList li a,.swimmingInfoList li a").bind("click", function() {
        var that = $(this),
            thisObj = JSON.parse($(this).attr("data_obj")),
            getName = thisObj.confirmname;
        $(".msgFloor label").text(getFloor(obj.ycyx_no));
        $(".msgPosition label").text(thisObj.event);
        $(".msgCallTime label").text(thisObj.time.replace("T", " "));
        $(".alertMSG").toggle(500);
        if (getName) {
            $(".msg_comfig").css({
                "pointer-events": "none"
            }).text(getName + " 已确认");
        } else {
            $(".msg_comfig").css({
                "pointer-events": "visible"
            }).text("确认通知");
        }
        //确认按钮
        $(".msg_comfig").unbind();
        $(".msg_comfig").bind("click", function() {
            $(".alertMSG").slideUp(500);
            //插入数据库
            $.when(AlarmCenterContext.post("/api/event/real_evt", {
                levels: levels
            })).done(function(n) {
                let rt = n.HttpData;
                if (rt.code == 200 && rt.data) {
                    rt.data.forEach(function(item, index) {
                        var timeResult = item.Time.replace("T", " ");
                        if (item.Equipno == obj.equip_no && item.Ycyxno == obj.ycyx_no) $.when(AlarmCenterContext.post("/api/event/confirm_evt", {
                            msg: "已确认",
                            shortmsg: true,
                            telUser: "",
                            evtname: item.EventMsg,
                            time: timeResult,
                            userName: window.localStorage.userName
                        })).done(function(l) {
                            let rt = l.HttpData;
                            if (rt.code == 200 && rt.data) {
                                infoHandle(obj.ycyx_no + "-是");
                                thisObj.confirmname = window.localStorage.userName;
                                that.attr("data_obj", JSON.stringify(thisObj)).find("div.item-media").removeClass("newNotice");
                                confirmNoticeFun(allEquipNo); //初始化确认和待确认
                            }
                        }).fail(function(e) {});
                    });
                }
            }).fail(function(e) {});
        });
    });
}
// 通知待确认和已确认
function confirmNoticeFun(equipNO) {
    var jsonStringChild = {
        str: publicStr,
        equip_no: equipNO,
        timeStr: getDateTimeNotice(0)
    };
    $.when(AlarmCenterContext.post("/api/GWServiceWebAPI/getCallRecord?" + $.param(jsonStringChild))).done(function(n) {
        let rt = n.HttpData;
        if (rt.code == 200 && rt.data.length >= 1) {
            var dt = rt.data,
                unconfirmedNumber = 0;
            dt.forEach(function(item, index) {
                if (!item.confirmname) unconfirmedNumber++;
            });
            $(".toBeComfirm").text(unconfirmedNumber);
            $(".ComfirmContainer>label").text(dt.length - unconfirmedNumber); //已确认
        }
    }).fail(function(e) {});
}

function getDateTime_res(AddDayCount) {
    var dd = new Date();
    dd.setDate(dd.getDate() + AddDayCount); //获取AddDayCount天后的日期 
    var y = dd.getFullYear(),
        m = beforeAddZero(dd.getMonth() + 1),
        d = beforeAddZero(dd.getDate()),
        h = beforeAddZero(dd.getHours()),
        ms = beforeAddZero(dd.getMinutes()),
        s = beforeAddZero(dd.getSeconds());
    return y + "-" + m + "-" + d + " " + h + ":" + ms + ":" + s;
}

function getDateTimeNotice(AddDayCount) {
    var dd = new Date();
    dd.setDate(dd.getDate() + AddDayCount); //获取AddDayCount天后的日期 
    var y = dd.getFullYear(),
        m = beforeAddZero(dd.getMonth() + 1),
        d = beforeAddZero(dd.getDate());
    return y + "-" + m + "-" + d + " 00:00:00.000";
}

function beforeAddZero(val) {
    return val < 10 ? ('0' + val) : val;
}
//通知跳转
function locationNotice() {
    myApp.router.navigate('/notice/');
}
//房间内部有无人
function handleHomeState(index, judgePeople1, judgePeople2, judgePeople3) {
    if (judgePeople1 == "有人" || judgePeople2 == "有人" || judgePeople3 == "有人") {
        $("#homeDeatils" + index).find("i.positionCenter").removeClass("icon-peopleNone").addClass("icon-peopleBlock"); //里面详情
        $(".homeSection li:eq(" + index + ") a").find("i").removeClass("icon-peopleNone").addClass("icon-peopleBlock");
    } else {
        $("#homeDeatils" + index).find("i.positionCenter").removeClass("icon-peopleBlock").addClass("icon-peopleNone"); //里面详情
        $(".homeSection li:eq(" + index + ") a").find("i").removeClass("icon-peopleBlock").addClass("icon-peopleNone");
    }
}
//遥信遥测
function yxpHome() {
    //有人无人
    $.when(AlarmCenterContext.post("/api/real/equip_item_state", {
        equip_no: allEquipNo
    })).done(function(n) {
        //房间有无人
        try {
            var yxpItem = n.HttpData.data.YXItemDict;
            handleHomeState(0, yxpItem["33"].m_YXState, yxpItem["34"].m_YXState, ""); //客房1
            handleHomeState(1, yxpItem["68"].m_YXState, yxpItem["69"].m_YXState, ""); //客房2
            handleHomeState(2, yxpItem["103"].m_YXState, yxpItem["104"].m_YXState, ""); //客房3
            handleHomeState(3, yxpItem["164"].m_YXState, yxpItem["165"].m_YXState, yxpItem["166"].m_YXState); //客房4
            handleHomeState(4, yxpItem["199"].m_YXState, yxpItem["200"].m_YXState, "");
        } catch (e) {} //客房5
    }).fail(function(e) {});
    //检测通知确认状态
    addEventListenerNoticeStatus();
    judgeNewData(allEquipNo);
}
// 信息处理 --- 插入数据库信息，如果是通知页面，则查询；如果是历史记录，则查询
function infoHandle(val) {
    switch (val) {
        case "300-是":
            get_no("notice", 300, 500, "");
            break; //insertNoticeHistory(300,"客房1呼叫");
        case "301-是":
            get_no("notice", 300, 501, "");
            break; //insertNoticeHistory(301,"客房2呼叫");
        case "302-是":
            get_no("notice", 300, 502, "");
            break; //insertNoticeHistory(302,"客房3呼叫");
        case "303-是":
            get_no("notice", 300, 503, "");
            break; //insertNoticeHistory(303,"客房4呼叫");
        case "304-是":
            get_no("notice", 300, 504, "");
            break; //insertNoticeHistory(304,"客房5呼叫");
        case "305-是":
            get_no("notice", 300, 505, "");
            break; //insertNoticeHistory(305,"贵宾室1呼叫");
        case "306-是":
            get_no("notice", 300, 506, "");
            break; //insertNoticeHistory(306,"贵宾室2呼叫");
        case "307-是":
            get_no("notice", 300, 507, "");
            break; //insertNoticeHistory(307,"茶室呼叫");
        case "308-是":
            get_no("notice", 300, 508, "");
            break; //insertNoticeHistory(308,"酒窖呼叫");
        case "309-是":
            get_no("notice", 300, 509, "");
            break; //insertNoticeHistory(309,"高尔夫室呼叫");
        case "310-是":
            get_no("notice", 300, 510, "");
            break; //insertNoticeHistory(310,"IMAX影院呼叫");
        case "311-是":
            get_no("notice", 300, 511, "");
            break; //insertNoticeHistory(311,"KTV呼叫");
        case "312-是":
            get_no("notice", 300, 512, "");
            break; //insertNoticeHistory(312,"棋牌室呼叫");
        case "313-是":
            get_no("notice", 300, 513, "");
            break; //insertNoticeHistory(313,"乒乓球室呼叫");
        case "314-是":
            get_no("notice", 300, 514, "");
            break; //insertNoticeHistory(314,"SPA1呼叫");
        case "315-是":
            get_no("notice", 300, 515, "");
            break; //insertNoticeHistory(315,"SPA2呼叫");
        case "100-是":
            get_no("notice", 22, 2, "");
            break; //insertNoticeHistory(100,"测试");
        default:
            break;
    }
}

function pushInfoMessage() {
    //推送 
    $.when(AlarmCenterContext.post("/api/GWServiceWebAPI/gwPushGroupInfo?str=GWJPush.dll")).done(function(n) {
        let rt = n.HttpData;
        if (rt.code == 200) {
            try {
                var data = JSON.parse(rt.data[0].Proc_parm);
                jpush.SetAlias(data.Audience.Alias.toString()); // 设置别名
                jpush.SetTags(data.Audience.Tag.toString()); //设置tag
                // jpush.SetAppId(data.masterSecret.toString(),data.AppKey.toString()); // id
            } catch (e) {}
        }
    }).fail(function(e) {});
}
Array.prototype.indexOf = function(val) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == val) return i;
    }
    return -1;
};
Array.prototype.remove = function(val) {
    var index = this.indexOf(val);
    if (index > -1) {
        this.splice(index, 1);
    }
};
//返回楼层
function getFloor(val) {
    var result = parseInt(val);
    if (result == 300 || result == 301 || result == 302 || result == 303 || result == 304 || result == 314 || result == 315) return "49";
    else if (result == 309 || result == 310 || result == 311 || result == 312 || result == 313) return "48";
    else if (result == 305 || result == 306 || result == 307 || result == 308) return "47";
}
//更新是否确认状态
function addEventListenerNoticeStatus() {


    let jsonString = {str: publicStr, equip_no: allEquipNo, timeStr: getDateTimeNotice(0) };
    $.when(AlarmCenterContext.post("/api/GWServiceWebAPI/getCallRecord?" + $.param(jsonString))).done(function(n, l) {
       if(!sUserAgentFlag)
       {
        // Phone
        
        $("#noticeTool").removeClass("serverCallCircle");//移除底部红点
        let rt = n.HttpData;
        if (rt.code == 200 && rt.data) {
            var result = rt.data,idStr = $(".page-current").attr("id"),dom = $(".historyInfoContainer a.tab-link-active");
            result.forEach(function(itemChild, indexChild) {
                if (itemChild.equip_no == allEquipNo  && !itemChild.confirmname )
                  {$("#noticeTool").addClass("serverCallCircle");isCircle = false;return;}
            });
            if (idStr == "notice") //通知页面
                $(".noticeInfoList li").each(function(index) {
                    var item = $(this),objThis = JSON.parse(item.find("a").attr("data_obj"));
                    result.forEach(function(itemChild, indexChild) {
                        if (objThis.equip_no == itemChild.equip_no && objThis.ycyx_no == itemChild.ycyx_no && item.find(".item-media").hasClass("newNotice") && itemChild.confirmname && itemChild.time == item.attr("datatime")) {
                            item.find(".newNotice").removeClass("newNotice");
                            objThis.confirmname = itemChild.confirmname;
                            item.find("a").attr("data_obj", JSON.stringify(objThis));
                        }
                    });
                });
            else if(idStr == "historyInfo")  //历史记录页面
                $(dom.attr("href")+">div>ul>li").each(function(index) {
                    var item = $(this),objThis = JSON.parse(item.find("a").attr("data_obj"));
                    result.forEach(function(itemChild, indexChild) {
                        if (objThis.equip_no == itemChild.equip_no && objThis.ycyx_no == itemChild.ycyx_no && item.find(".item-media").hasClass("newNotice") && itemChild.confirmname && itemChild.time == item.attr("datatime")) {
                            item.find(".newNotice").removeClass("newNotice");
                            objThis.confirmname = itemChild.confirmname;
                            item.find("a").attr("data_obj", JSON.stringify(objThis));
                        }
                    });
                });
            // 更新待确认和已确认
            var dt = rt.data,
                unconfirmedNumber = 0;
            dt.forEach(function(item, index) {
                if (!item.confirmname) unconfirmedNumber++;
            });
            $(".toBeComfirm").text(unconfirmedNumber);
            $(".ComfirmContainer>label").text(dt.length - unconfirmedNumber); //已确认
           }
        }
        else
        {
            //iPad
                var roomYcKey = {
                    /*点：个数-是否-时间*/
                    '100': '0-0-00:00',
                    '300': '0-0-00:00',
                    '301': '0-0-00:00',
                    '302': '0-0-00:00',
                    '303': '0-0-00:00',
                    '304': '0-0-00:00',
                    '305': '0-0-00:00',
                    '306': '0-0-00:00',
                    '307': '0-0-00:00',
                    '308': '0-0-00:00',
                    '309': '0-0-00:00',
                    '310': '0-0-00:00',
                    '311': '0-0-00:00',
                    '312': '0-0-00:00',
                    '313': '0-0-00:00',
                    '314': '0-0-00:00',
                    '315': '0-0-00:00'
                };
            var dat = n.HttpData.data,lg = dat.length;
            if (lg > 0) {
                for (var i = 0; i < lg; i++) {
                    var value = dat[i],str = roomYcKey[value.ycyx_no],num = parseInt(str.split("-")[0]),time;
                    if (!value.confirmname) {
                        num++;
                        time = value.time.substring(10, 16);
                    }
                    roomYcKey[value.ycyx_no] = [num, str.split("-")[1], time].join("-");
                }
                var id = 100;//$(".bg-dark").attr("id");
                if (window.localStorage.checkId != "" && window.localStorage.checkId && (window.localStorage.checkId == id)) {
                    try{timerLoad(window.localStorage.checkId);}catch(e){}
                }
            }
            //移除底部红点
            $("#serviceCallTool").removeClass("serverCallCircle");
            for (var value in roomYcKey) {
                var str = roomYcKey[value].split("-");
                if (str[0] < 1) {
                    $("#" + value).find(".nums").text(0);
                    $("#" + value).find("font").hide();
                    $("#" + value).find(".sub").text("暂无新呼叫待处理");
                    var myDate = new Date();
                    var hours = (myDate.getHours()) < 10 ? ("0" + myDate.getHours()) : myDate.getHours();
                    var min = (myDate.getMinutes()) < 10 ? ("0" + myDate.getMinutes()) : myDate.getMinutes();
                    $("#" + value).find("label").text(hours + ':' + min);
                } else {
                    let time = str[2].replace("T","");
                    $("#" + value).find("font").show().find(".nums").text(str[0]);
                    $("#" + value).find(".sub").text("您有新的呼叫待确认");
                    $("#" + value).find("label").text(time);
                    $("#serviceCallTool").addClass("serverCallCircle");
                }
            }

        }
    }).fail(function(e) {});
}
//是否插入新数据
function judgeNewData(equipNO) {

    var idStr = $(".page-current").attr("id"),dom = $(".historyInfoContainer a.tab-link-active");
    if ((idStr == "notice" && $(".noticeInfoList li").length >= 0) || (idStr == "historyInfo" && $(dom.attr("href")+">div>ul>li").length > 0)) {
        let timeVal = "";
        if(idStr == "notice" && $(".noticeInfoList li").length == 0)
            timeVal = getDateTimeNotice(0);
        else
            idStr == "notice"?timeVal =$(".noticeInfoList li:eq(0)").attr("dataTime").replace("T", " "):timeVal = $(dom.attr("href")+">div>ul>li:eq(0)").attr("dataTime").replace("T", " ");
        jsonString = {
            str: publicStr,
            equip_no: equipNO,
            timeStr: timeVal,
        };
        $.when(AlarmCenterContext.post("/api/GWServiceWebAPI/getCallRecord?" + $.param(jsonString))).done(function(n) {
            let rt = n.HttpData;
            if (rt.code == 200 && rt.data.length >= 1) {
                var dt = rt.data;
                dt.forEach(function(item, index) {
                    if (idStr == "notice") {

                        inithistoryInfoHTML_all(item, "newNotice", ".noticeInfoList");
                    }
                    else if(idStr == "historyInfo")
                        {  historyInfoFun(item);}

                });
                confirmNoticeFun(allEquipNo); //初始化确认和待确认
            }
        }).fail(function(e) {});
    }
}
function historyInfoFun(item){
    let dom = $(".historyInfoContainer a.tab-link-active");
    inithistoryInfoHTML_all(item, "newNotice", dom.attr("href")+">div>ul");
}

//返回正确呼叫地点
function getCallAddress(val){


    return val.split("-")[1].split("-")[0]+"呼叫";

}