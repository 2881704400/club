$(function() {
	getQuarterChart("finished", '已完成', '#AFC925', '#04BE5B', 36);
	getQuarterChart("progress", '进行中', '#4DECC6', '#5385DE', 44);
	getQuarterChart("unfinished", '未完成', '#FD9949', '#D34655', 20);
	getPieChart("piecharts");

	getFinishProcess("memeryNameChartOneId", 5, '#42D3FF', '#42D3FF')
	getFinishProcess("memeryNameChartTwoId", 8, '#FF9C0B', '#FF9C0B');
	getFinishProcess("memeryNameChartThreeId", 7, '#ED5655', '#ED5655');
	getFinishProcess("memeryNameChartFourId", 8, '#48C205', '#48C205');
	getFinishProcess("memeryNameChartFiveId", 7, '#EDEB55', '#EDEB55');

	getCapacityChart("capacityId");
	var nowTime = getNowTime();
	$(".real-chart-time .memery-chart-content").each(function(i) {
		if(i > 0) {
			$(this).find(".one-half-content").eq(3).html(nowTime);

		}
	})
	
	getSalesQuarterChart(); //2017年度销售额统计图
	getSalesGrowthRateChart(); //销售额逐年统计图
	
	getIndustrySalesChart(); //各行业销售额占总收入比重
	getProductSalesChart(); //各产品销售额占总收入比重   
	getAreaSalesChart(); //各地区营业额占总收入比重
	
//	getCompanyMapIdChart(); //分公司地图
	
	getPayTaxesChartId(); //纳税统计图
	
	
	getQuarterRateChart("allFinishRateId", '整体完成率', '#FD9949', '#D34655', 76);
	
	getFinishProcess("memeryNameChartOneId2", 8, '#42D3FF', '#42D3FF')
	getFinishProcess("memeryNameChartTwoId2", 7, '#FF9C0B', '#FF9C0B');
	getFinishProcess("memeryNameChartThreeId2", 7, '#ED5655', '#ED5655');
	getFinishProcess("memeryNameChartFourId2", 6, '#48C205', '#48C205');
	getFinishProcess("memeryNameChartFiveId2", 5, '#EDEB55', '#EDEB55');
	
	getFinishProcess("memeryNameChartOneId3", 8, '#42D3FF', '#42D3FF')
	getFinishProcess("memeryNameChartTwoId3", 8, '#FF9C0B', '#FF9C0B');
	getFinishProcess("memeryNameChartThreeId3", 7, '#ED5655', '#ED5655');
	getFinishProcess("memeryNameChartFourId3", 7, '#48C205', '#48C205');
	getFinishProcess("memeryNameChartFiveId3", 6, '#EDEB55', '#EDEB55');
});

function getQuarterRateChart(id, title, color1, color2, value) {
	var myCostChart = echarts.init(document.getElementById(id));
	var option = {
		title: {
			text: title,
			left: 'center',
			top: '15',
			textStyle: {
				fontSize: 20,
				fontWeight: '400',
				color: '#fff' // 主标题文字颜色
			}

		},
		tooltip: {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c} ({d}%)"
		},
		legend: {
			orient: 'vertical',
			left: 'left',
			data: ['占有率']
		},
		series: [{
				name: 'Line 1',
				type: 'pie',
				clockWise: false,
				center: ['50%', '55%'],
				radius: [70, 73],
				hoverAnimation: false,
				animation: false,
				data: [{
						value: 100 - value,
						name: 'invisible',
						label: {
							show: false
						},
						labelLine: {
							show: false
						},
						itemStyle: {
							normal: {
								color: '#3B3850', //未完成的圆环的颜色
								borderColor: '#3B3850',
								borderWidth: 4,
							}
						}
					}, {
						value: value,
						name: '01',
						label: {
							normal: {
								show: true,
								position: 'center',
								color: '#fff',
								fontSize: 42,
								formatter: function(value) {
									return value.value + '%';
								}
							}
						},
						labelLine: {
							show: false
						},
						itemStyle: {
							normal: {
								borderWidth: 4,
								borderColor: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
									offset: 0,
									color: color1
								}, {
									offset: 1,
									color: color2
								}]),
								color: new echarts.graphic.LinearGradient(
									0, 0, 0, 1, [{
											offset: 0,
											color: color1
										},
										{
											offset: 1,
											color: color2
										}
									]
								)
							}
						}
					}

				]
			}

		]
	};
	myCostChart.setOption(option);
}

function getPayTaxesChartId() {
	var myCostChart = echarts.init(document.getElementById("payTaxesChartId"));
	var option = {
		backgroundColor: 'rgba(255,255,255,0)',
		title: {
			text: '纳税统计图',
			top: '15',
			left: 'center',
			textStyle: {
				fontSize: 20,
				fontWeight: '500',
				color: '#fff' // 主标题文字颜色
			},

		},
		grid: {
			left: '13%',
			top: '22%',
			right: '6%',
			bottom: '5%',
			containLabel: true
		},
		xAxis: {
			axisLabel: {
				show: true,
				margin: 15,
				color: '#ddd',
				fontSize: 13,
			},
			axisTick: {
				show: true,
				inside: true, // 控制小标记是否在grid里 
				length: 5, // 属性length控制线长
				lineStyle: { // 属性lineStyle控制线条样式
					color: '#4F5260',
					width: 2
				}
			},
			axisLine: {
				show: true,
				lineStyle: {
					color: '#4F5260',
					width: 2
				}
			},
			boundaryGap: false,
			data: getRecentChineseYears(10),
		},
		yAxis: {
			type: 'value',
			axisLabel: {
				show: true,
				margin: 25,
				color: '#ddd',
				fontSize: 13,
				formatter: function(value) {
					return value+'亿';

				}
			},
			axisLine: {
				show: false,
			},
			splitLine: {
				show: true,
				lineStyle: {
					color: '#999798',
					width: 1,
					type: 'dashed'
				}
			},
		},
		series: [{
			type: 'line',
			symbol: 'image://data:image/png;base64,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',
			symbolSize: 40,
			itemStyle: {
				normal: {
					color: 'rgba(255,255,255,0)',
					areaStyle: {
						color: new echarts.graphic.LinearGradient(1, 0, 0.8, 1, [{
							offset: 1,
							color: '#545082'
						}, {
							offset: 0.5,
							color: '#0B8698'
						}], false)
					}
				}
			},
			label: {
				normal: {
					show: true,
					position: [15, -10],
					textStyle: {
						color: '#F7FBFC',
						fontSize: '12',

					},
					formatter: function(param) {
						if(param.value >= 1000) {
							return param.value.toLocaleString();
						} else {
							return param.value;
						}

					}
				}
			},
			lineStyle: {
				color: new echarts.graphic.LinearGradient(
					0, 0, 0, 1, [{
							offset: 0,
							color: '#4DECC6'
						},
						{
							offset: 1,
							color: '#5385DE'
						}
					]
				),
				width: 6,
				shadowColor: 'rgba(0, 0, 0, 0.2)',
				shadowBlur: 15,
				shadowOffsetX: -25,
				shadowOffsetY: 30
			},
			data: [1.20, 1.3, 1.4, 1.7, 1.8, 2.1, 2.2, 2.3, 2.5, 2.6]
		}]
	};
	myCostChart.setOption(option);
}

//集团及区域人才结构图
function getCompanyStructureChart() {
	var myChart = echarts.init(document.getElementById("companyStructureId"), "light");
	var resultData = [{
		name: "广东",
		value: 3268
	}, {
		name: "南京",
		value: 1623
	}, {
		name: "重庆",
		value: 1073
	}, {
		name: "南昌",
		value: 335
	}];
	var option = {
		backgroundColor: 'rgba(255,255,255,0)',
		title: {
			text: '分公司分布结构图',
			left: '13%',
			top: '53%',
			textStyle: {
				fontSize: 30,
				fontWeight: '500',
				color: '#fff' // 主标题文字颜色
			},

		},
		tooltip: {
			trigger: 'item',
			formatter: "{a} <br/>{b}:({d}%)"
		},
		series: [{
			name: '',
			type: 'pie',
			radius: ['44%', '55%'],
			center: ['20%', '55%'],
			color: ['#09E7FC', '#416DE8', '#4C3ED3', '#D92356', '#4C3ED4'],
			hoverAnimation: false,
			label: {
				normal: {
					formatter: "{a|{b}} \n {b|{c} 人}",
					textStyle: {
						color: '#ccc',
						fontSize: 24,

					},
					rich: {
						a: {
							color: '#ccc',
							fontSize: 24,
							align: 'left',
							padding:[0,6],
							lineHeight: 45
						},
						b: {
							color: '#eee',
							fontSize: 24,
							align: 'left',
						}
					}
				}
			},
			labelLine: {
				normal: {
					length:30,
					lineStyle: {
						width: 4,
					}
				}
			},
			data: resultData
		}]
	};
	myChart.setOption(option);
}

//人事地图
function getCompanyMapIdChart() {
	var myChart = echarts.init(document.getElementById("companyMapId"));
	var data = [{
			name: '海门',
			value: 9
		},
		{
			name: '鄂尔多斯',
			value: 12
		},
		{
			name: '招远',
			value: 12
		},
		{
			name: '舟山',
			value: 12
		},
		{
			name: '齐齐哈尔',
			value: 14
		},
		{
			name: '盐城',
			value: 15
		},
		{
			name: '赤峰',
			value: 16
		},
		{
			name: '青岛',
			value: 18
		},
		{
			name: '乳山',
			value: 18
		},
		{
			name: '金昌',
			value: 19
		},
		{
			name: '泉州',
			value: 21
		},
		{
			name: '莱西',
			value: 21
		},
		{
			name: '日照',
			value: 21
		},
		{
			name: '胶南',
			value: 22
		},
		{
			name: '南通',
			value: 23
		},
		{
			name: '拉萨',
			value: 24
		},
		{
			name: '云浮',
			value: 24
		},
		{
			name: '梅州',
			value: 25
		},
		{
			name: '文登',
			value: 25
		},
		{
			name: '攀枝花',
			value: 25
		},
		{
			name: '威海',
			value: 25
		},
		{
			name: '承德',
			value: 25
		},
		{
			name: '厦门',
			value: 26
		},
		{
			name: '汕尾',
			value: 26
		},
		{
			name: '潮州',
			value: 26
		},
		{
			name: '丹东',
			value: 27
		},
		{
			name: '太仓',
			value: 27
		},
		{
			name: '曲靖',
			value: 27
		},
		{
			name: '烟台',
			value: 28
		},
		{
			name: '福州',
			value: 29
		},
		{
			name: '瓦房店',
			value: 30
		},
		{
			name: '即墨',
			value: 30
		},
		{
			name: '抚顺',
			value: 31
		},
		{
			name: '玉溪',
			value: 31
		},
		{
			name: '张家口',
			value: 31
		},
		{
			name: '阳泉',
			value: 31
		},
		{
			name: '莱州',
			value: 32
		},
		{
			name: '湖州',
			value: 32
		},
		{
			name: '汕头',
			value: 32
		},
		{
			name: '昆山',
			value: 33
		},
		{
			name: '宁波',
			value: 33
		},
		{
			name: '湛江',
			value: 33
		},
		{
			name: '揭阳',
			value: 34
		},
		{
			name: '荣成',
			value: 34
		},
		{
			name: '连云港',
			value: 35
		},
		{
			name: '葫芦岛',
			value: 35
		},
		{
			name: '常熟',
			value: 36
		},
		{
			name: '东莞',
			value: 36
		},
		{
			name: '河源',
			value: 36
		},
		{
			name: '淮安',
			value: 36
		},
		{
			name: '泰州',
			value: 36
		},
		{
			name: '南宁',
			value: 37
		},
		{
			name: '营口',
			value: 37
		},
		{
			name: '惠州',
			value: 37
		},
		{
			name: '江阴',
			value: 37
		},
		{
			name: '蓬莱',
			value: 37
		},
		{
			name: '韶关',
			value: 38
		},
		{
			name: '嘉峪关',
			value: 38
		},
		{
			name: '延安',
			value: 38
		},
		{
			name: '太原',
			value: 39
		},
		{
			name: '清远',
			value: 39
		},
		{
			name: '中山',
			value: 39
		},
		{
			name: '寿光',
			value: 40
		},
		{
			name: '盘锦',
			value: 40
		},
		{
			name: '长治',
			value: 41
		},
		{
			name: '珠海',
			value: 42
		},
		{
			name: '宿迁',
			value: 43
		},
		{
			name: '咸阳',
			value: 43
		},
		{
			name: '铜川',
			value: 44
		},
		{
			name: '平度',
			value: 44
		},
		{
			name: '佛山',
			value: 44
		},
		{
			name: '海口',
			value: 44
		},
		{
			name: '江门',
			value: 45
		},
		{
			name: '章丘',
			value: 45
		},
		{
			name: '肇庆',
			value: 46
		},
		{
			name: '大连',
			value: 47
		},
		{
			name: '临汾',
			value: 47
		},
		{
			name: '吴江',
			value: 47
		},
		{
			name: '石嘴山',
			value: 49
		},
		{
			name: '沈阳',
			value: 50
		},
		{
			name: '苏州',
			value: 50
		},
		{
			name: '茂名',
			value: 50
		},
		{
			name: '嘉兴',
			value: 51
		},
		{
			name: '胶州',
			value: 52
		},
		{
			name: '银川',
			value: 52
		},
		{
			name: '张家港',
			value: 52
		},
		{
			name: '三门峡',
			value: 53
		},
		{
			name: '锦州',
			value: 54
		},
		{
			name: '柳州',
			value: 54
		},
		{
			name: '三亚',
			value: 54
		},
		{
			name: '自贡',
			value: 56
		},
		{
			name: '吉林',
			value: 56
		},
		{
			name: '阳江',
			value: 57
		},
		{
			name: '泸州',
			value: 57
		},
		{
			name: '西宁',
			value: 57
		},
		{
			name: '宜宾',
			value: 58
		},
		{
			name: '呼和浩特',
			value: 58
		},
		{
			name: '成都',
			value: 58
		},
		{
			name: '大同',
			value: 58
		},
		{
			name: '镇江',
			value: 59
		},
		{
			name: '桂林',
			value: 59
		},
		{
			name: '张家界',
			value: 59
		},
		{
			name: '宜兴',
			value: 59
		},
		{
			name: '北海',
			value: 60
		},
		{
			name: '西安',
			value: 61
		},
		{
			name: '金坛',
			value: 62
		},
		{
			name: '东营',
			value: 62
		},
		{
			name: '牡丹江',
			value: 63
		},
		{
			name: '遵义',
			value: 63
		},
		{
			name: '绍兴',
			value: 63
		},
		{
			name: '扬州',
			value: 64
		},
		{
			name: '常州',
			value: 64
		},
		{
			name: '潍坊',
			value: 65
		},
		{
			name: '台州',
			value: 67
		},
		{
			name: '南京',
			value: 67
		},
		{
			name: '滨州',
			value: 70
		},
		{
			name: '无锡',
			value: 71
		},
		{
			name: '本溪',
			value: 71
		},
		{
			name: '克拉玛依',
			value: 72
		},
		{
			name: '渭南',
			value: 72
		},
		{
			name: '马鞍山',
			value: 72
		},
		{
			name: '宝鸡',
			value: 72
		},
		{
			name: '焦作',
			value: 75
		},
		{
			name: '句容',
			value: 75
		},
		{
			name: '北京',
			value: 79
		},
		{
			name: '徐州',
			value: 79
		},
		{
			name: '衡水',
			value: 80
		},
		{
			name: '包头',
			value: 80
		},
		{
			name: '绵阳',
			value: 80
		},
		{
			name: '乌鲁木齐',
			value: 84
		},
		{
			name: '枣庄',
			value: 84
		},
		{
			name: '杭州',
			value: 84
		},
		{
			name: '淄博',
			value: 85
		},
		{
			name: '鞍山',
			value: 86
		},
		{
			name: '溧阳',
			value: 86
		},
		{
			name: '库尔勒',
			value: 86
		},
		{
			name: '安阳',
			value: 90
		},
		{
			name: '开封',
			value: 90
		},
		{
			name: '德阳',
			value: 93
		},
		{
			name: '温州',
			value: 95
		},
		{
			name: '九江',
			value: 96
		},
		{
			name: '邯郸',
			value: 98
		},
		{
			name: '临安',
			value: 99
		},
		{
			name: '兰州',
			value: 99
		},
		{
			name: '沧州',
			value: 100
		},
		{
			name: '临沂',
			value: 103
		},
		{
			name: '南充',
			value: 104
		},
		{
			name: '天津',
			value: 105
		},
		{
			name: '富阳',
			value: 106
		},
		{
			name: '泰安',
			value: 112
		},
		{
			name: '诸暨',
			value: 112
		},
		{
			name: '郑州',
			value: 113
		},
		{
			name: '哈尔滨',
			value: 114
		},
		{
			name: '聊城',
			value: 116
		},
		{
			name: '芜湖',
			value: 117
		},
		{
			name: '唐山',
			value: 119
		},
		{
			name: '平顶山',
			value: 119
		},
		{
			name: '邢台',
			value: 119
		},
		{
			name: '德州',
			value: 120
		},
		{
			name: '济宁',
			value: 120
		},
		{
			name: '荆州',
			value: 127
		},
		{
			name: '宜昌',
			value: 130
		},
		{
			name: '义乌',
			value: 132
		},
		{
			name: '丽水',
			value: 133
		},
		{
			name: '洛阳',
			value: 134
		},
		{
			name: '秦皇岛',
			value: 136
		},
		{
			name: '株洲',
			value: 143
		},
		{
			name: '石家庄',
			value: 147
		},
		{
			name: '莱芜',
			value: 148
		},
		{
			name: '常德',
			value: 152
		},
		{
			name: '保定',
			value: 153
		},
		{
			name: '湘潭',
			value: 154
		},
		{
			name: '金华',
			value: 157
		},
		{
			name: '岳阳',
			value: 169
		},
		{
			name: '长沙',
			value: 175
		},
		{
			name: '衢州',
			value: 177
		},
		{
			name: '廊坊',
			value: 193
		},
		{
			name: '菏泽',
			value: 194
		},
		{
			name: '武汉',
			value: 273
		},
		{
			name: '大庆',
			value: 279
		}, {
			name: '长春',
			value: 129
		},
		{
			name: '济南',
			value: 152
		},
		{
			name: '合肥',
			value: 132
		},
		{
			name: '上海',
			value: 142
		},
		{
			name: '南昌',
			value: 124
		},
		{
			name: '广州',
			value: 165
		},
		{
			name: '深圳',
			value: 166
		},
		{
			name: '重庆',
			value: 138
		},
		{
			name: '贵阳',
			value: 148
		},
		{
			name: '昆明',
			value: 149
		}
	];
	var geoCoordMap = {
		'长春': [125.35, 43.88],
		'深圳': [114.07, 22.62],
		'济南': [117, 36.65],
		'合肥': [117.27, 31.86],
		'上海': [121.48, 31.22],
		'南昌': [115.89, 28.68],
		'广州': [113.23, 23.16],
		'重庆': [106.54, 29.59],
		'贵阳': [106.71, 26.57],
		'昆明': [102.73, 25.04],
		'海门': [121.15, 31.89],
		'鄂尔多斯': [109.781327, 39.608266],
		'招远': [120.38, 37.35],
		'舟山': [122.207216, 29.985295],
		'齐齐哈尔': [123.97, 47.33],
		'盐城': [120.13, 33.38],
		'赤峰': [118.87, 42.28],
		'青岛': [120.33, 36.07],
		'乳山': [121.52, 36.89],
		'金昌': [102.188043, 38.520089],
		'泉州': [118.58, 24.93],
		'莱西': [120.53, 36.86],
		'日照': [119.46, 35.42],
		'胶南': [119.97, 35.88],
		'南通': [121.05, 32.08],
		'拉萨': [91.11, 29.97],
		'云浮': [112.02, 22.93],
		'梅州': [116.1, 24.55],
		'文登': [122.05, 37.2],
		'攀枝花': [101.718637, 26.582347],
		'威海': [122.1, 37.5],
		'承德': [117.93, 40.97],
		'厦门': [118.1, 24.46],
		'汕尾': [115.375279, 22.786211],
		'潮州': [116.63, 23.68],
		'丹东': [124.37, 40.13],
		'太仓': [121.1, 31.45],
		'曲靖': [103.79, 25.51],
		'烟台': [121.39, 37.52],
		'福州': [119.3, 26.08],
		'瓦房店': [121.979603, 39.627114],
		'即墨': [120.45, 36.38],
		'抚顺': [123.97, 41.97],
		'玉溪': [102.52, 24.35],
		'张家口': [114.87, 40.82],
		'阳泉': [113.57, 37.85],
		'莱州': [119.942327, 37.177017],
		'湖州': [120.1, 30.86],
		'汕头': [116.69, 23.39],
		'昆山': [120.95, 31.39],
		'宁波': [121.56, 29.86],
		'湛江': [110.359377, 21.270708],
		'揭阳': [116.35, 23.55],
		'荣成': [122.41, 37.16],
		'连云港': [119.16, 34.59],
		'葫芦岛': [120.836932, 40.711052],
		'常熟': [120.74, 31.64],
		'东莞': [113.75, 23.04],
		'河源': [114.68, 23.73],
		'淮安': [119.15, 33.5],
		'泰州': [119.9, 32.49],
		'南宁': [108.33, 22.84],
		'营口': [122.18, 40.65],
		'惠州': [114.4, 23.09],
		'江阴': [120.26, 31.91],
		'蓬莱': [120.75, 37.8],
		'韶关': [113.62, 24.84],
		'嘉峪关': [98.289152, 39.77313],
		'广州': [113.23, 23.16],
		'延安': [109.47, 36.6],
		'太原': [112.53, 37.87],
		'清远': [113.01, 23.7],
		'中山': [113.38, 22.52],
		'寿光': [118.73, 36.86],
		'盘锦': [122.070714, 41.119997],
		'长治': [113.08, 36.18],

		'珠海': [113.52, 22.3],
		'宿迁': [118.3, 33.96],
		'咸阳': [108.72, 34.36],
		'铜川': [109.11, 35.09],
		'平度': [119.97, 36.77],
		'佛山': [113.11, 23.05],
		'海口': [110.35, 20.02],
		'江门': [113.06, 22.61],
		'章丘': [117.53, 36.72],
		'肇庆': [112.44, 23.05],
		'大连': [121.62, 38.92],
		'临汾': [111.5, 36.08],
		'吴江': [120.63, 31.16],
		'石嘴山': [106.39, 39.04],
		'沈阳': [123.38, 41.8],
		'苏州': [120.62, 31.32],
		'茂名': [110.88, 21.68],
		'嘉兴': [120.76, 30.77],
		'长春': [125.35, 43.88],
		'胶州': [120.03336, 36.264622],
		'银川': [106.27, 38.47],
		'张家港': [120.555821, 31.875428],
		'三门峡': [111.19, 34.76],
		'锦州': [121.15, 41.13],
		'柳州': [109.4, 24.33],
		'三亚': [109.511909, 18.252847],
		'自贡': [104.778442, 29.33903],
		'吉林': [126.57, 43.87],
		'阳江': [111.95, 21.85],
		'泸州': [105.39, 28.91],
		'西宁': [101.74, 36.56],
		'宜宾': [104.56, 29.77],
		'呼和浩特': [111.65, 40.82],
		'成都': [104.06, 30.67],
		'大同': [113.3, 40.12],
		'镇江': [119.44, 32.2],
		'桂林': [110.28, 25.29],
		'张家界': [110.479191, 29.117096],
		'宜兴': [119.82, 31.36],
		'北海': [109.12, 21.49],
		'西安': [108.95, 34.27],
		'金坛': [119.56, 31.74],
		'东营': [118.49, 37.46],
		'牡丹江': [129.58, 44.6],
		'遵义': [106.9, 27.7],
		'绍兴': [120.58, 30.01],
		'扬州': [119.42, 32.39],
		'常州': [119.95, 31.79],
		'潍坊': [119.1, 36.62],
		'重庆': [106.54, 29.59],
		'台州': [121.420757, 28.656386],
		'南京': [118.78, 32.04],
		'滨州': [118.03, 37.36],
		'贵阳': [106.71, 26.57],
		'无锡': [120.29, 31.59],
		'本溪': [123.73, 41.3],
		'克拉玛依': [84.77, 45.59],
		'渭南': [109.5, 34.52],
		'马鞍山': [118.48, 31.56],
		'宝鸡': [107.15, 34.38],
		'焦作': [113.21, 35.24],
		'句容': [119.16, 31.95],
		'北京': [116.46, 39.92],
		'徐州': [117.2, 34.26],
		'衡水': [115.72, 37.72],
		'包头': [110, 40.58],
		'绵阳': [104.73, 31.48],
		'乌鲁木齐': [87.68, 43.77],
		'枣庄': [117.57, 34.86],
		'杭州': [120.19, 30.26],
		'淄博': [118.05, 36.78],
		'鞍山': [122.85, 41.12],
		'溧阳': [119.48, 31.43],
		'库尔勒': [86.06, 41.68],
		'安阳': [114.35, 36.1],
		'开封': [114.35, 34.79],
		'济南': [117, 36.65],
		'德阳': [104.37, 31.13],
		'温州': [120.65, 28.01],
		'九江': [115.97, 29.71],
		'邯郸': [114.47, 36.6],
		'临安': [119.72, 30.23],
		'兰州': [103.73, 36.03],
		'沧州': [116.83, 38.33],
		'临沂': [118.35, 35.05],
		'南充': [106.110698, 30.837793],
		'天津': [117.2, 39.13],
		'富阳': [119.95, 30.07],
		'泰安': [117.13, 36.18],
		'诸暨': [120.23, 29.71],
		'郑州': [113.65, 34.76],
		'哈尔滨': [126.63, 45.75],
		'聊城': [115.97, 36.45],
		'芜湖': [118.38, 31.33],
		'唐山': [118.02, 39.63],
		'平顶山': [113.29, 33.75],
		'邢台': [114.48, 37.05],
		'德州': [116.29, 37.45],
		'济宁': [116.59, 35.38],
		'荆州': [112.239741, 30.335165],
		'宜昌': [111.3, 30.7],
		'义乌': [120.06, 29.32],
		'丽水': [119.92, 28.45],
		'洛阳': [112.44, 34.7],
		'秦皇岛': [119.57, 39.95],
		'株洲': [113.16, 27.83],
		'石家庄': [114.48, 38.03],
		'莱芜': [117.67, 36.19],
		'常德': [111.69, 29.05],
		'保定': [115.48, 38.85],
		'湘潭': [112.91, 27.87],
		'金华': [119.64, 29.12],
		'岳阳': [113.09, 29.37],
		'长沙': [113, 28.21],
		'衢州': [118.88, 28.97],
		'廊坊': [116.7, 39.53],
		'菏泽': [115.480656, 35.23375],
		'合肥': [117.27, 31.86],
		'武汉': [114.31, 30.52],
		'大庆': [125.03, 46.58],
	};

	var convertData = function(data) {
		var res = [];
		for(var i = 0; i < data.length; i++) {
			var geoCoord = geoCoordMap[data[i].name];
			if(geoCoord) {
				res.push({
					name: data[i].name,
					value: geoCoord.concat(data[i].value)
				});
			}
		}
		return res;
	};
	var allData=convertData(data);
	var newDataArr1=[];
	var newDataArr2=[];
	for(var i=0;i<70;i++){
		newDataArr1.push(allData[i])
	}
	for(var i=70;i<allData.length;i++){
		newDataArr2.push(allData[i])
	}
	myChart.setOption(option = {
		backgroundColor: 'rgba(255,255,255,0)',
		title: {
			show: false
		},
		legend: {
			show: true,
			orient: 'vertical',
			right: '4%',
			bottom: '4%',
       		icon: 'circle',
       		itemWidth:15,
       		itemHeight:13,
       		itemGap: 15,
			textStyle:{
				color: '#ccc',
				fontSize: 12,
			},
			data: ['华东地区', '华南地区', '华北地区']
		},

		geo: {
			type: 'scatter',
			map: 'china',
			regions: [{
				name: '南海诸岛',
				value: 0,
				itemStyle: {
					normal: {
						opacity: 0,
						label: {
							show: false
						}
					}
				}
			}],
			aspectScale: 0.75,
			layoutCenter: ['50%', '50%'],
			layoutSize: '100%',
			label: {
				emphasis: {
					show: false
				}
			},
			label: {
				emphasis: {
					show: false
				}
			},
			roam: false,
			itemStyle: {
				normal: {
					color: '#232A44',
					borderColor: '#276980',
					borderWidth: 3,
					//					shadowColor: 'rgba(84, 243, 244, 0.8)',
					shadowBlur: 0,
				},
				emphasis: {
					color: 'rgba(37, 43, 61, .5)'
				}
			},
			zoom: 1.2
		},
		series: [{
				name: '华南地区',
				type: 'scatter',
				coordinateSystem: 'geo',
				data: newDataArr1,
				symbolSize: function(val) {
					return val[2] / 4;
				},
				label: {
					normal: {
						formatter: '{b}',
						position: 'right',
						show: false
					},
					emphasis: {
						show: true
					}
				},
				itemStyle: {
					normal: {
						color: '#09E7FC'
					}
				}
			},
			{
				name: '华北地区',
				type: 'scatter',
				coordinateSystem: 'geo',
				data: newDataArr2,
				symbolSize: function(val) {
					return val[2] / 12;
				},
				label: {
					normal: {
						formatter: '{b}',
						position: 'right',
						show: false
					},
					emphasis: {
						show: true
					}
				},
				itemStyle: {
					normal: {
						color: '#5C68ED'
					}
				}
			},
			{
				name: '华东地区',
				type: 'effectScatter',
				coordinateSystem: 'geo',
				data: [{
						name: '长春',
						value: [125.35, 43.88, 129]
					},
					{
						name: '深圳',
						value: [114.07, 22.62, 152]
					},
					{
						name: '济南',
						value: [117, 36.65, 132]
					},
					{
						name: '合肥',
						value: [117.27, 31.86, 142]
					},
					{
						name: '上海',
						value: [121.48, 31.22, 124]
					},
					{
						name: '南昌',
						value: [115.89, 28.68, 165]
					},
					{
						name: '广州',
						value: [113.23, 23.16, 106]
					},
					{
						name: '重庆',
						value: [106.54, 29.59, 138]
					},
					{
						name: '贵阳',
						value: [106.71, 26.57, 148]
					},
					{
						name: '昆明',
						value: [102.73, 25.04, 149]
					}
				],
				symbol:'circle',
				symbolSize: function(val) {
					return val[2] / 6;
				},
				showEffectOn: 'render',
				rippleEffect: {
					brushType: 'stroke'
				},
				hoverAnimation: true,
				label: {
					normal: {
						formatter: '{b}',
						position: 'right',
						show: false
					}
				},
				itemStyle: {
					normal: {
						color: '#D92356',
						shadowBlur: 10,
						shadowColor: '#333'
					}
				},
				zlevel: 1
			}
		]
	});
}

function getAreaSalesChart() {
	var myChart = echarts.init(document.getElementById("productSalesId"));
	var colorArr = ['#37E7E4', '#24C6F0', '#4DAFE6', '#1F87FB', '#2E5DE3', '#17388B', '#6D4EF2', '#CF3A60'];
	var color = ['#fb734e', '#e32f46', '#94d96c', '#0bbcb7', '#1a9bfc', '#7049f0'];

	var scale = 1;
	var rich = {
		yellow: {
			color: "#ffc72b",
			fontSize: 30 * scale,
			padding: [5, 4],
			align: 'right'
		},
		total: {
			color: "#ffc72b",
			fontSize: 40 * scale,
			align: 'center'
		},
		white: {
			color: "#fff",
			align: 'center',
			fontSize: 24 * scale,
			padding: [14, 0]
		},
		blue: {
			color: '#49dff0',
			fontSize: 16 * scale,
			align: 'center'
		},
		hr: {
			borderColor: '#8F8F91',
			width: '100%',
			borderWidth: 1,
			height: 0,
		}
	}
	var option = {
		backgroundColor: 'rgba(255,255,255,0)',
		title: {
			text: '各地区营业额占总收入比重',
			left: 'center',
			top: 20,
			textStyle: {
				fontSize: 20,
				fontWeight: '500',
				color: '#fff' // 主标题文字颜色
			},
		},
		legend: {
			show:false,
			orient: 'horizontal',
			icon: 'circle',
			x: 'center',
			y: '13%',
			textStyle:{
				color: '#ddd',
				fontSize: 12
			},
			itemWidth: 14,
			itemHeight: 12,
			data: ['华东地区', '其他', '华南地区', '西南地区']
		},
		series: [{
				name: 'Line 1',
				type: 'pie',
				clockWise: true,
				radius: [85, 95],
				center: ['50%', '55%'],
				hoverAnimation: false,
				startAngle: 270,
				label: {
					show: false
				},
				data: [{
						value: 50,
						name: '华东地区',
						itemStyle: {
							normal: {
								color: '#84B15A'
							}
						}
					},
					{
						value: 50,
						name: '',
						tooltip: {
							show: false
						},
						itemStyle: {
							normal: {
								color: '#312E3F'
							}

						},
					},
				]
			},
			{
				name: 'Line 2',
				type: 'pie',
				clockWise: true,
				radius: [65, 75],
				center: ['50%', '55%'],
				hoverAnimation: false,
				startAngle: 270,
				label: {
					show: false
				},
				data: [{
						value: 56,
						name: '其他',
						itemStyle: {
							normal: {
								color: '#DE9B32'
							}
						}
					},
					{
						value: 44,
						name: '',
						tooltip: {
							show: false
						},
						itemStyle: {
							normal: {
								color: '#312E3F'
							}

						}
					},
				]
			},
			{
				name: 'Line 3',
				type: 'pie',
				clockWise: true,
				radius: [45, 55],
				center: ['50%', '55%'],
				hoverAnimation: false,
				startAngle: 270,
				label: {
					show: false
				},
				data: [{
						value: 70,
						name: '华南地区',
						itemStyle: {
							normal: {
								color: '#49B3D6'
							}
						}
					},
					{
						value: 30,
						name: '',
						tooltip: {
							show: false
						},
						itemStyle: {
							normal: {
								color: '#312E3F'
							}

						}
					},
				]
			},
			{
				name: 'Line 4',
				type: 'pie',
				clockWise: true,
				radius: [25, 35],
				center: ['50%', '55%'],
				hoverAnimation: false,
				startAngle: 270,
				label: {
					show: false
				},
				data: [{
						value: 85,
						name: '西南地区',
						itemStyle: {
							normal: {
								color: '#BF4746'
							}
						}
					},
					{
						value: 13,
						name: '',
						tooltip: {
							show: false
						},
						itemStyle: {
							normal: {
								color: '#312E3F'
							}

						}
					},
				]
			}
		]
	};
	myChart.setOption(option);
}

function getProductSalesChart() {
	var myCostChart = echarts.init(document.getElementById("areaSalesId"));
	var myColor = ['#f00', '#0C9EF3', '#146AE3', '#D92356', '#4C3ED4'];
	var option = {
		backgroundColor: 'rgba(255,255,255,0)',
		title: {
			text: '各产品销售额占总收入比重',
			left: 'center',
			top: 20,
			textStyle: {
				fontSize: 20,
				fontWeight: '500',
				color: '#fff' // 主标题文字颜色
			},

		},
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'shadow'
			}
		},
		grid: {
			top: '25%',
			left: '5%',
			right: '8%',
			bottom: '13%',
			containLabel: true
		},
		xAxis: {
			type: 'value',
			axisLine: {
				show: false
			},
			axisLabel: {
				show: false
			},
			splitLine: {
				show: false
			}
		},
		yAxis: {
			axisLine: {
				show: false
			},
			axisLabel: {
				show: true,
				margin: 15,
				color: '#ccc',
				fontSize: 13,
			},
			axisTick: {
				show: false,
			},
			data: ['新型烟草产品', '镭射包装材料', '智能电子产品']
		},
		series: [{
			type: 'bar',
			barWidth: 17,
			barGap: '-100%',
			itemStyle: {
				normal: {
					barBorderRadius: 30,
					color: '#312E3F',
				}
			},
			data: [100, 100, 100]
		}, {
			type: 'bar',
			barWidth: 17,
			label: {
				normal: {
					show: true,
					position: 'right',
					color: '#ccc',
					fontSize: 12,
					formatter: function(value) {
						return value.value + '%';
					}
				}
			},
			itemStyle: {
				normal: {
					barBorderRadius: 30,
					color: function(params) {
						var colorList = ['#D15152', '#4BB5DC', '#779C56'];
						return colorList[params.dataIndex]
					},
				}
			},
			data: [22, 46, 87]
		}]
	};
	myCostChart.setOption(option);
}

function getIndustrySalesChart() {
	var myCostChart = echarts.init(document.getElementById("industrySalesId"));
	var myColor = ['#f00', '#0C9EF3', '#146AE3', '#D92356', '#4C3ED4'];
	option = {
		title: {
			text: '各行业销售额占总收入比重',
			left: 'center',
			top: 20,
			textStyle: {
				fontSize: 20,
				fontWeight: '500',
				color: '#fff' // 主标题文字颜色
			},

		},
		tooltip: {
			trigger: 'item',
			formatter: function(params, ticket, callback) {
				var res = params.seriesName;
				res += '<br/>' + params.name + ' : ' + params.percent + '%';
				return res;
			}
		},
		series: [{
			name: '消费',
			type: 'pie',
			selectedMode: 'single',
			center: ['50%', '58%'],
			radius: ['30%', '65%'],
			label: {
				normal: {
					position: 'inner',
					formatter: "{b}\n{b|{d}}%",
					textStyle: {
						color: '#fff',
						fontSize: 12,

					},
					rich: {
						b: {
							padding: [5, 0, 5, 0],
							color: '#fff',
							fontSize: 12,
						}
					}
				}
			},
			labelLine: {
				normal: {
					show: false
				}
			},
			itemStyle: {
				normal: {
					barBorderRadius: 30,
					color: function(params) {　 //首先定义一个数组 
						var colorList = ['#CE4E4D', '#DE9B32', '#0083D5', '#83B159', '#4FBBDF', '#4FEAC2'];
						return colorList[params.dataIndex]
					},
				}
			},
			data: [{
				value: 26,
				name: '其他'
			}, {
				value: 13,
				name: '物业'
			}, {
				value: 25,
				name: '镭射包装材料'
			}, {
				value: 36,
				name: '包装'
			}]
		}]
	};
	myCostChart.setOption(option);
}

function getSalesQuarterChart() {
	var myCostChart = echarts.init(document.getElementById("salesQuarterId"));
	var myColor = ['#f00', '#0C9EF3', '#146AE3', '#D92356', '#4C3ED4'];
	option = {
		backgroundColor: 'rgba(255,255,255,0)',
		title: {
			text: '销售额季度统计图',
			left: 'center',
			top: 15,
			textStyle: {
				fontSize: 20,
				fontWeight: '500',
				color: '#fff' // 主标题文字颜色
			},
		},
		legend: {
			right: '5%',
       		top: '15%',
			right: '12%',
       		icon: 'circle',
			textStyle: {
				color: '#ccc',
				fontSize: 12
			},
			data: ['2016年', '2017年', '2018年']
		},
		grid: {
			top: '20%',
			left: '8%',
			right: '15%',
			bottom: '8%',
			containLabel: true
		},
		xAxis: [{
			type: 'category',
			boundaryGap: false,
			axisLabel: {
				show: true,
				margin: 15,
				color: '#ccc',
				fontSize: 13,
			},
			axisTick: {
				show: false
			},
			axisLine: {
				show: false,
			},
			data: ['第一季度', '第二季度', '第三季度', '第四季度']
		}],
		yAxis: [{
			type: 'value',
			axisLabel: {
				show: true,
				margin: 70,
				color: '#ccc',
				fontSize: 13,
				formatter: function(value) {
					return value + "亿";

				}
			},
			axisLine: {
				show: false,
			},
			splitLine: {
				show: false
			},
		}],
		series: [{
				name: '2016年',
				type: 'bar',
				barWidth: '10',
				barGap: '80%',
				itemStyle: {
					normal: {
						color: '#04BE5B',
					}
				},
				data: [6.6, 6.1, 9.1, 5.5]
			},
			{
				name: '2017年',
				type: 'bar',
				barWidth: '10',
				barGap: '80%',
				itemStyle: {
					normal: {
						color: '#DE9B32',
					}
				},
				data: [8.0, 6.5, 8.5, 7.0]
			},
			{
				name: '2018年',
				type: 'bar',
				barWidth: '10',
				barGap: '80%',
				itemStyle: {
					normal: {
						color: '#14C2FF',
					}
				},
				data: [9.3,7.8]
			}
		]
	};
	myCostChart.setOption(option);
}

function getSalesGrowthRateChart() {
	var myChart = echarts.init(document.getElementById("salesGrowthRateId"));
	var option = {
		backgroundColor: 'rgba(255,255,255,0)',
		title: {
			text: '销售额增长率统计图',
			left: 'center',
			top: 15,
			textStyle: {
				fontSize: 20,
				fontWeight: '500',
				color: '#fff' // 主标题文字颜色
			},

		},
		grid: {
			left: '1%',
			top: '20%',
			right: '3%',
			bottom: '8%',
			containLabel: true
		},
		xAxis: {
			axisLabel: {
				show: true,
				margin: 20,
				color: '#ccc',
				fontSize: 13,
			},
			axisTick: {
				show: true,
				inside: true,
				lineStyle: {
					color: '#3D3E4E',
					width: 1
				}
			},
			axisLine: {
				show: true,
				lineStyle: {
					color: '#3D3E4E',
					width: 2
				}
			},
			boundaryGap: false,
			data: getRecentChineseYears(12),
		},
		yAxis: {
			type: 'value',
			nameTextStyle: {
				color: '#ffffff',
				fontSize: '16',
			},
			axisLabel: {
				show: true,
				margin: 25,
				color: '#ccc',
				fontSize: 13,
				formatter: function(value) {
					if(value != 0) {
						return value + "%";
					}

				}
			},
			axisLine: {
				show: false,
			},
			splitLine: {
				show: true,
				lineStyle: {
					color: '#3D3E4E',
					width: 2,
					type: 'dashed'
				}
			},
		},
		series: [{
			type: 'line',
			symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAvCAYAAABzJ5OsAAAGDUlEQVRogbWaPWxcRRDHf/fO92Ffgk2MrXygBEJACCiQkCgQcoPSIAVXoYCKFBRIKegpQJHSBokehIgoiBBFrEiAQuEKgoQiPiIQEIRANnFI7ODYvvP5fBQ74zdvb/e9y9keafV27+3Hf2ZnZmf2XYlulx2kClAFVqS9V57LO7mIUmmb4H2wO90/l7YLfru0LWYGAd8A1oF2dM4wFS1UB8oFc3sLbV/yMbD9kF1cd6EDNPtbuBh8BUiAVmacP09+21+kqN0XDSL5UuQZ+w2y4LqRp18fwalPVIWGckBWvIE+yJJXz2PKAg3VtV0y9TbOBgYCnwSA+4ATD7zPSAj8pgFui+1XokDqrlOx2oQkbIEnpsQYUICb5rkZ+C2kUnWp9xixL/kKbqu0Ywh44pWy97SMPQ78A9w2ADsGfEf6bRqwm/KbqlHTMJAhX/INUleVB7xsypCpPwncBO6QlbyCfQyYkz6dQMnbhULw2Xdx4EOmPCiLLRtGtK8u3hVwG15pm7plwNqFZaAsfYC4wYY8iwVeMeUO7nBpSFsZ0HEKXMG3cafoOnAMuAEsBDBYVQqS9SiNAAMxqU8CR3G6OIzzyS8DM8B9wMPAi8DzwCjwEHAROCnrjMi4FeB+w7Rv+BYLGKn74Ne9jpYBX+qTOCkq8HEB+ouA7QA/AX8BYzJmBjgF7DEMNHH6XyVVw5DnslSX+YI6H5K4gq4CNbISfwd4Hxe7q4dQr6WeZEOE0wLWgNPA18Cn0j6M80i/Sz+1Aav/yFM1ZCXvkFJGfJVRJurA2x7IESMZH3wLJ+khATkNXJL3i2S9loJWDFbC69KHEt2uH1P7qlI2gI+JhEZw278fp7Mdaasuqxoo+LYAX5N17uK807LU7wKr8r5Ferpa9+mHEwzJQr6+W10Lucgq8BZwXvo0BHxjCg6/Ac895YyWFqx/AVffhW9uOAkjoNoilBeAT2TeI8BvZFXXlzy43W0mIomiAEwZmDcMPC3jEplseAqOnIOTChygBtUT8Ox5eIV0Z4bdKxrAa6QqM0q+sWYoyXvpTXKY7A58Rurra0DtLJyouV3poQMwftoxXMP1qeJs4XtS9bxJ2FVaPCDhS0Ka4cc6an0f2Z24gjlpp+DgWHwuAI7DE2ZMWcCfM4CXcoD3UEzyscGx8Lc0FgmeLHXDYfQlD/CeAgxK5YTwnUroSP6B1OI/Bm6Zdnepj7yzFI7nIeBJIhgypMYWIj/LOYQzqC7wAc7oEiSwmoW5ecdQlL6Ea/QGYl8FGOorN02QozaHAS0jwIQsOIPb1iGcx2kBrTPweSt1uxm6DnPvwVXpq4FZGzhLNqL8L4cB+1snoTfV8iWuWz0vE6vkTgHP4NSlCazNwp9vwoUf4Q+dYAmWL8KVl5yq6UG0Jq+Pk4bFe4ED5BxKhurgJGd1VWMTO1CP6n9xJ+EIqdSmgcuYUGAWrs/C3+SfsGsyZp+Zaz9O7fpRoQrQ1MCsTjb102KzJQ3KxmWBhpRDpL69n9hmlTREWJGiO9I0zKhd6M6rcLeoKDCzybKfCWnGdAv4ELiAixSbEfDrMt/rAvYMaSyjgP10sAewJfXzvpvzt82CXyQb3t4GvsPlp9pnSfotSn0Jl3FtAI8C35JKegJ4hGwYHFIZrW8lTbEcNi+L0gjzKE5aa0h4gDO6j6RcJk1SpoFXSb1My5QJYXKBXumHdmDrMsyCt7e/NrrUE9Hqv2ZTkzjjrJLGOf3msJM4r+TreCgJj0g4BR+L64tuDypeu5/bg3Gc3i9wb7cHUfC973qZiN3bPAAcBH41fWxsMopTj2uGiXu9t6mRvakOgq+TJguD3piN4/z2z4QNfzNQt8At6B5dzwOvurtqgPsMWFvY7bvKKPV7P18KPEPhbSwDsmBit8Qh16ifeoLfrIoOKT15bdhgSS9KLWD/6YP36yEp+7cFQSqSfOh6OQ9k6LcYsCLQhTToBzUfXFG7KNGw7dA3sAiI/sHXSCPE7ByD00CSUyq6PbDUQm6qAgD6yYDyjLNC70VvIW3nO2zRx+Rdp536fB/9bhShHWF8t/574P/bY1d26X/PtooMr/p/9AAAAABJRU5ErkJggg==',
			symbolSize: 40,
			label: {
				normal: {
					show: false,
				}
			},
			lineStyle: {
				color: new echarts.graphic.LinearGradient(
					0, 0, 0, 1, [{
							offset: 0,
							color: '#00EAFF'
						}, {
							offset: 0.5,
							color: '#6D8CF9'
						},
						{
							offset: 1,
							color: '#9D63F6'
						}
					]
				),
				width: 3,
			},
			data: [1.4, 2.8, 2, 3, 3.4, 5.5, 4.4, 7.2, 6.2, 5.9, 6.6, 8.9]
		}]
	};
	myChart.setOption(option);
}

function getCapacityChart(domId) {
	var myCostChart = echarts.init(document.getElementById(domId));
	var option = {
		title: {
			text: '产能',
			top: '20',
			left: 'center',
			textStyle: {
				fontSize: 20,
				fontWeight: '500',
				color: '#fff' // 主标题文字颜色
			}
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'shadow'
			}
		},
		grid: {
			top: '28%',
			left: '8%',
			right: '15%',
			bottom: '10%',
			containLabel: true
		},
		xAxis: {
			type: 'value',
			axisLine: {
				show: false
			},
			axisLabel: {
				show: true,
				margin: 18,
				color: '#CECCCD',
				fontSize: 13,
				formatter: function(value) {
					if(value == 25) {
						return value + 'w';
					}else{
						return value;
					}
				}
			},
			splitLine: {
				show: false
			},
			
			data: ['0', '5', '10', '15', '20', '25']
		},
		yAxis: {
			boundaryGap: false,
			axisLine: {
				show: false,
				lineStyle: {
					color: '#C9D3DF',
				}
			},
			axisLabel: {
				show: true,
				margin: 18,
				color: '#E9EDEE',
				fontSize: 12
			},
			axisTick: {
				show: false,
			},
			data: ['卷烟包装产品', '新型烟草制品', '镭射全息材料', '酒类包装产品', '智能电子产品']
		},
		series: [{
				name: '产品1产能',
				type: 'bar',
				stack: '总量',
				barWidth: '10',
				itemStyle: {
					normal: {
						color: '#729A53'
					}
				},
				data: [6, 5, 9, 3, 6]
			},
			{
				name: '产品2产能',
				type: 'bar',
				stack: '总量',
				itemStyle: {
					normal: {
						color: '#48B3D7'
					}
				},
				data: [7, 5, 9, 4, 8]
			},
			{
				name: '产品3产能',
				type: 'bar',
				stack: '总量',
				itemStyle: {
					normal: {
						color: '#CD4D4E'
					}
				},
				data: [8, 4, 7, 7, 6]
			}
		]
	};
	myCostChart.setOption(option);
}

function getFinishProcess(domId, value, color1, color2) {
	var myChart = echarts.init(document.getElementById(domId));
	//象形柱图
	var memeryRateOption = {
		grid: {
			top: '10%',
			left: '8%',
			right: '8%',
			bottom: '10%',
			containLabel: true
		},
		yAxis: {
			data: ['reindeer'],
			inverse: true,
			axisLine: {
				show: false
			},
			axisTick: {
				show: false
			},
			axisLabel: {
				show: false,
				margin: 30,
				textStyle: {
					fontSize: 14
				}
			},
			axisPointer: {
				label: {
					show: true,
					margin: 30
				}
			}
		},
		xAxis: {
			splitLine: {
				show: false
			},
			axisLabel: {
				show: false
			},
			axisTick: {
				show: false
			},
			axisLine: {
				show: false
			}
		},
		series: [{
			type: 'pictorialBar',
			barGap: '-100%',
			color: '#383838',
			symbolRepeat: true,
			symbolMargin: '35%',
			symbolSize: ['40%', '90%'],
			data: [{
				value: 10,
				symbol: 'rect'
			}]
		}, {
			type: 'pictorialBar',
			symbol: 'rect',
			symbolRepeat: true,
			symbolMargin: '35%',
			symbolSize: ['40%', '90%'],
			itemStyle: {
				color: new echarts.graphic.LinearGradient(
					0, 0, 1, 1, [{
							offset: 0.2,
							color: color1
						},
						{
							offset: 1,
							color: color2
						}
					]
				),
			},

			barCategoryGap: '30%',
			data: [{
				value: value,
			}]
		}]
	};
	myChart.setOption(memeryRateOption);
}

function getPieChart(domId) {
	var myChart = echarts.init(document.getElementById(domId));
	let data = []
	var option = {
		title: {
			text: '原料库存量统计',
			left: 'center',
			top:'15',
			textStyle: {
				fontSize: 20,
				fontWeight: '500',
				color: '#fff' // 主标题文字颜色
			}
		},
		textStyle: {
			color: '#fff',
			fontSize: 12
		},
		tooltip: {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c} ({d}%)"
		},
		legend: {
			// type: 'scroll',
			orient: 'vertical',
			left: 'center',
			bottom: 17,
			icon: 'circle',
			data: data.legendData,
			selected: data.selected,
			textStyle: {
				color: '#ddd',
				fontSize: 11
			},
			width: 150,
			itemWidth: 14,
			itemHeight: 12,
			orient: 'horizontal'
		},
		series: [{
			type: 'pie',
			radius: '50%',
			center: ['50%', '44%'],
			data: [{
					value: '21',
					name: '单铜纸',
					selected: false,
					itemStyle: {
						color: '#61C2C8'
					}
				},
				{
					value: '33',
					name: '金卡纸',
					selected: false,
					itemStyle: {
						color: '#32BAE0'
					}
				},
				{
					value: '28',
					name: '银卡纸',
					selected: false,
					itemStyle: {
						color: '#4AA6D9'
					}
				},
				{
					value: '56',
					name: '牛皮纸',
					selected: false,
					itemStyle: {
						color: '#3479BE'
					}
				},
				{
					value: '12',
					name: '双铜纸',
					selected: false,
					itemStyle: {
						color: '#305BA9'
					}
				},
				{
					value: '40',
					name: '特种纸',
					selected: false,
					itemStyle: {
						color: '#5352A1'
					}
				}
			],
			selectedMode: 'multiple',
			selectedOffset: 16,
			itemStyle: {
				emphasis: {
					shadowBlur: 10,
					shadowOffsetX: 0,
					shadowColor: 'rgba(0, 0, 0, 0.5)'
				}
			},
			label: {
				show: false,
				fontSize: 14,
				position: 'outside',
				formatter: '{c}%'
			},
			labelLine: {
				show: false,
				length: 5,
				length2: 10
			},
		}]
	};
	myChart.setOption(option);
}

function getQuarterChart(id, title, color1, color2, value) {
	var myCostChart = echarts.init(document.getElementById(id));
	var option = {
		title: {
			text: title,
			subtext: value + '%',
			left: 'center',
			top: '22%',
			textStyle: {
				fontSize: 12,
				fontWeight: '400',
				color: '#fff' // 主标题文字颜色
			},
			subtextStyle: {
				fontSize: 22,
				fontWeight: '400',
				color: '#eee' // 主标题文字颜色
			},

		},
		tooltip: {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c} ({d}%)"
		},
		legend: {
			orient: 'vertical',
			left: 'left',
			data: ['占有率']
		},
		series: [{
				name: 'Line 1',
				type: 'pie',
				clockWise: false,
				center: ['50%', '50%'],
				radius: [43, 44],
				hoverAnimation: false,
				animation: false,
				data: [{
						value: 100 - value,
						name: 'invisible',
						label: {
							show: false
						},
						labelLine: {
							show: false
						},
						itemStyle: {
							normal: {
								color: '#3B3850', //未完成的圆环的颜色
								borderColor: '#3B3850',
								borderWidth: 4,
							}
						}
					}, {
						value: value,
						name: '01',
						label: {
							normal: {
								show: false,
								position: 'center',
								color: '#fff',
								fontSize: 40,
								formatter: function(value) {
									return value.value + '%';
								}
							}
						},
						labelLine: {
							show: false
						},
						itemStyle: {
							normal: {
								borderWidth: 4,
								borderColor: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
									offset: 0,
									color: color1
								}, {
									offset: 1,
									color: color2
								}]),
								color: new echarts.graphic.LinearGradient(
									0, 0, 0, 1, [{
											offset: 0,
											color: color1
										},
										{
											offset: 1,
											color: color2
										}
									]
								)
							}
						}
					}

				]
			}

		]
	};
	myCostChart.setOption(option);
}

function getYearTime(num) {
	var date = new Date();
	var nowYear = date.getFullYear();
	return nowYear + num;
}

function getAllYears(num) {
	var date = new Date();
	var lastYear = date.getFullYear() - 1;
	var dateArr = [];
	for(var i = 0; i < num; i++) {
		dateArr.push(lastYear - i)
	}
	return dateArr.reverse();
}

//获取三天后日期
function getNowTime() {
	var mydate = new Date();
	var interTimes = 30 * 24 * 60 * 60 * 1000;
	var date = new Date(Date.parse(mydate) + interTimes);
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var strDate = date.getDate();
	if(month >= 1 && month <= 9) {
		month = "0" + month;
	}
	if(strDate >= 0 && strDate <= 9) {
		strDate = "0" + strDate;
	}
	return year + '-' + month + '-' + strDate;
}

function getRecentChineseYears(num) {
	var date = new Date();
	var lastYear = date.getFullYear() - 1;
	var dateArr = [];
	for(var i = 0; i < num; i++) {
		var newYear = lastYear - i;
		dateArr.push(newYear.toString().substring(2, newYear.length) + "年")
	}
	return dateArr.reverse();
}

function getAllMonths() {
	var months = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
	return months;
}