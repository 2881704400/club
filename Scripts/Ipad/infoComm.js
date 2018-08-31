function infoComm() {
	console.log('infoComm');
	toolbarActiveImg('infoCommTool');
	
	$('body').height($('body')[0].clientHeight);
	
	$("#chatWithOtherInfoId").bind('keyup', function(event) {
		if(event.keyCode == "13") {　　　　
			console.log(1)
			$('#chatWithOtherInfoBtnId').click();　　
		}
	});
	$("#chatWithOtherInfoBtnId").bind('click', function() {
		var content = $("#chatWithOtherInfoId").val();
		if(content != "" && content != null) {
			var str = "<p>中午 12:10</p>" +
				"		<div class='pannel-chat-info'>" +
				"			<div class='chart-person'>" +
				"				<img src='/Image/Ipad/person_img.png' />" +
				"			</div>" +
				"			<div class='chart-content'>" +
				"				" + content + "" +
				"			</div>" +
				"		</div>"
			$("#chatOtherInfoId").append(str);
			$("#chatWithOtherInfoId").val('');
			var newScrollHeight = $("#chatOtherInfoId")[0].scrollHeight + 60;
			$('#chatOtherInfoId').animate({
				scrollTop: newScrollHeight
			}, 1000);
		}
	});

	$("#chatWithOtherContactId").bind('keyup', function(event) {
		if(event.keyCode == "13") {
			console.log(1)　
			$('#chatWithOtherContactBtnId').click();　　
		}
	});
	$("#chatWithOtherContactBtnId").bind('click', function() {
		var content = $("#chatWithOtherContactId").val();
		if(content != "" && content != null) {
			var str = "<p>中午 12:10</p>" +
				"		<div class='pannel-chat-info'>" +
				"			<div class='chart-person'>" +
				"				<img src='/Image/Ipad/person_img.png' />" +
				"			</div>" +
				"			<div class='chart-content'>" +
				"				" + content + "" +
				"			</div>" +
				"		</div>"
			$("#chatOtherContactId").append(str);
			$("#chatWithOtherContactId").val('');
			var newScrollHeight = $("#chatOtherContactId")[0].scrollHeight + 60;
			$('#chatOtherContactId').animate({
				scrollTop: newScrollHeight
			}, 1000);
		}
	});

	//左侧菜单栏切换效果
	$(".list-one ul li").bind('click', function() {
		if(!$(this).hasClass('list-group-title')) {
			$(".left-pannel ul li").each(function() {
				$(this).removeClass("bg-dark");
			})
			$(this).addClass("bg-dark");
			$(".pannel-img").hide();
			$(".pannel-info-detail").show();
		}
	});

	//左侧菜单栏切换效果
	$(".list-two ul li,.list-three ul li").bind('click', function() {
		if(!$(this).hasClass('list-group-title')) {
			$(".left-pannel ul li").each(function() {
				$(this).removeClass("bg-dark");
			})
			$(this).addClass("bg-dark");
		}
	});

	$("#pannelMainId .pannel-box a").bind('click', function() {
		$(this).css({
			backgroundColor: 'rgb(102,102,102)'
		});
		$(this).html('已确认');
	});

	$(".side-nav a").bind('click', function() {
		$(".side-nav a").each(function() {
			$(this).removeClass("active");
		});
		$(this).addClass("active");
		var index = $(this).index();
		$(".pannel-container .pannel-tab").each(function() {
			$(this).hide();
		});
		$(".pannel-container .pannel-tab").eq(index).show();
		if(index == 1) {
			$(".pannel-chat").scrollTop($(".pannel-chat").height() + 60);
		}
		if(index == 2) {
			//默认滚动到页面底部
			$("#pannelMainId").scrollTop($("#pannelMainId").height());
		}
		searchbar1.clear();
		searchbar2.clear();
		searchbar3.clear();
	})

	// create searchbar
	var searchbar1 = myApp.searchbar.create({
		el: '.searchbar-one',
		searchContainer: '.list-one',
		searchIn: '.item-title',
		on: {
			search(sb, query, previousQuery) {
				console.log(query, previousQuery);
			}
		}
	});
	// create searchbar
	var searchbar2 = myApp.searchbar.create({
		el: '.searchbar-two',
		searchContainer: '.list-two',
		searchIn: '.item-title',
		on: {
			search(sb, query, previousQuery) {
				console.log(query, previousQuery);
			}
		}
	});
	// create searchbar
	var searchbar3 = myApp.searchbar.create({
		el: '.searchbar-three',
		searchContainer: '.list-three',
		searchIn: '.item-title',
		on: {
			search(sb, query, previousQuery) {
				console.log(query, previousQuery);
			}
		}
	});
}