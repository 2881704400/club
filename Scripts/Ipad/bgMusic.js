function bgMusic() {
	toolbarActiveImg('bgMusicTool');
	console.log(1);

	$(".left-pannel p label").bind('click', function() {
		var flag = $("#bgAreaCheckBoxId").prop('checked');
		console.log(flag)
		if(flag) {
			var arr = document.getElementsByName("my-checkbox");
			for(i = 0; i < arr.length; i++) {
				arr[i].checked = false;
			}
		} else {
			var arr = document.getElementsByName("my-checkbox");
			for(i = 0; i < arr.length; i++) {
				arr[i].checked = true;
			}
		}

	});

	$("#pickerDateIconId").bind('click', function() {
		pickerInline.open();
	});

	$("#pickerDateLabelId").bind('click', function() {
		pickerDevice.open();
	});

	$("input[type='checkbox']").click(function(e) {
		e.stopPropagation();
	});

	$(".left-pannel ul li label").bind('click', function() {
		setTimeout(function() {
			var arr = document.getElementsByName("my-checkbox");
			var arrValue = [];
			for(i = 0; i < arr.length; i++) {
				if(arr[i].checked) {
					arrValue.push(arr[i].value);
				}
			}
			console.log(arrValue)
		}, 1000)

		/*var test = $("input[name='my-checkbox']:checked");
		var checkBoxValue = ""; 
		test.each(function(){
			checkBoxValue += $(this).val()+",";
		})
		checkBoxValue = checkBoxValue.substring(0,checkBoxValue.length-1);
		console.log(checkBoxValue)*/
	});

	var minArr = [];
	for(var i = 1; i <= 60; i++) {
		if(i <= 10) {
			minArr.push('0' + i)
		} else {
			minArr.push(i)
		}

	}

	$(".pannel-tool>ul>li>div").bind('click', function() {
		var flag = $(this).find("img").eq(1).is(':visible');
		if(flag) {
			$(this).find("img").eq(0).show();
			$(this).find("img").eq(1).hide();
		} else {
			$(this).find("img").eq(0).hide();
			$(this).find("img").eq(1).show();
		}

		var that = $(this);
		var index = that.index();
		if(index == 0 || index == 2) {
			setTimeout(function() {
				that.find("img").eq(0).show();
				that.find("img").eq(1).hide();
			}, 300)
		}
	});

	$(".pannel-box>p").bind('click', function() {
		$(".pannel-box>p").each(function() {
			$(this).removeClass("bg-dark");
			$(this).find('i').removeClass('show-opacity');
		})
		$(this).addClass("bg-dark");
		$(this).find('i').addClass('show-opacity');

	});

	var pickerInline = myApp.picker.create({
		inputEl: '#picker-date',
		rotateEffect: true,
		renderToolbar: function() {
			return '<div class="toolbar">' +
				'<div class="toolbar-inner">' +
				'<div class="center">' +
				'<a href="#" class="link sheet-close popover-close">取消</a>' +
				'</div>' +
				'<div class="right">' +
				'<a href="#" class="link sheet-close popover-close">确定</a>' +
				'</div>' +
				'</div>' +
				'</div>';
		},
		cols: [{
				textAlign: 'left',
				values: ('01 02 03 04 05 06 07 08 09 10 11 12').split(' ')
			},
			{
				values: ['时'],
			},
			{
				values: minArr
			},
			{
				values: ['分'],
			},
		],
		on: {
			open: function(picker) {
				picker.$el.find('.toolbar-randomize-link').on('click', function() {
					var col0Values = picker.cols[0].values;
					var col0Random = col0Values[Math.floor(Math.random() * col0Values.length)];

					var col1Values = picker.cols[1].values;
					var col1Random = col1Values[Math.floor(Math.random() * col1Values.length)];

					var col2Values = picker.cols[2].values;
					var col2Random = col2Values[Math.floor(Math.random() * col2Values.length)];

					picker.setValue([col0Random, col1Random, col2Random]);
				});
			},
		}
	});

	var pickerDevice = myApp.picker.create({
		inputEl: '#picker-date2',
		rotateEffect: true,
		renderToolbar: function() {
			return '<div class="toolbar">' +
				'<div class="toolbar-inner">' +
				'<div class="center">' +
				'<a href="#" class="link sheet-close popover-close">取消</a>' +
				'</div>' +
				'<div class="right">' +
				'<a href="#" class="link sheet-close popover-close">确定</a>' +
				'</div>' +
				'</div>' +
				'</div>';
		},
		cols: [{
			textAlign: 'center',
			values: ['停止播放', '继续播放']
		}]
	});

	var $document = $(document);
	var selector = '[data-rangeslider]';
	var $element = $(selector);

	// For ie8 support
	var textContent = ('textContent' in document) ? 'textContent' : 'innerText';

	// Example functionality to demonstrate a value feedback
	function valueOutput(element) {
		var value = element.value;
		$(".my-rangeslider").html(value);
	}

	$document.on('input', 'input[type="range"], ' + selector, function(e) {
		valueOutput(e.target);
	});

	// Example functionality to demonstrate disabled functionality
	$document.on('click', '#js-example-disabled button[data-behaviour="toggle"]', function(e) {
		var $inputRange = $(selector, e.target.parentNode);

		if($inputRange[0].disabled) {
			$inputRange.prop("disabled", false);
		} else {
			$inputRange.prop("disabled", true);
		}
		$inputRange.rangeslider('update');
	});

	// Example functionality to demonstrate programmatic value changes
	$document.on('click', '#js-example-change-value button', function(e) {
		var $inputRange = $(selector, e.target.parentNode);
		var value = $('input[type="number"]', e.target.parentNode)[0].value;

		$inputRange.val(value).change();
	});

	// Example functionality to demonstrate programmatic attribute changes
	$document.on('click', '#js-example-change-attributes button', function(e) {
		var $inputRange = $(selector, e.target.parentNode);
		var attributes = {
			min: $('input[name="min"]', e.target.parentNode)[0].value,
			max: $('input[name="max"]', e.target.parentNode)[0].value,
			step: $('input[name="step"]', e.target.parentNode)[0].value
		};

		$inputRange.attr(attributes);
		$inputRange.rangeslider('update', true);
	});

	// Example functionality to demonstrate destroy functionality
	$document
		.on('click', '#js-example-destroy button[data-behaviour="destroy"]', function(e) {
			$(selector, e.target.parentNode).rangeslider('destroy');
		})
		.on('click', '#js-example-destroy button[data-behaviour="initialize"]', function(e) {
			$(selector, e.target.parentNode).rangeslider({
				polyfill: false
			});
		});

	// Example functionality to test initialisation on hidden elements
	$document
		.on('click', '#js-example-hidden button[data-behaviour="toggle"]', function(e) {
			var $container = $(e.target.previousElementSibling);
			$container.toggle();
		});

	// Basic rangeslider initialization
	$element.rangeslider({

		// Deactivate the feature detection
		polyfill: false,

		// Callback function
		onInit: function() {
			valueOutput(this.$element[0]);
		},

		// Callback function
		onSlide: function(position, value) {},

		// Callback function
		onSlideEnd: function(position, value) {}
	});
}