var AllTime = new Array();
var AllName = new Array();
function Message() {
  toolbarActive('MessageTool');
  $(".messageInfoList").html(''); AllTime.length =  AllName.length = 0;  
  $(".auth_name_get").text(window.localStorage.auth_name_title);
  $('.messageConfirm p:eq(0)').text("服务员 "+window.localStorage.userName);
  readerTxt("C:\\MsgChat","admin","zkx","20180912",true);
   //readyFile(fileUrl);
  // for(var i=0;i<10;i++)
  //   initmessageHTML("Alony","09:00","Database Scientist...","2018-08-16 09:00")
}


function readyFile(fileURL) {
    var Record_url = "/GWService.asmx/GetFileStructure";
    var Record_data = "filePath=" + fileURL + "&&fileName=" + ".txt";
    JQajaxo("post", Record_url, true, Record_data,Record_success,Record_error,Record_complete);
    function Record_success(data) {
        var dt = $(data).find("string").html();
        var result = JSON.parse(dt);
        if(result != null)
        {
          result.forEach(function(item,index){var dTime = item.replace(fileUrl+"\\","");AllTime.push(dTime);});
          AllTime=AllTime.sort(sortNumber);
          AllTime.forEach(function(item,index){readyFileTxt(item);});
        }
    }
    function Record_error(e){}
    function Record_complete(xmlhttprequest,status){}
}

function readyFileTxt(value) {
    var Record_url = "/GWService.asmx/GetFileStructure";
    var Record_data = "filePath=" + fileUrl+"\\"+value + "&&fileName=" + ".txt";
    JQajaxo("post", Record_url, true, Record_data,Record_success,Record_error,Record_complete);
    function Record_success(data) {
        var dt = $(data).find("string").html();
        var result = JSON.parse(dt);
        if(result != null)
        {
            var AllStr="",localUsr = window.localStorage.userName; 
            result.forEach(function(item,index){
                var filUrlStr = item.replace(fileUrl+"\\","").split("\\"),fileNameStr = filUrlStr[1].replace(".txt",""),fileDateTime = filUrlStr[0];
                
                if(fileNameStr.indexOf(window.localStorage.userName+"-") != -1 ) //把有和该人聊天且是最新记录调取出来放再列表之前
                  { 
                    AllStr = fileNameStr.replace(window.localStorage.userName+"-","");
                    if(!getISarray(AllStr,AllName))//把不重复按时间罗列出来
                    {
                      AllName.push(AllStr); 
                      readerTxt(value,localUsr,AllStr,fileDateTime,true);
                    } 
                  }
                  else if(fileNameStr.indexOf("-"+window.localStorage.userName) != -1)
                  {
                    AllStr = fileNameStr.replace("-"+window.localStorage.userName,"");
                    if(!getISarray(AllStr,AllName))//把不重复按时间罗列出来
                    {
                      AllName.push(AllStr);
                      readerTxt(value,AllStr,localUsr,fileDateTime,false);
                    }                     
                  }
            });
        }
        
    }
    function Record_error(e){}
    function Record_complete(xmlhttprequest,status){}
}

//读记录
function readerTxt(fileUrlVal,sendUser,receiveUser,DateTime,isFlase) {
    var jsonData = {
        "url": "/api/GWServiceWebAPI/ReadChatInfo",
        "data": {
            "fileUrl": fileUrl,
            "fileName": sendUser+"-"+receiveUser,
            "DateTime": DateTime,
        },
        "success": _success,
        "error": _error,
        "complete": _complete,
    };
    jQuery.axpost(jsonData);

    function _success(dt) {
      // myApp.dialog.alert(JSON.stringify(dt));
      if(dt.HttpData.code == 200)
      {
        var allStr,userStr,strLength,chatObjec,endChatObject,chatDate,chatContent,chatTime;
        allStr = dt.HttpData.data.concenTxt.split("<br />");
        strLength= allStr.length;
        userStr = allStr[strLength-2];
        if(sendUser == userName)
         {chatObjec = receiveUser;}
        else
          {chatObjec = sendUser;}
        endChatObject= userStr.split("<f7-userName:>")[1].split("<f7-time:>")[0];
        chatTime= userStr.split("<f7-time:>")[1].split("<f7-Content:>")[0];
        chatContent= userStr.split("<f7-Content:>")[1];
        chatDate= chatTime.split(" ")[0].replace("-","");
        initmessageHTML(chatObjec,chatTime,endChatObject+": "+chatContent,chatDate);//聊天对象,聊天时间chatTime,聊天信息,最新聊天日期        
      }
    }
    function _error(e) {}
    function _complete(XMLHttpRequest, status) {}
}

//升序
function sortNumber(a, b)
{
return b - a;
}

//是否存在数组中
function getISarray(arrayValue,arrayObject){
   for(var index in arrayObject)
   {
      if(arrayObject[index] == arrayValue)
        return 1;
   }
   return 0;
}

function initmessageHTML(chatObject,chatTime,chatInfo,DateTime){
  var domHTML ="<li>"+
                "<a href=\"/shortMessage/?"+chatObject+","+DateTime+"\" class=\" item-content\" >"+
                  "<div class=\"item-media\"><img src=\"/image/ic_launcher.png\" width=\"60\"/></div>"+
                  "<div class=\"item-inner\">"+
                    "<div class=\"item-title-row\">"+
                      "<div class=\"item-title\">"+chatObject+"</div>"+
                      "<div class=\"item-after\">"+chatTime+"</div>"+
                    "</div>"+
                    "<div class=\"item-text\">"+chatInfo+"</div>"+
                    // "<label>99</label>"+
                  "</div>"+
                "</a>"+
              "</li>";
   $(".messageInfoList").append(domHTML);           
}
