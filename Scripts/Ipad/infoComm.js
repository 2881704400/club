
function infoComm() {
	toolbarActiveImg('infoCommTool');
	
	$('body').height($('body')[0].clientHeight);
	
	$("#chatWithOtherInfoId").bind('keyup', function(event) {
		if(event.keyCode == "13") {　　　　
			$('#chatWithOtherInfoBtnId').click();　　
		}
	});

	/*文字提交*/
	$("#chatWithOtherInfoBtnId").bind('click', function() {
		var content = $("#chatWithOtherInfoId").val();
		if(content != "" && content != null) {
			var str =
				"		<div class='pannel-chat-info  stay-right' >" +
				"			<div class='chart-person'>" +
				"				<img src='/Image/Ipad/person_img.png' />" +
				"			</div>" +
				"			<div class='chart-content'>" +
				"				" + content + "" +
				"			</div>" +
				"		</div>"
			$("#chatOtherInfoId").append(str);
			$("#chatWithOtherInfoId").val('');
			send_msg(content,0);
			$('#chatOtherInfoId').scrollTop($("#chatOtherInfoId")[0].scrollHeight);
			// var newScrollHeight = $("#chatOtherInfoId")[0].scrollHeight;
			// $('#chatOtherInfoId').animate({
			// 	scrollTop: newScrollHeight
			// }, 1000);
			
		}
	});





	$("#chatWithOtherContactId").bind('keyup', function(event) {
		if(event.keyCode == "13") {
			$('#chatWithOtherContactBtnId').click();　　
		}
	});
	/*文字提交*/
	$("#chatWithOtherContactBtnId").bind('click', function() {
		var content = $("#chatWithOtherContactId").val();
		if(content != "" && content != null) {
			var str = "<div class='pannel-chat-info stay-right' >" +
				"			<div class='chart-person'>" +
				"				<img src='/Image/Ipad/person_img.png' />" +
				"			</div>" +
				"			<div class='chart-content'>" +
				"				" + content + "" +
				"			</div>" +
				"		</div>"
			$("#chatOtherContactId").append(str);
			$("#chatWithOtherContactId").val('');
			send_msg(content,1)
			$("#chatOtherContactId").scrollTop($("#chatOtherContactId")[0].scrollHeight)   


			// var newScrollHeight = $("#chatOtherContactId")[0].scrollHeight + 60;
			// $('#chatOtherContactId').animate({
			// 	scrollTop: newScrollHeight
			// }, 1000);
		}
	});

	//左侧菜单栏切换效果
	$(".list-one  li").bind('click', function() {
		if(!$(this).hasClass('list-group-title')) {
			$(".left-pannel ul li").each(function() {
				$(this).removeClass("bg-dark");
			})
			$(this).addClass("bg-dark");
			$(".pannel-img").hide();
			$(".pannel-info-detail").show();

		}
	});


	$(".side-nav a").bind('click', function() {
		// readyFile();
		$(".side-nav a").each(function() {
			$(this).removeClass("active");
		});

		$(this).addClass("active");

		var index = $(this).index();

		$(".pannel-container .pannel-tab").each(function() {
			$(this).hide();
		});

		$(".pannel-container .pannel-tab").eq(index).show();


		if(index == 1) {
			$("#contactList ul li").each(function(){
				var act=$(this).hasClass('active')
				if(act){
					name=$(this).attr("id");
					readyFileTxt(window.localStorage.userName,name,'#chatOtherContactId');
				}

			})
			
		}
	})

	var searchbar1 = myApp.searchbar.create({
		el: '.searchbar-one',
		searchContainer: '.list-one',
		searchIn: 'li'
		
	});
	// // create searchbar
	var searchbar2 = myApp.searchbar.create({
		el: '.searchbar-two',
		searchContainer: '.list-two',
		searchIn: '.item-title'
		
	});
	readyFile();
}
function send_msg(txt,type) {
    if (ws != null) {
        var inputInfo = txt.trim();
        if (inputInfo == "") {
            return;
        }
        var dat = {sendName: window.localStorage.userName,receiveName:window.localStorage.receiveUserName,msg: inputInfo,time: GetDateStrValue(0)};
        // inputInfo = window.localStorage.userName + "@" + window.localStorage.receiveUserName + ":::" + inputInfo;


        try {
        	 // myApp.dialog.alert(JSON.stringify(dat));
            ws.send(JSON.stringify(dat) );
        } catch (e) {
            initWebSocket();
            var con="";
            // var content = $("#chatWithOtherInfoId").val();
            // var content = $("#chatWithOtherContactId").val();
            if(type==1){
            	con=$("#chatWithOtherContactId").val();
            }else{
            	con=$("#chatWithOtherInfoId").val();
            }
           
            send_msg(con);
        }
    } else {
        myApp.dialog.alert("连接服务错误...");
    }
};



function readyFileTxtList(sendName,receiveName){
	/*获取所有和登录者有关的聊天记录*/
	 var Record_url = "/api/GWServiceWebAPI/readyEndRecord";
 	 var Record_data = {sendName:sendName,receiveName:receiveName};
	  JQajaxo("post", Record_url, true, Record_data,Record_success,Record_error,Record_complete);
	  function Record_success(data) {
	     var result = data.HttpData.concenTxt;
	     $("#chatOtherContactId").html("")
	     if(result)
	       {
	         var filUrlStr = result.replace(fileUrl+"\\","").split("\\"),
	             fileNameStr = filUrlStr[1].replace(".txt",""),fileDateTime = filUrlStr[0];
	         readerTxtList(result,sendName,receiveName,fileDateTime,true); 
	       }
	  }
	  function Record_error(e){}
	  function Record_complete(xmlhttprequest,status){}
}
// 读记录
function readerTxtList(fileUrlVal,sendUser,receiveUser,DateTime,isFlase) {
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
        var allStr,strLength;
        allStr = rt.data.concenTxt.split("<br />");
        strLength=allStr.length;
        if(isFlase){
        	initmessageHTMLList(allStr[strLength-2],sendUser);//聊天对象,聊天时间chatTime,聊天信息,最新聊天日期   
        }else{
        	initmessageHTMLList(allStr[strLength-2],receiveUser);//聊天对象,聊天时间chatTime,聊天信息,最新聊天日期   

        }
        
      }
  }).fail(function(e) {
    if(isFlase){
      readerTxtList(fileUrlVal,receiveUser,sendUser,DateTime,false);
    }
  });
}
function initmessageHTMLList(arrStr,sendUser){


		var value=JSON.parse(arrStr);


		// arrStr.replace(/<f7-userName:>|<f7-time:>|<f7-Content:>/g," ").split(" ");
		// var name=value[1];
		// var date=value[2];
		var time=value.time.substring(11,16);
		var content=value.msg;
		var html='<li onclick="loadThisMesage(this,\''+sendUser+'\')" class="'+sendUser+'">'+
					'<div><img src="../../Image/Ipad/person_img.png" /></div>'+
					'<p class="item-title">'+sendUser+' <label>'+time+'</label></p>'+
					'<span class="con">'+content+'</span>'+
					'<font style="display:none;"><span class="num">0</span></font>'+
				'</li>';
		$("#mesList").append(html);		
		
}

function loadThisMesage(dom,name){
	$("#mesListMesWrap").show()
	$("#chatOtherInfoId").attr("receName",name);
	$("#contactMess").show();
	$(dom).addClass('active').siblings().removeClass('active');
	$("#mesListMesWrap .name").text(name);
	$(dom).find("font").hide().find(".num").text(0);

	window.localStorage.receiveUserName=name;
	readyFileTxt(window.localStorage.userName,name,'#chatOtherInfoId');
}


function readyFile() {
    $.when($.fn.XmlRequset.httpPost("/api/GWServiceWebAPI/get_JMdata",{
        data:{getDataTable:"GWUser"},
        async:false
    })).done(function(n,l){
		    let rt = n.HttpData;
		    if (rt.code ==200) {

			    var sortArr=loadSort(rt.data);

			    var list= formatList(sortArr,"name");

			    $("#contactList").html('')
			    $("#mesList").html('')
			    list.forEach(function(item,index){
			    	loadMemList(item);
			    })


			    rt.data.forEach(function(item,index){
			        if(item.name != window.localStorage.userName)
			        {
			         
			          readyFileTxtList(item.name,window.localStorage.userName);
			        }
			    });
		    }
    }).fail(function(e){
      
    });
}

/*获取给登录人员的消息*/
function readyFileTxt(sendName,receiveName,dom) {
  var Record_url = "/api/GWServiceWebAPI/readyEndRecord";
  var Record_data = {sendName:sendName,receiveName:receiveName};
  JQajaxo("post", Record_url, true, Record_data,Record_success,Record_error,Record_complete);
  function Record_success(data) {
     var result = data.HttpData.concenTxt;
     $(dom).html("")
     if(result)
       {
         var filUrlStr = result.replace(fileUrl+"\\","").split("\\"),
             fileNameStr = filUrlStr[1].replace(".txt",""),fileDateTime = filUrlStr[0];
         readerTxt(result,sendName,receiveName,fileDateTime,true,dom); 
       }
  }
  function Record_error(e){}
  function Record_complete(xmlhttprequest,status){}
}
//读记录
function readerTxt(fileUrlVal,sendUser,receiveUser,DateTime,isFlase,dom) {
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
        var allStr,userStr,strLength,chatObjec,endChatObject,chatDate,chatContent,chatTime;
        allStr = rt.data.concenTxt.split("<br />");
        initmessageHTML(allStr,dom);//聊天对象,聊天时间chatTime,聊天信息,最新聊天日期   
      }
  }).fail(function(e) {
    if(isFlase){
      readerTxt(fileUrlVal,receiveUser,sendUser,DateTime,false,dom);
    }
  });
}

function loadMemList(item){

	var liHtml='';

	item.List.forEach(function(ite){
		var name=ite.name.split(",")[1];
		liHtml+='<li onclick="loadMessage(this,\''+name+'\')" id="'+name+'"> '+
					'<div><img src="/Image/Ipad/person_img.png" /></div>'+
					'<label class="item-title">'+name+'</label>'+
				'</li>';
	})
	var html='<div class="list-group">'+
				'<ul>'+
					'<li class="list-group-title">'+item.Title+'</li>'+
					liHtml+
				'</ul>'+
			'</div>';
	$("#contactList").append(html);
}
function loadMessage(dom,name){
	$("#contactMess").show();
	$(dom).addClass('active').siblings().removeClass('active');
	$(dom).parents(".list-group").siblings('.list-group').find('li:not(.list-group-title)').removeClass('active');
	$("#contactMess .name").text(name);
	$("#chatOtherContactId").attr("receNames",name);
	window.localStorage.receiveUserName=name;
	readyFileTxt(window.localStorage.userName,name,'#chatOtherContactId');
}



/*如何获取所有联系人列表，*/


//初始化界面HTML
function initmessageHTML(arrStr,dom){

	for(var i=0;i<arrStr.length;i++){

		// var value=arrStr[i].replace(/<f7-userName:>|<f7-time:>|<f7-Content:>/g," ").split(" ");
		if(arrStr[i]!=""){
			var value=JSON.parse(arrStr[i])
		}else{
			continue;
		}
		



		var name=value.sendName;
		// var date=value[2];
		var time=value.time.substring(11,16);
		var content=value.msg;
		var html="",staClass='';
		if(name==window.localStorage.userName){
			staClass="stay-right"
		}
		if(content){
			var html='<div class="pannel-chat-info '+staClass+'">'+
						'<div class="chart-person">'+
							'<img src="/Image/Ipad/person_img.png" />'+
						'</div>'+
						'<div class="chart-content">'+
							content+
						'</div>'+
					'</div>';
			if((i+1)%10==0||i==0){
				var timeHtml='<p>'+time+'</p>'
				$(dom).append(timeHtml);
			}
			$(dom).append(html)
		}

	}

	$(dom).scrollTop($(dom)[0].scrollHeight)         
}


function formatList(arr,keyword) {

  let newArr1 = [];
  let tempArr = [];
  // let reg = /\b(\w)|\s(\w)/g;
  let k = 0;
  let firstWord = arr[0][keyword].charAt(0).toUpperCase();//获取第一个分类字母
  arr.map((v) => {

  		var userName=window.localStorage.userName;
  		var name=v.name.split(",")[1];

	    if(name!=userName){

	    	// v[keyword] = v[keyword].toLowerCase()
	    	// var str=v[keyword].toLowerCase();
	    	var str = v[keyword].replace(v[keyword].charAt(0),v[keyword].charAt(0).toUpperCase());//首字母大写
		    if(firstWord == v[keyword].charAt(0)){
		      tempArr.push(v);
		      newArr1[k] = {
		        Title:firstWord,
		        List:tempArr
		      }
		    }else{
		      //这里循环到这表示已经第二个字母了
		      firstWord = v[keyword].charAt(0);//设置第二字母
		      tempArr = [];//把之前的清除掉
		      tempArr.push(v);//添加第一个
		      newArr1[++k] = {//自增
		        Title: firstWord,
		        List : tempArr
		      }
		    }

	    }

  });

  return newArr1;
}

function loadSort(data){
	var name=[],uplArr=[];

	for(var i=0;i<data.length;i++){
		var str= data[i].name.replace(data[i].name.charAt(0),data[i].name.charAt(0).toUpperCase() ) +","+data[i].name;
		name.push(str);
	}
	var sortArr= name.sort();
	for(var i=0;i<sortArr.length;i++){
	
		var value=sortArr[i];
		uplArr.push(
			{name:sortArr[i]}
		)

	}
	return uplArr;

};
		  
function GetDateStrValue(AddDayCount) {
    var dd = new Date();
    dd.setDate(dd.getDate() + AddDayCount);
    var y = dd.getFullYear();
    var m = dd.getMonth() + 1;
    var d = dd.getDate();
    var h = dd.getHours();
    var mo = dd.getMinutes();
    var s = dd.getSeconds();
    return y + "-" + addZero(m) + "-" + addZero(d) + " " + addZero(h) + ":" + addZero(mo) + ":" + addZero(s);
}
