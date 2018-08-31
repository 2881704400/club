function electManager(){
	toolbarActiveImg('electManagerTool');
	
	$(".long-pannel").eq(0).find('ul').eq(1).find('li').eq(0).find("img").eq(0).hide();
	$(".long-pannel").eq(0).find('ul').eq(1).find('li').eq(0).find("img").eq(1).show();
	$(".long-pannel").eq(0).find('ul').eq(1).find('li').eq(6).find("img").eq(0).hide();
	$(".long-pannel").eq(0).find('ul').eq(1).find('li').eq(6).find("img").eq(1).show();
	// 运行状态/新风阀控制按钮切换效果
	$(".long-pannel ul li").bind('click', function() {
		var flag = $(this).find("img").eq(1).is(':visible');
		var index=$(this).index();
		if(flag) {
			$(this).find("img").eq(0).show();
			$(this).find("img").eq(1).hide();
			if(index==6){
				$(this).parent().find('li').eq(5).html('0%')
			}
		} else {
			$(this).find("img").eq(0).hide();
			$(this).find("img").eq(1).show();
			if(index==6){
				$(this).parent().find('li').eq(5).html('100%')
			}
		}
		
	});
	//底部第一块 运行状态按钮切换效果
	/*$(".left-box ul li").bind('click', function() {
		var flag = $(this).find("p").find('img').eq(1).is(':visible');
		if(flag) {
			$(this).find("p").eq(0).find('img').eq(0).show();
			$(this).find("p").eq(1).find('img').eq(0).show();
			$(this).find("p").eq(0).find('img').eq(1).hide();
			$(this).find("p").eq(1).find('img').eq(1).hide();
		} else {
			$(this).find("p").eq(0).find('img').eq(0).hide();
			$(this).find("p").eq(1).find('img').eq(0).hide();
			$(this).find("p").eq(0).find('img').eq(1).show();
			$(this).find("p").eq(1).find('img').eq(1).show();
		}
	});*/
	//底部第二块 运行状态按钮切换效果
	$(".center-box ul li").bind('click', function() {
		var flag = $(this).find("img").eq(1).is(':visible');
		if(flag) {
			$(this).find("img").eq(0).show();
			$(this).find("img").eq(1).hide();
		} else {
			$(this).find("img").eq(0).hide();
			$(this).find("img").eq(1).show();
		}
	});
	//底部第三块 启停按钮切换
	$(".right-three-btn").bind('click', function(e) {
		var flag = $(this).find("img").eq(1).is(':visible');
		if(flag) {
			$(this).find("img").eq(0).show();
			$(this).find("img").eq(1).hide();
			$(this).parent().find('p').eq(1).find("img").eq(0).show();
			$(this).parent().find('p').eq(1).find("img").eq(1).hide();
		} else {
			$(this).find("img").eq(0).hide();
			$(this).find("img").eq(1).show();
			$(this).parent().find('p').eq(1).find("img").eq(0).hide();
			$(this).parent().find('p').eq(1).find("img").eq(1).show();
		}
	});
	//底部第三块 手自动状态按钮切换
	$(".right-four-btn").bind('click', function(e) {
		var value = $(this).find("a").html();
		if(value=="手动") {
			$(this).find("a").html("自动");
			$(this).find("a").css({
				backgroundColor: '#DCDCDC',
				color: '#666666'
			});
		} else {
			$(this).find("a").html("手动");
			$(this).find("a").css({
				backgroundColor: '#6C93FA',
				color: '#fff'
			});
		}
	});
	//底部第三块 手自动状态按钮切换
	/*$(".right-four-btn").bind('click', function(e) {
		var flag = $(this).find("img").eq(0).is(':visible');
		if(flag) {
			$(this).find("img").eq(0).hide();
			$(this).find("img").eq(1).show();
			$(this).parent().find('p').eq(1).find("img").eq(0).hide();
			$(this).parent().find('p').eq(1).find("img").eq(1).show();
		} else {
			$(this).find("img").eq(0).show();
			$(this).find("img").eq(1).hide();
			$(this).parent().find('p').eq(1).find("img").eq(0).show();
			$(this).parent().find('p').eq(1).find("img").eq(1).hide();
		}
	});*/
}
