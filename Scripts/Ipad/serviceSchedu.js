function serviceSchedu(){
	
	$("#needConfirmNoticeId>li .swipeout-content").bind('click',function(){
		console.log(1)
		myApp.router.navigate('/noticeDetails/#not#1');
	})
}