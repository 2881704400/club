var ehtml = document.getElementsByClassName("RecordContainer")[0];
function Record() {
    $(".RecordContainer").html("");
    readyFile(fileUrl);
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
            result.forEach(function(item,index){
                readyFileTxt(item);
            });
        }
    }
    function Record_error(e){}
    function Record_complete(xmlhttprequest,status){}
}

function readyFileTxt(value) {
    var Record_url = "/GWService.asmx/GetFileStructure";
    var Record_data = "filePath=" + value + "&&fileName=" + ".txt";
    JQajaxo("post", Record_url, true, Record_data,Record_success,Record_error,Record_complete);
    function Record_success(data) {
        var dt = $(data).find("string").html();
        var result = JSON.parse(dt);
        if(result != null)
        {
            var localRe = window.localStorage.receiveUser,localUsr = window.localStorage.userName; 
            result.forEach(function(item,index){
                var filUrlStr = item.replace(fileUrl+"\\","").split("\\"),fileNameStr = filUrlStr[1].replace(".txt",""),fileDateTime = filUrlStr[0];
                if(fileNameStr == (localRe+"-"+localUsr) || fileNameStr == (localUsr+"-"+localRe))
                  readerTxt(value,localUsr,localRe,fileDateTime,true);
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
            "DateTime": DateTime
        },
        "success": _success,
        "error": _error,
        "complete": _complete
    };
    jQuery.axpost(jsonData);
    function _success(dt) {
        
        $(".RecordContainer").html(dt.HttpData.data.concenTxt+$(".RecordContainer").html());
    }
    function _error(e) {isFlase?readerFile(fileUrl,receiveUser,sendUser,DateTime,false):"";}
    function _complete(XMLHttpRequest, status) {}
}