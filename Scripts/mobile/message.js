var AllTime = new Array(),AllName = new Array();
//init
function Message() {
  toolbarActive('MessageTool');
  $(".messageInfoList").html(''); AllTime.length =  AllName.length = 0;  
  $(".auth_name_get").text(window.localStorage.auth_name_title);
  $('.messageConfirm p:eq(0)').text("服务员 "+window.localStorage.userName);
  
  readyFile();

  confirmNoticeFun(allEquipNo);//初始化确认和待确认
}
//读取文件夹结构
function readyFile() {
    $.when($.fn.XmlRequset.httpPost("/api/GWServiceWebAPI/get_JMdata",{
        data:{getDataTable:"GWUser"},
        async:false
    })).done(function(n,l){
    let rt = n.HttpData;
    if (rt.code ==200) {
      $(".userListView").find("ul").html("");
      rt.data.forEach(function(item,index){
        if(item.name != window.localStorage.userName)
        {
          readyFileTxt(item.name,window.localStorage.userName);
        }
      });
    }
    }).fail(function(e){

    });
}
//读取最后一条记录
function readyFileTxt(sendName,receiveName) {
  var Record_url = "/api/GWServiceWebAPI/readyEndRecord";
  var Record_data = {sendName:sendName,receiveName:receiveName};
  JQajaxo("post", Record_url, true, Record_data,Record_success,Record_error,Record_complete);
  function Record_success(data) {
    //  console.log(data);
     var result = data.HttpData.concenTxt;
     if(result)
       {
         var filUrlStr = result.replace(fileUrl+"\\","").split("\\"),fileNameStr = filUrlStr[1].replace(".txt",""),fileDateTime = filUrlStr[0];
         readerTxt(result,sendName,receiveName,fileDateTime,true); 
       }
  }
  function Record_error(e){}
  function Record_complete(xmlhttprequest,status){}
}

//读记录
function readerTxt(fileUrlVal,sendUser,receiveUser,DateTime,isFlase) {
  $.when($.fn.XmlRequset.httpPost("/api/GWServiceWebAPI/ReadChatInfo", {
      data: {
          fileUrl: fileUrl,
          fileName: sendUser+"-"+receiveUser,
          DateTime: DateTime,
      },
      async: false
  })).done(function(n, l) {
      let rt = n.HttpData;
      if (rt.code == 200) {
        var allStr,userStr,strLength;
        allStr = rt.data.concenTxt.split("<br />");
        strLength= allStr.length;
        userStr = allStr[strLength-2];
        let dt = JSON.parse(userStr),receive = (window.localStorage.userName == sendUser?receiveUser:sendUser);
        initmessageHTML(receive,dt.time,dt.sendName+": "+dt.msg);//聊天对象,聊天时间chatTime,聊天信息,最新聊天日期   
      }
  }).fail(function(e) {
    if(isFlase){
      readerTxt(fileUrlVal,receiveUser,sendUser,DateTime,false);
    }
  });
}
//初始化界面HTML
function initmessageHTML(receive,chatTime,txt){
  
  var domHTML ="<li>"+
                "<a href=\"/shortMessage/?"+receive+"\" class=\"item-content\" >"+
                  "<div class=\"item-media "+(parseInt(window.localStorage.getItem(receive))?"newNotice":1)+"\"><img src=\"/image/ic_launcher.png\" width=\"60\"/></div>"+
                  "<div class=\"item-inner\">"+
                    "<div class=\"item-title-row\">"+
                      "<div class=\"item-title\">"+receive+"</div>"+
                      "<div class=\"item-after\">"+chatTime+"</div>"+
                    "</div>"+
                    "<div class=\"item-text\">"+txt+"</div>"+
                    // "<label>99</label>"+
                  "</div>"+
                "</a>"+
              "</li>";
   $(".messageInfoList").append(domHTML);           
}
