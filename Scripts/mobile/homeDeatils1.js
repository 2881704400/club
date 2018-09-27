
function homeDeatils1() {

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
              airConHandle1(item.className);
            //音乐
             musicHandle1(item.className);
             //发送命令
              if(item.equip_no)
            get_no(this, item.equip_no, item.setNo, "");
        });  
    }
   });



}
//选择灯光照明后者模式
function onLightingList1(){
   window.localStorage.LightingList0 = $("#lighting_0").find("option:selected").attr("value");
   if(window.localStorage.LightingList0 == 0)
    {$(".lightingAndPattern_0").removeClass("displayNone");$(".lightingAndPattern_1").addClass("displayNone");}
   else
    {$(".lightingAndPattern_1").removeClass("displayNone");$(".lightingAndPattern_0").addClass("displayNone");}

}


//初始化
function initGustRoomEquip1(){
     airConditionerControl(3);

}

//空调专属处理
function airConHandle1(className){
  switch(className){
    case "kt2_yl_zj": get_no("", 300, 119, 26);temperatureHandle("#homeDeatils1",className);break;
    case "kt2_yl_jx": get_no("", 300, 119, 24);temperatureHandle("#homeDeatils1",className);break;
    case "kt2_fs_td": windSpeendAir1(returnIndex("#homeDeatils1 em.selectFontWhite"));airConditionerControl("#homeDeatils1",returnIndex("#homeDeatils1 em.selectFontWhite"));break;
    case "kt2_ms_qh": moduleAir1(returnIndex("#homeDeatils1 i.selectFontWhite"));airConditionerModul("#homeDeatils1",returnIndex("#homeDeatils1 i.selectFontWhite"));break;         
  }
}

//音乐处理
function musicHandle1(className){
    if(className == "yy2_ylzd" || className == "yy2_yljx")
    {
      //设置音量值
      get_no("", 300, 129, 26);
    }
}

//切换窗帘
function switchCurtains1(){
  var value = $(".curtains1 option:selected").val();
  $("#homeDeatils1 .curtainsDD").removeClass("viewDisplay");
  $("#homeDeatils1 .curtainsDD[datanumber='cl2"+value+"']").addClass("viewDisplay");
}

//风速处理
function windSpeendAir1(index){
  switch(index.toString()){
    case "1": get_no("", 300, 112, "");break;
    case "2": get_no("", 300, 113, "");break;
    case "3": get_no("", 300, 114, "");break;
    case "4": get_no("", 300, 111, "");break;         
  }
}

//模式处理
function moduleAir1(index){
  switch(index.toString()){
    case "1": get_no("", 300, 115, "");break;
    case "2": get_no("", 300, 116, "");break;
    case "3": get_no("", 300, 117, "");break;
    case "4": get_no("", 300, 118, "");break;         
  }
}