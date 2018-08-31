function serviceCall(){
	toolbarActiveImg('serviceCallTool');
	
	$("#pannelMainId .pannel-box a").bind('click', function() {
		$(this).css({
			backgroundColor: 'rgb(102,102,102)'
		});
		$(this).html('已确认');
		var badgeValue=$(".list-ones ul li.bg-dark").find('font span').html();
		console.log(badgeValue);
		$(".list-ones ul li.bg-dark").find('font span').html(badgeValue-1);
	});
	
	//左侧菜单栏切换效果
	$(".list-ones ul li").bind('click', function() {
		if(!$(this).hasClass('list-group-title')) {
			$(".left-pannel ul li").each(function() {
				$(this).removeClass("bg-dark");
			})
			$(this).addClass("bg-dark");
		}
	});
	
	$("#pannelMainId").scrollTop($("#pannelMainId").height());
	
	// create searchbar
	var searchbar1 = myApp.searchbar.create({
		el: '.searchbar-ones',
		searchContainer: '.list-ones',
		searchIn: '.item-title',
		on: {
			search(sb, query, previousQuery) {
				console.log(query, previousQuery);
			}
		}
	});
}

function goNoticeSet(){
	myApp.router.navigate('/noticeSet/');
}
