
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
   //初始化状态
     yxpHomeDeatils4(true);
  setHomeTime4 =setInterval(function(){
    yxpHomeDeatils4(false);
  },5000);


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
    case "kt5_yl_zj": temperatureHandle("#homeDeatils4",className, 300, 352);break;
    case "kt5_yl_jx": temperatureHandle("#homeDeatils4",className, 300, 352);break;
    case "kt5_fs_td": windSpeendAir4(returnIndex("#homeDeatils4 em.selectFontWhite"));airConditionerControl("#homeDeatils4",returnIndex("#homeDeatils4 em.selectFontWhite"));break;
    case "kt5_ms_qh": moduleAir4(returnIndex("#homeDeatils4 i.selectFontWhite"));airConditionerModul("#homeDeatils4",returnIndex("#homeDeatils4 i.selectFontWhite"));break;         
  }
}

//音乐处理
function musicHandle4(className){

    if(className == "yy5_ylzd")
    {
      window.localstorage.volumeValue5<100?window.localstorage.volumeValue5++:"";
      get_no("", 300, 362, parseInt(window.localstorage.volumeValue5));
    }
    else if(className == "yy5_yljx")
    {
      window.localstorage.volumeValue5>0?window.localstorage.volumeValue5--:"";
      get_no("", 300, 362, parseInt(window.localstorage.volumeValue5));
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

//遥信遥测
function yxpHomeDeatils4(isJudge){
     $.ajax({
        type: "POST",
        url: "/api/real/equip_item_state",
        timeout: 5000,
        headers: {
            Authorization: window.localStorage.ac_appkey + '-' + window.localStorage.ac_infokey 
        },
        data: {
            equip_no: '300'
        },
        success: function (data) {
            var yxpItem = data.HttpData.data.YXItemDict;
            //有无人
            // handleDeatils4People(yxpItem["199"].m_YXState,yxpItem["200"].m_YXState,"");

           if(isJudge)
           {
            handleDeatils4State(167,yxpItem["167"].m_YXState); //卫生间灯光

            for(var i= 168;i<=177;i++)
             handleDeatils4State(i,yxpItem[i].m_YXState); //卧室场景灯光

            for(var i= 178;i<=183;i++)
             handleDeatils4State(i,yxpItem[i].m_YXState);  //卫生间场景灯光

            handleDeatils4State(184,yxpItem["184"].m_YXState); //空调开关

            for(var i= 185;i<=188;i++)
             handleDeatils4State(i,yxpItem[i].m_YXState);//空调风速

            for(var i= 189;i<= 192;i++)
              handleDeatils4State(i,yxpItem[i].m_YXState); //空调模式

            handleDeatils4State(193,yxpItem["193"].m_YXState); //歌曲播放关闭

            // ***ycp****
            var ycpItem = data.HttpData.data.YCItemDict;
            
            $("#homeDeatils4 .wd_conditioner").find("i").text(ycpItem["79"].m_YCValue); //卧室空调温度

            window.localStorage.volumeValue5 = ycpItem["80"].m_YCValue;
            }
        }
    });
}


//处理状态值
function handleDeatils4State(parntIndex,status){

    if(status == "灯开" || status == "是" || status == "开启" )
    {
       homeDeatilsDataunCheck.forEach(function(item,index){
        if(item.className)
          if(item.yx_no == 19 || item.yx_no == 20 || item.yx_no == 21 || item.yx_no == 22)//风速
          {
            $("."+item.className).addClass("selectFontWhite").siblings("em").removeClass("displayNone");
          }
          else if(item.yx_no == 23 || item.yx_no == 24 || item.yx_no == 25 || item.yx_no == 26)//模式
          {
            $("."+item.className).addClass("selectFontWhite").siblings("i").removeClass("selectFontWhite");
          }          
          else if(item.yx_no == parntIndex){ //其它
            $("."+item.className).addClass("displayNone").siblings().removeClass("displayNone");
          }
       });
    }
}


//处理状态值
// function handleDeatils4People(judgePeople1,judgePeople2,judgePeople3){
//    if(judgePeople1 == "有人" || judgePeople2 == "有人" || judgePeople3 == "有人")
//    {
//       $("#homeDeatils4").find("i.positionCenter").removeClass("icon-peopleNone").addClass("icon-peopleBlock");
//    }
//    else
//    {
//       $("#homeDeatils4").find("i.positionCenter").removeClass("icon-peopleBlock").addClass("icon-peopleNone");
//    }
// }
