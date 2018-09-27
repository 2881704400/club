
function homeDeatils0() {

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
              airConHandle0(item.className);
            //音乐
             musicHandle0(item.className);
            //发送命令
             if(item.equip_no)
            get_no(this, item.equip_no, item.setNo, "");
        });  
    }
   });



}
//选择灯光照明后者模式
function onLightingList0(){
   window.localStorage.LightingList0 = $("#lighting_0").find("option:selected").attr("value");
   if(window.localStorage.LightingList0 == 0)
    {$(".lightingAndPattern_0").removeClass("displayNone");$(".lightingAndPattern_1").addClass("displayNone");}
   else
    {$(".lightingAndPattern_1").removeClass("displayNone");$(".lightingAndPattern_0").addClass("displayNone");}

}


//初始化
function initGustRoomEquip0(){
     airConditionerControl(3);

}

//空调专属处理
function airConHandle0(className){
  switch(className){
    case "kt1_yl_zj": get_no("", 300, 58, 26);temperatureHandle("#homeDeatils0",className);break;
    case "kt1_yl_jx": get_no("", 300, 58, 26);temperatureHandle("#homeDeatils0",className);break;
    case "kt1_fs_td": windSpeendAir0(returnIndex("#homeDeatils0 em.selectFontWhite"));airConditionerControl("#homeDeatils0",returnIndex("#homeDeatils0 em.selectFontWhite"));break;
    case "kt1_ms_qh": moduleAir0(returnIndex("#homeDeatils0 i.selectFontWhite"));airConditionerModul("#homeDeatils0",returnIndex("#homeDeatils0 i.selectFontWhite"));break;         
  }
}

//音乐处理
function musicHandle0(className){
    if(className == "yy1_ylzd" || className == "yy1_yljx")
    {
      //设置音量值
      get_no("", 300, 68, 26);
    }
}

//切换窗帘
function switchCurtains0(){
  var value = $(".curtains0 option:selected").val();
  $("#homeDeatils0 .curtainsDD").removeClass("viewDisplay");
  $("#homeDeatils0 .curtainsDD[datanumber='cl1"+value+"']").addClass("viewDisplay");
}

//风速处理
function windSpeendAir0(index){
  switch(index.toString()){
    case "1": get_no("", 300, 51, "");break;
    case "2": get_no("", 300, 52, "");break;
    case "3": get_no("", 300, 53, "");break;
    case "4": get_no("", 300, 50, "");break;         
  }
}

//模式处理
function moduleAir0(index){
  switch(index.toString()){
    case "1": get_no("", 300, 54, "");break;
    case "2": get_no("", 300, 55, "");break;
    case "3": get_no("", 300, 56, "");break;
    case "4": get_no("", 300, 57, "");break;         
  }
}