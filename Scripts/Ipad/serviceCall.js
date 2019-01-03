
window.callTimer;

function serviceCall(){
	// getEquipCall()

	
	toolbarActiveImg('serviceCallTool');
	
	var searchbar1 = myApp.searchbar.create({
		el: '.searchbar-ones',
		searchContainer: '.search-here',
		searchIn: 'li',
	});



	
	loadNum();

}

/*时间有呼叫未呼叫的时间,没有呼叫就是当前时间*/
function loadNum(){
	console.log(2);
	var roomYcKey={
		/*点：个数-是否-时间*/
		'300':'0-0-00:00',
		'301':'0-0-00:00',
		'302':'0-0-00:00',
		'303':'0-0-00:00',
		'304':'0-0-00:00',
		'305':'0-0-00:00',
		'306':'0-0-00:00',
		'307':'0-0-00:00',
		'308':'0-0-00:00',
		'309':'0-0-00:00',
		'310':'0-0-00:00',
		'311':'0-0-00:00',
		'312':'0-0-00:00',
		'313':'0-0-00:00',
		'314':'0-0-00:00',
		'315':'0-0-00:00'
	}
	$.ajax({
		url: '/api/GWServiceWebAPI/gwFixeddateNotice',
		type: 'post',
		headers: {
				Authorization: window.localStorage.ac_appkey + '-' + window.localStorage.ac_infokey
			}
	})
	.done(function(e) {
		var dat=e.HttpData.data,lg=dat.length;
		console.log(dat);
		if(lg>0){
			for(var i=0;i<lg;i++){
				var value=dat[i];
				var str=roomYcKey[value.set_no];
				var num=parseInt(str.split("-")[0]);
				var time;
				if(!value.confirmTime){
					num++;
					time=value.callTime.substring(10,16);
				}
				roomYcKey[value.set_no]=[num,str.split("-")[1],time].join("-");

			}
		}
		for(var value in roomYcKey){
			var str=roomYcKey[value].split("-");
			if(str[0]<1){
				$("#"+value).find(".nums").text(0);
				$("#"+value).find("font").hide();
				$("#"+value).find(".sub").text("暂无新呼叫待处理");
				var myDate=new Date();
				var hours=(myDate.getHours())<10?("0"+myDate.getHours()):myDate.getHours();
				var min=(myDate.getMinutes())<10?("0"+myDate.getMinutes()):myDate.getMinutes();
				$("#"+value).find("label").text(hours+':'+min);
			}else{
				$("#"+value).find("font").show().find(".nums").text(str[0]);
				$("#"+value).find(".sub").text("您有新的呼叫待确认");
				$("#"+value).find("label").text(str[2]);

			}

		}

	})
	.fail(function() {
		alertMsgError.open();
	})
	
	callTimer=setTimeout(function(){
		loadNum()
	}, 60000);
	
}



function loadNotice(dom,value){
	if(dom){
		$(dom).addClass('bg-dark').siblings().removeClass('bg-dark');
	}
	
	$("#pannelMainId").html("")
	var idValue=value
	$.ajax({
		url: '/api/GWServiceWebAPI/gwFixeddateNoticeRadio',
		type: 'post',
		data:{
			set_no:value
		},
		headers: {
				Authorization: window.localStorage.ac_appkey + '-' + window.localStorage.ac_infokey
			}
		
	})
	.done(function(e) {
		var dat=e.HttpData.data;
		var lg=dat.length,nums=0;
		for(var i=0;i<dat.length;i++){
			var value=dat[i];
			console.log(value);
			var date=value.callTime.split(" ");
			if(!value.confirmTime){
			   var ahtml='<a targ="'+idValue+'" onclick="sureNotice(this,'+value.id+')" href="#">确认通知</a>';
			   nums++;
			   $("#"+idValue).find("label").text(value.callTime.substring(10,16));
			}else{
			   var ahtml='<a class="active" href="#">已经确认</a>';
			}
			var html='<p>'+date[1].substring(0,5)+'</p>'+
						'<div class="pannel-box">'+
							'<div>'+
								'<p>'+
									// '<span>通知楼层</span>'+
									'<span>通知位置</span>'+
									'<span>通知时间</span>'+
								'</p>'+
								'<p>'+
									// '<span>18层</span>'+
									'<span>'+value.position+'</span>'+
									'<span>'+date[0]+'</span>'+
								'</p>'+
								ahtml+
							'</div>'+
						'</div>';
			if(!value.confirmTime){
			   $("#pannelMainId").prepend(html)

			}else{
			   $("#pannelMainId").append(html)
			}
			
		}

		if(nums>0){
			$("#"+idValue).find(".nums").text(nums).parent().show();
		}else{
			$("#"+idValue).find(".nums").parent().hide();

		}
	})
	.fail(function() {
		alertMsgError.open();
		// console.log("error");
	})
	
	
}
function sureNotice(dom,id){
	console.log(id);
	var myDate=new Date();
	var year=myDate.getFullYear();
	var mon=(myDate.getMonth()+1)<10?("0"+(myDate.getMonth()+1)):(myDate.getMonth()+1);
	var day=myDate.getDate()<10?("0"+myDate.getDate()):myDate.getDate();
	var hours=(myDate.getHours())<10?("0"+myDate.getHours()):myDate.getHours();
	var min=(myDate.getMinutes())<10?("0"+myDate.getMinutes()):myDate.getMinutes();
	var sec=(myDate.getSeconds())<10?("0"+myDate.getSeconds()):myDate.getSeconds();
	var str= year+"-"+mon+"-"+day+" "+hours+":"+min+":"+sec;
	$.ajax({
		url: '/api/GWServiceWebAPI/set_BatchUpdate',
		type: 'post',
		data: {
			getDataTable:'gw_historicalNotice',
			cellDataList:"confirmTime='"+str+"'",
			ifDataList:'id='+id

		},
		headers: {
				Authorization: window.localStorage.ac_appkey + '-' + window.localStorage.ac_infokey
			}
	})
	.done(function(e) {
		var dat=e.HttpData.data;
		if(dat!=0){
			alertMsgSuccess.open();
			$(dom).addClass('active').text("已经确定");
			var tag=$(dom).attr("targ");
			var num=parseInt($("#"+tag).find(".nums").text()) ;

			loadNum()


			// if(num==1){
			// 	$("#"+tag).find("font").hide();
			// 	$("#"+tag).find(".sub").text('暂无新的呼叫');
			// }
			// else{
			// 	$("#"+tag).find(".sub").text('您有新的呼叫待确认');
			// }

		}
	})
	.fail(function() {
		alertMsgError.open();
	})
	
	


}

function getEquipCall(){
	$.ajax({
		type:"post",
		url:"/GWService.asmx/GetRealTimeData",
		async:false,
		data:{
			equip_no:'300',
			table_name:'ycp'
		},
		success:function(res){
			var dat=JSON.parse($(res).find("string").text());
			for(var i=0;i<dat.length;i++){
				var value=dat[i];
				if(roomYcKey[value.m_iYCNo]){
					var str=roomYcKey[value.m_iYCNo].split("-");
					roomYcKey[value.m_iYCNo]=[str[0],'1',str[2]].join("-")
				}

			}
		}
	});
}

function goNoticeSet(){
	myApp.router.navigate('/noticeSet/');
}
