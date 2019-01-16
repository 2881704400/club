function historyInfo() {
    domHTMLHistoryInfo="";
    myApp.dialog.progress('<a style="font-size: 1rem">加载中...</a>');
    setTimeout(function(){
        ajaxRequestXml_history(1, "newNotice", "#allInfo>div>ul");
    },2000);
    $(".msg_close,.segmented a").unbind();
    $(".msg_close").bind("click", function() {
        $(".alertMSG").slideUp(500);
        
    });
    $(".segmented a").bind("click", function() {
        domHTMLHistoryInfo="";
        let thiscN = $(this).attr("href"),num = $(this).attr("data_number").toString();
        
        myApp.dialog.progress('<a style="font-size: 1rem">加载中...</a>');
        setTimeout(function(){ajaxRequestXml_history(num,"newNotice", thiscN + ">div>ul");},2000);
    });
}

function ajaxRequestXml_history(num, className_child, className_parent) { 
   
    $(".swimmingInfoList,.allInfoList").html(" ");
    // 请求 
    if(parseInt(num) == 1)
        var jsonString = {str: ':撤防',equip_no: allEquipNo,timeStr: getDateTimeNotice(-30)},url = "/api/GWServiceWebAPI/getCallRecord?"+$.param(jsonString);
    else
        var jsonString = {str: ':撤防',equip_no: allEquipNo,set_no: num,timeStr: getDateTimeNotice(-30)},url = "/api/GWServiceWebAPI/getFixedCallRecord?"+$.param(jsonString);
    $.when(AlarmCenterContext.post(url)).done(function(n) {
        let rt = n.HttpData;
        if (rt.code == 200) {
            rt.data.forEach(function(item, index) {
                domHTMLHistoryInfo = "<li dataTime='"+item.time+"'>" + "<a href=\"#\" class=\"item-link item-content\" data_obj='"+JSON.stringify(item)+"' onclick='inithistoryInfoHTML_all_0(this)'>" + "<div class=\"item-media " +  (!item.confirmname?className_child:1) + "\"><img src=\"/image/notice/" + item.ycyx_no + ".png\" width=\"60\"/></div>" + "<div class=\"item-inner\">" + "<div class=\"item-title-row\">" + "<div class=\"item-title\">呼叫通知</div>" + "<div class=\"item-after\" style=\"font-size: 14px;\">" + item.time.replace("T"," ") + "</div>" + "</div>" + "<div class=\"item-text\">" + item.event + "</div>" + "</div>" + "</a>" + "</li>" + domHTMLHistoryInfo;
            });
            myApp.dialog.close();

            $(className_parent).html("").html(domHTMLHistoryInfo);

        }
    }).fail(function(e) {});
}

var domHTMLHistoryInfo = "";
function inithistoryInfoHTML_all_0(dt) {
    
    var that = $(dt),thisObj = JSON.parse($(dt).attr("data_obj")),getName = thisObj.confirmname;
    $(".msgFloor label").text(getFloor(thisObj.ycyx_no));
    $(".msgPosition label").text(thisObj.event);
    $(".msgCallTime label").text(thisObj.time.replace("T", " "));
    $(".alertMSG").toggle(500);
    if(getName)
        {$(".msg_comfig").css({"pointer-events": "none"}).text(getName + " 已确认");}
    else
        {$(".msg_comfig").css({"pointer-events": "visible"}).text("确认通知");}
    //确认按钮
    $(".msg_comfig").unbind();
    $(".msg_comfig").bind("click", function() {
        $(".alertMSG").slideUp(500);
        //插入数据库
        $.when(AlarmCenterContext.post("/api/event/real_evt",{levels:"6"})).done(function(n) {
            let rt = n.HttpData;
            if (rt.code == 200 && rt.data) {
                rt.data.forEach(function(item,index){
                   var timeResult = item.Time.replace("T", " ");
                 if(item.Equipno == thisObj.equip_no && item.Ycyxno == thisObj.ycyx_no)
                    $.when(AlarmCenterContext.post("/api/event/confirm_evt", {
                            msg: "已确认",
                            shortmsg: true,
                            telUser: "",
                            evtname: item.EventMsg,
                            time: timeResult,
                            userName: window.localStorage.userName
                        })).done(function(l) {
                        let rt = l.HttpData;
                        if (rt.code == 200 && rt.data) {
                             infoHandle(thisObj.ycyx_no+"-是");
                             thisObj.confirmname = window.localStorage.userName;
                             that.attr("data_obj",JSON.stringify(thisObj)).find("div.item-media").removeClass("newNotice");
                             confirmNoticeFun(allEquipNo); //初始化确认和待确认
                        }
                    }).fail(function(e) {});
                });
            }
        }).fail(function(e) {});
    });
}

//刷新数据
function refreshData(){
    
     domHTMLHistoryInfo = "";
      let dom = $(".historyInfoContainer a.tab-link-active");
      myApp.dialog.progress('<a style="font-size: 1rem">加载中...</a>');
     setTimeout(function(){ajaxRequestXml_history(dom.attr("data_number"),"newNotice", dom.attr("href")+">div>ul");},2000);
}

