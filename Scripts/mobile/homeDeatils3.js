
function homeDeatils3() {

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
              airConHandle3(item.className);
            //音乐
             musicHandle3(item.className);
             //发送命令
             if(item.equip_no)
              get_no(this, item.equip_no, item.setNo, "");
        });  
    }
   });



}
//选择灯光照明后者模式
function onLightingList3(){
   window.localStorage.LightingList0 = $("#lighting_0").find("option:selected").attr("value");
   if(window.localStorage.LightingList0 == 0)
    {$(".lightingAndPattern_0").removeClass("displayNone");$(".lightingAndPattern_1").addClass("displayNone");}
   else
    {$(".lightingAndPattern_1").removeClass("displayNone");$(".lightingAndPattern_0").addClass("displayNone");}

}


//初始化
function initGustRoomEquip3(){
     airConditionerControl(3);

}

//空调专属处理
function airConHandle3(className){
  switch(className){
    case "kt4_yl_zj": get_no("", 300, 284, 26);temperatureHandle("#homeDeatils3",className);break;
    case "kt4_yl_jx": get_no("", 300, 284, 26);temperatureHandle("#homeDeatils3",className);break;
    case "kt4_fs_td": windSpeendAir3(returnIndex("#homeDeatils3 em.selectFontWhite"));airConditionerControl("#homeDeatils3",returnIndex("#homeDeatils3 em.selectFontWhite"));break;
    case "kt4_ms_qh": moduleAir3(returnIndex("#homeDeatils3 i.selectFontWhite"));airConditionerModul("#homeDeatils3",returnIndex("#homeDeatils3 i.selectFontWhite"));break; 
    case "qjkt4_yl_zj": get_no("", 300, 295, 26);temperatureHandle("#homeDeatils3",className);break;
    case "qjkt4_yl_jx": get_no("", 300, 295, 26);temperatureHandle("#homeDeatils3",className);break;
    case "qjkt4_fs_td": windSpeendAir31(returnIndex("#homeDeatils3 em.selectFontWhite"));airConditionerControl("#homeDeatils3",returnIndex("#homeDeatils3 em.selectFontWhite"));break;
    case "qjkt4_ms_qh": moduleAir31(returnIndex("#homeDeatils3 i.selectFontWhite"));airConditionerModul("#homeDeatils3",returnIndex("#homeDeatils3 i.selectFontWhite"));break;         
  }
}

//音乐处理
function musicHandle3(className){
    if(className == "yy4_ylzd" || className == "yy4_yljx")
    {
      //设置音量值
       get_no("", 300, 305, 26);
    }
}

//切换窗帘
function switchCurtains3(){
  var value = $(".curtains3 option:selected").val();
  $("#homeDeatils3 .curtainsDD").removeClass("viewDisplay");
  $("#homeDeatils3 .curtainsDD[datanumber='cl4"+value+"']").addClass("viewDisplay");
}

//切换空调
function switchAircon3(){
  var value = $(".airCon3 option:selected").val();
  $("#homeDeatils3 .conditionerDD").removeClass("viewDisplayair");
  $("#homeDeatils3 .conditionerDD[airConNumber='kt4"+value+"']").addClass("viewDisplayair");
}


//风速处理
function windSpeendAir3(index){
  switch(index.toString()){
    case "1": get_no("",300, 277, "");break;
    case "2": get_no("",300, 278, "");break;
    case "3": get_no("",300, 279, "");break;
    case "4": get_no("",300, 276, "");break;         
  }
}
function windSpeendAir31(index){
  switch(index.toString()){
    case "1": get_no("", 300, 288, "");break;
    case "2": get_no("", 300, 289, "");break;
    case "3": get_no("", 300, 290, "");break;
    case "4": get_no("", 300, 287, "");break;        
  }
}
//模式处理
function moduleAir3(index){
  switch(index.toString()){
    case "1": get_no("",300, 280, "");break;
    case "2": get_no("",300, 281, "");break;
    case "3": get_no("",300, 282, "");break;
    case "4": get_no("",300, 283, "");break;   
  }
}
function moduleAir31(index){
  switch(index.toString()){
    case "1": get_no("", 300, 291, "");break;
    case "2": get_no("", 300, 292, "");break;
    case "3": get_no("", 300, 293, "");break;
    case "4": get_no("", 300, 294, "");break;         
  }
}