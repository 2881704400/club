
function homeDeatils4() {

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
              airConHandle4(item.className);
            //音乐
             musicHandle4(item.className);
            //发送命令
             if(item.equip_no)
             get_no(this, item.equip_no, item.setNo, "");
        });  
    }
   });



}
//选择灯光照明后者模式
function onLightingList4(){
   window.localStorage.LightingList0 = $("#lighting_0").find("option:selected").attr("value");
   if(window.localStorage.LightingList0 == 0)
    {$(".lightingAndPattern_0").removeClass("displayNone");$(".lightingAndPattern_1").addClass("displayNone");}
   else
    {$(".lightingAndPattern_1").removeClass("displayNone");$(".lightingAndPattern_0").addClass("displayNone");}

}


//初始化
function initGustRoomEquip4(){
     airConditionerControl(3);

}

//空调专属处理
function airConHandle4(className){
  switch(className){
    case "kt5_yl_zj": get_no("", 300, 352, 26);temperatureHandle("#homeDeatils4",className);break;
    case "kt5_yl_jx": get_no("", 300, 352, 26);temperatureHandle("#homeDeatils4",className);break;
    case "kt5_fs_td": windSpeendAir4(returnIndex("#homeDeatils4 em.selectFontWhite"));airConditionerControl("#homeDeatils4",returnIndex("#homeDeatils4 em.selectFontWhite"));break;
    case "kt5_ms_qh": moduleAir4(returnIndex("#homeDeatils4 i.selectFontWhite"));airConditionerModul("#homeDeatils4",returnIndex("#homeDeatils4 i.selectFontWhite"));break;         
  }
}

//音乐处理
function musicHandle4(className){
    if(className == "yy5_ylzd" || className == "yy5_yljx")
    {
      //设置音量值
       get_no("", 300, 362, 26);
    }
}

//切换窗帘
function switchCurtains4(){
  var value = $(".curtains4 option:selected").val();
  $("#homeDeatils4 .curtainsDD").removeClass("viewDisplay");
  $("#homeDeatils4 .curtainsDD[datanumber='cl5"+value+"']").addClass("viewDisplay");
}

//风速处理
function windSpeendAir4(index){
  switch(index.toString()){
    case "1": get_no("", 300, 345, "");break;
    case "2": get_no("", 300, 346, "");break;
    case "3": get_no("", 300, 347, "");break;
    case "4": get_no("", 300, 344, "");break;         
  }
}

//模式处理
function moduleAir4(index){
  switch(index.toString()){
    case "1": get_no("", 300, 348, "");break;
    case "2": get_no("", 300, 349, "");break;
    case "3": get_no("", 300, 350, "");break;
    case "4": get_no("", 300, 351, "");break;         
  }
}