
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
   //初始化状态
    yxpHomeDeatils3(true);
    setHomeTime3 =setInterval(function(){
      yxpHomeDeatils3(false);
    },5000);


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
    case "kt4_yl_zj": temperatureHandle("#homeDeatils3",className, 300, 284);break;
    case "kt4_yl_jx": temperatureHandle("#homeDeatils3",className, 300, 284);break;
    case "kt4_fs_td": windSpeendAir3(returnIndex("#homeDeatils3 em.selectFontWhite"));airConditionerControl("#homeDeatils3",returnIndex("#homeDeatils3 em.selectFontWhite"));break;
    case "kt4_ms_qh": moduleAir3(returnIndex("#homeDeatils3 i.selectFontWhite"));airConditionerModul("#homeDeatils3",returnIndex("#homeDeatils3 i.selectFontWhite"));break; 
    case "qjkt4_yl_zj": temperatureHandle("#homeDeatils3",className, 300, 295);break;
    case "qjkt4_yl_jx": temperatureHandle("#homeDeatils3",className, 300, 295);break;
    case "qjkt4_fs_td": windSpeendAir31(returnIndex("#homeDeatils3 em.selectFontWhite"));airConditionerControl("#homeDeatils3",returnIndex("#homeDeatils3 em.selectFontWhite"));break;
    case "qjkt4_ms_qh": moduleAir31(returnIndex("#homeDeatils3 i.selectFontWhite"));airConditionerModul("#homeDeatils3",returnIndex("#homeDeatils3 i.selectFontWhite"));break;         
  }
}

//音乐处理
function musicHandle3(className){

    if(className == "yy4_ylzd")
    {
      window.localstorage.volumeValue4<100?window.localstorage.volumeValue4++:"";
      get_no("", 300, 305, parseInt(window.localstorage.volumeValue4));
    }
    else if(className == "yy4_yljx")
    {
      window.localstorage.volumeValue4>0?window.localstorage.volumeValue4--:"";
      get_no("", 300, 305, parseInt(window.localstorage.volumeValue4));
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

//遥信遥测
function yxpHomeDeatils3(isJudge){
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
            // handleDeatils3People(yxpItem["164"].m_YXState,yxpItem["165"].m_YXState,yxpItem["166"].m_YXState);

           if(isJudge)
           {
            try{
            handleDeatils3State(105,yxpItem["105"].m_YXState); //卧室台灯

            handleDeatils3State(106,yxpItem["106"].m_YXState); //起居室台灯

            handleDeatils3State(107,yxpItem["107"].m_YXState); //起居室卫生间防雾灯

            for(var i= 108;i<=117;i++)
             handleDeatils3State(i,yxpItem[i].m_YXState); //卧室场景灯光

            for(var i= 118;i<=123;i++)
             handleDeatils3State(i,yxpItem[i].m_YXState);  //卫生间场景灯光

            for(var i= 124;i<=133;i++)
             handleDeatils3State(i,yxpItem[i].m_YXState);  //起居室场景灯光

            for(var i= 134;i<=139;i++)
             handleDeatils3State(i,yxpItem[i].m_YXState);  //起居室卫生间场景灯光

            handleDeatils3State(140,yxpItem["140"].m_YXState); //空调开关

            for(var i= 141;i<=144;i++)
             handleDeatils3State(i,yxpItem[i].m_YXState);//空调风速

            for(var i= 145;i<=148;i++)
              handleDeatils3State(i,yxpItem[i].m_YXState); //空调模式

            handleDeatils3State(149,yxpItem["149"].m_YXState); //起居室空调开关

            for(var i= 150;i<=153;i++)
             handleDeatils3State(i,yxpItem[i].m_YXState);//起居室空调风速

            for(var i= 154;i<=157;i++)
              handleDeatils3State(i,yxpItem[i].m_YXState); //起居室空调模式

            handleDeatils3State(158,yxpItem["158"].m_YXState); //歌曲播放关闭

            // ***ycp****
            var ycpItem = data.HttpData.data.YCItemDict;
            
            $("#homeDeatils3 .wd_conditioner").find("i").text(ycpItem["65"].m_YCValue); //卧室空调温度
            $("#homeDeatils3 .wd_conditioner1").find("i").text(ycpItem["66"].m_YCValue); //卧室空调温度
            window.localStorage.volumeValue4 = ycpItem["67"].m_YCValue;
                           }
                catch(e){}
            }
        }
    });
}


//处理状态值
function handleDeatils3State(parntIndex,status){

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
// function handleDeatils3People(judgePeople1,judgePeople2,judgePeople3){
//    if(judgePeople1 == "有人" || judgePeople2 == "有人" || judgePeople3 == "有人")
//    {
//       $("#homeDeatils3").find("i.positionCenter").removeClass("icon-peopleNone").addClass("icon-peopleBlock");
//    }
//    else
//    {
//       $("#homeDeatils3").find("i.positionCenter").removeClass("icon-peopleBlock").addClass("icon-peopleNone");
//    }
// }
