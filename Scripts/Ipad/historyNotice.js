function historyNotice(){
	$(".left-pannel ul li").bind('click', function() {
		$(".left-pannel ul li").each(function() {
			$(this).removeClass("pannel-down");
		})
		$(this).addClass("pannel-down");

	});
}
