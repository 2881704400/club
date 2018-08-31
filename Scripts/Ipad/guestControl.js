function guestControl() {
	toolbarActiveImg('guestControlTool');
	
	//左侧菜单栏切换效果
	$(".left-pannel ul li").bind('click', function() {
		$(".left-pannel ul li").each(function() {
			$(this).removeClass("pannel-down");
		})
		$(this).addClass("pannel-down");
	});
	
	//右侧内容栏图片点击效果
	$(".half-pannel .pannel-imginfo").bind('click', function() {
		var flag = $(this).find("p>img").eq(1).is(':visible');
		if(flag) {
			$(this).find("p>img").eq(0).show();
			$(this).find("p>img").eq(1).hide();
		} else {
			$(this).find("p>img").eq(0).hide();
			$(this).find("p>img").eq(1).show();
		}
		var that=$(this);
		var index1=that.parent().parent().index();
		var index2=that.parent().index();
		var index3=that.index();console.log(index1)
		if(index1==0&&index2==1){
			if(index3==2||index3==3){
				setTimeout(function(){
					that.find("p>img").eq(0).show();
					that.find("p>img").eq(1).hide();
				},300)
			}
		}
		
		if(index1==1&&index2==1){
			if(index3==1||index3==3){
				setTimeout(function(){
					that.find("p>img").eq(0).show();
					that.find("p>img").eq(1).hide();
				},300)
			}
		}
	})
}