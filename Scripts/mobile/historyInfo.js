function historyInfo() {
    ajaxRequestXml(0, "newNotice", "allInfo>div>ul")
    $(".msg_close,.segmented a").unbind();
    $(".msg_close").bind("click", function() {
        $(".alertMSG").slideUp(500);
        
    });
    $(".segmented a").bind("click", function() {
        let thiscN = $(this).attr("href").split("#")[1];
        $("#" + thiscN + ">div>ul").html("");
        ajaxRequestXml($(this).attr("data_number"), "newNotice", thiscN + ">div>ul");
    });
}

function ajaxRequestXml(num, className_child, className_parent) {
    // 请求 
    $.when($.fn.XmlRequset.httpGet("/api/GWServiceWebAPI/SelectData", {
        data: {
            tableName: "gw_historicalNotice order by callTime desc"
        },
        async: false
    })).done(function(n, l) {
        let rt = n.HttpData;
        if (rt.code == 200) {
            rt.data.forEach(function(item, index) {
                let noticeId = item.positionID;
                num == 0 ? inithistoryInfoHTML(item, className_child, className_parent) : (num == noticeId ? inithistoryInfoHTML(item, className_child, className_parent) : "");
            });
        }
    }).fail(function(e) {});
}

function inithistoryInfoHTML(obj, className_child, className_parent) {
    var domHTML = "<li>" + "<a href=\"#\" class=\"item-link item-content\" data_obj=" + JSON.stringify(obj) + ">" + "<div class=\"item-media " + (obj.confirmTime ?  1: className_child) + "\"><img src=\"/image/notice/" + obj.positionID + ".png\" width=\"60\"/></div>" + "<div class=\"item-inner\">" + "<div class=\"item-title-row\">" + "<div class=\"item-title\">呼叫通知</div>" + "<div class=\"item-after\">" + obj.callTime.substr(-8) + "</div>" + "</div>" + "<div class=\"item-text\">" + obj.position + "</div>" + "</div>" + "</a>" + "</li>";
    $("#" + className_parent).append(domHTML);
    $(".historyInfoSection li a,.msg_comfig").unbind();
    $(".historyInfoSection li a").bind("click", function() {
        var that = $(this),thisObj = JSON.parse($(this).attr("data_obj"));
        $(".msgFloor label").text(thisObj.floor);
        $(".msgPosition label").text(thisObj.position);
        $(".msgCallTime label").text(thisObj.callTime.replace("T", " "));
        $(".alertMSG").toggle(500);
        thisObj.confirmTime ? $(".msg_comfig").css({"pointer-events":"none"}).text(thisObj.userName+" 已确认").attr("data_id",thisObj.id): $(".msg_comfig").css({"pointer-events":"visible"}).text("确认通知").attr("data_id",thisObj.id);
        
        //确认按钮
        $(".msg_comfig").bind("click", function() {
        $(".alertMSG").slideUp(500);
        //插入数据库
        $.when($.fn.XmlRequset.httpPost("/api/GWServiceWebAPI/set_BatchUpdate", {
            data: {
                tableName: "gw_historicalNotice",
                cellDataList: "userName='"+window.localStorage.userName+"',confirmTime='"+getDateTime_res(0)+"'",
                ifDataList: "id="+$(this).attr("data_id")
            },
            async: false
        })).done(function(n, l) {
            let rt = n.HttpData;
            if (rt.code == 200) {
               thisObj.confirmTime = getDateTime_res(0);
               thisObj.userName = window.localStorage.userName;
               that.attr("data_obj",JSON.stringify(thisObj)).find("div.item-media").removeClass("newNotice");
            }
        }).fail(function(e) {});
       });    

    });

}


