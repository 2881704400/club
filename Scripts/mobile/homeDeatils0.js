function homeDeatils0() {
    homeDeatilsDataunCheck.forEach(function(item, index) {
        if (item.className != "") {
            $("." + item.className).unbind();
            $("." + item.className).bind("click", function() {
                var that = $(this);
                that.addClass("displayNone").siblings("a").removeClass("displayNone");
                if (item.isFlag) //弹起
                {
                    setTimeout(function() {
                        that.removeClass("displayNone").siblings("a").addClass("displayNone");
                    }, 300);
                }
                if (item.Independent) //排斥同类唯一
                {
                    that.parent().siblings().find("a").addClass("displayNone");
                    that.parent().siblings().find("a:eq(0)").removeClass("displayNone");
                }
                //空调
                airConHandle0(item.className);
                //音乐
                musicHandle0(item.className);
                //发送命令
                if (item.equip_no) get_no(this, item.equip_no, item.setNo, "");
            });
        }
    });
    //初始状态值
    yxpHomeDeatils0(true);
    setHomeTime0 = setInterval(function() {
        yxpHomeDeatils0(false);
    }, 5000);
}
//选择灯光照明后者模式
function onLightingList0() {
    window.localStorage.LightingList0 = $("#lighting_0").find("option:selected").attr("value");
    if (window.localStorage.LightingList0 == 0) {
        $(".lightingAndPattern_0").removeClass("displayNone");
        $(".lightingAndPattern_1").addClass("displayNone");
    } else {
        $(".lightingAndPattern_1").removeClass("displayNone");
        $(".lightingAndPattern_0").addClass("displayNone");
    }
}
//初始化
function initGustRoomEquip0() {
    airConditionerControl(3);
}
//空调专属处理
function airConHandle0(className) {
    switch (className) {
        case "kt1_yl_zj":
            temperatureHandle("#homeDeatils0", className, 300, 58);
            break;
        case "kt1_yl_jx":
            temperatureHandle("#homeDeatils0", className, 300, 58);
            break;
        case "kt1_fs_td":
            windSpeendAir0(returnIndex("#homeDeatils0 em.selectFontWhite"));
            airConditionerControl("#homeDeatils0", returnIndex("#homeDeatils0 em.selectFontWhite"));
            break;
        case "kt1_ms_qh":
            moduleAir0(returnIndex("#homeDeatils0 i.selectFontWhite"));
            airConditionerModul("#homeDeatils0", returnIndex("#homeDeatils0 i.selectFontWhite"));
            break;
    }
}
//音乐处理
function musicHandle0(className) {
    if (className == "yy1_ylzd") {
        window.localstorage.volumeValue1 < 100 ? window.localstorage.volumeValue1++ : "";
        get_no("", 300, 68, parseInt(window.localstorage.volumeValue1));
    } else if (className == "yy1_yljx") {
        window.localstorage.volumeValue1 > 0 ? window.localstorage.volumeValue1-- : "";
        get_no("", 300, 68, parseInt(window.localstorage.volumeValue1));
    }
}
//切换窗帘
function switchCurtains0() {
    var value = $(".curtains0 option:selected").val();
    $("#homeDeatils0 .curtainsDD").removeClass("viewDisplay");
    $("#homeDeatils0 .curtainsDD[datanumber='cl1" + value + "']").addClass("viewDisplay");
}
//风速处理
function windSpeendAir0(index) {
    switch (index.toString()) {
        case "1":
            get_no("", 300, 51, "");
            break;
        case "2":
            get_no("", 300, 52, "");
            break;
        case "3":
            get_no("", 300, 53, "");
            break;
        case "4":
            get_no("", 300, 50, "");
            break;
    }
}
//模式处理
function moduleAir0(index) {
    switch (index.toString()) {
        case "1":
            get_no("", 300, 54, "");
            break;
        case "2":
            get_no("", 300, 55, "");
            break;
        case "3":
            get_no("", 300, 56, "");
            break;
        case "4":
            get_no("", 300, 57, "");
            break;
    }
}
//遥信遥测
function yxpHomeDeatils0(isJudge) {
    $.ajax({
        type: "POST",
        url: "/api/real/equip_item_state",
        timeout: 5000,
        headers: {
            Authorization: window.localStorage.ac_appkey + '-' + window.localStorage.ac_infokey
        },
        data: {
            equip_no: '300'
        },
        success: function(data) {
            // ***yxp****
            var yxpItem = data.HttpData.data.YXItemDict;
            //有无人
            // handleDeatils0People(yxpItem["33"].m_YXState, yxpItem["34"].m_YXState, ""); //客房1
            if (isJudge) {
                handleDeatils0State(1, yxpItem["1"].m_YXState); //卫生间灯光
                for (var i = 2; i <= 11; i++) handleDeatils0State(i, yxpItem[i].m_YXState); //卧室场景灯光
                for (var i = 12; i <= 17; i++) handleDeatils0State(i, yxpItem[i].m_YXState); //卫生间场景灯光
                handleDeatils0State(18, yxpItem["18"].m_YXState); //空调开关
                for (var i = 19; i <= 22; i++) handleDeatils0State(i, yxpItem[i].m_YXState); //空调风速
                for (var i = 23; i <= 26; i++) handleDeatils0State(i, yxpItem[i].m_YXState); //空调模式
                handleDeatils0State(27, yxpItem["27"].m_YXState); //歌曲播放关闭
                var ycpItem = data.HttpData.data.YCItemDict;
                $("#homeDeatils0 .wd_conditioner").find("i").text(ycpItem["14"].m_YCValue); //卧室空调温度
                window.localStorage.volumeValue1 = ycpItem["15"].m_YCValue;
            }
        }
    });
}
//处理状态值
function handleDeatils0State(parntIndex, status) {
    if (status == "灯开" || status == "是" || status == "开启") {
        homeDeatilsDataunCheck.forEach(function(item, index) {
            if(item.className)
            if (item.yx_no == 19 || item.yx_no == 20 || item.yx_no == 21 || item.yx_no == 22) //风速
            {
                $("." + item.className).addClass("selectFontWhite").siblings("em").removeClass("displayNone");
            } else if (item.yx_no == 23 || item.yx_no == 24 || item.yx_no == 25 || item.yx_no == 26) //模式
            {
                $("." + item.className).addClass("selectFontWhite").siblings("i").removeClass("selectFontWhite");
            } else if (item.yx_no == parntIndex) { //其它
                $("." + item.className).addClass("displayNone").siblings().removeClass("displayNone");
            }
        });
    }
}
//处理状态值
// function handleDeatils0People(judgePeople1, judgePeople2, judgePeople3) {
//     if (judgePeople1 == "有人" || judgePeople2 == "有人" || judgePeople3 == "有人") {
//         $("#homeDeatils0").find("i.positionCenter").removeClass("icon-peopleNone").addClass("icon-peopleBlock");
//     } else {
//         $("#homeDeatils0").find("i.positionCenter").removeClass("icon-peopleBlock").addClass("icon-peopleNone");
//     }
// }