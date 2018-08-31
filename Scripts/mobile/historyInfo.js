function historyInfo() {
     for(var j=1;j<5;j++)
      {
      	inithistoryInfoHTML(j,"newNotice","allInfoList");
      	inithistoryInfoHTML(1,"newNotice","hourseInfoList");
      	inithistoryInfoHTML(2,"newNotice","kitchenInfoList");
      	inithistoryInfoHTML(3,"newNotice","waterInfoList");
      	inithistoryInfoHTML(4,"newNotice","swimmingInfoList");

      }

    $(".historyInfoSection li a").unbind();
    $(".historyInfoSection li a").bind("click",function(){
        $(".alertMSG").toggle(500);
    });
    $(".msg_close,.msg_comfig").unbind();
    $(".msg_close,.msg_comfig").bind("click",function(){
        $(".alertMSG").slideUp(500);
        if($(this).hasClass("msg_comfig"))
        {}
    });
}

function inithistoryInfoHTML(index,newNotice,className){
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

 $("."+className).append(domHTML);           

}
