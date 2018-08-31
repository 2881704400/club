function noticeDetails(){
	$(".left-pannel ul li").bind('click', function() {
		$(".left-pannel ul li").each(function() {
			$(this).removeClass("pannel-down");
		})
		$(this).addClass("pannel-down");
	});
	
	$(".pannel-box a").bind('click', function() {
		$(this).css({
			backgroundColor: 'rgb(102,102,102)'
		});
		$(this).html('已确认');
	});
	
	/*var chatObject = myApp.views.main.history,urlLength = chatObject.length-1;
    var chatType = chatObject[urlLength].split("#")[1];
	if(chatType=="not"){
		$("#noticeDetailsId>div").eq(0).hide();
		$("#noticeDetailsId>div").eq(1).show();
	}else if(chatType=="already"){
		$("#noticeDetailsId>div").eq(0).hide();
		$("#noticeDetailsId>div").eq(1).show();
	}*/
}
