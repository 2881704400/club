
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
   //初始化状态
     yxpHomeDeatils1(true);
    setHomeTime1 =setInterval(function(){
      yxpHomeDeatils1(false);
    },5000);


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
    case "kt2_yl_zj": temperatureHandle("#homeDeatils1",className, 300, 119);break;
    case "kt2_yl_jx": temperatureHandle("#homeDeatils1",className,300, 119);break;
    case "kt2_fs_td": windSpeendAir1(returnIndex("#homeDeatils1 em.selectFontWhite"));airConditionerControl("#homeDeatils1",returnIndex("#homeDeatils1 em.selectFontWhite"));break;
    case "kt2_ms_qh": moduleAir1(returnIndex("#homeDeatils1 i.selectFontWhite"));airConditionerModul("#homeDeatils1",returnIndex("#homeDeatils1 i.selectFontWhite"));break;         
  }
}

//音乐处理
function musicHandle1(className){

    if(className == "yy2_ylzd")
    {
      window.localstorage.volumeValue2<100?window.localstorage.volumeValue2++:"";
      get_no("", 300, 129, parseInt(window.localstorage.volumeValue2));
    }
    else if(className == "yy2_yljx")
    {
      window.localstorage.volumeValue2>0?window.localstorage.volumeValue2--:"";
      get_no("", 300, 129, parseInt(window.localstorage.volumeValue2));
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

//遥信遥测
function yxpHomeDeatils1(isJudge){
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
            // handleDeatils1People(yxpItem["68"].m_YXState,yxpItem["69"].m_YXState,""); 

           if(isJudge)
           {
            handleDeatils1State(35,yxpItem["35"].m_YXState); //卧室台灯

            handleDeatils1State(36,yxpItem["36"].m_YXState); //防雾灯

            for(var i= 37;i<=46;i++)
             handleDeatils1State(i,yxpItem[i].m_YXState); //卧室场景灯光

            for(var i= 47;i<=52;i++)
             handleDeatils1State(i,yxpItem[i].m_YXState);  //卫生间场景灯光

            handleDeatils1State(53,yxpItem["53"].m_YXState); //空调开关

            for(var i= 54;i<= 57;i++)
             handleDeatils1State(i,yxpItem[i].m_YXState);//空调风速

            for(var i= 58;i<=61;i++)
              handleDeatils1State(i,yxpItem[i].m_YXState); //空调模式

            handleDeatils1State(62,yxpItem["62"].m_YXState); //歌曲播放关闭

            // ***ycp****
            var ycpItem = data.HttpData.data.YCItemDict;
            
            $("#homeDeatils1 .wd_conditioner").find("i").text(ycpItem["29"].m_YCValue); //卧室空调温度

            window.localStorage.volumeValue2 = ycpItem["30"].m_YCValue;
            }
        }
    });
}


//处理状态值
function handleDeatils1State(parntIndex,status){

    if(status == "灯开" || status == "是" || status == "开启" )
    {
       homeDeatilsDataunCheck.forEach(function(item,index){
        if(item.className)
          if(item.yx_no == 54 || item.yx_no == 55 || item.yx_no == 56 || item.yx_no == 57)//风速
          {
            $("."+item.className).addClass("selectFontWhite").siblings("em").removeClass("displayNone");
          }
          else if(item.yx_no == 58 || item.yx_no == 59 || item.yx_no == 60 || item.yx_no == 61)//模式
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
// function handleDeatils1People(id,judgePeople1,judgePeople2,judgePeople3){
//    if(judgePeople1 == "有人" || judgePeople2 == "有人" || judgePeople3 == "有人")
//    {
//       $("#homeDeatils1").find("i.positionCenter").removeClass("icon-peopleNone").addClass("icon-peopleBlock");
//    }
//    else
//    {
//       $("#homeDeatils1").find("i.positionCenter").removeClass("icon-peopleBlock").addClass("icon-peopleNone");
//    }
// }
