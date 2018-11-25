function curtainSys(){
	toolbarActiveImg('curtainControlTool');
	$('.accordion-item').on('accordion:open', function () {
		$(this).find(".item-media i").removeClass("icon-sanjiao").addClass("icon-sanjiao-copy-copy");
		$(this).css({background:"rgb(220,220,220)"})
	});
	$('.accordion-item').on('accordion:close', function () {
		$(this).find(".item-media i").removeClass("icon-sanjiao-copy-copy").addClass("icon-sanjiao");
		$(this).css({background:"#fff"})
	});
	$(".pannel-imginfo").each(function(){
		$(this).find("img").eq(1).hide()
	})
	
	$("#curtain .imgList .pannel-imginfo").click(function(){
		$(this).find("img").eq(1).show();
		$(this).find("img").eq(0).hide();
		$(this).siblings(".pannel-imginfo").each(function(){
			$(this).find("img").eq(0).show();
			$(this).find("img").eq(1).hide();
		});

	})
}
