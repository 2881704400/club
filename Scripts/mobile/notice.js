function notice() {
    toolbarActive('noticeTool');
    $(".auth_name_get").text(window.localStorage.auth_name_title);
    $('.noticeConfirm p:eq(0)').text("服务员 " + window.localStorage.userName);
    $(".noticeInfoList li a,.msg_close,.msg_comfig").unbind();
    $(".noticeInfoList li a").bind("click", function() {
        $(".alertMSG").toggle(500);
    });
    $(".msg_close,.msg_comfig").bind("click", function() {
        $(".alertMSG").slideUp(500);
        if ($(this).hasClass("msg_comfig")) {}
    });
    // 通知待确认和已确认
    confirmNotice();
    //初始化
    $(".noticeInfoList").html("");
    ajaxRequestXml_notice("newNotice", "noticeInfoList");
}

function initnoticeHTML(index, newNotice) {
    var domHTML = "<li>" + "<a href=\"#\" class=\"item-link item-content\">" + "<div class=\"item-media " + newNotice + "\"><img src=\"/image/notice/" + index + ".png\" width=\"60\"/></div>" + "<div class=\"item-inner\">" + "<div class=\"item-title-row\">" + "<div class=\"item-title\">Billie Jean</div>" + "<div class=\"item-after\">15:22</div>" + "</div>" + "<div class=\"item-text\">Lorem pulvinar lacus.</div>" + "</div>" + "</a>" + "</li>";
    $(".noticeInfoList").append(domHTML);
}

function ajaxRequestXml_notice(className_child, className_parent) {
    $.when($.fn.XmlRequset.httpGet("/api/GWServiceWebAPI/SelectData", {
        data: {
            tableName: 'gw_historicalNotice where Format(Date(),"yyyy/mm/dd") = Left(callTime,10) order by callTime desc',
        },
        async: false
    })).done(function(n, l) {
        let rt = n.HttpData;
        if (rt.code == 200) {
            rt.data.forEach(function(item, index) {
                inithistoryInfoHTML_notice(item, className_child, className_parent);
            });
        }
    }).fail(function(e) {});
}

function inithistoryInfoHTML_notice(obj, className_child, className_parent) {
    var domHTML = "<li>" + "<a href=\"#\" class=\"item-link item-content\" data_obj=" + JSON.stringify(obj) + ">" + "<div class=\"item-media " + (obj.confirmTime ? 1 : className_child) + "\"><img src=\"/image/notice/" + obj.positionID + ".png\" width=\"60\"/></div>" + "<div class=\"item-inner\">" + "<div class=\"item-title-row\">" + "<div class=\"item-title\">呼叫通知</div>" + "<div class=\"item-after\">" + obj.callTime.substr(-8) + "</div>" + "</div>" + "<div class=\"item-text\">" + obj.position + "</div>" + "</div>" + "</a>" + "</li>";
    $("." + className_parent).append(domHTML);
    $(".noticeInfoList  li a,.msg_comfig").unbind();
    $(".noticeInfoList  li a").bind("click", function() {
        var that = $(this),
            thisObj = JSON.parse($(this).attr("data_obj"));
        $(".msgFloor label").text(thisObj.floor);
        $(".msgPosition label").text(thisObj.position);
        $(".msgCallTime label").text(thisObj.callTime.replace("T", " "));
        $(".alertMSG").toggle(500);
        thisObj.confirmTime ? $(".msg_comfig").css({
            "pointer-events": "none"
        }).text(thisObj.userName + " 已确认").attr("data_id", thisObj.id) : $(".msg_comfig").css({
            "pointer-events": "visible"
        }).text("确认通知").attr("data_id", thisObj.id);
        //确认按钮
        $(".msg_comfig").bind("click", function() {
            $(".alertMSG").slideUp(500);
            //插入数据库
            $.when($.fn.XmlRequset.httpPost("/api/GWServiceWebAPI/set_BatchUpdate", {
                data: {
                    tableName: "gw_historicalNotice",
                    cellDataList: "userName='" + window.localStorage.userName + "',confirmTime='" + getDateTime_res(0) + "'",
                    ifDataList: "id=" + $(this).attr("data_id")
                },
                async: false
            })).done(function(n, l) {
                let rt = n.HttpData;
                if (rt.code == 200) {
                    thisObj.confirmTime = getDateTime_res(0);
                    thisObj.userName = window.localStorage.userName;
                    that.attr("data_obj", JSON.stringify(thisObj)).find("div.item-media").removeClass("newNotice");
                }
            }).fail(function(e) {});
        });
    });
}