
function notice() {
    toolbarActive('noticeTool');
    $(".auth_name_get").text(window.localStorage.auth_name_title);
    $('.noticeConfirm p:eq(0)').text("服务员 "+window.localStorage.userName);
    for(var i=1;i<5;i++)
     for(var j=1;j<5;j++)
    initnoticeHTML(j,"newNotice");
    $(".noticeInfoList li a").unbind();
    $(".noticeInfoList li a").bind("click",function(){
        $(".alertMSG").toggle(500);
    });
    $(".msg_close,.msg_comfig").unbind();
    $(".msg_close,.msg_comfig").bind("click",function(){
        $(".alertMSG").slideUp(500);
        if($(this).hasClass("msg_comfig"))
        {}
    });
}

function initnoticeHTML(index,newNotice){
var domHTML =   "<li>"+
              "<a href=\"#\" class=\"item-link item-content\">"+
                "<div class=\"item-media "+newNotice+"\"><img src=\"/image/notice/"+index+".png\" width=\"60\"/></div>"+
                "<div class=\"item-inner\">"+
                  "<div class=\"item-title-row\">"+
                    "<div class=\"item-title\">Billie Jean</div>"+
                    "<div class=\"item-after\">15:22</div>"+
                  "</div>"+
                  "<div class=\"item-text\">Lorem pulvinar lacus.</div>"+
                "</div>"+
              "</a>"+
            "</li>";

 $(".noticeInfoList").append(domHTML);           

}
