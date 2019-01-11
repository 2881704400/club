// 1.一个计时器,选择设备的时候选择关闭就关闭当前计时器
// 2.页面加载,加载当前及时器
// 3.当选择的时间不为空,并且为停止播放时创建及时器
var vio=[],pre=[],next=[],ctrol=[],roomArr=[],timeMin=0,autoPlay=false,pickerDevice;
// window.obj={};
var closeTimer=null;
  


function bgMusic() {
	toolbarActiveImg('bgMusicTool');
	getEquipStayc();
	// vio=[];
	// pre=[];
	// next=[];
	// ctrol=[];
	// roomArr=[];
	//全选
	$(".list-header label").click(function(event) {
		var check=$(this).find("input").prop("checked");
		$(".list-content li").each(function(){
			var liIndex= $(this).index();
			if(check){
				$(this).find("input").prop("checked",false);
				$(this).removeClass('check');
					roomArr.remove(liIndex);
			}else{
				$(this).find("input").prop("checked",true);
				$(this).addClass('check');
				if(roomArr.indexOf(liIndex)==-1){
					roomArr.push(liIndex);
				}
				
			}
		})
	});
	
	// 点击每一行添加
	$(".list-content li").each(function(){

		$(this).click(function(event) {
			var liIndex= $(this).index();
			var check=$(this).find("input").prop("checked");
			if(check){
				$(this).find("input").prop("checked",false);
				$(this).removeClass('check');
				roomArr.remove(liIndex);
				
			}else{
				$(this).find("input").prop("checked",true);
				$(this).addClass('check')
				if(roomArr.indexOf(liIndex)==-1){
					roomArr.push(liIndex);
				}
			}

		});

	})
	// 点击复选框
	$(".list-content label").each(function(){
		$(this).click(function(event) {
			var liIndex= $(this).parents(".row").index();
			event.stopPropagation();
			var check=$(this).find("input").prop("checked");
			if(check){
				$(this).find("input").checked=false;
				$(this).parents(".row").removeClass('check')
				roomArr.remove(liIndex);
			}else{
				$(this).find("input").checked=true;
				$(this).parents(".row").addClass('check')
				if(roomArr.indexOf(liIndex)==-1){
					roomArr.push(liIndex);
				}
			}
		});
	})





	
	
	
	


	$$('.range-slider').on('range:change', function (e, range) {
		var num=range.value;
		if(roomArr.length==0){
			return;
		}
		for(var i=0;i<roomArr.length;i++){

			var value=set[roomArr[i]].vioce.split(",");
			var param=getSetParam(value[0],value[1]);
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
						
					}else{
						alertMsgError.open();
					}
				})
			}
		}

	});

	
	$("#pickerDateIconId").bind('click', function() {
		pickerInline.open();
	});

	$("#pickerDateLabelId").bind('click', function() {
		pickerDevice.open();
	});

	$("input[type='checkbox']").click(function(e) {
		e.stopPropagation();
	});



	var minArr = [];
	for(var i = 1; i <= 60; i++) {
		if(i <= 10) {
			minArr.push('0' + i)
		} else {
			minArr.push(i)
		}

	}



	var pickerInline = myApp.picker.create({
		inputEl: '#picker-date',
		rotateEffect: true,
		renderToolbar: function() {
			return '<div class="toolbar">' +
				'<div class="toolbar-inner">' +
				'<div class="center">' +
				'<a href="#" class="link sheet-close popover-close">取消</a>' +
				'</div>' +
				'<div class="right">' +
				'<a href="#" class="link sheet-close popover-close"  onclick="sureDeal(1)">确定</a>' +
				'</div>' +
				'</div>' +
				'</div>';
		},
		// value:timeArr,
		cols: [{
				textAlign: 'left',
				values: ('01 02 03 04 05 06 07 08 09 10 11 12').split(' ')
			},
			{
				values: ['时'],
			},
			{
				values: minArr
			},
			{
				values: ['分'],
			},
		],
		on: {
			open:function(){
				loadTimer(5);
			},
			change:function(picker){
				var hours=parseInt(picker.value[0]);
				var min=parseInt(picker.value[2]);
				timeMin=hours*60+min;


			}
		}
	});

	pickerDevice = myApp.picker.create({
		inputEl: '#picker-date2',
		rotateEffect: true,
		renderToolbar: function() {
			return '<div class="toolbar">' +
				'<div class="toolbar-inner">' +
				'<div class="center">' +
				'<a href="#" class="link sheet-close popover-close">取消</a>' +
				'</div>' +
				'<div class="right">' +
				'<a href="#" class="link sheet-close popover-close" onclick="sureDeal(0)">确定</a>' +
				'</div>' +
				'</div>' +
				'</div>';
		},
		// value:[showTxt],
		cols: [{
			textAlign: 'center',
			values: [ '继续播放','停止播放']
		}],
		on:{
			change:function(picker){
				var txt=picker.value[0];
				if(txt=="停止播放"){
					autoPlay=true;
				// 	window.localStorage.isTimeout=1;
				}else{
					autoPlay=false;
				// 	window.localStorage.isTimeout=0;
				}
			}

		}
	});

	var isTimeout=window.localStorage.isTimeout;
	var times=window.localStorage.setTime;
	if(times<61){
		if(times==0){
			loadTimer(0)
		}else if(times==10){
			loadTimer(1)
		}else if(times==20){
			loadTimer(2)
		}else if(times==30){
			loadTimer(3)
		}else if(times==60){
			loadTimer(4)
		}
	}else{
		loadTimer(5);
		var hours,strH,mins,strH
		hours=Math.floor(times/60)>10?Math.floor(times/60):"0"+Math.floor(times/60);
		strH="时";
		mins=times%60>10?times%60:'0'+times%60;
		strH="分"
		$("#picker-date").val(hours+strH+mins+strH);
		$(".defineTime").css({
				background:'gainsboro'
			});
		pickerInline.setValue([hours,strH,mins,strH]);
	}

	if(isTimeout==0){
		pickerDevice.setValue(["继续播放"]);
		autoPlay=false;
		// if(times==0){
		// 	loadTimer(0)
		// }
	}else{
		pickerDevice.setValue(["停止播放"])
		autoPlay=true;

	}




	var $document = $(document);
	var selector = '[data-rangeslider]';
	var $element = $(selector);

	// For ie8 support
	var textContent = ('textContent' in document) ? 'textContent' : 'innerText';

	// Example functionality to demonstrate a value feedback
	function valueOutput(element) {
		var value = element.value;
		$(".my-rangeslider").html(value);
	}

	$document.on('input', 'input[type="range"], ' + selector, function(e) {
		valueOutput(e.target);
	});

	// Example functionality to demonstrate disabled functionality
	$document.on('click', '#js-example-disabled button[data-behaviour="toggle"]', function(e) {
		var $inputRange = $(selector, e.target.parentNode);

		if($inputRange[0].disabled) {
			$inputRange.prop("disabled", false);
		} else {
			$inputRange.prop("disabled", true);
		}
		$inputRange.rangeslider('update');
	});

	// Example functionality to demonstrate programmatic value changes
	$document.on('click', '#js-example-change-value button', function(e) {
		var $inputRange = $(selector, e.target.parentNode);
		var value = $('input[type="number"]', e.target.parentNode)[0].value;

		$inputRange.val(value).change();
	});

	// Example functionality to demonstrate programmatic attribute changes
	$document.on('click', '#js-example-change-attributes button', function(e) {
		var $inputRange = $(selector, e.target.parentNode);
		var attributes = {
			min: $('input[name="min"]', e.target.parentNode)[0].value,
			max: $('input[name="max"]', e.target.parentNode)[0].value,
			step: $('input[name="step"]', e.target.parentNode)[0].value
		};

		$inputRange.attr(attributes);
		$inputRange.rangeslider('update', true);
	});

	// Example functionality to demonstrate destroy functionality
	$document
		.on('click', '#js-example-destroy button[data-behaviour="destroy"]', function(e) {
			$(selector, e.target.parentNode).rangeslider('destroy');
		})
		.on('click', '#js-example-destroy button[data-behaviour="initialize"]', function(e) {
			$(selector, e.target.parentNode).rangeslider({
				polyfill: false
			});
		});

	// Example functionality to test initialisation on hidden elements
	$document
		.on('click', '#js-example-hidden button[data-behaviour="toggle"]', function(e) {
			var $container = $(e.target.previousElementSibling);
			$container.toggle();
		});

	// Basic rangeslider initialization
	$element.rangeslider({

		// Deactivate the feature detection
		polyfill: false,

		// Callback function
		onInit: function() {
			valueOutput(this.$element[0]);
		},

		// Callback function
		onSlide: function(position, value) {},

		// Callback function
		onSlideEnd: function(position, value) {}
	});
//1.选中房间的时候初始化，声音为最低的，开关为关
//2.定时功能
//	选择给定时间自定义清空
//  选择自定义的时候取消清空
//	定时结束后
//  是否开启定时
//  是否继续播放
//  20个定时器
	$(".pannel-box>p").bind('click', function() {
		$(".pannel-box>p").each(function() {
			$(this).removeClass("bg-dark");
			$(this).find('i').removeClass('show-opacity');
		})
		$(".defineTime").css({background:'#fff'});
		$(this).addClass("bg-dark");
		$(this).find('i').addClass('show-opacity');
		$("#picker-date").val("自定义播放时间");
		timeMin=$(this).attr("num");

		loadInterval();

		
	});
	


	
}
function sureDeal(type){
	if(type==1){
		$(".defineTime").css({background:"gainsboro"})
	}
	loadInterval(timeMin,autoPlay);
}
function loadTimer(m){
	$(".pannel-box>p").each(function(i) {
		if(m==i){
			$(this).addClass("bg-dark");
			$(this).find('i').addClass('show-opacity');
		}else{
			$(this).removeClass("bg-dark");
			$(this).find('i').removeClass('show-opacity');
		}
	})	
	$(".defineTime").css({background:'#fff'});
	$("#picker-date").val("自定义播放时间");
}





function loadInterval(){
	if(roomArr.length==0){
		return
	}
	window.localStorage.setTime=timeMin;
	window.localStorage.timeRoom=roomArr.toString();

	if(timeMin!=0&&autoPlay==true){
		clearTimeout(closeTimer);
		window.localStorage.isTimeout=1;
		var times=parseInt(timeMin)*60*1000;
		alertMsgSuccess.open();
		closeTimer=setTimeout(
			function(){
				roomList=window.localStorage.timeRoom.split(",");
				for(var i=0;i<roomList.length;i++){
					var value=set[roomList[i]].ctl[1].split(",");
					var param=getSetParam(value[0],value[1]);
					var data={
						equip_no:param.equip_no,
						main_instruction:param.main_instruction,
						minor_instruction:param.minor_instruction,
						value:param.value,
						user_name:window.localStorage.userName
					}
					JQajaxo("post","/GWService.asmx/SetupsCommand",true,data,_success)
					function _success(res){
						loadTimer(0)
						pickerDevice.setValue(["继续播放"]);
						autoPlay=false;
						window.localStorage.timeRoom="";
						window.localStorage.isTimeout=0;
						window.localStorage.setTime=0;

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
			}, 
			times
		);

	}else{
		window.localStorage.timeRoom="";
		window.localStorage.isTimeout=0;
		window.localStorage.setTime=0;
		clearTimeout(closeTimer);
		pickerDevice.setValue(["继续播放"]);
		autoPlay=false;
		// alertMsgSuccess.open();
		// for(var i=0;i<roomArr.length;i++){
		// 	var ind=roomArr[i];
		// 	var timeStr="call"+ind;
		// 	clearTimeout(obj[timeStr]);
		// }
	}
}
function musicPre(dom){
	$(dom).find("img").eq(0).hide();
	$(dom).find("img").eq(1).show();
	
	for(var i=0;i<roomArr.length;i++){
		var value=set[roomArr[i]].pre.split(",");
		var param=getSetParam(value[0],value[1]);
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
		$(dom).find("img").eq(1).hide();
		$(dom).find("img").eq(0).show();
	},1000)
	
	
}
function musicCtr(dom){
	var flag=$(dom).find("img").eq(1).is(":visible");
	var param;
	if(flag){
		//开
		$("#musicCtrol img").eq(0).show();
		$("#musicCtrol img").eq(1).hide();
		loadCtrol(1)

	}else{
		$("#musicCtrol img").eq(1).show();
		$("#musicCtrol img").eq(0).hide();
		loadCtrol(0)

		//关
		
	}
}
function loadCtrol(type){
	for(var i=0;i<roomArr.length;i++){
		var value=set[roomArr[i]].ctl[type].split(",");
		var param=getSetParam(value[0],value[1]);
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
}
function musicNext(dom){
	$(dom).find("img").eq(0).hide();
	$(dom).find("img").eq(1).show();
	for(var i=0;i<roomArr.length;i++){
		var value=set[roomArr[i]].next.split(",");
		var param=getSetParam(value[0],value[1]);
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
		$(dom).find("img").eq(1).hide();
		$(dom).find("img").eq(0).show();
	},1000)
	
}
// var eqVioce=[];


function getEquipStayc(){
	$.ajax({
		type:"post",
		url:"/GWService.asmx/GetRealTimeData",
		async:false,
		data:{
			equip_no:'503',
			table_name:'ycp'
		},
		success:function(res){
			var dat=JSON.parse($(res).find("string").text());

			for(var i=0;i<dat.length;i++){
				var value=dat[i];
				var ind=vioce.indexOf(value.m_iYCNo);
				if(ind!=-1){
					var idStr=vioce[ind];
					$("#"+idStr).find(".vioce").text(value.m_YCValue);
					
				}


				var staInd=play.indexOf(value.m_iYCNo);
				//空闲or正在播放
				if(staInd!=-1){
					var clasStr="sta-"+play[staInd];
					$("."+clasStr).text(value.m_YCValue)
				}

			}
		}
	});
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
//0音乐的开关；
//1.男卫,女卫,泳池,spa,桑拿/；
//2.音量显示显示选中最小值，改变全部改变；
//3.上一曲选中分区全部上；
//4.下一曲选中分区全部下；
//5.开关初始播放，点击全部暂停点击全部播放；
var play=[
	1,/*贵宾室*/
	3,/*贵宾室2*/
	5,/*茶室*/
	2,/*料理*/
	4,/*酒窖*/
	15,/*公区47*/
	6,/*高尔夫*/
	11,/*兵乓球*/
	12,/*台球*/
	21,/*公共48*/
	10,/*棋牌*/
	14,/*客房外围(49F)*/
	23,/*休息*/
	13,/*餐厅*/
	7,/*spa1*/
	9,/*spa2*/
	8/*桑拿*/
]
var vioce=[
	26,/*贵宾室*/
	28,/*贵宾室2*/
	30,/*茶室*/
	27,/*料理*/
	29,/*酒窖*/
	40,/*公区47*/
	31,/*高尔夫*/
	36,/*兵乓球*/
	37,/*台球*/
	46,/*公共48*/
	35,/*棋牌*/
	39,/*客房外围(49F)*/
	48,/*休息*/
	38,/*餐厅*/
	32,/*spa1*/
	34,/*spa2*/
	33/*桑拿*/
]

var set=[
	{/*贵宾室*/
		vioce:"300,3002",
		next:"300,3004",
		pre:"300,3003",
		ctl:[
			"300,3000",/*开*/
			"300,3001"/*关*/
		]
	},
	{/*贵宾室2*/
		vioce:"300,3007",
		next:"300,3009",
		pre:"300,3008",
		ctl:[
			"300,3005",/*开*/
			"300,3006"/*关*/
		]
	},
	{/*48洗手间*/
		vioce:"300,3012",
		next:"300,3014",
		pre:"300,3013",
		ctl:[
			"300,3010",/*开*/
			"300,3011"/*关*/
		]
	},
	{/*料理*/
		vioce:"300,3017",
		next:"300,3019",
		pre:"300,3018",
		ctl:[
			"300,3015",/*开*/
			"300,3016"/*关*/
		]
	},
	{/*酒窖*/
		vioce:"300,3022",
		next:"300,3024",
		pre:"300,3023",
		ctl:[
			"300,3020",/*开*/
			"300,3021"/*关*/
		]
	},
	{/*公区47*/
		vioce:"300,3027",
		next:"300,3029",
		pre:"300,3028",
		ctl:[
			"300,3025",/*开*/
			"300,3026"/*关*/
		]
	},
	{/*高尔夫*/
		vioce:"300,3032",
		next:"300,3034",
		pre:"300,3033",
		ctl:[
			"300,3030",/*开*/
			"300,3031"/*关*/
		]
	},
	{/*乒乓球*/
		vioce:"300,3037",
		next:"300,3039",
		pre:"300,3038",
		ctl:[
			"300,3035",/*开*/
			"300,3036"/*关*/
		]
	},
	{/*台球*/
		ctl:[
			"300,3040",/*开*/
			"300,3041"/*关*/
		],
		vioce:"300,3042",
		pre:"300,3043",
		next:"300,3044",
	},
	{/*公区48*/
		ctl:[
			"300,3045",/*开*/
			"300,3046"/*关*/
		],
		vioce:"300,3047",
		pre:"300,3048",
		next:"300,3049",
	},
	{/*棋牌*/
		ctl:[
			"300,3050",/*开*/
			"300,3051"/*关*/
		],
		vioce:"300,3052",
		pre:"300,3053",
		next:"300,3054",
	},
//	{/*男卫*/
//		ctl:[
//			"300,3055",/*开*/
//			"300,3056"/*关*/
//		],
//		vioce:"300,3057",
//		pre:"300,3058",
//		next:"300,3059",
//	},
//	{/*女卫*/
//		ctl:[
//			"300,3060",/*开*/
//			"300,3061"/*关*/
//		],
//		vioce:"300,3062",
//		pre:"300,3063",
//		next:"300,3064",
//	},
	{/*公区49*/
		ctl:[
			"300,3065",/*开*/
			"300,3066"/*关*/
		],
		vioce:"300,3067",
		pre:"300,3068",
		next:"300,3069",
	},
	{/*休闲区*/
		ctl:[
			"300,3070",/*开*/
			"300,3071"/*关*/
		],
		vioce:"300,3072",
		pre:"300,3073",
		next:"300,3074",
	},
	{/*餐厅*/
		ctl:[
			"300,3075",/*开*/
			"300,3076"/*关*/
		],
		vioce:"300,3077",
		pre:"300,3078",
		next:"300,3079",
	},
//	{/*泳池*/
//		ctl:[
//			"300,3080",/*开*/
//			"300,3081"/*关*/
//		],
//		vioce:"300,3082",
//		pre:"300,3083",
//		next:"300,3084",
//	},
	{/*spa1*/
		ctl:[
			"300,3085",/*开*/
			"300,3086"/*关*/
		],
		vioce:"300,3087",
		pre:"300,3088",
		next:"300,3089",
	},
	{/*spa2*/
		ctl:[
			"300,3090",/*开*/
			"300,3091"/*关*/
		],
		vioce:"300,3092",
		pre:"300,3093",
		next:"300,3094",
	},
	{/*桑拿*/
		ctl:[
			"300,3095",/*开*/
			"300,3096"/*关*/
		],
		vioce:"300,3097",
		pre:"300,3098",
		next:"300,3099",
	}
]
