
function homeDeatils2() {

   homeDeatilsDataunCheck.forEach(function(item,index){
    if(item.className != "")
    {
        $("."+item.className).unbind();
        $("."+item.className).bind("click",function(){
            var that = $(this);
             that.addClass("displayNone").siblings("a").removeClass("displayNone");
             if(item.isFlag) //弹起
             {
                setTimeout(function(){
                    that.removeClass("displayNone").siblings("a").addClass("displayNone");
                },300);
             }
             if(item.Independent) //排斥同类唯一
             {    
                 that.parent().siblings().find("a").addClass("displayNone");
                 that.parent().siblings().find("a:eq(0)").removeClass("displayNone");
             }
            //空调
              airConHandle2(item.className);
            //音乐
             musicHandle2(item.className);
             //发送命令
              if(item.equip_no)
            get_no(this, item.equip_no, item.setNo, "");
        });  
    }
   });



}
//选择灯光照明后者模式
function onLightingList2(){
   window.localStorage.LightingList0 = $("#lighting_0").find("option:selected").attr("value");
   if(window.localStorage.LightingList0 == 0)
    {$(".lightingAndPattern_0").removeClass("displayNone");$(".lightingAndPattern_1").addClass("displayNone");}
   else
    {$(".lightingAndPattern_1").removeClass("displayNone");$(".lightingAndPattern_0").addClass("displayNone");}

}


//初始化
function initGustRoomEquip2(){
     airConditionerControl(3);

}

//空调专属处理
function airConHandle2(className){
  switch(className){
    case "kt3_yl_zj": get_no("", 300, 183, 26);temperatureHandle("#homeDeatils2",className);break;
    case "kt3_yl_jx": get_no("", 300, 183, 26);temperatureHandle("#homeDeatils2",className);break;
    case "kt3_fs_td": windSpeendAir2(returnIndex("#homeDeatils2 em.selectFontWhite"));airConditionerControl("#homeDeatils2",returnIndex("#homeDeatils2 em.selectFontWhite"));break;
    case "kt3_ms_qh": moduleAir2(returnIndex("#homeDeatils2 i.selectFontWhite"));airConditionerModul("#homeDeatils2",returnIndex("#homeDeatils2 i.selectFontWhite"));break;         
  }
}

//音乐处理
function musicHandle2(className){
    if(className == "yy3_ylzd" || className == "yy3_yljx")
    {
      //设置音量值
       get_no("", 300, 193, 26);
    }
}

//切换窗帘
function switchCurtains2(){
  var value = $(".curtains2 option:selected").val();
  $("#homeDeatils2 .curtainsDD").removeClass("viewDisplay");
  $("#homeDeatils2 .curtainsDD[datanumber='cl3"+value+"']").addClass("viewDisplay");
}

//风速处理
function windSpeendAir2(index){
  switch(index.toString()){
    case "1": get_no("", 300, 176, "");break;
    case "2": get_no("", 300, 177, "");break;
    case "3": get_no("", 300, 178, "");break;
    case "4": get_no("", 300, 175, "");break;         
  }
}

//模式处理
function moduleAir2(index){
  switch(index.toString()){
    case "1": get_no("", 300, 179, "");break;
    case "2": get_no("", 300, 180, "");break;
    case "3": get_no("", 300, 181, "");break;
    case "4": get_no("", 300, 182, "");break;         
  }
}