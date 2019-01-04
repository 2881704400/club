
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
   //初始化状态
     yxpHomeDeatils2(true);
    setHomeTime2 =setInterval(function(){
      yxpHomeDeatils2(false);
    },5000);


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
    case "kt3_yl_zj": temperatureHandle("#homeDeatils2",className, 300, 183);break;
    case "kt3_yl_jx": temperatureHandle("#homeDeatils2",className, 300, 183);break;
    case "kt3_fs_td": windSpeendAir2(returnIndex("#homeDeatils2 em.selectFontWhite"));airConditionerControl("#homeDeatils2",returnIndex("#homeDeatils2 em.selectFontWhite"));break;
    case "kt3_ms_qh": moduleAir2(returnIndex("#homeDeatils2 i.selectFontWhite"));airConditionerModul("#homeDeatils2",returnIndex("#homeDeatils2 i.selectFontWhite"));break;         
  }
}

//音乐处理
function musicHandle2(className){

    if(className == "yy3_ylzd")
    {
      window.localstorage.volumeValue3<100?window.localstorage.volumeValue3++:"";
      get_no("", 300, 193, parseInt(window.localstorage.volumeValue3));
    }
    else if(className == "yy3_yljx")
    {
      window.localstorage.volumeValue3>0?window.localstorage.volumeValue3--:"";
      get_no("", 300, 193, parseInt(window.localstorage.volumeValue3));
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


//遥信遥测
function yxpHomeDeatils2(isJudge){
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
            // handleDeatils2People(yxpItem["103"].m_YXState,yxpItem["104"].m_YXState,""); 
           
           if(isJudge)
           {
            handleDeatils2State(70,yxpItem["70"].m_YXState); //卧室台灯

            handleDeatils2State(71,yxpItem["71"].m_YXState); //防雾灯

            for(var i= 72;i<=81;i++)
             handleDeatils2State(i,yxpItem[i].m_YXState); //卧室场景灯光

            for(var i= 82;i<=87;i++)
             handleDeatils2State(i,yxpItem[i].m_YXState);  //卫生间场景灯光

            handleDeatils2State(88,yxpItem["88"].m_YXState); //空调开关

            for(var i= 89;i<=92;i++)
             handleDeatils2State(i,yxpItem[i].m_YXState);//空调风速

            for(var i= 93;i<=96;i++)
              handleDeatils2State(i,yxpItem[i].m_YXState); //空调模式

            handleDeatils2State(97,yxpItem["97"].m_YXState); //歌曲播放关闭

            // ***ycp****
            var ycpItem = data.HttpData.data.YCItemDict;
            
            $("#homeDeatils2 .wd_conditioner").find("i").text(ycpItem["44"].m_YCValue); //卧室空调温度

            window.localStorage.volumeValue3 = ycpItem["45"].m_YCValue;
            }
        }
    });
}


//处理状态值
function handleDeatils2State(parntIndex,status){

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
            console.log(item);
            $("."+item.className).addClass("displayNone").siblings().removeClass("displayNone");
          }
       });
    }
}


//处理状态值
// function handleDeatils2People(judgePeople1,judgePeople2,judgePeople3){
//    if(judgePeople1 == "有人" || judgePeople2 == "有人" || judgePeople3 == "有人")
//    {
//       $("#homeDeatils2").find("i.positionCenter").removeClass("icon-peopleNone").addClass("icon-peopleBlock");
//    }
//    else
//    {
//       $("#homeDeatils2").find("i.positionCenter").removeClass("icon-peopleBlock").addClass("icon-peopleNone");
//    }
// }
