
function homeDeatils2() {
    var kt_index = 1,windSpeedLevel = 1;
   airConditionerControl(windSpeedLevel);
   homeDeatilsDataunCheck.forEach(function(item,index){
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
             var realConditioner = parseInt($(".wd_conditioner").find("i").text());
             if(item.className == "kt_wdzd" && realConditioner< 34) //空调温度上调
             {
                get_no(this, item.equipNo, item.setNo,++realConditioner);
                $(".wd_conditioner").find("i").text(realConditioner); //回调成功再执行
             }
             else if(item.className == "kt_wdjx" && realConditioner>16) //空调温度下调
             {
                get_no(this, item.equipNo, item.setNo,--realConditioner);
                $(".wd_conditioner").find("i").text(realConditioner);
             }
             else if(item.className == "kt_msqh")
             {
                kt_index = $(".conditioner_view_p2 i.selectFontWhite").attr("aircondiIndex");
                kt_index>=4?kt_index = 1:++kt_index;
                $(".conditioner_view_p2 i[aircondiIndex='"+kt_index+"']").addClass("selectFontWhite").siblings().removeClass("selectFontWhite");
             }
             else if(item.className == "kt_fstd")
             {
                windSpeedLevel>=6?windSpeedLevel=1:windSpeedLevel++;
                airConditionerControl(windSpeedLevel);
             }
             else
             {
                get_no(this, item.equipNo, item.setNo,"");
             }

        });         
   });
   //选择灯光照明后者模式

   

}
//选择灯光照明后者模式
function onLightingList2(){
   window.localStorage.LightingList0 = $("#lighting_0").find("option:selected").attr("value");
   if(window.localStorage.LightingList0 == 0)
    {$(".lightingAndPattern_0").removeClass("displayNone");$(".lightingAndPattern_1").addClass("displayNone");}
   else
    {$(".lightingAndPattern_1").removeClass("displayNone");$(".lightingAndPattern_0").addClass("displayNone");}

}
//遥信表
function getStatus(){ //检测实时状态，1为开，0为关
    var jsonData = {
        "url": "/api/real/equip_yxp_state",
        "data":{ equip_no: equipNo_1,ycp_no: ycp_no_1},
        "success": _successfYxp,
        "error": _errorfYxp,
        "complete": _completefYxp
    };
    jQuery.axpost(jsonData);
    function _successfYxp(data) {  
      var resultJs = data.HttpData; 
      if(resultJs.code == 200)
      {
         //设备号 50 ，状态 开--
      }
    }
    function _errorfYxp(e) {}
    function _completefYxp(XMLHttpRequest, status) { }   
}

//初始化
function initGustRoomEquip(){
//获取灯光、空调、音乐、窗帘设备状态，循环设备号和homeDeatilsDataunCheck 相等且 为几项开关，则根据该状态设置显隐藏

}

//空调控制风速
function airConditionerControl(windSpeedLevel){
 
    $(".conditioner_view_p1 em").removeClass("selectBackgroundWhite");
    for(var j=1;j<=windSpeedLevel;j++)
    {
       $(".conditioner_view_p1 em[windSpeedIndex='"+j+"']").addClass("selectBackgroundWhite");
       $(".conditioner_view_p1 em[windSpeedIndex='6']").removeClass("selectFontWhite")
       if(j==6)
       {
         $(".conditioner_view_p1 em[windSpeedIndex='6']").addClass("selectFontWhite").siblings("em").removeClass("selectBackgroundWhite");
       }
    }

}


