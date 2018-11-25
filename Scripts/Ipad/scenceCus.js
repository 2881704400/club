var senceCheck=[],loopCheck=[],airCheck=[];
var eqCheck=[],valWd={};
var openCurtain=[],stopCurtain=[],closeCurtain=[];
var parInd=0,thisInd=0;
var ktInd=0;
var isOpen=false;

//切换房间是获取状态
//eqCheck=[1004,1002,1053,1086,1014,1030,1037,1020,1015]
function scenceCus(){
	toolbarActiveImg('sceneCustomTool');
//	console.log("场景定制");
	getEquipSta()
	getEquipStayx()
	loadCurtain(0,0);
	loadScence(0,0);
	loadLoop(0,0);
	loadTitle(0,0);
	loadAirControl(0,0);
	loadAirMs(0,0);
	loadAirFs(0,0);	
	loadAirWd(0,0)
	$(".listWrap .simple-list li").each(function(){
		$(this).click(function(){
			openCurtain=[],stopCurtain=[],closeCurtain=[];
			$(this).parents(".accordion-item").siblings().find("*").removeClass("active")
			$(this).addClass("active");
			$(this).siblings().removeClass("active");
			getEquipSta();
			getEquipStayx();
			removeMsAc();
			removeFsAc();
			parInd=$(this).parents(".accordion-item").index();
			thisInd=$(this).index();
			loadTitle(thisInd,parInd)
			loadCurtain(thisInd,parInd);
			loadScence(thisInd,parInd);
			loadLoop(thisInd,parInd);
			ktInd=0;
			isOpen=false;
			loadAirControl(thisInd,parInd);//空调开关
			loadAirMs(thisInd,parInd);//空调模式
			loadAirFs(thisInd,parInd);//空调风速
			loadAirWd(thisInd,parInd);
		})
	});
//	$("#ktControl .pannel-title .item").each(function(){
//		$(this).click(function(){
//			console.log(1)
//		})
//	})
	$("#ktControl .pannel-title").delegate(".item","click",function(){
			var ind=$(this).index();
			$(this).addClass("check");
			$(this).siblings().removeClass("check");
			ktInd=ind;
//			console.log(ind)
			loadAirControl(thisInd,parInd)
			loadAirWd(thisInd,parInd)
	})
	$("#airSceneId").find("li").eq(0).click(function(){
		//开关
		var flag = $(this).find("img").eq(1).is(':visible');
		var that=this;
//		console.log(flag);
		var param
		if(flag){
			//关
			var set=airControl[parInd][thisInd][ktInd].ctr[1].set.split(",");
//			console.log(set)
			param=getSetParam(set[0],set[1]);
			
		}else{
			var set=airControl[parInd][thisInd][ktInd].ctr[0].set.split(",");
//			console.log(set)
			param=getSetParam(set[0],set[1]);
			
			//开
		}
		var data={
			equip_no:param.equip_no,
			main_instruction:param.main_instruction,
			minor_instruction:param.minor_instruction,
			value:param.value,
			user_name:window.localStorage.userName
		}
		JQajaxo("post","/GWService.asmx/SetupsCommand",true,data,_success)
		function _success(res){
			$(res).find("string").each(function(){
//				console.log($(this).text())
				var dat=$(this).text();
				if(dat=="true"){
					if(flag){
						$(that).find("img").eq(1).hide();
						$(that).find("img").eq(0).show();
					}else{
						$(that).find("img").eq(1).show();
						$(that).find("img").eq(0).hide();
					}
					alertMsgSuccess.open();
				}else{
					alertMsgError.open();
				}
			})
		}
	})
	$("#airSceneId").find("li").eq(1).click(function(){
		//温度+
		var that=this;
		$(this).find("img").eq(0).hide();
		$(this).find("img").eq(1).show();
		setTimeout(function(){
			$(that).find("img").eq(1).hide();
			$(that).find("img").eq(0).show();
		},1000)
		var value=$("#airTemperatureId").text();
		var set=airControl[parInd][thisInd][ktInd].wd[0].set.split(",");
//		console.log(set)
		var num=JSON.parse(value)+1 ;
		var param=getSetParam(set[0],set[1]);
		var data={
			equip_no:param.equip_no,
			main_instruction:param.main_instruction,
			minor_instruction:param.minor_instruction,
			value:num,
			user_name:window.localStorage.userName
		}
		JQajaxo("post","/GWService.asmx/SetupsCommand",true,data,_success)
		function _success(res){
			$(res).find("string").each(function(){
				
//				console.log($(this).text())
				var dat=$(this).text();
				if(dat=="true"){
					alertMsgSuccess.open();
					$("#airTemperatureId").text(num)
				}else{
					alertMsgError.open();
				}
			})
		}
		
	})
	$("#airSceneId").find("li").eq(2).click(function(){
		//温度-
		var that=this;
		$(this).find("img").eq(0).hide();
		$(this).find("img").eq(1).show();
		setTimeout(function(){
			$(that).find("img").eq(1).hide();
			$(that).find("img").eq(0).show();
		},1000)
		var value=$("#airTemperatureId").text();
		var set=airControl[parInd][thisInd][ktInd].wd[0].set.split(",");
//		console.log(set)
		var num=JSON.parse(value)-1;
		var param=getSetParam(set[0],set[1]);
		var data={
			equip_no:param.equip_no,
			main_instruction:param.main_instruction,
			minor_instruction:param.minor_instruction,
			value:num,
			user_name:window.localStorage.userName
		}
		JQajaxo("post","/GWService.asmx/SetupsCommand",true,data,_success)
		function _success(res){
			
			$(res).find("string").each(function(){
				var dat=$(this).text();
				if(dat=="true"){
					alertMsgSuccess.open();
					$("#airTemperatureId").text(num)
				}else{
					alertMsgError.open();
				}
			})
		}
		
	})
	$("#airSceneId").find("li").eq(3).click(function(){
		//风速
		var that=this;
		$(this).find("img").eq(0).hide();
		$(this).find("img").eq(1).show();
		setTimeout(function(){
			$(that).find("img").eq(1).hide();
			$(that).find("img").eq(0).show();
		},1000)
		var ind=$("#windchoose li i.active").parent().index()-1;
//		console.log(ind)
		if(ind==3){
			ind=0
		}else{
			ind+=1
		}
//		console.log(ind)
		var set=airControl[parInd][thisInd][ktInd].fs[ind].set.split(",");
		var param=getSetParam(set[0],set[1]);
//		console.log(param)
		var data={
			equip_no:param.equip_no,
			main_instruction:param.main_instruction,
			minor_instruction:param.minor_instruction,
			value:param.value,
			user_name:window.localStorage.userName
		}
		JQajaxo("post","/GWService.asmx/SetupsCommand",true,data,_success)
		function _success(res){
			$(res).find("string").each(function(){
//				console.log($(this).text())
				var dat=$(this).text();
				if(dat=="true"){
					alertMsgSuccess.open();
					$("#windchoose li").each(function(){
						$(this).find("i").removeClass("active");
					})
//					console.log(ind)
					$("#windchoose li").eq(ind+1).find("i").addClass("active");
				}else{
					alertMsgError.open();
				}
			})
		}
	})
	$("#airSceneId").find("li").eq(4).click(function(){
		var that=this;
		$(this).find("img").eq(0).hide();
		$(this).find("img").eq(1).show();
		setTimeout(function(){
			$(that).find("img").eq(1).hide();
			$(that).find("img").eq(0).show();
		},1000)
		var ind=$("#airModelContentId li i.active").parent().index()-1;
//		console.log(ind)
		if(ind==3){
			ind=0
		}else{
			ind+=1
		}
//		console.log(ind)
		var set=airControl[parInd][thisInd][ktInd].ms[ind].set.split(",");
		var param=getSetParam(set[0],set[1]);
//		console.log(param)
		var data={
			equip_no:param.equip_no,
			main_instruction:param.main_instruction,
			minor_instruction:param.minor_instruction,
			value:param.value,
			user_name:window.localStorage.userName
		}
		JQajaxo("post","/GWService.asmx/SetupsCommand",true,data,_success)
		function _success(res){
			$(res).find("string").each(function(){
//				console.log($(this).text())
				var dat=$(this).text();
				if(dat=="true"){
					alertMsgSuccess.open();
					$("#airModelContentId li").each(function(){
						$(this).find("i").removeClass("active");
					})
//					console.log(ind)
					$("#airModelContentId li").eq(ind+1).find("i").addClass("active");
				}else{
					alertMsgError.open();
				}
			})
		}
		//模式
//		parInd;
//		thisInd;
		
	})

}
function loadAirControl(thisInd,parInd){
	var con=airControl[parInd][thisInd][ktInd].ctr[0].m_iyxno;
	if(eqCheck.indexOf(con)!=-1){
		//打开的有
		isOpen=true;
		$("#airSceneId li").eq(0).find("img").eq(0).hide();
		$("#airSceneId li").eq(0).find("img").eq(1).show();
	}else{
		$("#airSceneId li").eq(0).find("img").eq(0).show();
		$("#airSceneId li").eq(0).find("img").eq(1).hide();
		isOpen=false;
	}
//	eqCheck
}

function loadAirMs(thisInd,parInd){
	var ms=airControl[parInd][thisInd][ktInd].ms;
	var ind=getArrIndex(ms)
	if(isOpen&&ind!=-1){
		$("#airModelContentId li").eq(1+ind).find("i").addClass("active")
	}
//	console.log()
//	{set:"300,1046",m_iyxno:"1019"},
}
function loadAirFs(thisInd,parInd){
	var fs=airControl[parInd][thisInd][ktInd].fs;
	var ind=getArrIndex(fs)
	if(isOpen&&ind!=-1){
		$("#windchoose li").eq(1+ind).find("i").addClass("active")
	}
}

function getArrIndex(arr){
	var ind=-1;
	for(var i=0;i<arr.length;i++){
		var msInd=arr[i].m_iyxno;
		if(eqCheck.indexOf(msInd)!=-1){
			ind=i;
			break;
		}else{
			continue;
		}
	}
	return ind;
}
function loadAirWd(thisInd,parInd){
//	ktInd	
	var keyStr=wdSta[parInd][thisInd][ktInd];
	var value=valWd[keyStr];
//	console.log(value)
	$("#airTemperatureId").text(value);
}



function loadTitle(thisInd,parInd){
	$("#ktControl .pannel-title").html("")
	if(parInd==0&&thisInd==5){
		var html='<li class="check item">休闲区1空调</li>'+
					'<li class="item">休闲区2空调</li>'+
					'<li class="item">厨房空调</li>';
		$("#ktControl .pannel-title").append(html)
	}else if(parInd==1&&thisInd==1){
		var html='<li class="check item">IMAX影院空调</li>'+
					'<li class="item">机房空调</li>';
		$("#ktControl .pannel-title").append(html)
	}else{
		var html='<li>空调</li>';
		$("#ktControl .pannel-title").append(html)
	}
}

function loadLoop(thisInd,parInd){
	var data=loop[parInd][thisInd],lg=data.length;
	$("#loopSet .wrap").html("");
	if(lg==0){
		$("#loopSet").hide();
	}else{
		$("#loopSet").show();
		for(var i=0;i<lg;i++){
			var value=data[i];
//			{label:"备餐间前灯",get:"503,12",set:"300,1002",clo:"300,1003",cho:"../../Image/Ipad/loop_close.png",uncho:"../../Image/Ipad/loop_open.png",m_iyxno:"1001"},
			var op_equip_no=value.set.split(",")[0];
			var op_set_no=value.set.split(",")[1];
			var cl_equip_no=value.clo.split(",")[0];
			var cl_set_no=value.clo.split(",")[1];
			var m_iyxno=value.m_iyxno;
			if(eqCheck.indexOf(m_iyxno)!=-1){
				var html='<div class="pannel-imginfo" onclick="setLoop(\''+op_equip_no+'\',\''+op_set_no+'\',\''+cl_equip_no+'\',\''+cl_set_no+'\',this)">'+
								'<p><img src="'+value.cho+'" style="display:none;"/><img src="'+value.uncho+'" style="display:block;"/></p>'+
								'<span>'+value.label+'</span>'+
							'</div>';
			}else{
				var html='<div class="pannel-imginfo" onclick="setLoop(\''+op_equip_no+'\',\''+op_set_no+'\',\''+cl_equip_no+'\',\''+cl_set_no+'\',this)">'+
								'<p><img src="'+value.cho+'" /><img src="'+value.uncho+'" /></p>'+
								'<span>'+value.label+'</span>'+
							'</div>';
			}
			$("#loopSet .wrap").append(html);
		}
	}
}
function setLoop(op_equip_no,op_set_no,cl_equip_no,cl_set_no,dom){
	var flag = $(dom).find("img").eq(1).is(':visible');
	var param;
	//是不是开启
	if(flag){
		//当前为打开
		param= getSetParam(cl_equip_no,cl_set_no)
	}else{
		//当前为关闭
		param= getSetParam(op_equip_no,op_set_no)
	}
	var data={
			equip_no:param.equip_no,
			main_instruction:param.main_instruction,
			minor_instruction:param.minor_instruction,
			value:param.value,
			user_name:window.localStorage.userName
	}
	JQajaxo("post","/GWService.asmx/SetupsCommand",true,data,_success)
	function _success(res){
		$(res).find("string").each(function(){
//			console.log($(this).text())
			var dat=$(this).text();
			if(dat=="true"){
				if(flag){
					$(dom).find("p img").eq(1).hide();
					$(dom).find("p img").eq(0).show();
				}else{
					$(dom).find("p img").eq(1).show();
					$(dom).find("p img").eq(0).hide();
				}
				alertMsgSuccess.open();
			}else{
				alertMsgError.open();
			}
		})
	}
	
}
//eqCheck=[1004,1026,1041,1059,1071,1092,1126,1134,1297,1315,1140,1157]
function loadScence(thisInd,parInd){
//	console.log(thisInd,parInd);
//	eqCheck
	var data=scence[parInd][thisInd],lg=data.length;
	$("#roomSceneId .wrap").html("");
	if(lg==0){
		$("#roomSceneId").hide();
	}else{
		$("#roomSceneId").show();
		for(var i=0;i<lg;i++){
			var value=data[i];
			var equip_no=value.set.split(",")[0];
			var set_no=value.set.split(",")[1];
			var value=data[i];
			var html;
			if(eqCheck.indexOf(value.m_iyxno)!=-1){
				html=   '<div class="pannel-imginfo" onclick="setScence(\''+equip_no+'\',\''+set_no+'\',this)">'+
							'<p><img src="'+value.cho+'" style="display:none;"/><img src="'+value.uncho+'" style="display:block;" /></p>'+
							'<span>'+value.label+'</span>'+
						'</div>';
			}else{
				html=   '<div class="pannel-imginfo" onclick="setScence(\''+equip_no+'\',\''+set_no+'\',this)">'+
							'<p><img src="'+value.cho+'" /><img src="'+value.uncho+'" /></p>'+
							'<span>'+value.label+'</span>'+
						'</div>';
			}
			$("#roomSceneId .wrap").append(html);
		}
	}
	
}

function setScence(equip_no,set_no,dom){
//	console.log(equip_no,set_no);
	var param= getSetParam(equip_no,set_no);
//	console.log(param);
//	JQajaxo(_type, _url, _asycn, _data, _success)
	var data={
		equip_no:param.equip_no,
		main_instruction:param.main_instruction,
		minor_instruction:param.minor_instruction,
		value:param.value,
		user_name:window.localStorage.userName
	}
	JQajaxo("post","/GWService.asmx/SetupsCommand",true,data,_success)
	function _success(res){
//		console.log(res)
		$(res).find("string").each(function(){
//			console.log($(this).text())
			var dat=$(this).text();
			if(dat=="true"){
				alertMsgSuccess.open();
				$("#roomSceneId .wrap .pannel-imginfo").each(function(){
					$(this).find("p img").eq(1).hide();
					$(this).find("p img").eq(0).show();
				})
				$(dom).find("p img").eq(0).hide();
				$(dom).find("p img").eq(1).show();
			}else{
				alertMsgError.open();
			}
		})
	}
	
}

var setCurtain=[];
function loadCurtain(thisInd,parInd){
//	console.log(thisInd,parInd);
	var data=curtain[parInd][thisInd],lg=data.length;
	$("#curtainWrap").html("");
	if(lg==0){
		$("#curtainScence").hide();
	}else{
		$("#curtainScence").show();
		for(var i=0;i<lg;i++){
//			{label:"窗帘1",get:"503,12",set:"300,1025",sto:"300,1026",clo:"300,1027",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
			var value=data[i];
			var set=value.set;
			var sto=value.sto;
			var clo=value.clo;
			var html='<li onclick="loadArr(\''+set+'\',\''+sto+'\',\''+clo+'\',this)">'+
							'<label class="checkbox">'+
								'<input type="checkbox" name="my-checkbox" value="1" />'+
								'<i class="icon-checkbox"></i>'+
								'<span>'+value.label+'</span>'+
							'</label>'+
						'</li>';
			$("#curtainWrap").append(html);
		}
	}
	
}

function loadArr(set,sto,clo,dom){
	var check=$(dom).find("input").prop("checked");
//	console.log(check);
//	console.log(set,sto,clo)
	if(check){
		//去除该窗帘
		openCurtain.remove(set);
		stopCurtain.remove(sto);
		closeCurtain.remove(clo);
	}else{
		//添加该窗帘
		openCurtain.push(set);
		stopCurtain.push(sto);
		closeCurtain.push(clo);
	}
//	console.log(openCurtain,stopCurtain,closeCurtain)
}
function openCurtainFun(dom){
	$(dom).find("p img").eq(0).hide();
	$(dom).find("p img").eq(1).show();
	for(var i=0;i<openCurtain.length;i++){
		var set=openCurtain[i].split(",");
		var param=getSetParam(set[0],set[1]);
		var data={
			equip_no:param.equip_no,
			main_instruction:param.main_instruction,
			minor_instruction:param.minor_instruction,
			value:param.value,
			user_name:window.localStorage.userName
		}
		JQajaxo("post","/GWService.asmx/SetupsCommand",true,data,_success)
		function _success(res){
			$(res).find("string").each(function(){
				var dat=$(this).text();
				if(dat=="true"){
					alertMsgSuccess.open();
					
				}else{
					alertMsgError.open();
				}
			})
		}
	}
	setTimeout(function(){
		$(dom).find("p img").eq(0).show();
		$(dom).find("p img").eq(1).hide();
	},2000)
	
}
function stopCurtainFun(dom){
	$(dom).find("p img").eq(0).hide();
	$(dom).find("p img").eq(1).show();
	for(var i=0;i<stopCurtain.length;i++){
		var set=stopCurtain[i].split(",");
		var param=getSetParam(set[0],set[1]);
		var data={
			equip_no:param.equip_no,
			main_instruction:param.main_instruction,
			minor_instruction:param.minor_instruction,
			value:param.value,
			user_name:window.localStorage.userName
		}
		JQajaxo("post","/GWService.asmx/SetupsCommand",true,data,_success)
		function _success(res){
			$(res).find("string").each(function(){
				var dat=$(this).text();
				if(dat=="true"){
					alertMsgSuccess.open();
					
				}else{
					alertMsgError.open();
				}
			})
		}
	}
	setTimeout(function(){
		$(dom).find("p img").eq(0).show();
		$(dom).find("p img").eq(1).hide();
	},2000)
}
function closeCurtainFun(dom){
	$(dom).find("p img").eq(0).hide();
	$(dom).find("p img").eq(1).show();
	for(var i=0;i<closeCurtain.length;i++){
		var set=closeCurtain[i].split(",");
		var param=getSetParam(set[0],set[1]);
		var data={
			equip_no:param.equip_no,
			main_instruction:param.main_instruction,
			minor_instruction:param.minor_instruction,
			value:param.value,
			user_name:window.localStorage.userName
		}
		JQajaxo("post","/GWService.asmx/SetupsCommand",true,data,_success)
		function _success(res){
			$(res).find("string").each(function(){
				var dat=$(this).text();
				if(dat=="true"){
					alertMsgSuccess.open();
					
				}else{
					alertMsgError.open();
				}
			})
		}
	}
	setTimeout(function(){
		$(dom).find("p img").eq(0).show();
		$(dom).find("p img").eq(1).hide();
	},2000)
}
function getEquipSta(){
	$.ajax({
		type:"post",
		url:"/GWService.asmx/GetRealTimeData",
		async:false,
		data:{
			equip_no:'300',
			table_name:'yxp'
		},
		success:function(res){
			var dat=JSON.parse($(res).find("string").text());
			eqCheck=[];
			for(var i=0;i<dat.length;i++){
				var value=dat[i];
//				场景,电源,灯开
				if(value.m_YXState=="是"||value.m_YXState=="开启"||value.m_YXState=="灯开"){
					eqCheck.push(value.m_iYXNo)
				}
			}
		}
	});
}
var wd=[
			{key:"1017",value:"0,0,0"},/*贵宾室1*/
			{key:"1027",value:"0,1,0"},/*贵宾室2*/
			{key:"1035",value:"0,2,0"},/*茶室*/
			{key:"1043",value:"0,3,0"},/*日式料理*/
			{key:"1051",value:"0,4,0"},/*酒窖*/
			{key:"1077",value:"0,5,0"},/*公区走廊*/
			{key:"1078",value:"0,5,1"},/*公区走廊*/
			{key:"1079",value:"0,5,2"},/*公区走廊*/
			{key:"",value:"0,6,0"},/*电梯*/
			{key:"",value:"0,7,0"},/*大厅*/
			{key:"1097",value:"1,0,0"},/*高尔夫*/
			{key:"1102",value:"1,1,0"},/*IMAX*/
			{key:"1103",value:"1,1,0"},/*IMAX*/
			{key:"1109",value:"1,2,0"},/*KTV*/
			{key:"1114",value:"1,3,0"},/*乒乓球*/
			{key:"1117",value:"1,4,0"},/*台球室*/
			{key:"1122",value:"1,5,0"},/*佛堂*/
			{key:"",value:"1,6,0"},/*公区走廊*/
			{key:"1155",value:"1,7,0"},/*棋牌室*/
			{key:"1158",value:"1,8,0"},/*男卫*/
			{key:"1161",value:"1,9,0"},/*女卫*/
			{key:"",value:"2,0,0"},/*公区*/
			{key:"",value:"2,1,0"},/*休闲区*/
			{key:"1198",value:"2,2,0"},/*餐厅*/
			{key:"1216",value:"2,3,0"},/*泳池*/
			{key:"1209",value:"2,4,0"},/*SPA1*/
			{key:"1210",value:"2,5,0"},/*SPA2*/
			{key:"1213",value:"2,6,0"},/*桑拿室*/
			{key:"",value:"2,7,0"},/*卫生间*/
		]
var wdSta=[
	[
		[1017],/*贵宾室1*/
		[1027],/*贵宾室2*/
		[1035],/*茶室*/
		[1043],/*日式料理*/
		[1051],/*酒窖*/
		[1077,1078,1079],/*公区走廊*/
		[],/*电梯*/
		[]/*大厅*/
	],
	[
		[1097],/*高尔夫*/
		[1102,1103],/*IMAX*/
		[1109],/*KTV*/
		[1114],/*乒乓球*/
		[1117],/*台球室*/
		[1122],/*佛堂*/
		[],/*公区走廊*/
		[1155],/*棋牌室*/
		[1158],/*男卫*/
		[1161],/*女卫*/
	],
	[
		[],/*公区*/
		[],/*休闲区*/
		[1198],/*餐厅*/
		[1216],/*泳池*/
		[1209],/*SPA1*/
		[1210],/*SPA2*/
		[1213],/*桑拿室*/
		[],/*卫生间*/
	]
]
function getEquipStayx(){
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
			valWd=[];
			for(var i=0;i<dat.length;i++){
				var value=dat[i];
				for(var m=0;m<wd.length;m++){
					var val=wd[m];
					if(value.m_iYCNo==val.key){
						valWd[val.key]=value.m_YCValue
					}
				}
			}
		}
	});
} 

function removeMsAc(){
	$("#airModelContentId li").each(function(){
		$(this).find("i").removeClass("active")
	})
}
function removeFsAc(){
	$("#windchoose li").each(function(){
		$(this).find("i").removeClass("active")
	})
}
function getSetParam(equip_no,set_no){
	var param={};
	$.ajax({
		type:"post",
		url:"/GWService.asmx/GetSetParmItem",
		async:false,
		timeout:5000,
		data:{
			equip_no:equip_no,        
        	set_no:set_no
		},
		success:function(res){
//			console.log(res)
			$(res).find("string").each(function(){
				var dat=JSON.parse($(this).text());
				param={
					equip_no:dat[0].equip_no,
					set_no:dat[0].set_no,
					set_type:dat[0].set_type,
					main_instruction:dat[0].main_instruction,
					minor_instruction:dat[0].minor_instruction,
					value:dat[0].value,
				}
			})
		}
	});
	return param;
}
function JQajaxo(_type, _url, _asycn, _data, _success) {
    var ajaxs = $.ajax({
        type: _type,
        url: _url,
        timeout: 5000,
        async: _asycn,
        data: _data,
        success: _success
    });
}

var airControl=[
		[
			/*47*/
			[
				/*贵宾室1空调*/
				{
					fs:[
						{set:"300,1043",m_iyxno:"1016"},
						{set:"300,1044",m_iyxno:"1017"},
						{set:"300,1045",m_iyxno:"1018"},
						{set:"300,1042",m_iyxno:"1015"}
					],
					ms:[
						{set:"300,1046",m_iyxno:"1019"},
						{set:"300,1047",m_iyxno:"1020"},
						{set:"300,1048",m_iyxno:"1021"},
						{set:"300,1049",m_iyxno:"1022"}
					],
					wd:[
						{set:"300,1050",m_iyxno:"1017"},
						{set:"300,1050",m_iyxno:"1017"},
						
					],
					ctr:[
						{set:"300,1040",m_iyxno:"1014"},
						{set:"300,1041",m_iyxno:"1014"}
					]
				}
			],
			[
				/*贵宾室2空调*/
				{
					fs:[
						{set:"300,1072",m_iyxno:"1032"},
						{set:"300,1073",m_iyxno:"1033"},
						{set:"300,1074",m_iyxno:"1034"},
						{set:"300,1071",m_iyxno:"1031"}
					],
					ms:[
						{set:"300,1075",m_iyxno:"1035"},
						{set:"300,1076",m_iyxno:"1036"},
						{set:"300,1077",m_iyxno:"1037"},
						{set:"300,1078",m_iyxno:"1038"}
					],
					wd:[
						{set:"300,1079",m_iyxno:"1027"},
						{set:"300,1079",m_iyxno:"1027"},
						
					],
					ctr:[
						{set:"300,1069",m_iyxno:"1030"},
						{set:"300,1070",m_iyxno:"1030"}
					]
				}
			],
			[
				/*茶室空调*/
				{
					fs:[
						{set:"300,1099",m_iyxno:"1046"},
						{set:"300,1100",m_iyxno:"1047"},
						{set:"300,1101",m_iyxno:"1048"},
						{set:"300,1098",m_iyxno:"1045"}
					],
					ms:[
						{set:"300,1102",m_iyxno:"1049"},
						{set:"300,1103",m_iyxno:"1050"},
						{set:"300,1104",m_iyxno:"1051"},
						{set:"300,1105",m_iyxno:"1052"}
					],
					wd:[
						{set:"300,1106",m_iyxno:"1035"},
						{set:"300,1106",m_iyxno:"1035"},
						
					],
					ctr:[
						{set:"300,1096",m_iyxno:"1044"},
						{set:"300,1097",m_iyxno:"1044"}
					]
				}
			],
			[
				/*日式料理空调*/
				{
					fs:[
						{set:"300,1131",m_iyxno:"1063"},
						{set:"300,1132",m_iyxno:"1064"},
						{set:"300,1133",m_iyxno:"1065"},
						{set:"300,1130",m_iyxno:"1062"}
					],
					ms:[
						{set:"300,1134",m_iyxno:"1066"},
						{set:"300,1135",m_iyxno:"1067"},
						{set:"300,1136",m_iyxno:"1068"},
						{set:"300,1137",m_iyxno:"1069"}
					],
					wd:[
						{set:"300,1138",m_iyxno:"1043"},
						{set:"300,1138",m_iyxno:"1043"},
						
					],
					ctr:[
						{set:"300,1128",m_iyxno:"1061"},
						{set:"300,1129",m_iyxno:"1061"}
					]
				}
			],
			[
				/*酒窖空调*/
				{
					fs:[
						{set:"300,1149",m_iyxno:"1077"},
						{set:"300,1150",m_iyxno:"1078"},
						{set:"300,1151",m_iyxno:"1079"},
						{set:"300,1148",m_iyxno:"1076"}
					],
					ms:[
						{set:"300,1152",m_iyxno:"1080"},
						{set:"300,1153",m_iyxno:"1081"},
						{set:"300,1154",m_iyxno:"1082"},
						{set:"300,1155",m_iyxno:"1083"}
					],
					wd:[
						{set:"300,1156",m_iyxno:"1051"},
						{set:"300,1156",m_iyxno:"1051"},
						
					],
					ctr:[
						{set:"300,1146",m_iyxno:"1075"},
						{set:"300,1147",m_iyxno:"1075"}
					]
				}
			],
			[
				{/*休闲区1空调*/
					fs:[
						{set:"300,1168",m_iyxno:"1100"},
						{set:"300,1169",m_iyxno:"1101"},
						{set:"300,1170",m_iyxno:"1102"},
						{set:"300,1167",m_iyxno:"1099"}
					],
					ms:[
						{set:"300,1271",m_iyxno:"1103"},
						{set:"300,1272",m_iyxno:"1104"},
						{set:"300,1273",m_iyxno:"1105"},
						{set:"300,1274",m_iyxno:"1106"}
					],
					wd:[
						{set:"300,1275",m_iyxno:"1077"},
						{set:"300,1275",m_iyxno:"1077"},
						
					],
					ctr:[
						{set:"300,1265",m_iyxno:"1098"},
						{set:"300,1266",m_iyxno:"1098"}
					]
				},
				{/*休闲区2空调*/
					fs:[
						{set:"300,1279",m_iyxno:"1109"},
						{set:"300,1280",m_iyxno:"1110"},
						{set:"300,1281",m_iyxno:"1111"},
						{set:"300,1278",m_iyxno:"1108"}
					],
					ms:[
						{set:"300,1282",m_iyxno:"1112"},
						{set:"300,1283",m_iyxno:"1113"},
						{set:"300,1284",m_iyxno:"1114"},
						{set:"300,1285",m_iyxno:"1115"}
					],
					wd:[
						{set:"300,1286",m_iyxno:"1078"},
						{set:"300,1286",m_iyxno:"1078"},
						
					],
					ctr:[
						{set:"300,1276",m_iyxno:"1107"},
						{set:"300,1277",m_iyxno:"1108"}
					]
				},
				{/*厨房空调*/
					fs:[
						{set:"300,1290",m_iyxno:"1118"},
						{set:"300,1291",m_iyxno:"1119"},
						{set:"300,1292",m_iyxno:"1120"},
						{set:"300,1289",m_iyxno:"1117"}
					],
					ms:[
						{set:"300,1293",m_iyxno:"1121"},
						{set:"300,1294",m_iyxno:"1122"},
						{set:"300,1295",m_iyxno:"1123"},
						{set:"300,1296",m_iyxno:"1124"}
					],
					wd:[
						{set:"300,1297",m_iyxno:"1079"},
						{set:"300,1297",m_iyxno:"1079"},
						
					],
					ctr:[
						{set:"300,1287",m_iyxno:"1116"},
						{set:"300,1288",m_iyxno:"1116"}
					]
				}
			],
			[
				/*电梯厅*/
				
			],
			[
				/*大堂*/
				
			]
			
		],
		[
			/*48*/
			[
				/*高尔夫室*/
				{
					fs:[
						{set:"300,1393",m_iyxno:"1148"},
						{set:"300,1394",m_iyxno:"1149"},
						{set:"300,1395",m_iyxno:"11150"},
						{set:"300,1392",m_iyxno:"1147"}
					],
					ms:[
						{set:"300,1396",m_iyxno:"1151"},
						{set:"300,1397",m_iyxno:"1152"},
						{set:"300,1398",m_iyxno:"1153"},
						{set:"300,1399",m_iyxno:"1154"}
					],
					wd:[
						{set:"300,1400",m_iyxno:"1097"},
						{set:"300,1400",m_iyxno:"1097"},
						
					],
					ctr:[
						{set:"300,1390",m_iyxno:"1146"},
						{set:"300,1391",m_iyxno:"1146"}
					]
				}
			],
			[
				/*IMAX影院*/
				{
					fs:[
						{set:"300,1411",m_iyxno:"1164"},
						{set:"300,1412",m_iyxno:"1165"},
						{set:"300,1413",m_iyxno:"1166"},
						{set:"300,1410",m_iyxno:"1163"}
					],
					ms:[
						{set:"300,1414",m_iyxno:"1167"},
						{set:"300,1415",m_iyxno:"1168"},
						{set:"300,1416",m_iyxno:"1169"},
						{set:"300,1417",m_iyxno:"1170"}
					],
					wd:[
						{set:"300,1418",m_iyxno:"1102"},
						{set:"300,1418",m_iyxno:"1102"},
						
					],
					ctr:[
						{set:"300,1408",m_iyxno:"1162"},
						{set:"300,1409",m_iyxno:"1162"}
					]
				},
				/*机房*/
				{
					fs:[
						{set:"300,1422",m_iyxno:"1173"},
						{set:"300,1423",m_iyxno:"1174"},
						{set:"300,1424",m_iyxno:"1175"},
						{set:"300,1421",m_iyxno:"1172"}
					],
					ms:[
						{set:"300,1425",m_iyxno:"1176"},
						{set:"300,1426",m_iyxno:"1177"},
						{set:"300,1427",m_iyxno:"1178"},
						{set:"300,1428",m_iyxno:"1179"}
					],
					wd:[
						{set:"300,1429",m_iyxno:"1103"},
						{set:"300,1429",m_iyxno:"1103"},
						
					],
					ctr:[
						{set:"300,1419",m_iyxno:"1171"},
						{set:"300,1420",m_iyxno:"1171"}
					]
				}
			],
			[
				/*KTV*/
				{
					fs:[
						{set:"300,1438",m_iyxno:"1194"},
						{set:"300,1439",m_iyxno:"1195"},
						{set:"300,1440",m_iyxno:"1196"},
						{set:"300,1437",m_iyxno:"1193"}
					],
					ms:[
						{set:"300,1441",m_iyxno:"1197"},
						{set:"300,1442",m_iyxno:"1198"},
						{set:"300,1443",m_iyxno:"1199"},
						{set:"300,1444",m_iyxno:"1200"}
					],
					wd:[
						{set:"300,1445",m_iyxno:"1109"},
						{set:"300,1445",m_iyxno:"1109"},
						
					],
					ctr:[
						{set:"300,1435",m_iyxno:"1192"},
						{set:"300,1436",m_iyxno:"1192"}
					]
				}
			],
			[
				/*乒乓球室*/
				{
					fs:[
						{set:"300,1455",m_iyxno:"1210"},
						{set:"300,1456",m_iyxno:"1211"},
						{set:"300,1457",m_iyxno:"1212"},
						{set:"300,1454",m_iyxno:"1209"}
					],
					ms:[
						{set:"300,1458",m_iyxno:"1213"},
						{set:"300,1459",m_iyxno:"1214"},
						{set:"300,1460",m_iyxno:"1215"},
						{set:"300,1461",m_iyxno:"1216"}
					],
					wd:[
						{set:"300,1462",m_iyxno:"1114"},
						{set:"300,1462",m_iyxno:"1114"},
						
					],
					ctr:[
						{set:"300,1452",m_iyxno:"1208"},
						{set:"300,1453",m_iyxno:"1208"}
					]
				}
			],
			[
				/*台球室*/
				{
					fs:[
						{set:"300,1468",m_iyxno:"1226"},
						{set:"300,1469",m_iyxno:"1227"},
						{set:"300,1470",m_iyxno:"1228"},
						{set:"300,1467",m_iyxno:"1225"}
					],
					ms:[
						{set:"300,1471",m_iyxno:"1229"},
						{set:"300,1472",m_iyxno:"1230"},
						{set:"300,1473",m_iyxno:"1231"},
						{set:"300,1474",m_iyxno:"1232"}
					],
					wd:[
						{set:"300,1475",m_iyxno:"1117"},
						{set:"300,1475",m_iyxno:"1117"},
						
					],
					ctr:[
						{set:"300,1465",m_iyxno:"1224"},
						{set:"300,1466",m_iyxno:"1224"}
					]
				}
			],
			[
				/*佛堂*/
				{
					fs:[
						{set:"300,1483",m_iyxno:"1242"},
						{set:"300,1484",m_iyxno:"1243"},
						{set:"300,1485",m_iyxno:"1244"},
						{set:"300,1482",m_iyxno:"1241"}
					],
					ms:[
						{set:"300,1486",m_iyxno:"1245"},
						{set:"300,1487",m_iyxno:"1246"},
						{set:"300,1488",m_iyxno:"1247"},
						{set:"300,1489",m_iyxno:"1248"}
					],
					wd:[
						{set:"300,1490",m_iyxno:"1122"},
						{set:"300,1490",m_iyxno:"1122"},
						
					],
					ctr:[
						{set:"300,1480",m_iyxno:"1240"},
						{set:"300,1481",m_iyxno:"1240"}
					]
				}
			],
			[
				/*公区走廊*/
				
			],
			[
				/*棋牌室*/
				{
					fs:[
						{set:"300,1600",m_iyxno:"1264"},
						{set:"300,1601",m_iyxno:"1265"},
						{set:"300,1602",m_iyxno:"1266"},
						{set:"300,1599",m_iyxno:"1263"}
					],
					ms:[
						{set:"300,1603",m_iyxno:"1267"},
						{set:"300,1604",m_iyxno:"1268"},
						{set:"300,1605",m_iyxno:"1269"},
						{set:"300,1606",m_iyxno:"1270"}
					],
					wd:[
						{set:"300,1607",m_iyxno:"1155"},
						{set:"300,1607",m_iyxno:"1155"},
						
					],
					ctr:[
						{set:"300,1597",m_iyxno:"1262"},
						{set:"300,1598",m_iyxno:"1262"}
					]
				}
			],
			[
				/*男卫*/
				{
					fs:[
						{set:"300,1618",m_iyxno:"1276"},
						{set:"300,1619",m_iyxno:"1277"},
						{set:"300,1620",m_iyxno:"1278"},
						{set:"300,1617",m_iyxno:"1275"}
					],
					ms:[
						{set:"300,1621",m_iyxno:"1279"},
						{set:"300,1622",m_iyxno:"1280"},
						{set:"300,1623",m_iyxno:"1281"},
						{set:"300,1624",m_iyxno:"1282"}
					],
					wd:[
						{set:"300,1625",m_iyxno:"1158"},
						{set:"300,1625",m_iyxno:"1158"},
						
					],
					ctr:[
						{set:"300,1615",m_iyxno:"1274"},
						{set:"300,1616",m_iyxno:"1274"}
					]
				}
			],
			[
				/*女卫*/
				{
					fs:[
						{set:"300,1636",m_iyxno:"1288"},
						{set:"300,1637",m_iyxno:"1289"},
						{set:"300,1638",m_iyxno:"1290"},
						{set:"300,1635",m_iyxno:"1287"}
					],
					ms:[
						{set:"300,1639",m_iyxno:"1291"},
						{set:"300,1640",m_iyxno:"1292"},
						{set:"300,1641",m_iyxno:"1293"},
						{set:"300,1642",m_iyxno:"1294"}
					],
					wd:[
						{set:"300,1643",m_iyxno:"1161"},
						{set:"300,1643",m_iyxno:"1161"},
						
					],
					ctr:[
						{set:"300,1633",m_iyxno:"1286"},
						{set:"300,1634",m_iyxno:"1286"}
					]
				}
			]
		],
		[
			/*49*/
			[
				/*公区*/
				
			],
			[
				/*休闲区*/
				
			],
			[
				/*餐厅*/
				{
					fs:[
						{set:"300,1683",m_iyxno:"1318"},
						{set:"300,1684",m_iyxno:"1319"},
						{set:"300,1685",m_iyxno:"1320"},
						{set:"300,1682",m_iyxno:"1317"}
					],
					ms:[
						{set:"300,1686",m_iyxno:"1321"},
						{set:"300,1687",m_iyxno:"1322"},
						{set:"300,1688",m_iyxno:"1323"},
						{set:"300,1689",m_iyxno:"1324"}
					],
					wd:[
						{set:"300,1690",m_iyxno:"1198"},
						{set:"300,1690",m_iyxno:"1198"},
						
					],
					ctr:[
						{set:"300,1680",m_iyxno:"1316"},
						{set:"300,1681",m_iyxno:"1316"}
					]
				}
			],
			[
				/*泳池灯光*/
				
			],
			[
				/*SPA1*/
				{
					fs:[
						{set:"300,1749",m_iyxno:"1343"},
						{set:"300,1750",m_iyxno:"1344"},
						{set:"300,1751",m_iyxno:"1345"},
						{set:"300,1748",m_iyxno:"1342"}
					],
					ms:[
						{set:"300,1752",m_iyxno:"1346"},
						{set:"300,1753",m_iyxno:"1347"},
						{set:"300,1754",m_iyxno:"1348"},
						{set:"300,1755",m_iyxno:"1349"}
					],
					wd:[
						{set:"300,1756",m_iyxno:"1209"},
						{set:"300,1756",m_iyxno:"1209"},
						
					],
					ctr:[
						{set:"300,1746",m_iyxno:"1341"},
						{set:"300,1747",m_iyxno:"1341"}
					]
				}
			],
			[
				/*SPA2*/
				{
					fs:[
						{set:"300,1760",m_iyxno:"1352"},
						{set:"300,1761",m_iyxno:"1352"},
						{set:"300,1762",m_iyxno:"1354"},
						{set:"300,1759",m_iyxno:"1351"}
					],
					ms:[
						{set:"300,1763",m_iyxno:"1355"},
						{set:"300,1764",m_iyxno:"1356"},
						{set:"300,1765",m_iyxno:"1357"},
						{set:"300,1766",m_iyxno:"1358"}
					],
					wd:[
						{set:"300,1767",m_iyxno:"1210"},
						{set:"300,1767",m_iyxno:"1210"},
						
					],
					ctr:[
						{set:"300,1757",m_iyxno:"1350"},
						{set:"300,1758",m_iyxno:"1350"}
					]
				}
			],
			[
				/*桑拿室*/
				{
					fs:[
						{set:"300,1725",m_iyxno:"1367"},
						{set:"300,1726",m_iyxno:"1368"},
						{set:"300,1727",m_iyxno:"1369"},
						{set:"300,1724",m_iyxno:"1366"}
					],
					ms:[
						{set:"300,1728",m_iyxno:"1370"},
						{set:"300,1729",m_iyxno:"1371"},
						{set:"300,1730",m_iyxno:"1372"},
						{set:"300,1731",m_iyxno:"1372"}
					],
					wd:[
						{set:"300,1732",m_iyxno:"1213"},
						{set:"300,1732",m_iyxno:"1213"},
						
					],
					ctr:[
						{set:"300,1722",m_iyxno:"1365"},
						{set:"300,1723",m_iyxno:"1365"}
					]
				}
			],
			[
				/*卫生间*/
				
			]
		]

]



var scence=[
		[
			/*47*/
			[
				/*贵宾室1场景*/
				{label:"全开",get:"503,12",set:"300,2000",cho:"../../Image/Ipad/open.png",uncho:"../../Image/Ipad/close.png",m_iyxno:"1004"},
				{label:"全关",get:"503,12",set:"300,2001",cho:"../../Image/Ipad/open.png",uncho:"../../Image/Ipad/close.png",m_iyxno:"1005"},
				{label:"迎宾",get:"503,12",set:"300,2002",cho:"../../Image/Ipad/yingbin.png",uncho:"../../Image/Ipad/yinbin_down.png",m_iyxno:"1006"},
				{label:"明亮",get:"503,12",set:"300,2003",cho:"../../Image/Ipad/light.png",uncho:"../../Image/Ipad/light_down.png",m_iyxno:"1007"},
				{label:"柔和",get:"503,12",set:"300,2004",cho:"../../Image/Ipad/soft.png",uncho:"../../Image/Ipad/soft_down.png",m_iyxno:"1008"},
				{label:"就餐",get:"503,12",set:"300,2006",cho:"../../Image/Ipad/jiucan.png",uncho:"../../Image/Ipad/jiucan_down.png",m_iyxno:"1010"},
				{label:"模式4",get:"503,12",set:"300,2005",cho:"../../Image/Ipad/moshi4.png",uncho:"../../Image/Ipad/moshi4_down.png",m_iyxno:"1009"},
				{label:"模式6",get:"503,12",set:"300,2007",cho:"../../Image/Ipad/moshi6.png",uncho:"../../Image/Ipad/moshi6_down.png",m_iyxno:"1011"},
				{label:"模式7",get:"503,12",set:"300,2008",cho:"../../Image/Ipad/moshi7.png",uncho:"../../Image/Ipad/moshi7_down.png",m_iyxno:"1012"},
				{label:"模式8",get:"503,12",set:"300,2009",cho:"../../Image/Ipad/moshi8.png",uncho:"../../Image/Ipad/moshi8_down.png",m_iyxno:"1013"},
			],
			[
				/*贵宾室2场景*/
			    {label:"全开",get:"503,12",set:"300,2010",cho:"../../Image/Ipad/open.png",uncho:"../../Image/Ipad/close.png",m_iyxno:"1023"},
				{label:"全关",get:"503,12",set:"300,2011",cho:"../../Image/Ipad/open.png",uncho:"../../Image/Ipad/close.png",m_iyxno:"1024"},
				{label:"迎宾",get:"503,12",set:"300,2012",cho:"../../Image/Ipad/yingbin.png",uncho:"../../Image/Ipad/yinbin_down.png",m_iyxno:"1025"},
				{label:"明亮",get:"503,12",set:"300,2013",cho:"../../Image/Ipad/light.png",uncho:"../../Image/Ipad/light_down.png",m_iyxno:"1026"},
				{label:"就餐",get:"503,12",set:"300,2014",cho:"../../Image/Ipad/jiucan.png",uncho:"../../Image/Ipad/jiucan_down.png",m_iyxno:"1027"},
				{label:"柔光",get:"503,12",set:"300,2015",cho:"../../Image/Ipad/soft_light.png",uncho:"../../Image/Ipad/soft_light_down.png",m_iyxno:"1028"},
				{label:"休闲",get:"503,12",set:"300,2016",cho:"../../Image/Ipad/xiuxian.png",uncho:"../../Image/Ipad/xiuxian_down.png",m_iyxno:"1029"},
			],
			[
				/*茶室场景*/
				{label:"全开",get:"503,12",set:"300,2017",cho:"../../Image/Ipad/open.png",uncho:"../../Image/Ipad/close.png",m_iyxno:"1039"},
				{label:"全关",get:"503,12",set:"300,2018",cho:"../../Image/Ipad/open.png",uncho:"../../Image/Ipad/close.png",m_iyxno:"1040"},
				{label:"迎宾",get:"503,12",set:"300,2019",cho:"../../Image/Ipad/yingbin.png",uncho:"../../Image/Ipad/yinbin_down.png",m_iyxno:"1041"},
				{label:"明亮",get:"503,12",set:"300,2020",cho:"../../Image/Ipad/light.png",uncho:"../../Image/Ipad/light_down.png",m_iyxno:"1042"},
				{label:"品茶",get:"503,12",set:"300,2021",cho:"../../Image/Ipad/pincha.png",uncho:"../../Image/Ipad/pincha_down.png",m_iyxno:"1043"},
			],
			[
				/*日式料理场景*/
				{label:"全开",get:"503,12",set:"300,2022",cho:"../../Image/Ipad/open.png",uncho:"../../Image/Ipad/close.png",m_iyxno:"1054"},
				{label:"全关",get:"503,12",set:"300,2023",cho:"../../Image/Ipad/open.png",uncho:"../../Image/Ipad/close.png",m_iyxno:"1055"},
				{label:"迎宾",get:"503,12",set:"300,2024",cho:"../../Image/Ipad/yingbin.png",uncho:"../../Image/Ipad/yinbin_down.png",m_iyxno:"1056"},
				{label:"明亮",get:"503,12",set:"300,2025",cho:"../../Image/Ipad/light.png",uncho:"../../Image/Ipad/light_down.png",m_iyxno:"1057"},
				{label:"就餐",get:"503,12",set:"300,2026",cho:"../../Image/Ipad/jiucan.png",uncho:"../../Image/Ipad/jiucan_down.png",m_iyxno:"1058"},
				{label:"柔和",get:"503,12",set:"300,2027",cho:"../../Image/Ipad/soft.png",uncho:"../../Image/Ipad/soft_down.png",m_iyxno:"1059"},
				{label:"休闲",get:"503,12",set:"300,2028",cho:"../../Image/Ipad/xiuxian.png",uncho:"../../Image/Ipad/xiuxian_down.png",m_iyxno:"1060"},
			],
			[
				/*酒窖场景*/
				{label:"全开",get:"503,12",set:"300,2029",cho:"../../Image/Ipad/open.png",uncho:"../../Image/Ipad/close.png",m_iyxno:"1070"},
				{label:"全关",get:"503,12",set:"300,2030",cho:"../../Image/Ipad/open.png",uncho:"../../Image/Ipad/close.png",m_iyxno:"1071"},
				{label:"迎宾",get:"503,12",set:"300,2031",cho:"../../Image/Ipad/yingbin.png",uncho:"../../Image/Ipad/yinbin_down.png",m_iyxno:"1072"},
				{label:"明亮",get:"503,12",set:"300,2032",cho:"../../Image/Ipad/light.png",uncho:"../../Image/Ipad/light_down.png",m_iyxno:"1073"},
				{label:"柔和",get:"503,12",set:"300,2033",cho:"../../Image/Ipad/soft.png",uncho:"../../Image/Ipad/soft_down.png",m_iyxno:"1074"},
			],
			[
				/*公区走廊场景*/
				{label:"全开",get:"503,12",set:"300,2034",cho:"../../Image/Ipad/open.png",uncho:"../../Image/Ipad/close.png",m_iyxno:"1091"},
				{label:"全关",get:"503,12",set:"300,2035",cho:"../../Image/Ipad/open.png",uncho:"../../Image/Ipad/close.png",m_iyxno:"1092"},
				{label:"明亮",get:"503,12",set:"300,2036",cho:"../../Image/Ipad/light.png",uncho:"../../Image/Ipad/light_down.png",m_iyxno:"1093"},
				{label:"柔和",get:"503,12",set:"300,2037",cho:"../../Image/Ipad/soft.png",uncho:"../../Image/Ipad/soft_down.png",m_iyxno:"1094"},
				{label:"休闲",get:"503,12",set:"300,2038",cho:"../../Image/Ipad/xiuxian.png",uncho:"../../Image/Ipad/xiuxian_down.png",m_iyxno:"1095"},
				{label:"夜晚",get:"503,12",set:"300,2039",cho:"../../Image/Ipad/yewan.png",uncho:"../../Image/Ipad/yewan_down.png",m_iyxno:"1096"},
				{label:"深夜",get:"503,12",set:"300,2040",cho:"../../Image/Ipad/shenye.png",uncho:"../../Image/Ipad/shenye_down.png",m_iyxno:"1097"},

			],
			[
				/*电梯厅场景*/
				{label:"全开",get:"503,12",set:"300,2041",cho:"../../Image/Ipad/open.png",uncho:"../../Image/Ipad/close.png",m_iyxno:"1125"},
				{label:"全关",get:"503,12",set:"300,2042",cho:"../../Image/Ipad/open.png",uncho:"../../Image/Ipad/close.png",m_iyxno:"1126"},

			],
			[
				/*大堂场景*/
				{label:"全开",get:"503,12",set:"300,2048",cho:"../../Image/Ipad/open.png",uncho:"../../Image/Ipad/close.png",m_iyxno:"1132"},
				{label:"全关",get:"503,12",set:"300,2049",cho:"../../Image/Ipad/open.png",uncho:"../../Image/Ipad/close.png",m_iyxno:"1133"},
				{label:"明亮",get:"503,12",set:"300,2050",cho:"../../Image/Ipad/light.png",uncho:"../../Image/Ipad/light_down.png",m_iyxno:"1134"},
				{label:"柔和",get:"503,12",set:"300,2051",cho:"../../Image/Ipad/soft.png",uncho:"../../Image/Ipad/soft_down.png",m_iyxno:"1135"},
				{label:"休闲",get:"503,12",set:"300,2052",cho:"../../Image/Ipad/xiuxian.png",uncho:"../../Image/Ipad/xiuxian_down.png",m_iyxno:"1136"},
				{label:"夜晚",get:"503,12",set:"300,2053",cho:"../../Image/Ipad/yewan.png",uncho:"../../Image/Ipad/yewan_down.png",m_iyxno:"1137"},
				{label:"深夜",get:"503,12",set:"300,2054",cho:"../../Image/Ipad/shenye.png",uncho:"../../Image/Ipad/shenye_down.png",m_iyxno:"1138"},
			]
			
			
				
		],
		[/*48*/
			[
				/*高尔夫*/
				{label:"全开",get:"503,12",set:"300,2055",cho:"../../Image/Ipad/open.png",uncho:"../../Image/Ipad/close.png",m_iyxno:"1139"},
				{label:"全关",get:"503,12",set:"300,2056",cho:"../../Image/Ipad/open.png",uncho:"../../Image/Ipad/close.png",m_iyxno:"1140"},
				{label:"迎宾",get:"503,12",set:"300,2057",cho:"../../Image/Ipad/yingbin.png",uncho:"../../Image/Ipad/yinbin_down.png",m_iyxno:"1141"},
				{label:"明亮",get:"503,12",set:"300,2058",cho:"../../Image/Ipad/light.png",uncho:"../../Image/Ipad/light_down.png",m_iyxno:"1142"},
				{label:"柔和",get:"503,12",set:"300,2059",cho:"../../Image/Ipad/soft.png",uncho:"../../Image/Ipad/soft_down.png",m_iyxno:"1143"},
				{label:"休闲",get:"503,12",set:"300,2060",cho:"../../Image/Ipad/xiuxian.png",uncho:"../../Image/Ipad/xiuxian_down.png",m_iyxno:"1144"},
				{label:"Golf",get:"503,12",set:"300,2061",cho:"../../Image/Ipad/golf.png",uncho:"../../Image/Ipad/golf_down.png",m_iyxno:"1145"},
			],
			[
				/*IMAX影院*/
				{label:"全开",get:"503,12",set:"300,2062",cho:"../../Image/Ipad/open.png",uncho:"../../Image/Ipad/close.png",m_iyxno:"1155"},
				{label:"全关",get:"503,12",set:"300,2063",cho:"../../Image/Ipad/open.png",uncho:"../../Image/Ipad/close.png",m_iyxno:"1156"},
				{label:"迎宾",get:"503,12",set:"300,2064",cho:"../../Image/Ipad/yingbin.png",uncho:"../../Image/Ipad/yinbin_down.png",m_iyxno:"1157"},
				{label:"明亮",get:"503,12",set:"300,2065",cho:"../../Image/Ipad/light.png",uncho:"../../Image/Ipad/light_down.png",m_iyxno:"1158"},
				{label:"柔和",get:"503,12",set:"300,2066",cho:"../../Image/Ipad/soft.png",uncho:"../../Image/Ipad/soft_down.png",m_iyxno:"1159"},
				{label:"休闲",get:"503,12",set:"300,2067",cho:"../../Image/Ipad/xiuxian.png",uncho:"../../Image/Ipad/xiuxian_down.png",m_iyxno:"1160"},
				{label:"观影",get:"503,12",set:"300,2068",cho:"../../Image/Ipad/guanying.png",uncho:"../../Image/Ipad/guanying_down.png",m_iyxno:"1161"},
			],
			[
				/*KTV*/
				{label:"全开",get:"503,12",set:"300,2069",cho:"../../Image/Ipad/open.png",uncho:"../../Image/Ipad/close.png",m_iyxno:"1184"},
				{label:"全关",get:"503,12",set:"300,2070",cho:"../../Image/Ipad/open.png",uncho:"../../Image/Ipad/close.png",m_iyxno:"1185"},
				{label:"迎宾",get:"503,12",set:"300,2071",cho:"../../Image/Ipad/yingbin.png",uncho:"../../Image/Ipad/yinbin_down.png",m_iyxno:"1186"},
				{label:"明亮",get:"503,12",set:"300,2072",cho:"../../Image/Ipad/light.png",uncho:"../../Image/Ipad/light_down.png",m_iyxno:"1187"},
				{label:"柔和",get:"503,12",set:"300,2073",cho:"../../Image/Ipad/soft.png",uncho:"../../Image/Ipad/soft_down.png",m_iyxno:"1188"},
				{label:"休闲",get:"503,12",set:"300,2074",cho:"../../Image/Ipad/xiuxian.png",uncho:"../../Image/Ipad/xiuxian_down.png",m_iyxno:"1189"},
				{label:"KTV",get:"503,12",set:"300,2075",cho:"../../Image/Ipad/KTV.png",uncho:"../../Image/Ipad/KTV_down.png",m_iyxno:"1190"},
			],
			[
				/*乒乓球室*/
				{label:"全开",get:"503,12",set:"300,2076",cho:"../../Image/Ipad/open.png",uncho:"../../Image/Ipad/close.png",m_iyxno:"1201"},
				{label:"全关",get:"503,12",set:"300,2077",cho:"../../Image/Ipad/open.png",uncho:"../../Image/Ipad/close.png",m_iyxno:"1202"},
				{label:"迎宾",get:"503,12",set:"300,2078",cho:"../../Image/Ipad/yingbin.png",uncho:"../../Image/Ipad/yinbin_down.png",m_iyxno:"1203"},
				{label:"明亮",get:"503,12",set:"300,2079",cho:"../../Image/Ipad/light.png",uncho:"../../Image/Ipad/light_down.png",m_iyxno:"1204"},
				{label:"柔和",get:"503,12",set:"300,2080",cho:"../../Image/Ipad/soft.png",uncho:"../../Image/Ipad/soft_down.png",m_iyxno:"1205"},
				{label:"休闲",get:"503,12",set:"300,2081",cho:"../../Image/Ipad/xiuxian.png",uncho:"../../Image/Ipad/xiuxian_down.png",m_iyxno:"1206"},
				{label:"活动",get:"503,12",set:"300,2082",cho:"../../Image/Ipad/huodong.png",uncho:"../../Image/Ipad/huodong_down.png",m_iyxno:"1207"},
			],
			[
				/*台球室*/
				{label:"全开",get:"503,12",set:"300,2083",cho:"../../Image/Ipad/open.png",uncho:"../../Image/Ipad/close.png",m_iyxno:"1217"},
				{label:"全关",get:"503,12",set:"300,2084",cho:"../../Image/Ipad/open.png",uncho:"../../Image/Ipad/close.png",m_iyxno:"1218"},
				{label:"迎宾",get:"503,12",set:"300,2085",cho:"../../Image/Ipad/yingbin.png",uncho:"../../Image/Ipad/yinbin_down.png",m_iyxno:"1219"},
				{label:"明亮",get:"503,12",set:"300,2086",cho:"../../Image/Ipad/light.png",uncho:"../../Image/Ipad/light_down.png",m_iyxno:"1220"},
				{label:"柔和",get:"503,12",set:"300,2087",cho:"../../Image/Ipad/soft.png",uncho:"../../Image/Ipad/soft_down.png",m_iyxno:"1221"},
				{label:"休闲",get:"503,12",set:"300,2088",cho:"../../Image/Ipad/xiuxian.png",uncho:"../../Image/Ipad/xiuxian_down.png",m_iyxno:"1222"},
				{label:"活动",get:"503,12",set:"300,2089",cho:"../../Image/Ipad/huodong.png",uncho:"../../Image/Ipad/huodong_down.png",m_iyxno:"1223"},
			],
			[
				/*佛堂*/
				{label:"全开",get:"503,12",set:"300,2090",cho:"../../Image/Ipad/open.png",uncho:"../../Image/Ipad/close.png",m_iyxno:"1233"},
				{label:"全关",get:"503,12",set:"300,2091",cho:"../../Image/Ipad/open.png",uncho:"../../Image/Ipad/close.png",m_iyxno:"1234"},
				{label:"迎宾",get:"503,12",set:"300,2092",cho:"../../Image/Ipad/yingbin.png",uncho:"../../Image/Ipad/yinbin_down.png",m_iyxno:"1235"},
				{label:"明亮",get:"503,12",set:"300,2093",cho:"../../Image/Ipad/light.png",uncho:"../../Image/Ipad/light_down.png",m_iyxno:"1236"},
				{label:"柔和",get:"503,12",set:"300,2094",cho:"../../Image/Ipad/soft.png",uncho:"../../Image/Ipad/soft_down.png",m_iyxno:"1237"},
				{label:"休闲",get:"503,12",set:"300,2095",cho:"../../Image/Ipad/xiuxian.png",uncho:"../../Image/Ipad/xiuxian_down.png",m_iyxno:"1238"},
				{label:"佛堂",get:"503,12",set:"300,2096",cho:"../../Image/Ipad/fotang.png",uncho:"../../Image/Ipad/fotang_down.png",m_iyxno:"1239"},
			],
			[
				/*公区走廊*/
				{label:"全开",get:"503,12",set:"300,2097",cho:"../../Image/Ipad/open.png",uncho:"../../Image/Ipad/close.png",m_iyxno:"1249"},
				{label:"全关",get:"503,12",set:"300,2098",cho:"../../Image/Ipad/open.png",uncho:"../../Image/Ipad/close.png",m_iyxno:"1256"},
				{label:"迎宾",get:"503,12",set:"300,2099",cho:"../../Image/Ipad/yingbin.png",uncho:"../../Image/Ipad/yinbin_down.png",m_iyxno:"1257"},
				{label:"明亮",get:"503,12",set:"300,2100",cho:"../../Image/Ipad/light.png",uncho:"../../Image/Ipad/light_down.png",m_iyxno:"1258"},
				{label:"柔和",get:"503,12",set:"300,2101",cho:"../../Image/Ipad/soft.png",uncho:"../../Image/Ipad/soft_down.png",m_iyxno:"1259"},
				
			],
			[
				/*棋牌室*/
				{label:"全开",get:"503,12",set:"300,2102",cho:"../../Image/Ipad/open.png",uncho:"../../Image/Ipad/close.png",m_iyxno:"1255"},
				{label:"全关",get:"503,12",set:"300,2103",cho:"../../Image/Ipad/open.png",uncho:"../../Image/Ipad/close.png",m_iyxno:"1256"},
				{label:"迎宾",get:"503,12",set:"300,2004",cho:"../../Image/Ipad/yingbin.png",uncho:"../../Image/Ipad/yinbin_down.png",m_iyxno:"1257"},
				{label:"明亮",get:"503,12",set:"300,2105",cho:"../../Image/Ipad/light.png",uncho:"../../Image/Ipad/light_down.png",m_iyxno:"1258"},
				{label:"柔和",get:"503,12",set:"300,2106",cho:"../../Image/Ipad/soft.png",uncho:"../../Image/Ipad/soft_down.png",m_iyxno:"1259"},
				{label:"休闲",get:"503,12",set:"300,2107",cho:"../../Image/Ipad/xiuxian.png",uncho:"../../Image/Ipad/xiuxian_down.png",m_iyxno:"1260"},
				{label:"娱乐",get:"503,12",set:"300,2108",cho:"../../Image/Ipad/yule_down.png",uncho:"../../Image/Ipad/yule.png",m_iyxno:"1261"},
				
			],
			[
				/*男卫*/
				{label:"全开",get:"503,12",set:"300,2109",cho:"../../Image/Ipad/open.png",uncho:"../../Image/Ipad/close.png",m_iyxno:"1272"},
				{label:"全关",get:"503,12",set:"300,2110",cho:"../../Image/Ipad/open.png",uncho:"../../Image/Ipad/close.png",m_iyxno:"1273"},
				
			],
			[
				/*女卫*/
				{label:"全开",get:"503,12",set:"300,2111",cho:"../../Image/Ipad/open.png",uncho:"../../Image/Ipad/close.png",m_iyxno:"1284"},
				{label:"全关",get:"503,12",set:"300,2112",cho:"../../Image/Ipad/open.png",uncho:"../../Image/Ipad/close.png",m_iyxno:"1285"},
				
			]
		],
		[
		/*//49*/
			[
				/*公区*/
				{label:"全开",get:"503,12",set:"300,2113",cho:"../../Image/Ipad/open.png",uncho:"../../Image/Ipad/close.png",m_iyxno:"1295"},
				{label:"全关",get:"503,12",set:"300,2114",cho:"../../Image/Ipad/open.png",uncho:"../../Image/Ipad/close.png",m_iyxno:"1296"},
				{label:"明亮",get:"503,12",set:"300,2115",cho:"../../Image/Ipad/light.png",uncho:"../../Image/Ipad/light_down.png",m_iyxno:"1297"},
				{label:"柔和",get:"503,12",set:"300,2116",cho:"../../Image/Ipad/soft.png",uncho:"../../Image/Ipad/soft_down.png",m_iyxno:"1298"},
				{label:"休闲",get:"503,12",set:"300,2117",cho:"../../Image/Ipad/xiuxian.png",uncho:"../../Image/Ipad/xiuxian_down.png",m_iyxno:"1299"},
				{label:"夜晚",get:"503,12",set:"300,2118",cho:"../../Image/Ipad/yewan.png",uncho:"../../Image/Ipad/yewan_down.png",m_iyxno:"1300"},
				{label:"深夜",get:"503,12",set:"300,2119",cho:"../../Image/Ipad/shenye.png",uncho:"../../Image/Ipad/shenye_down.png",m_iyxno:"1301"},
			],
			[
				/*休闲区*/
				{label:"全开",get:"503,12",set:"300,2120",cho:"../../Image/Ipad/open.png",uncho:"../../Image/Ipad/close.png",m_iyxno:"1302"},
				{label:"全关",get:"503,12",set:"300,2121",cho:"../../Image/Ipad/open.png",uncho:"../../Image/Ipad/close.png",m_iyxno:"1303"},
				{label:"迎宾",get:"503,12",set:"300,2122",cho:"../../Image/Ipad/yingbin.png",uncho:"../../Image/Ipad/yinbin_down.png",m_iyxno:"1304"},
				{label:"明亮",get:"503,12",set:"300,2123",cho:"../../Image/Ipad/light.png",uncho:"../../Image/Ipad/light_down.png",m_iyxno:"1305"},
				{label:"柔和",get:"503,12",set:"300,2124",cho:"../../Image/Ipad/soft.png",uncho:"../../Image/Ipad/soft_down.png",m_iyxno:"1306"},
				{label:"离开",get:"503,12",set:"300,2125",cho:"../../Image/Ipad/likai.png",uncho:"../../Image/Ipad/likai_down.png",m_iyxno:"1307"},
				
			],
			[
				/*餐厅*/
				{label:"全开",get:"503,12",set:"300,2127",cho:"../../Image/Ipad/open.png",uncho:"../../Image/Ipad/close.png",m_iyxno:"1309"},
				{label:"全关",get:"503,12",set:"300,2128",cho:"../../Image/Ipad/open.png",uncho:"../../Image/Ipad/close.png",m_iyxno:"1310"},
				{label:"迎宾",get:"503,12",set:"300,2129",cho:"../../Image/Ipad/yingbin.png",uncho:"../../Image/Ipad/yinbin_down.png",m_iyxno:"1311"},
				{label:"明亮",get:"503,12",set:"300,2130",cho:"../../Image/Ipad/light.png",uncho:"../../Image/Ipad/light_down.png",m_iyxno:"1312"},
				{label:"就餐",get:"503,12",set:"300,2131",cho:"../../Image/Ipad/jiucan.png",uncho:"../../Image/Ipad/jiucan_down.png",m_iyxno:"1315"},
				{label:"柔光",get:"503,12",set:"300,2132",cho:"../../Image/Ipad/soft_light.png",uncho:"../../Image/Ipad/soft_light_down.png",m_iyxno:"1313"},
				{label:"休闲",get:"503,12",set:"300,2133",cho:"../../Image/Ipad/xiuxian.png",uncho:"../../Image/Ipad/xiuxian_down.png",m_iyxno:""},
				
			],
			[
				/*泳池*/
				{label:"全开",get:"503,12",set:"300,2134",cho:"../../Image/Ipad/open.png",uncho:"../../Image/Ipad/close.png",m_iyxno:"1325"},
				{label:"全关",get:"503,12",set:"300,2135",cho:"../../Image/Ipad/open.png",uncho:"../../Image/Ipad/close.png",m_iyxno:"1326"},
				
			],
			[
				/*spa1*/
				{label:"全开",get:"503,12",set:"300,2136",cho:"../../Image/Ipad/open.png",uncho:"../../Image/Ipad/close.png",m_iyxno:"1327"},
				{label:"全关",get:"503,12",set:"300,2137",cho:"../../Image/Ipad/open.png",uncho:"../../Image/Ipad/close.png",m_iyxno:"1328"},
				{label:"迎宾",get:"503,12",set:"300,2138",cho:"../../Image/Ipad/yingbin.png",uncho:"../../Image/Ipad/yinbin_down.png",m_iyxno:"1329"},
				{label:"明亮",get:"503,12",set:"300,2139",cho:"../../Image/Ipad/light.png",uncho:"../../Image/Ipad/light_down.png",m_iyxno:"1330"},
				{label:"SPA",get:"503,12",set:"300,2140",cho:"../../Image/Ipad/spa.png",uncho:"../../Image/Ipad/spa_down.png",m_iyxno:"1331"},
				{label:"柔和",get:"503,12",set:"300,2141",cho:"../../Image/Ipad/soft.png",uncho:"../../Image/Ipad/soft_down.png",m_iyxno:"1332"},
				
				
			],
			[
				/*spa2*/
				{label:"全开",get:"503,12",set:"300,2142",cho:"../../Image/Ipad/open.png",uncho:"../../Image/Ipad/close.png",m_iyxno:"1333"},
				{label:"全关",get:"503,12",set:"300,2143",cho:"../../Image/Ipad/open.png",uncho:"../../Image/Ipad/close.png",m_iyxno:"1334"},
				{label:"迎宾",get:"503,12",set:"300,2144",cho:"../../Image/Ipad/yingbin.png",uncho:"../../Image/Ipad/yinbin_down.png",m_iyxno:"1335"},
				{label:"明亮",get:"503,12",set:"300,2145",cho:"../../Image/Ipad/light.png",uncho:"../../Image/Ipad/light_down.png",m_iyxno:"1336"},
				{label:"SPA",get:"503,12",set:"300,2146",cho:"../../Image/Ipad/spa.png",uncho:"../../Image/Ipad/spa_down.png",m_iyxno:"1337"},
				{label:"柔和",get:"503,12",set:"300,2147",cho:"../../Image/Ipad/soft.png",uncho:"../../Image/Ipad/soft_down.png",m_iyxno:"1338"},
			],
			[
				/*桑拿*/
				{label:"全开",get:"503,12",set:"300,2148",cho:"../../Image/Ipad/open.png",uncho:"../../Image/Ipad/close.png",m_iyxno:"1359"},
				{label:"全关",get:"503,12",set:"300,2149",cho:"../../Image/Ipad/open.png",uncho:"../../Image/Ipad/close.png",m_iyxno:"1360"},
				{label:"迎宾",get:"503,12",set:"300,2150",cho:"../../Image/Ipad/yingbin.png",uncho:"../../Image/Ipad/yinbin_down.png",m_iyxno:"1361"},
				{label:"明亮",get:"503,12",set:"300,2151",cho:"../../Image/Ipad/light.png",uncho:"../../Image/Ipad/light_down.png",m_iyxno:"1362"},
				{label:"柔和",get:"503,12",set:"300,2152",cho:"../../Image/Ipad/soft.png",uncho:"../../Image/Ipad/soft_down.png",m_iyxno:"1364"},
				{label:"桑拿",get:"503,12",set:"300,2153",cho:"../../Image/Ipad/sangna.png",uncho:"../../Image/Ipad/sangna_down.png",m_iyxno:"1363"},
			],
			
			[
				/*卫生间*/
				{label:"全开",get:"503,12",set:"300,2154",cho:"../../Image/Ipad/open.png",uncho:"../../Image/Ipad/close.png",m_iyxno:"1374"},
				{label:"全关",get:"503,12",set:"300,2155",cho:"../../Image/Ipad/open.png",uncho:"../../Image/Ipad/close.png",m_iyxno:"1375"},
				
			]
		]
];
var loop=[
		[
			[
				/*贵宾室1*/
//				{label:"女卫生间灯",get:"503,12",set:"300,1000",clo:"300,1001",cho:"../../Image/Ipad/loop_close.png",uncho:"../../Image/Ipad/loop_open.png",m_iyxno:"1003"},
				{label:"备餐间前灯",get:"503,12",set:"300,1002",clo:"300,1003",cho:"../../Image/Ipad/loop_close.png",uncho:"../../Image/Ipad/loop_open.png",m_iyxno:"1001"},
				{label:"备餐间柜子灯",get:"503,12",set:"300,1004",clo:"300,1005",cho:"../../Image/Ipad/loop_close.png",uncho:"../../Image/Ipad/loop_open.png",m_iyxno:"1002"},
				{label:"卫生间吊灯",get:"503,12",set:"300,1006",clo:"300,1007",cho:"../../Image/Ipad/loop_close.png",uncho:"../../Image/Ipad/loop_open.png",m_iyxno:"1003"},
			],
			[
				/*贵宾室2*/
				
			],
			[
				/*茶室*/
				
			],
			[
				/*日式料理*/
				{label:"吧台筒灯",get:"503,12",set:"300,1107",clo:"300,1108",cho:"../../Image/Ipad/loop_close.png",uncho:"../../Image/Ipad/loop_open.png",m_iyxno:"1053"},
			],
			[
				/*酒窖*/
			],
			[
				/*公区走廊*/
				{label:"茶室对面卫生间灯",get:"503,12",set:"300,1157",clo:"300,1158",cho:"../../Image/Ipad/loop_close.png",uncho:"../../Image/Ipad/loop_open.png",m_iyxno:"1089"},
				{label:"贵宾室2对面卫生间灯",get:"503,12",set:"300,1159",clo:"300,1160",cho:"../../Image/Ipad/loop_close.png",uncho:"../../Image/Ipad/loop_open.png",m_iyxno:"1085"},
				{label:"楼梯地灯",get:"503,12",set:"300,1161",clo:"300,1162",cho:"../../Image/Ipad/loop_close.png",uncho:"../../Image/Ipad/loop_open.png",m_iyxno:"1086"},
				{label:"休息区插座",get:"503,12",set:"300,1163",clo:"300,1164",cho:"../../Image/Ipad/loop_close.png",uncho:"../../Image/Ipad/loop_open.png",m_iyxno:"1087"},
				{label:"大堂插座",get:"503,12",set:"300,1165",clo:"300,1166",cho:"../../Image/Ipad/loop_close.png",uncho:"../../Image/Ipad/loop_open.png",m_iyxno:"1088"},
				{label:"茶室对面卫生间吊灯",get:"503,12",set:"300,1167",clo:"300,1168",cho:"../../Image/Ipad/loop_close.png",uncho:"../../Image/Ipad/loop_open.png",m_iyxno:"1084"},
				{label:"贵宾室2对面卫生间吊灯",get:"503,12",set:"300,1169",clo:"300,1170",cho:"../../Image/Ipad/loop_close.png",uncho:"../../Image/Ipad/loop_open.png",m_iyxno:"1090"},
			],
			[
				/*电梯厅*/
			],
			[
				/*大堂*/
			],
			[
				/*大堂*/
			]
		],
		[
			/*48*/
			[
				/* 高尔夫室*/
				
			],
			[
				/* IMAX*/
				{label:"马桶筒灯",get:"503,12",set:"300,13",clo:"",cho:"../../Image/Ipad/loop_close.png",uncho:"../../Image/Ipad/loop_open.png",m_iyxno:"1180"},
				{label:"卫生间筒灯",get:"503,12",set:"300,13",clo:"",cho:"../../Image/Ipad/loop_close.png",uncho:"../../Image/Ipad/loop_open.png",m_iyxno:"1181"},
				{label:"机房灯",get:"503,12",set:"300,13",clo:"",cho:"../../Image/Ipad/loop_close.png",uncho:"../../Image/Ipad/loop_open.png",m_iyxno:"1182"},
				{label:"卫生间窗帘灯带",get:"503,12",set:"300,13",clo:"",cho:"../../Image/Ipad/loop_close.png",uncho:"../../Image/Ipad/loop_open.png",m_iyxno:"1183"},
			],
			[
				/* KTV*/
				{label:"卫生间照明",get:"503,12",set:"300,1446",clo:"300,1147",cho:"../../Image/Ipad/loop_close.png",uncho:"../../Image/Ipad/loop_open.png",m_iyxno:"1191"},
				
			],
			[
				/* 乒乓球室*/
				
			],
			[
				/* 台球室*/
				
			],
			[
				/* 佛堂*/
				
			],
			[
				/* 公区走廊*/
				{label:"过道地筒灯",get:"503,12",set:"300,1582",clo:"300,1583",cho:"../../Image/Ipad/loop_close.png",uncho:"../../Image/Ipad/loop_open.png",m_iyxno:"1254"},
			],
			[
				/* 棋牌室*/
			],
			[
				/* 男卫*/
				{label:"吊灯",get:"503,12",set:"300,1608",clo:"300,1609",cho:"../../Image/Ipad/loop_close.png",uncho:"../../Image/Ipad/loop_open.png",m_iyxno:"1271"},
			],
			[
				/* 女卫*/
				{label:"吊灯",get:"503,12",set:"300,1626",clo:"300,1627",cho:"../../Image/Ipad/loop_close.png",uncho:"../../Image/Ipad/loop_open.png",m_iyxno:"1283"},
			]
		],
		[
			/*49*/
			[
				/*公区*/
			],
			[
				/*休闲区*/
			],
			[
				/*餐厅*/
			],
			[
				/*泳池灯光*/
			],
			[
				/*SPA1*/
				
			]
			,
			[
				/*SPA2*/
				{label:"防雾镜电源",get:"503,12",set:"300,1713",clo:"300,1714",cho:"../../Image/Ipad/loop_close.png",uncho:"../../Image/Ipad/loop_open.png",m_iyxno:"1339"},
				{label:"镜前灯",get:"503,12",set:"300,1715",clo:"300,1716",cho:"../../Image/Ipad/loop_close.png",uncho:"../../Image/Ipad/loop_open.png",m_iyxno:"1340"},
			]
			,
			[
				/*桑拿室*/
			],
			[
				/*卫生间*/
			]
		]
];

var curtain=[
	[
	/*47*/
		[
			/*贵宾室1*/
			{label:"窗帘1",get:"503,12",set:"300,1025",sto:"300,1026",clo:"300,1027",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
			{label:"窗帘2",get:"503,12",set:"300,1028",sto:"300,1029",clo:"300,1030",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
			{label:"窗帘3",get:"503,12",set:"300,1031",sto:"300,1032",clo:"300,1033",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
			{label:"卫生间",get:"503,12",set:"300,1034",sto:"300,1035",clo:"300,1036",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
			{label:"备餐间",get:"503,12",set:"300,1037",sto:"300,1038",clo:"300,1039",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
			
		],
		[
			/*贵宾室2*/
			{label:"窗帘1",get:"503,12",set:"300,1060",sto:"300,1061",clo:"300,1062",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
			{label:"窗帘2",get:"503,12",set:"300,1063",sto:"300,1064",clo:"300,1065",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
			{label:"窗帘3",get:"503,12",set:"300,1066",sto:"300,1067",clo:"300,1068",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
		],
		[
			/*茶室*/
			{label:"窗帘1",get:"503,12",set:"300,1087",sto:"300,1088",clo:"300,1089",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
			{label:"窗帘2",get:"503,12",set:"300,1090",sto:"300,1091",clo:"300,1092",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
			{label:"窗帘3",get:"503,12",set:"300,1093",sto:"300,1094",clo:"300,1095",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
		],
		[
			/*日式料理*/
			{label:"窗帘1",get:"503,12",set:"300,1116",sto:"300,1117",clo:"300,1118",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
			{label:"窗帘2",get:"503,12",set:"300,1119",sto:"300,1120",clo:"300,1121",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
			{label:"窗帘3",get:"503,12",set:"300,1122",sto:"300,1123",clo:"300,1124",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
			{label:"窗帘4",get:"503,12",set:"300,1125",sto:"300,1126",clo:"300,1127",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
		],
		[
			/*酒窖*/
			
		],
		[
			/*公区走廊*/
			{label:"茶室外窗帘1",get:"503,12",set:"300,1196",sto:"300,1197",clo:"300,1198",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
			{label:"茶室外窗帘2",get:"503,12",set:"300,1199",sto:"300,1200",clo:"300,1201",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
			{label:"茶室外窗帘3",get:"503,12",set:"300,1202",sto:"300,1203",clo:"300,1204",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
			{label:"茶室外窗帘4",get:"503,12",set:"300,1205",sto:"300,1206",clo:"300,1207",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
			{label:"茶室外窗帘5",get:"503,12",set:"300,1208",sto:"300,1209",clo:"300,1210",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
			{label:"茶室外窗帘6",get:"503,12",set:"300,1211",sto:"300,1212",clo:"300,1213",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
			
			{label:"观景平台窗帘1",get:"503,12",set:"300,1214",sto:"300,1215",clo:"300,1216",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
			{label:"观景平台窗帘2",get:"503,12",set:"300,1217",sto:"300,1218",clo:"300,1219",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
			{label:"观景平台窗帘3",get:"503,12",set:"300,1220",sto:"300,1221",clo:"300,1222",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
			{label:"观景平台窗帘4",get:"503,12",set:"300,1223",sto:"300,1224",clo:"300,1225",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
			{label:"观景平台窗帘5",get:"503,12",set:"300,1226",sto:"300,1227",clo:"300,1228",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
			{label:"观景平台窗帘6",get:"503,12",set:"300,1229",sto:"300,1230",clo:"300,1231",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
			
			{label:"贵宾室2外窗帘1",get:"503,12",set:"300,1232",sto:"300,1233",clo:"300,1234",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
			{label:"贵宾室2外窗帘2",get:"503,12",set:"300,1235",sto:"300,1236",clo:"300,1237",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
			{label:"贵宾室2外窗帘3",get:"503,12",set:"300,1238",sto:"300,1239",clo:"300,1240",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
			{label:"贵宾室2外窗帘4",get:"503,12",set:"300,1241",sto:"300,1242",clo:"300,1243",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
			{label:"贵宾室2外窗帘5",get:"503,12",set:"300,1244",sto:"300,1245",clo:"300,1246",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
			{label:"贵宾室2外窗帘6",get:"503,12",set:"300,1247",sto:"300,1248",clo:"300,1249",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
			
			{label:"酒窖外窗帘1",get:"503,12",set:"300,1250",sto:"300,1251",clo:"300,1252",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
			{label:"酒窖外窗帘2",get:"503,12",set:"300,1253",sto:"300,1254",clo:"300,1255",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
			{label:"酒窖外窗帘3",get:"503,12",set:"300,1256",sto:"300,1257",clo:"300,1258",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
			{label:"酒窖外窗帘4",get:"503,12",set:"300,1259",sto:"300,1260",clo:"300,1261",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
			{label:"酒窖外窗帘5",get:"503,12",set:"300,1262",sto:"300,1263",clo:"300,1264",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
//			{label:"酒窖外窗帘6",get:"503,12",set:"300,1025",sto:"300,1026",clo:"300,1027",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
		],
		[
			/*电梯厅*/
			
		],
		[
			/*大堂*/
			{label:"窗帘1",get:"503,12",set:"300,1311",sto:"300,1312",clo:"300,1313",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
			{label:"窗帘2",get:"503,12",set:"300,1314",sto:"300,1315",clo:"300,1316",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
			{label:"窗帘3",get:"503,12",set:"300,1317",sto:"300,1318",clo:"300,1319",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
			{label:"窗帘4",get:"503,12",set:"300,1320",sto:"300,1321",clo:"300,1322",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
			{label:"窗帘5",get:"503,12",set:"300,1323",sto:"300,1324",clo:"300,1325",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
			{label:"窗帘6",get:"503,12",set:"300,1326",sto:"300,1327",clo:"300,1328",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
			{label:"窗帘7",get:"503,12",set:"300,1329",sto:"300,1330",clo:"300,1331",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
			{label:"窗帘8",get:"503,12",set:"300,1332",sto:"300,1333",clo:"300,1334",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
			{label:"窗帘9",get:"503,12",set:"300,1335",sto:"300,1336",clo:"300,1337",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
			{label:"窗帘10",get:"503,12",set:"300,1338",sto:"300,1339",clo:"300,1340",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
			{label:"窗帘11",get:"503,12",set:"300,1341",sto:"300,1342",clo:"300,1343",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
			{label:"窗帘12",get:"503,12",set:"300,1344",sto:"300,1345",clo:"300,1346",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
			{label:"窗帘13",get:"503,12",set:"300,1347",sto:"300,1348",clo:"300,1349",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
			{label:"窗帘14",get:"503,12",set:"300,1350",sto:"300,1351",clo:"300,1352",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
			{label:"窗帘15",get:"503,12",set:"300,1353",sto:"300,1354",clo:"300,1355",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
			{label:"窗帘16",get:"503,12",set:"300,1356",sto:"300,1357",clo:"300,1358",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
			{label:"窗帘17",get:"503,12",set:"300,1359",sto:"300,1360",clo:"300,1361",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
			{label:"窗帘18",get:"503,12",set:"300,1362",sto:"300,1363",clo:"300,1364",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
			{label:"窗帘19",get:"503,12",set:"300,1365",sto:"300,1366",clo:"300,1367",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
			{label:"窗帘20",get:"503,12",set:"300,1368",sto:"300,1369",clo:"300,1370",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
		]
		
	],
	[
	/*48*/
		[
		/*高尔夫*/
			{label:"窗帘1",get:"503,12",set:"300,1375",sto:"300,1376",clo:"300,1377",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
			{label:"窗帘2",get:"503,12",set:"300,1378",sto:"300,1379",clo:"300,1380",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
			{label:"窗帘3",get:"503,12",set:"300,1381",sto:"300,1382",clo:"300,1383",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
			{label:"窗帘4",get:"503,12",set:"300,1384",sto:"300,1385",clo:"300,1386",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
			{label:"窗帘5",get:"503,12",set:"300,1387",sto:"300,1388",clo:"300,1389",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
		],
		[
		/*IMAX*/
			{label:"卫生间卷帘",get:"503,12",set:"300,1405",sto:"300,1406",clo:"300,1407",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
			
		],
		[
		/*Ktv*/
		],
		[
		/*乒乓球*/
		],
		[
		/*台球*/
		],
		[
		/*佛堂*/
		],
		[
		/*公区走廊*/
			{label:"棋牌室外窗帘1",get:"503,12",set:"300,1516",sto:"300,1517",clo:"300,1518",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
			{label:"棋牌室外窗帘2",get:"503,12",set:"300,1519",sto:"300,1520",clo:"300,1521",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
			{label:"棋牌室外窗帘3",get:"503,12",set:"300,1522",sto:"300,1523",clo:"300,1524",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
			{label:"棋牌室外窗帘4",get:"503,12",set:"300,1525",sto:"300,1526",clo:"300,1527",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
			{label:"棋牌室外窗帘5",get:"503,12",set:"300,1528",sto:"300,1529",clo:"300,1530",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
			{label:"棋牌室外窗帘6",get:"503,12",set:"300,1531",sto:"300,1532",clo:"300,1533",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
			
			{label:"乒乓室外窗帘1",get:"503,12",set:"300,1534",sto:"300,1534",clo:"300,1536",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
			{label:"乒乓室外窗帘2",get:"503,12",set:"300,1537",sto:"300,1538",clo:"300,1539",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
			{label:"乒乓室外窗帘3",get:"503,12",set:"300,1540",sto:"300,1541",clo:"300,1542",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
			{label:"乒乓室外窗帘4",get:"503,12",set:"300,1543",sto:"300,1544",clo:"300,1545",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
			{label:"乒乓室外窗帘5",get:"503,12",set:"300,1546",sto:"300,1547",clo:"300,1548",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
			
			{label:"高尔夫外窗帘1",get:"503,12",set:"300,1549",sto:"300,1550",clo:"300,1551",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
			{label:"高尔夫外窗帘2",get:"503,12",set:"300,1552",sto:"300,1553",clo:"300,1554",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
			{label:"高尔夫外窗帘3",get:"503,12",set:"300,1555",sto:"300,1556",clo:"300,1557",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
			{label:"高尔夫外窗帘4",get:"503,12",set:"300,1558",sto:"300,1559",clo:"300,1560",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
			
			{label:"佛堂外窗帘1",get:"503,12",set:"300,1561",sto:"300,1562",clo:"300,1563",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
			{label:"佛堂外窗帘2",get:"503,12",set:"300,1564",sto:"300,1565",clo:"300,1566",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
			{label:"佛堂外窗帘3",get:"503,12",set:"300,1567",sto:"300,1568",clo:"300,1569",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
			{label:"佛堂外窗帘4",get:"503,12",set:"300,1570",sto:"300,1571",clo:"300,1572",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
			{label:"佛堂外窗帘5",get:"503,12",set:"300,1573",sto:"300,1574",clo:"300,1575",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
			{label:"佛堂外窗帘6",get:"503,12",set:"300,1576",sto:"300,1577",clo:"300,1578",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
			
			{label:"高尔夫室外窗帘5",get:"503,12",set:"300,1579",sto:"300,1580",clo:"300,1581",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
		],
		[
		/*棋牌室*/
			{label:"窗帘1",get:"503,12",set:"300,1591",sto:"300,1592",clo:"300,1593",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
			{label:"窗帘2",get:"503,12",set:"300,1594",sto:"300,1595",clo:"300,1596",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
		],
		[
		/*男卫*/
			{label:"男卫卷帘",get:"503,12",set:"300,1612",sto:"300,1613",clo:"300,1614",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
		],
		[
		/*女卫*/
			{label:"女卫卷帘",get:"503,12",set:"300,1630",sto:"300,1631",clo:"300,1632",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
		]
	],
	[
		[
			/*公区*/
		],
		[
			/*休闲区*/
		],
		[
			/*餐厅*/
		],
		[
			/*泳池灯光*/
		],
		[
			/*spa1*/
			{label:"SPA1窗帘1",get:"503,12",set:"300,1701",sto:"300,1702",clo:"300,1703",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
			{label:"SPA1窗帘2",get:"503,12",set:"300,1704",sto:"300,1705",clo:"300,1706",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
		],
		[
			/*spa2*/
			{label:"SPA2窗帘1",get:"503,12",set:"300,1707",sto:"300,1708",clo:"300,1709",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
			{label:"SPA2窗帘2",get:"503,12",set:"300,1710",sto:"300,1711",clo:"300,1712",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
		],
		[
			/*桑拿*/
			{label:"桑拿窗帘",get:"503,12",set:"300,1719",sto:"300,1720",clo:"300,1721",cho:"../../Image/Ipad",uncho:"../../Image/Ipad",m_iyxno:""},
		],
		[
			/*卫生间*/
		]
	]
]
