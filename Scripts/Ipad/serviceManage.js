function serviceManage(){
	toolbarActiveImg('serviceManageTool');
	
	$("#needConfirmNoticeId>li .swipeout-content").bind('click',function(){
		console.log(1)
		myApp.router.navigate('/noticeDetails/#not#1');
	})
}

function goNoticeSet(){
	myApp.router.navigate('/noticeSet/');
}
