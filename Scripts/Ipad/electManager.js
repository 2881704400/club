
var equipsData={}

function electManager(){
	toolbarActiveImg('electManagerTool');
	$(".eleOneTap").find("img").eq(1).hide();
	$(".eleTwoTap").find("img").eq(1).hide();
	
	$(".long-pannel").eq(0).find('ul').eq(1).find('li').eq(0).find("img").eq(0).hide();
	$(".long-pannel").eq(0).find('ul').eq(1).find('li').eq(0).find("img").eq(1).show();
	$(".long-pannel").eq(0).find('ul').eq(1).find('li').eq(6).find("img").eq(0).hide();
	$(".long-pannel").eq(0).find('ul').eq(1).find('li').eq(6).find("img").eq(1).show();

	$(".eleOne").find("li").eq(0).click(function(){
		var flag = $(this).find("img").eq(1).is(':visible');
		var set;
		if(flag) {
			set=getSetParam(600,162);
			$(this).find("img").eq(0).show();
			$(this).find("img").eq(1).hide();
		} else {
			set=getSetParam(600,161);
			$(this).find("img").eq(0).hide();
			$(this).find("img").eq(1).show();
		}
		setupsCom(set.equip_no,set.main_instruction,set.minor_instruction,set.value);
		
	})
	$(".eleTwo").find("li").eq(0).click(function(){
		var flag = $(this).find("img").eq(1).is(':visible');
		if(flag) {
			set=getSetParam(600,156);
			$(this).find("img").eq(0).show();
			$(this).find("img").eq(1).hide();
		} else {
			set=getSetParam(600,155);
			$(this).find("img").eq(0).hide();
			$(this).find("img").eq(1).show();
		}
		setupsCom(set.equip_no,set.main_instruction,set.minor_instruction,set.value);
	})
	
	//底部第三块 启停按钮切换
	var bengQt=[
//		1是启2是停
		[139,140],[143,144],[149,150]
	]
	$(".right-three-btn").bind('click', function(e) {
		var flag = $(this).find("img").eq(1).is(':visible');
		var ind=$(this).parent().index();
		var set;
		var dat=bengQt[ind];
		if(flag) {
			$(this).find("img").eq(0).show();
			$(this).find("img").eq(1).hide();
			$(this).parent().find('p').eq(1).find("img").eq(0).show();
			$(this).parent().find('p').eq(1).find("img").eq(1).hide();
			set=getSetParam(600,dat[1]);
			setupsCom(set.equip_no,set.main_instruction,set.minor_instruction,set.value,'');
//			console.log("guan")
		} else {
			set=getSetParam(600,dat[0]);
			setupsCom(set.equip_no,set.main_instruction,set.minor_instruction,set.value,'');
			$(this).find("img").eq(0).hide();
			$(this).find("img").eq(1).show();
			$(this).parent().find('p').eq(1).find("img").eq(0).hide();
			$(this).parent().find('p').eq(1).find("img").eq(1).show();
		}
	});

	 
	getStatusYc()
	getStatusYx()
	getStatusYxBeng()
}
function changeVal(dom,id){
	$(dom).parents(".edict").siblings(".res").text($(dom).val()+"%")
	var val=$(dom).val();
	var set
	if(id==0){
		set=getSetParam(600,163)
		setupsCom(set.equip_no,set.main_instruction,set.minor_instruction,val,'')
	}else{
		set=getSetParam(600,157)
		setupsCom(set.equip_no,set.main_instruction,set.minor_instruction,val,'')
	}

}
function getStatusYx(){
	$.ajax({
	    type: "POST",
	    url: "/GWService.asmx/GetRealTimeData",
		data:{
			equip_no:'600',
			table_name:'yxp'
		},
	    timeout: 5000,
		async:false,
	    success: function (data) {
	        $(data).find('string').each(function() {
				var dat=JSON.parse($(this).text())
//				console.log(dat)
				for(var i=0;i<dat.length;i++){
					if(dat[i].m_YXState=="正常"&&dat[i].m_iYXNo==68){
						$(".eleOne").find("li").eq(0).find("img").eq(1).show();
						$(".eleOne").find("li").eq(0).find("img").eq(0).hide();
					}else if(dat[i].m_YXState!="正常"||dat[i].m_iYXNo==68){
						$(".eleOne").find("li").eq(0).find("img").eq(0).show();
						$(".eleOne").find("li").eq(0).find("img").eq(1).hide();
					}
					if(dat[i].m_YXState=="正常"&&dat[i].m_iYXNo==85){
						$(".eleTwo").find("li").eq(0).find("img").eq(1).show();
						$(".eleTwo").find("li").eq(0).find("img").eq(0).hide();
					}else if(dat[i].m_YXState!="正常"||dat[i].m_iYXNo==85){
						$(".eleTwo").find("li").eq(0).find("img").eq(0).show();
						$(".eleTwo").find("li").eq(0).find("img").eq(1).hide();
					}
					
					
				}
				
	        });
	
	    }
	
	});
}
function getStatusYc(){
	$.ajax({
	    type: "POST",
	    url: "/GWService.asmx/GetRealTimeData",
		data:{
			equip_no:'600',
			table_name:'ycp'
		},
	    timeout: 5000,
		async:false,
	    success: function (data) {
	        $(data).find('string').each(function() {
				var dat=JSON.parse($(this).text())
//				console.log(dat)
				for(var i=0;i<dat.length;i++){
					var num=dat[i].m_iYCNo;
					switch (num)
					{
						case 44:
							$(".eleOne").find("li").eq(3).text(dat[i].m_YCValue+dat[i].m_Unit)
						break;
						case 45:
							$(".eleOne").find("li").eq(4).text(dat[i].m_YCValue+dat[i].m_Unit)
						break;
						case 46:
							$(".eleOne").find("li").eq(5).text(dat[i].m_YCValue+dat[i].m_Unit)
							$(".eleOne").find("li").eq(6).find("input").val(dat[i].m_YCValue)
						break;
						case 47:
							$(".eleOne").find("li").eq(1).text(dat[i].m_YCValue+dat[i].m_Unit)
						break;
						case 48:
							$(".eleOne").find("li").eq(2).text(dat[i].m_YCValue+dat[i].m_Unit)
						break;
//						1#除湿机
						case 49:
							$(".eleTwo").find("li").eq(3).text(dat[i].m_YCValue+dat[i].m_Unit)
						break;
						case 50:
							$(".eleTwo").find("li").eq(4).text(dat[i].m_YCValue+dat[i].m_Unit)
						break;
						case 51:
							$(".eleTwo").find("li").eq(8).text(dat[i].m_YCValue+dat[i].m_Unit)
						break;
						case 52:
							$(".eleTwo").find("li").eq(7).text(dat[i].m_YCValue+dat[i].m_Unit)
						break;
						case 53:
							$(".eleTwo").find("li").eq(1).text(dat[i].m_YCValue+dat[i].m_Unit)
						break;
						case 54:
							$(".eleTwo").find("li").eq(2).text(dat[i].m_YCValue+dat[i].m_Unit)
						break;
						case 55:
							$(".eleTwo").find("li").eq(5).text(dat[i].m_YCValue+dat[i].m_Unit)
							$(".eleTwo").find("li").eq(6).find("input").val(dat[i].m_YCValue)
						break;
//						2#除湿机
					}
				}
				
	        });
	
	    }
	
	});
}

function getStatusYxBeng(){
	$.ajax({
	    type: "POST",
	    url: "/GWService.asmx/GetRealTimeData",
		data:{
			equip_no:'600',
			table_name:'yxp'
		},
	    timeout: 5000,
		async:false,
	    success: function (data) {
	    	var gzArr=[],yxArr=[],autArr=[];
	        $(data).find('string').each(function() {
				var dat=JSON.parse($(this).text())
//				console.log(dat)
				for(var i=0;i<dat.length;i++){
					var num=dat[i].m_iYXNo;
					var txt=dat[i].m_YXState;
					if(txt=="报警"){
						gzArr.push(num)
					}
					if(txt=="运行"){
						yxArr.push(num)
					}
					if(txt=="自动"){
						autArr.push(num)
					}
				}
	        });
	        var gz=[81,79,77,73,71,67,88];//是否故障
			var yx=[82,80,78,72,74,68,87];//是否运行
			var botMo=[76,84,70];
			
			var botRigGz=[59,60,64];
			var botRigYx=[57,62,63];
			var botRigAut=[58,61,65];
//			底部
	        for(var i=0;i<gz.length;i++){
	        	if(gzArr.indexOf(gz[i])!=-1){
	        		if(gz[i]==67){
//	        			console.log(2)
	        			$(".eleOneTap").find("img").eq(1).show();
						$(".eleOneTap").find("img").eq(0).hide();
	        		}
	        		if(gz[i]==88){
//	        			console.log(2)
	        			$(".eleTwoTap").find("img").eq(1).show();
						$(".eleTwoTap").find("img").eq(0).hide();
	        		}
	        		$(".botLef").find("li").eq(i).find("p").eq(0).find("img").eq(0).hide();
	        		$(".botLef").find("li").eq(i).find("p").eq(0).find("img").eq(1).show();
	        	}
	        }
	        for(var i=0;i<yx.length;i++){
	        	if(yxArr.indexOf(yx[i])!=-1){
	        		$(".botLef").find("li").eq(i).find("p").eq(1).find("img").eq(0).hide();
	        		$(".botLef").find("li").eq(i).find("p").eq(1).find("img").eq(1).show();
	        	}
	        }
	        for(var i=0;i<botMo.length;i++){
	        	if(yxArr.indexOf(botMo[i])!=-1){
	        		$(".botMod").find("li").eq(i).find("p").eq(1).find("a").removeClass("stop").text("运行");
	        	}
	        }
	        
	        for(var i=0;i<botRigYx.length;i++){
	        	if(yxArr.indexOf(botRigYx[i])!=-1){
	        		$(".botRig").find("li").eq(i).find("p").eq(1).find("img").eq(0).hide();
	        		$(".botRig").find("li").eq(i).find("p").eq(1).find("img").eq(1).show();
	        		$(".botRig").find("li").eq(i).find("p").eq(2).find("img").eq(0).hide();
	        		$(".botRig").find("li").eq(i).find("p").eq(2).find("img").eq(1).show();
	        	}
	        }
	        for(var i=0;i<botRigGz.length;i++){
	        	if(gzArr.indexOf(botRigGz[i])!=-1){
	        		$(".botRig").find("li").eq(i).find("p").eq(0).find("img").eq(0).hide();
	        		$(".botRig").find("li").eq(i).find("p").eq(0).find("img").eq(1).show();
	        	}
	        }
	        
	        for(var i=0;i<botRigAut.length;i++){
	        	if(autArr.indexOf(botRigAut[i])!=-1){
	        		$(".botRig").find("li").eq(i).find("p").eq(3).find("a").addClass("auto").text("自动");
	        	}
	        }
	        
	    }
	
	});
}
function setupsCom(equip_no,main_instruction,minor_instruction,value,dom){
//	console.log(equip_no,main_instruction,minor_instruction,value,dom)
	
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
//				$(dom).find("img").eq(1).show();
//				$(dom).find("img").eq(0).hide();
//				$(dom).find("span").css({color: "rgb(107,148,249)"})
			}else{
				alertMsgError.open();
			}
			
		}
	});
}

function getSetParam(equip,set_no){
	
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
//	console.log(setParam);
	return setParam;
}
