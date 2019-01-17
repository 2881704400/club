
var callTimer = "";

function serviceCall() {
    // getEquipCall()
    toolbarActiveImg('serviceCallTool');
    window.localStorage.checkId = "";
    var searchbar1 = myApp.searchbar.create({
        el: '.searchbar-ones',
        searchContainer: '.search-here',
        searchIn: 'li',
    });
    //初始化清空
   $("#pannelMainId1").html("");
    // loadNum();
}
/*时间有呼叫未呼叫的时间,没有呼叫就是当前时间*/
// function loadNum() {

//     //获取当天通知
//    var jsonString = {str: publicStr,equip_no: allEquipNo,timeStr: getDateTimeNotice(0)},url = "/api/GWServiceWebAPI/getCallRecord?"+$.param(jsonString);
//    $.when(AlarmCenterContext.post(url)).done(function(e) {
//         var dat = e.HttpData.data,
//             lg = dat.length;
//         if (lg > 0) {
//             for (var i = 0; i < lg; i++) {
//                 var value = dat[i],str = roomYcKey[value.ycyx_no],num = parseInt(str.split("-")[0]),time;
//                 if (!value.confirmname) {
//                     num++;
//                     time = value.time.substring(10, 16);
//                 }
//                 roomYcKey[value.ycyx_no] = [num, str.split("-")[1], time].join("-");
//             }
//             var id = 100;//$(".bg-dark").attr("id");
//             if (window.localStorage.checkId != "" && window.localStorage.checkId && (window.localStorage.checkId == id)) {
//                 timerLoad(window.localStorage.checkId);
//             }
//         }
//         //移除底部红点
//         $("#serviceCallTool").removeClass("serverCallCircle");
//         for (var value in roomYcKey) {
//             var str = roomYcKey[value].split("-");
//             if (str[0] < 1) {
//                 $("#" + value).find(".nums").text(0);
//                 $("#" + value).find("font").hide();
//                 $("#" + value).find(".sub").text("暂无新呼叫待处理");
//                 var myDate = new Date();
//                 var hours = (myDate.getHours()) < 10 ? ("0" + myDate.getHours()) : myDate.getHours();
//                 var min = (myDate.getMinutes()) < 10 ? ("0" + myDate.getMinutes()) : myDate.getMinutes();
//                 $("#" + value).find("label").text(hours + ':' + min);
//             } else {
//             	let time = str[2].replace("T","");
//                 $("#" + value).find("font").show().find(".nums").text(str[0]);
//                 $("#" + value).find(".sub").text("您有新的呼叫待确认");
//                 $("#" + value).find("label").text(time);
//                 $("#serviceCallTool").addClass("serverCallCircle");
//             }
//         }
//     }).fail(function() {
//         alertMsgError.open();
//     })
//     callTimer = setTimeout(function() {
//         loadNum();
//     }, 2000);
// }

var messId = [];

//定时刷新
function timerLoad(valueStr) {

    var idValue = valueStr;
    //获取固定地点通知
    let timeVal =  ($("#pannelMainId1>div.pannel-box:eq(0)")?$("#pannelMainId1>div.pannel-box:eq(0)").attr("time"):getDateTimeNotice(0)),jsonString = {str: publicStr,equip_no: allEquipNo,set_no: valueStr,timeStr: timeVal };

    $.when(AlarmCenterContext.post("/api/GWServiceWebAPI/getFixedCallRecord?" + $.param(jsonString))).done(function(e) {
        var dat = e.HttpData.data,lg = dat.length,nums = 0,ahtml="",html="";
        for (var i = 0; i < dat.length; i++) {
            var value = dat[i],date = value.time.split("T");
            if (!value.confirmname) {
                ahtml = '<a targ="' + idValue + '" onclick="sureNotice(this,' + value.id + ')" href="#" data_obj=\''+JSON.stringify(value)+'\'>确认通知</a>';
                nums++;
                $("#" + idValue).find("label").text(value.time.substring(10, 16));
            } else {
                ahtml = '<a class="active" href="#">已经确认</a>';
            }
            html = '<p>' + date[1].substring(0, 8) + '</p>' + '<div class="pannel-box" time = "'+value.time+'">' + '<div>' + '<p>' +
                // '<span>通知楼层</span>'+
                '<span>通知位置</span>' + '<span>通知时间</span>' + '</p>' + '<p>' +
                // '<span>18层</span>'+
                '<span>' + getCallAddress(value.event) + '</span>' + '<span>' + date[0] + '</span>' + '</p>' + ahtml + '</div>' + '</div>';
                $("#pannelMainId1").prepend(html)
        }
        // if (nums > 0) {
        //     $("#" + idValue).find(".nums").text(nums).parent().show();
        // } else {
        //     $("#" + idValue).find(".nums").parent().hide();
        // }

    }).fail(function() {
        alertMsgError.open();
    })
}

//单击对应项初始化
function loadNotice1(dom, valueStr) {
    messId = [];
    window.localStorage.checkId = valueStr;
    if (dom) {
        $(dom).addClass('bg-dark').siblings().removeClass('bg-dark');
    }
    $("#pannelMainId1").html("")
    var idValue = valueStr;
   // 获取固定地点通知
   let jsonString = {str: publicStr,equip_no: allEquipNo,set_no: valueStr,timeStr: getDateTimeNotice(0)};
   $.when(AlarmCenterContext.post("/api/GWServiceWebAPI/getFixedCallRecord?" + $.param(jsonString))).done(function(e) {
        var dat = e.HttpData.data,lg = dat.length,nums = 0;

        for (var i = 0; i < dat.length; i++) {
            var value = dat[i],date = value.time.split("T"),ahtml="",html = "";  
            if (!value.confirmname) {
                ahtml = '<a targ="' + idValue + '" onclick="sureNotice(this,' + value.id + ')" href="#" data_obj=\''+JSON.stringify(value)+'\'>确认通知</a>';
                nums++;
                $("#" + idValue).find("label").text(value.time.substring(10, 16));
            } else {
                ahtml = '<a class="active" href="#">已经确认</a>';
            }
           
            html = '<p>' + date[1].substring(0, 8) + '</p>' + '<div class="pannel-box" time = "'+value.time+'">' + '<div>' + '<p>' +
                // '<span>通知楼层</span>'+
                '<span>通知位置</span>' + '<span>通知时间</span>' + '</p>' + '<p>' +
                // '<span>18层</span>'+
                '<span>' + getCallAddress(value.event) + '</span>' + '<span>' + date[0] + '</span>' + '</p>' + ahtml + '</div>' + '</div>';
            $("#pannelMainId1").prepend(html)
        }
        // if (nums > 0) {
        //     $("#" + idValue).find(".nums").text(nums).parent().show();
        // } else {
        //     $("#" + idValue).find(".nums").parent().hide();
        // }
        //加载完成进行轮询
         //clearTimeout(callTimer);
         // timerLoad(valueStr);
    }).fail(function(e) {});

    // $.ajax({
    //     url: '/api/GWServiceWebAPI/gwFixeddateNoticeRadio',
    //     type: 'post',
    //     data: {
    //         set_no: value
    //     },
    //     headers: {
    //         Authorization: window.localStorage.ac_appkey + '-' + window.localStorage.ac_infokey
    //     }
    // }).done(function(e) {
    //     var dat = e.HttpData.data;
    //     var lg = dat.length,
    //         nums = 0;
    //     for (var i = 0; i < dat.length; i++) {
    //         var value = dat[i];
    //         messId.push(value.id);
    //         var date = value.time.split(" ");
    //         if (!value.confirmTime) {
    //             var ahtml = '<a targ="' + idValue + '" onclick="sureNotice(this,' + value.id + ')" href="#">确认通知</a>';
    //             nums++;
    //             $("#" + idValue).find("label").text(value.time.substring(10, 16));
    //         } else {
    //             var ahtml = '<a class="active" href="#">已经确认</a>';
    //         }
    //         var html = '<p>' + date[1].substring(0, 5) + '</p>' + '<div class="pannel-box">' + '<div>' + '<p>' +
    //             // '<span>通知楼层</span>'+
    //             '<span>通知位置</span>' + '<span>通知时间</span>' + '</p>' + '<p>' +
    //             // '<span>18层</span>'+
    //             '<span>' + value.event + '</span>' + '<span>' + date[0] + '</span>' + '</p>' + ahtml + '</div>' + '</div>';
    //         if (!value.confirmTime) {
    //             $("#pannelMainId1").prepend(html)
    //         } else {
    //             $("#pannelMainId1").append(html)
    //         }
    //     }
    //     if (nums > 0) {
    //         $("#" + idValue).find(".nums").text(nums).parent().show();
    //     } else {
    //         $("#" + idValue).find(".nums").parent().hide();
    //     }
    // }).fail(function() {
    //     alertMsgError.open();
    //     // console.log("error");
    // })
}

function sureNotice(dom, id) {
    // var myDate = new Date();
    // var year = myDate.getFullYear();
    // var mon = (myDate.getMonth() + 1) < 10 ? ("0" + (myDate.getMonth() + 1)) : (myDate.getMonth() + 1);
    // var day = myDate.getDate() < 10 ? ("0" + myDate.getDate()) : myDate.getDate();
    // var hours = (myDate.getHours()) < 10 ? ("0" + myDate.getHours()) : myDate.getHours();
    // var min = (myDate.getMinutes()) < 10 ? ("0" + myDate.getMinutes()) : myDate.getMinutes();
    // var sec = (myDate.getSeconds()) < 10 ? ("0" + myDate.getSeconds()) : myDate.getSeconds();
    // var str = year + "-" + mon + "-" + day + " " + hours + ":" + min + ":" + sec;
    // $.ajax({
    //     url: '/api/GWServiceWebAPI/set_BatchUpdate',
    //     type: 'post',
    //     data: {
    //         getDataTable: 'gw_historicalNotice',
    //         cellDataList: "confirmTime='" + str + "'",
    //         ifDataList: 'id=' + id
    //     },
    //     headers: {
    //         Authorization: window.localStorage.ac_appkey + '-' + window.localStorage.ac_infokey
    //     }
    // }).done(function(e) {
    //     var dat = e.HttpData.data;
    //     if (dat != 0) {
    //         alertMsgSuccess.open();
    //         $(dom).addClass('active').text("已经确定");
    //         var tag = $(dom).attr("targ");
    //         var num = parseInt($("#" + tag).find(".nums").text());
    //         loadNum();
    //         // if(num==1){
    //         //  $("#"+tag).find("font").hide();
    //         //  $("#"+tag).find(".sub").text('暂无新的呼叫');
    //         // }
    //         // else{
    //         //  $("#"+tag).find(".sub").text('您有新的呼叫待确认');
    //         // }
    //     }
    // }).fail(function() {
    //     alertMsgError.open();
    // })

    var serverObj = JSON.parse($(dom).attr("data_obj"))
    $.when(AlarmCenterContext.post("/api/event/real_evt", {
        levels: levels
    })).done(function(n) {
        let rt = n.HttpData;
        if (rt.code == 200 && rt.data) {
            rt.data.forEach(function(item, index) {
                var timeResult = item.Time.replace("T", " ");
                if (item.Equipno == serverObj.equip_no && item.Ycyxno == serverObj.ycyx_no) 
                $.when(AlarmCenterContext.post("/api/event/confirm_evt", {
                    msg: "已确认",
                    shortmsg: true,
                    telUser: "",
                    evtname: item.EventMsg,
                    time: timeResult,
                    userName: window.localStorage.userName
                })).done(function(e) {
			        var dat = e.HttpData.data;
			        if (dat != 0) {
			            alertMsgSuccess.open();
			            $(dom).addClass('active').text("已经确定");
			            var tag = $(dom).attr("targ");
			            var num = parseInt($("#" + tag).find(".nums").text());
			           
			        }
                }).fail(function(e) {});
            });
        }
    }).fail(function(e) {});

}

function getEquipCall() {
    $.ajax({
        type: "post",
        url: "/GWService.asmx/GetRealTimeData",
        async: false,
        data: {
            equip_no: '300',
            table_name: 'ycp'
        },
        success: function(res) {
            var dat = JSON.parse($(res).find("string").text());
            for (var i = 0; i < dat.length; i++) {
                var value = dat[i];
                if (roomYcKey[value.m_iYCNo]) {
                    var str = roomYcKey[value.m_iYCNo].split("-");
                    roomYcKey[value.m_iYCNo] = [str[0], '1', str[2]].join("-")
                }
            }
        }
    });
}

function goNoticeSet() {
    myApp.router.navigate('/noticeSet/');
}