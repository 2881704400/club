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
    //初始化
    $(".noticeInfoList").html("");
    ajaxRequestXml_notice("newNotice", ".noticeInfoList");
     confirmNoticeFun(allEquipNo);//初始化确认和待确认
}


function ajaxRequestXml_notice(className_child, className_parent) {

    var jsonString = {str: ':撤防',equip_no: allEquipNo,timeStr: getDateTimeNotice(0)};
    $.when(AlarmCenterContext.post("/api/GWServiceWebAPI/getCallRecord?"+$.param(jsonString))).done(function(n) {
        let rt = n.HttpData;
        if (rt.code == 200 && rt.data.length>=1) {
            var dt = rt.data;
            dt.forEach(function(item,index){
               inithistoryInfoHTML_all(item, className_child, className_parent);                                  
            });
           
        }
    }).fail(function(e) {});
}



//处理实时快照日期
function jusdTime(timeVal){
    let str = timeVal.split(".")[1];
    if(!str) return timeVal+".000000";
    if(str.length<6)
    {
        str = str+ "000000".substring(0, 6 - str.length);
    }
    else if(str.length>6)
    {
        str = str.subString(0,6);
    }
    return timeVal.split(".")[0]+str;
}