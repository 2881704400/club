// 		equip_no: "设备号",        
//      
//      main_instruction: "设备属性1",        
//      
//      minor_instruction: "设备属性2",     
//      
//      value: "设备值",        
//      
//      user_name: "操作员
//		先获取状态
var guestData=[
	{//客房一
		"bedroom":[14,15,16,17,18,19,20,21,22,23],
		"washroom":[24,25,26,27,28,29],
		"lightloop":[[1,2]],
		"ktcontrol":[[48,49],58,58,[51,52,53,50],[54,55,56,57]],
		'curtainControl':[
			[//卧室布帘1
				30,31,32
			],
			[//卧室纱帘1
				33,34,35
			],
			[//卧室布帘2
				36,37,38
			],
			[//卧室纱帘2
				39,40,41
			],
			[//卫生间卷帘1
				43,43,44
			],[//卫生间卷帘2
				45,46,47
			],
		],
		'music':[363,[59,60],364,68,68]
	},
	{//客房二
		"bedroom":[84,85,86,87,88,89,90,91,92,93],
		"washroom":[94,95,96,97,98,99],
		"lightloop":[[71,72],[69,70]],
		"ktcontrol":[[109,110],119,119,[112,113,114,111],[115,116,117,118]],
		'curtainControl':[
			[//卧室布帘
				100,101,102
			],
			[//卧室纱帘
				103,104,105
			],
			[//卫生间卷帘
				106,107,108
			]
		],
		'music':[365,[120,121],366,129,129]
		
	},
	{//客房三
		"bedroom":[145,146,147,148,149,150,151,152,153,154],
		"washroom":[155,156,157,158,159,160],
		"lightloop":[[132,133],[130,131]],
		"ktcontrol":[[173,174],183,183,[176,177,178,175],[179,180,181,182]],
		'curtainControl':[
			[//卧室布帘
				161,162,163
			],
			[//卧室纱帘
				164,165,166
			],
			[//卫生间卷帘1
				167,168,169
			],
			[//卫生间卷帘2
				170,171,172
			]
		],
		'music':[367,[184,185],368,193,193]
		
	},
	{//客房四
		//卧室场景，起居室场景
		//卧室卫生间场景，起居室卫生间场景
		//卧室空调 起居室空调
		"bedroom":[
					[215,216,217,218,219,220,221,222,223,224],
					[//起居室场景
					231,232,233,234,235,236,237,238,239,240	
					]
				],
		"washroom":[
				[//卧室卫生间
					225,226,227,228,229,230
				],
				[//起居室卫生间
					241,242,243,244,245,246
				]
			],
		"lightloop":[[198,199],[196,197],[194,195]],
		"ktcontrol":[
					[[274,275],284,284,[277,278,279,276],[280,281,282,283]],
					[[285,286],295,295,[288,289,290,287],[291,292,293,294]]
		],
		'curtainControl':[
			[//卧室布帘1
				247,248,249
			],
			[//卧室纱帘1
				250,251,252
			],
			[//卧室布帘2
				253,254,255
			],
			[//卧室纱帘2
				256,257,258
			],
			[//卫生间卷帘
				259,260,261
			],
			[//起居室布帘1
				262,263,264
			],
			[//起居室纱帘1
				265,266,267
			],
			[//起居室布帘2
				268,269,270
			],
			[//起居室纱帘2
				271,272,273
			]
		],
		'music':[369,[296,297],370,305,305]
	},
	{//客房五
		"bedroom":[
					317,318,319,320,321,323,324,325,326
				],
		"washroom":[327,328,329,330,331,332],
		"lightloop":[[306,307]],
		"ktcontrol":[[342,343],352,352,[345,346,347,344],[348,349,350,351]],
		'curtainControl':[
			[//卧室布帘
				333,334,335
			],
			[//卧室纱帘
				336,337,338
			],
			[//卫生间卷帘
				339,340,341
			]
		],
		'music':[371,[353,354],372,362,362]
	},
	
]
//将 客房的设备id存起来获取
//空调温度调节获取
//音乐音量获取
var guestEquip=[
	{
		'bedroom':[2,3,4,5,6,7,8,9,10,11],
		'washroom':[12,13,14,15,16,17],
		'lightloop_0':[1],
		'ktcontrol':[18],
		'fs':[20,21,22,19],
		'ms':[23,24,25,26],
		'music':[27]
	},
	{
		'bedroom':[37,38,39,40,41,42,43,44,45,46],
		'washroom':[47,48,49,50,51,52],
		'lightloop_0':[36],
		'lightloop_1':[35],
		'ktcontrol':[53],
		'fs':[55,56,57,54],
		'ms':[58,59,60,61],
		'music':[62]
	},
	{
		'bedroom':[72,73,74,75,76,77,78,79,80,81],
		'washroom':[82,83,84,85,86,87],
		'lightloop_0':[71],
		'lightloop_1':[70],
		'ktcontrol':[88],
		'fs':[90,91,92,89],
		'ms':[93,94,95,96],
		'music':[97]
	},
	{
		//卧室场景，起居室场景
		//卧室卫生间场景，起居室卫生间场景
		//卧室空调 起居室空调
		'bedroom':[108,109,110,111,112,113,114,115,116,117],
		'uproom':[124,125,126,127,128,129,130,131,132,133],
		'washroom':[118,119,120,121,122,123],
		'upwashroom':[134,135,136,137,138,139],
		'lightloop_0':[107],
		'lightloop_1':[105],
		'lightloop_2':[106],
		'ktcontrol':[140],
		'fs':[142,143,144,141],
		'ms':[145,146,147,148],
		'upktcontrol':[149],
		'upfs':[151,152,153,150],
		'upms':[154,155,156,157],
		'music':[158]
	},
	{
		'bedroom':[168,169,170,171,172,173,174,175,176,177],
		'washroom':[178,179,180,181,182,183],
		'lightloop_0':[167],
		'ktcontrol':[184],
		'fs':[186,187,188,185],
		'ms':[189,190,191,192],
		'music':[193]
	}
]

var setNum=[
	{
		'kt':[14],
		'music':[15]
	},
	{
		'kt':[29],
		'music':[30]
	},
	{
		'kt':[44],
		'music':[45]
	},
	{
		'kt_0':[65],
		'kt_1':[66],
		'music':[67]
	},
	{
		'kt':[79],
		'music':[80]
	},
]

var roomId=0,
	bedId=0,
	washId=0,
	ktId=0;
function guestControl() {
	var curtId=-1;
	toolbarActiveImg('guestControlTool');
	var roomLoopLight=[
						["防雾灯"],
						["防雾灯","台灯"],
						["防雾灯","台灯"],
						["防雾灯","台灯1","台灯2"],
						["防雾灯"]
					]
	var curtainList=[
				["卧室布帘1","卧室纱帘1","卧室布帘2","卧室纱帘2","卫生间卷帘1","卫生间卷帘2"],//客房1
				["卧室布帘","卧室纱帘","卫生间卷帘"],
				["卧室布帘","卧室纱帘","卫生间卷帘1","卫生间卷帘2"],//客房3
				["卧室布帘1","卧室纱帘1","卧室布帘2","卧室纱帘2","卫生间卷帘","起居室布帘1","起居室纱帘1","起居室布帘2","起居室纱帘2"],
				["卧室布帘","卧室纱帘","卫生间卷帘"],//客房5
	]
	
	//左侧菜单栏切换效果
//	getInfor(0)
	$(".left-pannel ul li").bind('click', function() {
		var ind=$(this).index();
		// $(".left-pannel ul li").each(function() {
		// 	$(this).removeClass("pannel-down");
		
		// })
		$(this).addClass('pannel-down');
		$(this).siblings('li').removeClass('pannel-down')
		// $(".left-pannel ul li").eq(ind).addClass("pannel-down");
		
		if(roomId != ind) {
			roomId = ind;
			curtId = -1;
			$("#curtainPickerId span").text("请选择");
			bedId = 0;
			washId = 0;
			ktId = 0;
			
		}
//		$("#airTemperatureId").text(Number.wd[roomId])
//		$("#musicVal").attr('num', Number.vio[roomId])
		if(ind == 3) {
			$("#roomSceneId .scene-box-title li").show();
			$("#toiletSceneId .scene-box-title li").show();
			$("#ktControl .pannel-title li").show()
		} else {
			$("#roomSceneId .scene-box-title li").eq(1).hide().removeClass("check");
			$("#toiletSceneId .scene-box-title li").eq(1).hide().removeClass("check");
			$("#ktControl .pannel-title li").eq(1).hide().removeClass("check");
			$("#roomSceneId .scene-box-title li").eq(0).addClass("check");
			$("#toiletSceneId .scene-box-title li").eq(0).addClass("check");
			$("#ktControl .pannel-title li").eq(0).addClass("check");
		}
		
		$("#lightLoopSceneId .pannel-imginfo").remove();
		var leng = roomLoopLight[ind].length;
		var curLeng = curtainList[ind].length;
		for(var i = 0; i < leng; i++) {
			var arr = roomLoopLight[ind];
			var html = `<div class="pannel-imginfo">
										<p><img src="../../Image/Ipad/open.png" /><img src="../../Image/Ipad/close.png" /></p>
										<span>${arr[i]}</span>
									</div>`
			$("#lightLoopSceneId").append(html)
		}
		$("#curtainPickerId ul").html("");
		for(var i = 0; i < curLeng; i++) {
			var arr = curtainList[ind];
			var html = `<li>${arr[i]}</li>`
			$("#curtainPickerId ul").append(html)
		}
		
		
		loadCheck(roomId)
			
	});


	//卧室场景按钮点击事件
	$("#roomSceneId .scene-box-title li").each(function(){
//		针对4号客房
		$(this).click(function(){
			var ind=$(this).index();
//			var set=getSetPa(300)
			bedId=ind;
			
			loadCheck(roomId)
			
			$(this).addClass("check").siblings().removeClass("check");
			
		})
		
	})
	
	
	
	$("#roomSceneId .pannel-imginfo").bind('click', function() {
		var flag = $(this).find("p>img").eq(1).is(':visible');
		var ind=$(this).index()-1;
			var set_no;
			if(roomId==3){
				set_no=guestData[roomId].bedroom[bed][ind]
			}else{
				set_no=guestData[roomId].bedroom[ind]
			}
			var set=getSetPa(300,set_no);
			setupsCommand(set.equip_no,set.main_instruction,set.minor_instruction,set.value,$(this))
			
//		}
		$(this).siblings(".pannel-imginfo").each(function(){
			$(this).find("p>img").eq(0).show();
			$(this).find("p>img").eq(1).hide();
			$(this).find('span').css({
				color: "rgb(102,102,102)"
			});
		})
	});

	

	//卫生间场景按钮点击事件
	$("#toiletSceneId .scene-box-title li").each(function(){
		$(this).click(function(){
			var ind=$(this).index();
			washId=ind;
			loadCheck(roomId)
			$(this).addClass("check").siblings().removeClass("check")
		})
		
	})
	
	
	$("#toiletSceneId .pannel-imginfo").bind('click', function() {
		var flag = $(this).find("p>img").eq(1).is(':visible');
		var ind=$(this).index()-1;
		var data,set_no;
		if(roomId==3){
			data=guestData[roomId].washroom[wash]
		}else{
			data=guestData[roomId].washroom
		}
		set_no=data[ind]
		var set=getSetPa(300,set_no);
		setupsCommand(set.equip_no,set.main_instruction,set.minor_instruction,set.value,$(this))

//		}
		$(this).siblings(".pannel-imginfo").each(function(){
			$(this).find("p>img").eq(0).show();
			$(this).find("p>img").eq(1).hide();
			$(this).find('span').css({
				color: "rgb(102,102,102)"
			});
		})
	});



	//照明回路场景按钮点击事件
	$("#lightLoopSceneId ").delegate('.pannel-imginfo','click', function() {
		var flag = $(this).find("p>img").eq(1).is(':visible');
		var ind=$(this).index()-1;
		var data=guestData[roomId].lightloop[ind];
		var set;
//		var equip_no,main_instruction,minor_instruction,value;
		if(flag) {
			$(this).find("p>img").eq(0).show();
			$(this).find("p>img").eq(1).hide();
			$(this).find('span').css({
				color: "rgb(102,102,102)"
			});
			set=getSetPa(300,data[1])


		} else {
			$(this).find("p>img").eq(0).hide();
			$(this).find("p>img").eq(1).show();
			$(this).find('span').css({
				color: "rgb(107,148,249)"
			});
			set=getSetPa(300,data[0])

		}

		setupsCommand(set.equip_no,set.main_instruction,set.minor_instruction,set.value)
	});

	//空调场景按钮点击事件
	$("#ktControl .pannel-title li").each(function(){
		$(this).click(function(){
			var ind=$(this).index();
			ktId=ind;
			loadCheck(roomId)
//			var Number=getStatusYc()

			$(this).addClass("check").siblings().removeClass("check")

		})
		
	})
	
	$("#airSceneId li").bind('click', function() {
		var flag = $(this).find("img").eq(1).is(':visible');
		var that = $(this);
		var index = that.index();
		var data,set;
		if(roomId==3){
			data=guestData[roomId].ktcontrol[kt][index];
			
		}else{
			data=guestData[roomId].ktcontrol[index];
		}
		if(flag) {		
			if(index == 0){
				set=getSetPa(300,data[1])
				setupsCommand(set.equip_no,set.main_instruction,set.minor_instruction,set.value)
			}
			$(this).find("img").eq(0).show();
			$(this).find("img").eq(1).hide();
		} else {
			if(index == 0){
				set=getSetPa(300,data[0])
				setupsCommand(set.equip_no,set.main_instruction,set.minor_instruction,set.value)
			}
			$(this).find("img").eq(0).hide();
			$(this).find("img").eq(1).show();
		}
//		

		if(index != 0) {
			setTimeout(function() {
				that.find("img").eq(0).show();
				that.find("img").eq(1).hide();
			}, 300)
		}
		var temperatureNum = $("#airTemperatureId").html();
		var airModelTitle = $("#airModelTitleId span").html();
		temperatureNum = parseInt(temperatureNum);
		if(index == 1) {
			$("#airTemperatureId").html(temperatureNum + 1);
			set=getSetPa(300,data);
			var val=$("#airTemperatureId").html();
			setupsCommand(set.equip_no,set.main_instruction,set.minor_instruction,val)

		}
		if(index == 2) {
			$("#airTemperatureId").html(temperatureNum - 1);
			set=getSetPa(300,data);
			var val=$("#airTemperatureId").html();
			setupsCommand(set.equip_no,set.main_instruction,set.minor_instruction,val)
		}
		if(index == 3) {
			var airModelIconNum = 0;
			$("#windchoose li").each(function(i) {
				var color = $(this).css("color");
				if(color == "rgb(107, 148, 249)") {
					airModelIconNum = i;
				}
			});
			$("#windchoose li").each(function(i) {
				$(this).css({
					color: "rgb(204, 204, 204)"
				})
			});
			if(airModelIconNum == 4) {
				airModelIconNum = 0;
			}
			$("#windchoose li").eq(airModelIconNum + 1).css({
				color: "rgb(107, 148, 249)"
			});

			set=getSetPa(300,data[airModelIconNum])
			setupsCommand(set.equip_no,set.main_instruction,set.minor_instruction,set.value)
			
		}
		if(index == 4) {
			var airModelIconNum = 0;
			$("#airModelContentId li").each(function(i) {
				var color = $(this).css("color");
				if(color == "rgb(107, 148, 249)") {
					airModelIconNum = i;
				}
			});
			$("#airModelContentId li").each(function(i) {
				$(this).css({
					color: "rgb(204, 204, 204)"
				})
			});
			if(airModelIconNum == 4) {
				airModelIconNum = 0;
			}
			$("#airModelContentId li").eq(airModelIconNum + 1).css({
				color: "rgb(107, 148, 249)"
			});
			set=getSetPa(300,data[airModelIconNum])
			setupsCommand(set.equip_no,set.main_instruction,set.minor_instruction,set.value)
			
		}
	});

	//窗帘场景按钮点击事件
	$("#curtainSceneId .pannel-imginfo").bind('click', function() {

		if(curtId==-1){
			
			return
		}
		var data=guestData[roomId].curtainControl[curtId];
		var ind=$(this).index();
		var res=data[ind]
		var flag = $(this).find("p>img").eq(1).is(':visible');
		set=getSetPa(300,res)
		setupsCommand(set.equip_no,set.main_instruction,set.minor_instruction,set.value,$(this))

		$(this).siblings(".pannel-imginfo").each(function(){
			$(this).find("p>img").eq(0).show();
			$(this).find("p>img").eq(1).hide();
			$(this).find('span').css({
				color: "rgb(102,102,102)"
			});
		})
		
	});
	
	
	
	

//	音乐上下首控制按钮点击事件
	$("#musicSceneId .pannel-imginfo").bind('click', function() {
		var flag = $(this).find("img").eq(1).is(':visible');
		var that = $(this);
		var ind=that.index();
		var equip_no,main_instruction,minor_instruction,value;
		var data=guestData[roomId].music;
		var res=data[ind],res;

		if(flag) {
			$(this).find("img").eq(0).show();
			$(this).find("img").eq(1).hide();
			if(ind==1){
				set=getSetPa(300,res[1])
				setupsCommand(set.equip_no,set.main_instruction,set.minor_instruction,set.value)
			}
		} else {
			$(this).find("img").eq(0).hide();
			$(this).find("img").eq(1).show();
			if(ind==1){
				set=getSetPa(300,res[0])
				setupsCommand(set.equip_no,set.main_instruction,set.minor_instruction,set.value)
			}
		}

		if(ind!=1){
			setTimeout(function() {
				that.find("img").eq(0).show();
				that.find("img").eq(1).hide();
			}, 300)
		}
	
		if(ind==0){
			set=getSetPa(300,res[0])
			setupsCommand(set.equip_no,set.main_instruction,set.minor_instruction,set.value)
		}
		if(ind==2){
			set=getSetPa(300,res[0])
			setupsCommand(set.equip_no,set.main_instruction,set.minor_instruction,set.value)
		}
		if(ind==3){
			
			var value=parseInt($("#musicVal").attr("num"))-1;
			$("#musicVal").attr("num",value);

			set=getSetPa(300,res)
			setupsCommand(set.equip_no,set.main_instruction,set.minor_instruction,value)
		}
		if(ind==4){
			
			var value=parseInt($("#musicVal").attr("num"))+1;
			$("#musicVal").attr("num",value);
			set=getSetPa(300,res)
			setupsCommand(set.equip_no,set.main_instruction,set.minor_instruction,value)
		}
		
		
	});
	
	
	$("#curtainPickerId").click(function(){
		$(this).find("ul").toggle()
	})
	$("#curtainPickerId ul").delegate("li","click",function(){
		var ind=$(this).index();
		if(curtId!=ind){
			curtId=ind;
			$("#curtainPickerId span").text($(this).text())
			$("#curtainSceneId .pannel-imginfo").each(function(){
				$(this).find("p>img").eq(0).show();
				$(this).find("p>img").eq(1).hide();
				$(this).find('span').css({
					color: "rgb(102,102,102)"
				});
			})
		}
		
	})
	

	//窗帘下拉框点击效果
	$(".curtain-picker-box i").bind('click', function() {
		pickerBgMusic.open();
	});
	loadCheck(0)
}

function setLightStatus($dom,num){
	if(num!=-1){
		$dom.eq(num).find("span").css({color:"rgb(107,148,249)" });
		$dom.eq(num).find("p>img").eq(0).hide();
		$dom.eq(num).find("p>img").eq(1).show();
	}
		
}
function removeClawa(){
	$("#toiletSceneId .pannel-imginfo").each(function(){
		$(this).find("p>img").eq(0).show();
		$(this).find("p>img").eq(1).hide();
		$(this).find('span').css({
			color: "rgb(102,102,102)"
		});
	})
}
function removeClacj(){
		$("#roomSceneId .pannel-imginfo").each(function(){
			$(this).find("p>img").eq(0).show();
			$(this).find("p>img").eq(1).hide();
			$(this).find('span').css({
				color: "rgb(102,102,102)"
			});
		})
}

function setupsCommand(equip_no,main_instruction,minor_instruction,value,dom){
	$.ajax({
		type:"POST",
		url:"/GWService.asmx/SetupsCommand",
		async:true,
		data:{
			equip_no:equip_no,
			main_instruction:main_instruction,
			minor_instruction:minor_instruction,
			value:value,
			user_name:window.localStorage.userName
		},
		success:function(res){
			var txt=$(res).find("string").text()
			if(txt=="true"){
				alertMsgSuccess.open();
				$(dom).find("img").eq(1).show();
				$(dom).find("img").eq(0).hide();
				$(dom).find("span").css({color: "rgb(107,148,249)"})
			}else{
				alertMsgError.open();
			}
			
		}
	});
}

function getStatusYx(){

	var hasDwon=[];
	$.ajax({
	    type: "POST",
	    url: "/GWService.asmx/GetRealTimeData",
		data:{
			equip_no:'300',
			table_name:'yxp'
		},
	    timeout: 5000,
		async:false,
	    success: function (data) {
	        $(data).find('string').each(function() {
				var dat=JSON.parse($(this).text())

				for(var i=0;i<dat.length;i++){

					if(dat[i].m_YXState=="有人"||dat[i].m_YXState=="是"||dat[i].m_YXState=="灯开"||dat[i].m_YXState=="开启"){
						hasDwon.push(dat[i].m_iYXNo)
					}
				}

				
				

				
	        });
	
	    }
	
	});
	return hasDwon;
	
}
var setNum=[
	{
		'kt':[14],
		'music':[15]
	},
	{
		'kt':[29],
		'music':[30]
	},
	{
		'kt':[44],
		'music':[45]
	},
	{
		'kt_0':[65],
		'kt_1':[66],
		'music':[67]
	},
	{
		'kt':[79],
		'music':[80]
	},
]

function getStatusYc(){
	var Number;
	 
	$.ajax({
	    type: "POST",
	    url: "/GWService.asmx/GetRealTimeData",
		data:{
			equip_no:'300',
			table_name:'ycp'
		},
	    timeout: 5000,
		async:false,
	    success: function (data) {
	        $(data).find('string').each(function() {
	        	
				var dat=JSON.parse($(this).text())
				var voice=[],wd=[],wd2=[];
				for(var i=0;i<dat.length;i++){
					if(dat[i].m_iYCNo==15){
						voice[0]=dat[i].m_YCValue
					}
					if(dat[i].m_iYCNo==30){
						voice[1]=dat[i].m_YCValue
					}
					if(dat[i].m_iYCNo==45){
						voice[2]=dat[i].m_YCValue
					}
					if(dat[i].m_iYCNo==67){
						voice[3]=dat[i].m_YCValue
					}
					if(dat[i].m_iYCNo==80){
						voice[4]=dat[i].m_YCValue
					}
					
					if(dat[i].m_iYCNo==14){
						wd[0]=dat[i].m_YCValue
					}
					if(dat[i].m_iYCNo==29){
						wd[1]=dat[i].m_YCValue
					}
					if(dat[i].m_iYCNo==44){
						wd[2]=dat[i].m_YCValue
					}
					if(dat[i].m_iYCNo==65){
						wd[3]=dat[i].m_YCValue
					}
					if(dat[i].m_iYCNo==66){
						wd2[0]=dat[i].m_YCValue
					}
					if(dat[i].m_iYCNo==79){
						wd[4]=dat[i].m_YCValue
					}
				}
				Number={
					"vio":voice,
					"wd":wd,
					"wd2":wd2
				}
				
	        });
	
	    }
	
	});
	return Number;
}
function removeClakt(){
		$("#airSceneId li").each(function(){
			$(this).find("img").eq(0).show();
			$(this).find("img").eq(1).hide();
			
		})
		$("#windchoose li").each(function(){
			$(this).css({
				color: "#ccc"
			});
		})
		$("#airModelContentId li").each(function(){
			$(this).css({
				color: "#ccc"
			});
		})
		
	}

function getItemIndex(array1,array2){
	//array1哪些项需要判断，array2是否在这个数组中
    //连接两数组中的元素
    var ind=-1;
    
    for(var i=0;i<array1.length;i++){
    	if(array2.indexOf(array1[i])!=-1){
    		ind=array2.indexOf(array1[i])
    		break;
    	}
    }
    return ind;
}
function getSetPa(equip,set_no){
	
	var setParam={
		"equip_no":"",
		"main_instruction":"",
		"minor_instruction":"",
		"value":"",
		"set_type":""
	}
	$.ajax({
	    type: "POST",
	    url: "/GWService.asmx/GetSetParmItem",
	    timeout: 5000,
	    async:false,
	    data: {        
	        equip_no: equip,        
	        set_no: set_no
	    },
	    success: function (data) {

	        $(data).find('string').each(function() {
	            var dat=JSON.parse($(this).text())
	            setParam.equip_no=dat[0].equip_no;
	            setParam.main_instruction=dat[0].main_instruction;
	            setParam.minor_instruction=dat[0].minor_instruction;
	            setParam.value=dat[0].value;
	            setParam.set_type=dat[0].set_type;
	            
	        });
	    }
	    
	});

	return setParam;
}
function loadCheck(ind){
	var hasDown=getStatusYx();
	var Number=getStatusYc();

	$("#roomSceneId .pannel-imginfo").each(function(){
		$(this).find("p img").eq(1).hide();
		$(this).find("p img").eq(0).show();
		$(this).find("span").css({"color":"rgb(102,102,102)"});
	})
	$("#toiletSceneId .pannel-imginfo").each(function(){
		$(this).find("p img").eq(1).hide();
		$(this).find("p img").eq(0).show();
		$(this).find("span").css({"color":"rgb(102,102,102)"});
	})
	$("#lightLoopSceneId .pannel-imginfo").each(function(){
		$(this).find("p img").eq(1).hide();
		$(this).find("p img").eq(0).show();
		$(this).find("span").css({"color":"rgb(102,102,102)"});
	})
	$("#airSceneId li").each(function(){
		$(this).find("img").eq(1).hide();
		$(this).find("img").eq(0).show();
	})
	
	$("#musicSceneId .pannel-imginfo").each(function(){
		$(this).find("img").eq(1).hide();
		$(this).find("img").eq(0).show();
	})
	$("#windchoose li").each(function(){
		$(this).css({"color":"#cccccc"});
	})
	$("#airModelContentId li").each(function(){
		$(this).css({"color":"#cccccc"});
	})
	


		//客房1




//hasDown=[1,3,12,20,25,27,35,36,43,51,55,60,81,84,88,96,89,105,107,114,120,127,138,140,144,147,149,152,155,158,172,179,184,187,191,193]
	var check=guestEquip[ind];

	if(ind==0){
//	hasDown=[1,4,12,18,19,25,27];
		$("#airTemperatureId").text(Number.wd[0])
		$("#musicVal").attr("num",Number.vio[0])
		var bed=getItemIndex(hasDown,check.bedroom);
		var wash=getItemIndex(hasDown,check.washroom);
		var ligh_0=getItemIndex(hasDown,check.lightloop_0);
		var kt=getItemIndex(hasDown,check.ktcontrol);
		var fs=getItemIndex(hasDown,check.fs);
		var ms=getItemIndex(hasDown,check.ms);
		var music=getItemIndex(hasDown,check.music);

		if(bed!=-1){
			$("#roomSceneId").find(".pannel-imginfo").eq(bed).find("p img").eq(0).hide();
			$("#roomSceneId").find(".pannel-imginfo").eq(bed).find("p img").eq(1).show();
			$("#roomSceneId").find(".pannel-imginfo").eq(bed).find("span").css({"color":"rgb(107, 148, 249)"});
		}
		
		if(wash!=-1){
			$("#toiletSceneId").find(".pannel-imginfo").eq(wash).find("p img").eq(0).hide();
			$("#toiletSceneId").find(".pannel-imginfo").eq(wash).find("p img").eq(1).show();
			$("#toiletSceneId").find(".pannel-imginfo").eq(wash).find("span").css({"color":"rgb(107, 148, 249)"});
		
		}
		
		
		if(ligh_0!=-1){
			$("#lightLoopSceneId").find(".pannel-imginfo").eq(0).find("p img").eq(0).hide();
			$("#lightLoopSceneId").find(".pannel-imginfo").eq(0).find("p img").eq(1).show();
			$("#lightLoopSceneId").find(".pannel-imginfo").eq(0).find("span").css({"color":"rgb(107, 148, 249)"});
		}
		
		if(kt!=-1){
			$("#airSceneId").find("li").eq(0).find("img").eq(0).hide();
			$("#airSceneId").find("li").eq(0).find("img").eq(1).show();
			$("#windchoose").find("li").eq(fs+1).css({"color":"rgb(107, 148, 249)"});
			$("#airModelContentId").find("li").eq(ms+1).css({"color":"rgb(107, 148, 249)"});
		}
		if(music!=-1){
			$("#musicSceneId").find(".pannel-imginfo").eq(1).find("img").eq(0).hide();
			$("#musicSceneId").find(".pannel-imginfo").eq(1).find("img").eq(1).show();
		}
		
		
		
		
		
	}else if(ind==1){
		$("#airTemperatureId").text(Number.wd[1])
		$("#musicVal").attr("num",Number.vio[1])
		var bed=getItemIndex(hasDown,check.bedroom);
		var wash=getItemIndex(hasDown,check.washroom);
		var ligh_0=getItemIndex(hasDown,check.lightloop_0);
		var ligh_1=getItemIndex(hasDown,check.lightloop_1);
		var kt=getItemIndex(hasDown,check.ktcontrol);
		var fs=getItemIndex(hasDown,check.fs);
		var ms=getItemIndex(hasDown,check.ms);
		var music=getItemIndex(hasDown,check.music);
		
		if(bed!=-1){
			$("#roomSceneId").find(".pannel-imginfo").eq(bed).find("p img").eq(0).hide();
			$("#roomSceneId").find(".pannel-imginfo").eq(bed).find("p img").eq(1).show();
			$("#roomSceneId").find(".pannel-imginfo").eq(bed).find("span").css({"color":"rgb(107, 148, 249)"});
		}
		
		if(wash!=-1){
			$("#toiletSceneId").find(".pannel-imginfo").eq(wash).find("p img").eq(0).hide();
			$("#toiletSceneId").find(".pannel-imginfo").eq(wash).find("p img").eq(1).show();
			$("#toiletSceneId").find(".pannel-imginfo").eq(wash).find("span").css({"color":"rgb(107, 148, 249)"});
		
		}
		if(ligh_0!=-1){
			$("#lightLoopSceneId").find(".pannel-imginfo").eq(0).find("p img").eq(0).hide();
			$("#lightLoopSceneId").find(".pannel-imginfo").eq(0).find("p img").eq(1).show();
			$("#lightLoopSceneId").find(".pannel-imginfo").eq(0).find("span").css({"color":"rgb(107, 148, 249)"});
		}
		if(ligh_1!=-1){
			$("#lightLoopSceneId").find(".pannel-imginfo").eq(1).find("p img").eq(0).hide();
			$("#lightLoopSceneId").find(".pannel-imginfo").eq(1).find("p img").eq(1).show();
			$("#lightLoopSceneId").find(".pannel-imginfo").eq(1).find("span").css({"color":"rgb(107, 148, 249)"});
		}
		
		if(kt!=-1){
			$("#airSceneId").find("li").eq(0).find("img").eq(0).hide();
			$("#airSceneId").find("li").eq(0).find("img").eq(1).show();
			$("#windchoose").find("li").eq(fs+1).css({"color":"rgb(107, 148, 249)"});
			$("#airModelContentId").find("li").eq(ms+1).css({"color":"rgb(107, 148, 249)"});
		}
		if(music!=-1){
			$("#musicSceneId").find(".pannel-imginfo").eq(1).find("img").eq(0).hide();
			$("#musicSceneId").find(".pannel-imginfo").eq(1).find("img").eq(1).show();
		}
	}else if(ind==2){
		$("#airTemperatureId").text(Number.wd[2])
		$("#musicVal").attr("num",Number.vio[2])
		
		var bed=getItemIndex(hasDown,check.bedroom);
		var wash=getItemIndex(hasDown,check.washroom);
		var ligh_0=getItemIndex(hasDown,check.lightloop_0);
		var ligh_1=getItemIndex(hasDown,check.lightloop_1);
		var kt=getItemIndex(hasDown,check.ktcontrol);
		var fs=getItemIndex(hasDown,check.fs);
		var ms=getItemIndex(hasDown,check.ms);
		var music=getItemIndex(hasDown,check.music);
		
		if(bed!=-1){
			$("#roomSceneId").find(".pannel-imginfo").eq(bed).find("p img").eq(0).hide();
			$("#roomSceneId").find(".pannel-imginfo").eq(bed).find("p img").eq(1).show();
			$("#roomSceneId").find(".pannel-imginfo").eq(bed).find("span").css({"color":"rgb(107, 148, 249)"});
		}
		
		if(wash!=-1){
			$("#toiletSceneId").find(".pannel-imginfo").eq(wash).find("p img").eq(0).hide();
			$("#toiletSceneId").find(".pannel-imginfo").eq(wash).find("p img").eq(1).show();
			$("#toiletSceneId").find(".pannel-imginfo").eq(wash).find("span").css({"color":"rgb(107, 148, 249)"});
		
		}
		if(ligh_0!=-1){
			$("#lightLoopSceneId").find(".pannel-imginfo").eq(0).find("p img").eq(0).hide();
			$("#lightLoopSceneId").find(".pannel-imginfo").eq(0).find("p img").eq(1).show();
			$("#lightLoopSceneId").find(".pannel-imginfo").eq(0).find("span").css({"color":"rgb(107, 148, 249)"});
		}
		if(ligh_1!=-1){
			$("#lightLoopSceneId").find(".pannel-imginfo").eq(1).find("p img").eq(0).hide();
			$("#lightLoopSceneId").find(".pannel-imginfo").eq(1).find("p img").eq(1).show();
			$("#lightLoopSceneId").find(".pannel-imginfo").eq(1).find("span").css({"color":"rgb(107, 148, 249)"});
		}
		
		if(kt!=-1){
			$("#airSceneId").find("li").eq(0).find("img").eq(0).hide();
			$("#airSceneId").find("li").eq(0).find("img").eq(1).show();
			$("#windchoose").find("li").eq(fs+1).css({"color":"rgb(107, 148, 249)"});
			$("#airModelContentId").find("li").eq(ms+1).css({"color":"rgb(107, 148, 249)"});
		}
		if(music!=-1){
			$("#musicSceneId").find(".pannel-imginfo").eq(1).find("img").eq(0).hide();
			$("#musicSceneId").find(".pannel-imginfo").eq(1).find("img").eq(1).show();
		}
	}else if(ind==3){
		$("#musicVal").attr("num",Number.vio[3])
		var bed,wash,kt,fs,ms;
		var ligh_0=getItemIndex(hasDown,check.lightloop_0);
		var ligh_1=getItemIndex(hasDown,check.lightloop_1);
		var ligh_2=getItemIndex(hasDown,check.lightloop_2);
		var music=getItemIndex(hasDown,check.music);
		
		if(bedId==0){
			bed=getItemIndex(hasDown,check.bedroom);
		}else{
			bed=getItemIndex(hasDown,check.uproom);
		}
		if(washId==0){
			wash=getItemIndex(hasDown,check.washroom)
		}else{
			wash=getItemIndex(hasDown,check.upwashroom)
		}
		if(ktId==0){
			$("#airTemperatureId").text(Number.wd[3])
			kt=getItemIndex(hasDown,check.ktcontrol)
			fs=getItemIndex(hasDown,check.fs);
			ms=getItemIndex(hasDown,check.ms);
		}else{
			$("#airTemperatureId").text(Number.wd2)
			kt=getItemIndex(hasDown,check.upktcontrol)
			fs=getItemIndex(hasDown,check.upfs);
			ms=getItemIndex(hasDown,check.upms);
		}
		if(bed!=-1){
			$("#roomSceneId").find(".pannel-imginfo").eq(bed).find("p img").eq(0).hide();
			$("#roomSceneId").find(".pannel-imginfo").eq(bed).find("p img").eq(1).show();
			$("#roomSceneId").find(".pannel-imginfo").eq(bed).find("span").css({"color":"rgb(107, 148, 249)"});
		}
		
		if(wash!=-1){
			$("#toiletSceneId").find(".pannel-imginfo").eq(wash).find("p img").eq(0).hide();
			$("#toiletSceneId").find(".pannel-imginfo").eq(wash).find("p img").eq(1).show();
			$("#toiletSceneId").find(".pannel-imginfo").eq(wash).find("span").css({"color":"rgb(107, 148, 249)"});
		
		}
		if(ligh_0!=-1){
			$("#lightLoopSceneId").find(".pannel-imginfo").eq(0).find("p img").eq(0).hide();
			$("#lightLoopSceneId").find(".pannel-imginfo").eq(0).find("p img").eq(1).show();
			$("#lightLoopSceneId").find(".pannel-imginfo").eq(0).find("span").css({"color":"rgb(107, 148, 249)"});
		}
		if(ligh_1!=-1){
			$("#lightLoopSceneId").find(".pannel-imginfo").eq(1).find("p img").eq(0).hide();
			$("#lightLoopSceneId").find(".pannel-imginfo").eq(1).find("p img").eq(1).show();
			$("#lightLoopSceneId").find(".pannel-imginfo").eq(1).find("span").css({"color":"rgb(107, 148, 249)"});
		}
		if(ligh_2!=-1){
			$("#lightLoopSceneId").find(".pannel-imginfo").eq(1).find("p img").eq(0).hide();
			$("#lightLoopSceneId").find(".pannel-imginfo").eq(1).find("p img").eq(1).show();
			$("#lightLoopSceneId").find(".pannel-imginfo").eq(1).find("span").css({"color":"rgb(107, 148, 249)"});
		}
		
		if(kt!=-1){
			$("#airSceneId").find("li").eq(0).find("img").eq(0).hide();
			$("#airSceneId").find("li").eq(0).find("img").eq(1).show();
			$("#windchoose").find("li").eq(fs+1).css({"color":"rgb(107, 148, 249)"});
			$("#airModelContentId").find("li").eq(ms+1).css({"color":"rgb(107, 148, 249)"});
		}
		if(music!=-1){
			$("#musicSceneId").find(".pannel-imginfo").eq(1).find("img").eq(0).hide();
			$("#musicSceneId").find(".pannel-imginfo").eq(1).find("img").eq(1).show();
		}
		if(music!=-1){
			$("#musicSceneId").find(".pannel-imginfo").eq(1).find("img").eq(0).hide();
			$("#musicSceneId").find(".pannel-imginfo").eq(1).find("img").eq(1).show();
		}
	}else if(ind==4){
		$("#airTemperatureId").text(Number.wd[4])
		$("#musicVal").attr("num",Number.vio[4])
		var bed=getItemIndex(hasDown,check.bedroom);
		var wash=getItemIndex(hasDown,check.washroom);
		var ligh_0=getItemIndex(hasDown,check.lightloop_0);
		var kt=getItemIndex(hasDown,check.ktcontrol);
		var fs=getItemIndex(hasDown,check.fs);
		var ms=getItemIndex(hasDown,check.ms);
		var music=getItemIndex(hasDown,check.music);
		
		if(bed!=-1){
			$("#roomSceneId").find(".pannel-imginfo").eq(bed).find("p img").eq(0).hide();
			$("#roomSceneId").find(".pannel-imginfo").eq(bed).find("p img").eq(1).show();
			$("#roomSceneId").find(".pannel-imginfo").eq(bed).find("span").css({"color":"rgb(107, 148, 249)"});
		}
		
		if(wash!=-1){
			$("#toiletSceneId").find(".pannel-imginfo").eq(wash).find("p img").eq(0).hide();
			$("#toiletSceneId").find(".pannel-imginfo").eq(wash).find("p img").eq(1).show();
			$("#toiletSceneId").find(".pannel-imginfo").eq(wash).find("span").css({"color":"rgb(107, 148, 249)"});
		
		}
		if(ligh_0!=-1){
			$("#lightLoopSceneId").find(".pannel-imginfo").eq(0).find("p img").eq(0).hide();
			$("#lightLoopSceneId").find(".pannel-imginfo").eq(0).find("p img").eq(1).show();
			$("#lightLoopSceneId").find(".pannel-imginfo").eq(0).find("span").css({"color":"rgb(107, 148, 249)"});
		}
		
		if(kt!=-1){
			$("#airSceneId").find("li").eq(0).find("img").eq(0).hide();
			$("#airSceneId").find("li").eq(0).find("img").eq(1).show();
			$("#windchoose").find("li").eq(fs+1).css({"color":"rgb(107, 148, 249)"});
			$("#airModelContentId").find("li").eq(ms+1).css({"color":"rgb(107, 148, 249)"});
		}
		if(music!=-1){
			$("#musicSceneId").find(".pannel-imginfo").eq(1).find("img").eq(0).hide();
			$("#musicSceneId").find(".pannel-imginfo").eq(1).find("img").eq(1).show();
		}
	}
}

