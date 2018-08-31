$(function() {
	productLeftTopOne();
	productLeftTopTwo();
	productTwoLeftOne();
	productTwoLeftTwo();
	productThreeLeftOne();
	productThreeLeftTwo();
	productFourLeftOne();

	productBoxOne();
	productBoxTwo();
	productBoxThree();
	productBoxFour();
});

function productBoxFour() {
	var myChartLi = echarts.init(document.getElementById("chartBoxFourle"));
	var option = {
		backgroundColor: '#182551',
		title: {
			text: "品牌互动词云图",
			textStyle: {
				color: "#fff",
				fontSize: 16
			},
			left: "center"
		},
		series: [{
			type: 'wordCloud',
			gridSize: 3,
			sizeRange: [20, 30],
			rotationRange: [-90, 90],
			shape: 'pentagon',
			width: 800,
			height: 300,

			drawOutOfBound: true,
			textStyle: {
				normal: {
					color: function() {
						return 'rgb(' + [
							Math.round(Math.random() * 160),
							Math.round(Math.random() * 160),
							Math.round(Math.random() * 160)
						].join(',') + ')';
					},
					fontSize:12
				},
				emphasis: {
					shadowBlur: 20,
					shadowColor: '#333'
				}
			},
			data: [{
					name: '广西壮族自治区 ',
					value: 50,
					textStyle: {
						normal: {
							color: '#5e22e8'
						},
						emphasis: {
							color: 'red'
						}
					}
				},
				{
					name: '年代',
					value: 200,
					textStyle: {
						normal: {
							color: '#9c29cc'
						},
						emphasis: {
							color: 'red'
						}
					}
				},
				{
					name: '深圳市',
					value: 200,
					textStyle: {
						normal: {
							color: '#a90beb'
						},
						emphasis: {
							color: 'red'
						}
					}
				},
				{
					name: '慕思',
					value: 200,
					textStyle: {
						normal: {
							color: '#6fa22c'
						},
						emphasis: {
							color: 'red'
						}
					}
				},
				{
					name: '床垫',
					value: 200,
					textStyle: {
						normal: {
							color: '#6e1b86'
						},
						emphasis: {
							color: 'red'
						}
					}
				},
				{
					name: '男',
					value: 400,
					textStyle: {
						normal: {
							color: '#22ba31'
						},
						emphasis: {
							color: 'red'
						}
					}
				},
				{
					name: '女',
					value: 200,
					textStyle: {
						normal: {
							color: '#22ba31'
						},
						emphasis: {
							color: 'red'
						}
					}
				},
				{
					name: '中国',
					value: 150,
					textStyle: {
						normal: {
							color: '#e424be'
						},
						emphasis: {
							color: 'red'
						}
					}
				},
				{
					name: '睡眠',
					value: 150,
					textStyle: {
						normal: {
							color: '#e424be'
						},
						emphasis: {
							color: 'red'
						}
					}
				},
				{
					name: '集团',
					value: 965,
					textStyle: {
						normal: {
							color: '#3933b1'
						},
						emphasis: {
							color: 'red'
						}
					}
				},
				{
					name: '飞天',
					value: 200,
					textStyle: {
						normal: {
							color: '#3933b1'
						},
						emphasis: {
							color: 'red'
						}
					}
				},
				{
					name: '广东省',
					value: 200,
					textStyle: {
						normal: {
							color: '#3933b1'
						},
						emphasis: {
							color: 'red'
						}
					}
				},
				{
					name: '湖北省',
					value: 200,
					textStyle: {
						normal: {
							color: '#7d9619'
						},
						emphasis: {
							color: 'red'
						}
					}
				},
				{
					name: '香港',
					value: 200,
					textStyle: {
						normal: {
							color: '#655206'
						},
						emphasis: {
							color: 'red'
						}
					}
				},
				{
					name: '梧州市',
					value: 200,
					textStyle: {
						normal: {
							color: '#6c4871'
						},
						emphasis: {
							color: 'red'
						}
					}
				},
				{
					name: '寝具',
					value: 200,
					textStyle: {
						normal: {
							color: '#5e22e8'
						},
						emphasis: {
							color: 'red'
						}
					}
				},
				{
					name: '白酒',
					value: 200,
					textStyle: {
						normal: {
							color: '#3366cc'
						},
						emphasis: {
							color: 'red'
						}
					}
				},
				{
					name: '香型',
					value: 200,
					textStyle: {
						normal: {
							color: '#2c927b'
						},
						emphasis: {
							color: 'red'
						}
					}
				},
				{
					name: '健康',
					value: 200,
					textStyle: {
						normal: {
							color: '#d87de6'
						},
						emphasis: {
							color: 'red'
						}
					}
				},
				{
					name: '除',
					value: 200,
					textStyle: {
						normal: {
							color: '#a528b8'
						},
						emphasis: {
							color: 'red'
						}
					}
				},
				{
					name: '青春',
					value: 200,
					textStyle: {
						normal: {
							color: '#ee6059'
						},
						emphasis: {
							color: 'red'
						}
					}
				},
				{
					name: '理想',
					value: 200,
					textStyle: {
						normal: {
							color: '#d21588'
						},
						emphasis: {
							color: 'red'
						}
					}
				},
				{
					name: '酱',
					value: 200,
					textStyle: {
						normal: {
							color: '#f7aad9'
						},
						emphasis: {
							color: 'red'
						}
					}
				},
				{
					name: '茅台',
					value: 400,
					textStyle: {
						normal: {
							color: '#5ed03f'
						},
						emphasis: {
							color: 'red'
						}
					}
				},
				{
					name: '慕',
					value: 200,
					textStyle: {
						normal: {
							color: '#1a6ca0'
						},
						emphasis: {
							color: 'red'
						}
					}
				},
				{
					name: '思',
					value: 200,
					textStyle: {
						normal: {
							color: '#e92126'
						},
						emphasis: {
							color: 'red'
						}
					}
				}
			]
		}]
	}
	myChartLi.setOption(option);
	var array = [42, 52, 41, 38, 47, 57];
	var array1 = [80, 80, 80, 80, 80, 80];
	var myChartRi = echarts.init(document.getElementById('chartBoxFourRi'));
	var option2 = {
		backgroundColor: '#182551',
		animation: false,
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'shadow',
			}
		},
		title: {
			text: "近七天鉴真互动数TOP10排名(次)",
			textStyle: {
				color: "#fff",
				fontSize: 16
			},
			left: "center"
		},
		grid: {
			top: "15%",
			bottom: "10%",
			height: "70%",

			left: "15%",
			right: "10%"

		},
		xAxis: {
			type: 'value',
			position: 'bottom',
			splitLine: {
				show: false,

			},
			axisLabel: {
				show: true,
				rotate: 0,
				textStyle: {
					color: '#fff',
					fontSize: 12
				}
			},
			axisLine: {
				lineStyle: {
					type: 'solid',
					color: "#fff"
				}
			},
		},
		yAxis: {
			type: 'category',
			axisLine: {
				lineStyle: {
					type: 'solid',
					color: "#fff"
				}
			},
			axisLabel: {
				show: true,
				rotate: 0,
				color: '#fff',
				fontSize: 12,

			},

			axisTick: {
				show: true
			},
			data: ['中烟', '小米', 'vivo', '盼盼', '台电科技', '茅台']
		},
		series: [{

			type: 'bar',
			barGap: '-100%',
			label: {
				normal: {
					textStyle: {
						color: '#682d19'
					},
					position: 'left',
					show: false,
					formatter: '{b}'
				}
			},
			itemStyle: {
				normal: {
					color: '#496799',

				}
			},

			data: array1
		}, {
			type: 'bar',
			silent: true,
			barGap: '-100%',
			data: array,
			label: {
				normal: {
					position: 'right',
					show: true,
					textStyle: {
						color: "#fff"
					}
				}
			},
			barWidth: "40%",
			itemStyle: {
				normal: {
					color: '#1FBCD2',

				}
			},

		}]
	}
	myChartRi.setOption(option2);
}

function productBoxThree() {
	var chartle = echarts.init(document.getElementById("chartBoxThreele"));
	var option = {
		backgroundColor: "#182551",
		title: {
			text: "近7天品牌互动数热度排名",

			textStyle: {
				color: "#fff",
				fontSize: 16
			},
			left: "center"
		},

		grid: {
			left: '3%',
			right: '4%',
			bottom: '13%',
			top: "25%",
			containLabel: true
		},
		xAxis: {
			axisLine: {
				show: false,
				lineStyle: {

					color: "#fff"
				}
			},
			axisTick: {
				show: false
			},

			data: ["茅台", "小米", "盼盼", "中烟", "vivo", ]
		},
		yAxis: {
			type: 'category',
			axisLine: {
				onZero: true
			},

			axisLine: {
				lineStyle: {
					color: "#fff"
				}
			},
			boundaryGap: false,
			data: ['0%', "25%", '50%', "75%", '100%']
		},
		series: [{
			type: 'liquidFill',

			radius: '50%',
			center: ["20%", "50%"],
			data: [{
				value: 1,
				itemStyle: {
					normal: {
						color: '#fd4d49'
					}
				}
			}],
			amplitude: 1,
			shape: 'path://M324.234,516.886c0-41.643,0-252.383,0-258.626c0-14.688-11.906-26.594-26.593-26.594c-14.688,0-26.595,11.906-26.595,26.594c0,5.271,0,216.887,0,258.625c-13.383,8.71-22.24,23.791-22.24,40.949c0,26.97,21.863,48.834,48.834,48.834c26.969,0,48.834-21.864,48.834-48.834C346.475,540.676,337.617,525.596,324.234,516.886z',
			backgroundStyle: {
				color: '#fff',
				borderColor: '#fd4d49',
				borderWidth: 2,
			},
			itemStyle: {
				normal: {
					opacity: 0.8,
					shadowBlur: 0
				}
			},
			outline: {
				show: false
			},
			label: {
				normal: {
					formatter: ''
				}
			}
		}, {
			type: 'liquidFill',
			radius: '50%',
			center: ["37%", "50%"],
			data: [{
				value: 0.72,
				itemStyle: {
					normal: {
						color: '#fd4d49'
					}
				}
			}],
			amplitude: 0,
			shape: 'path://M324.234,516.886c0-41.643,0-252.383,0-258.626c0-14.688-11.906-26.594-26.593-26.594c-14.688,0-26.595,11.906-26.595,26.594c0,5.271,0,216.887,0,258.625c-13.383,8.71-22.24,23.791-22.24,40.949c0,26.97,21.863,48.834,48.834,48.834c26.969,0,48.834-21.864,48.834-48.834C346.475,540.676,337.617,525.596,324.234,516.886z',
			backgroundStyle: {
				color: '#fff',
				borderColor: '#fd4d49',
				borderWidth: 2,
			},
			itemStyle: {
				normal: {
					opacity: 0.8,
					shadowBlur: 0
				}
			},
			outline: {
				show: false
			},
			label: {
				normal: {
					formatter: ''
				}
			}
		}, {
			type: 'liquidFill',
			radius: '50%',
			center: ["53.5%", "50%"],
			data: [{
				value: 0.42,
				itemStyle: {
					normal: {
						color: '#fd4d49'
					}
				}
			}],
			amplitude: 0,
			shape: 'path://M324.234,516.886c0-41.643,0-252.383,0-258.626c0-14.688-11.906-26.594-26.593-26.594c-14.688,0-26.595,11.906-26.595,26.594c0,5.271,0,216.887,0,258.625c-13.383,8.71-22.24,23.791-22.24,40.949c0,26.97,21.863,48.834,48.834,48.834c26.969,0,48.834-21.864,48.834-48.834C346.475,540.676,337.617,525.596,324.234,516.886z',
			backgroundStyle: {
				color: '#fff',
				borderColor: '#fd4d49',
				borderWidth: 2,
			},
			itemStyle: {
				normal: {
					opacity: 0.8,
					shadowBlur: 0
				}
			},
			outline: {
				show: false
			},
			label: {
				normal: {
					formatter: ''
				}
			}
		}, {
			type: 'liquidFill',
			radius: '50%',
			center: ["71%", "50%"],
			data: [{
				value: 0.32,
				itemStyle: {
					normal: {
						color: '#fd4d49'
					}
				}
			}],
			amplitude: 0,
			shape: 'path://M324.234,516.886c0-41.643,0-252.383,0-258.626c0-14.688-11.906-26.594-26.593-26.594c-14.688,0-26.595,11.906-26.595,26.594c0,5.271,0,216.887,0,258.625c-13.383,8.71-22.24,23.791-22.24,40.949c0,26.97,21.863,48.834,48.834,48.834c26.969,0,48.834-21.864,48.834-48.834C346.475,540.676,337.617,525.596,324.234,516.886z',
			backgroundStyle: {
				color: '#fff',
				borderColor: '#fd4d49',
				borderWidth: 2,
			},
			itemStyle: {
				normal: {
					opacity: 0.8,
					shadowBlur: 0
				}
			},
			outline: {
				show: false
			},
			label: {
				normal: {
					formatter: ''
				}
			}
		}, {
			type: 'liquidFill',
			radius: '50%',
			center: ["87%", "50%"],
			data: [{
				value: 0.22,
				itemStyle: {
					normal: {
						color: '#fd4d49'
					}
				}
			}],
			amplitude: 0,
			shape: 'path://M324.234,516.886c0-41.643,0-252.383,0-258.626c0-14.688-11.906-26.594-26.593-26.594c-14.688,0-26.595,11.906-26.595,26.594c0,5.271,0,216.887,0,258.625c-13.383,8.71-22.24,23.791-22.24,40.949c0,26.97,21.863,48.834,48.834,48.834c26.969,0,48.834-21.864,48.834-48.834C346.475,540.676,337.617,525.596,324.234,516.886z',
			backgroundStyle: {
				color: '#fff',
				borderColor: '#fd4d49',
				borderWidth: 2,
			},
			itemStyle: {
				normal: {
					opacity: 0.8,
					shadowBlur: 0
				}
			},
			outline: {
				show: false
			},
			label: {
				normal: {
					formatter: ''
				}
			}
		}, ]
	}
	chartle.setOption(option)

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
			name: '上海',
			value: 25
		},
		{
			name: '攀枝花',
			value: 25
		},
		{
			name: '承德',
			value: 25
		},
		{
			name: '汕尾',
			value: 26
		},
		{
			name: '丹东',
			value: 27
		},
		{
			name: '瓦房店',
			value: 30
		},
		{
			name: '延安',
			value: 38
		},
		{
			name: '咸阳',
			value: 43
		},
		{
			name: '南昌',
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
			name: '泸州',
			value: 57
		},
		{
			name: '克拉玛依',
			value: 72
		}
	];
	var geoCoordMap = {
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
		'上海': [121.48, 31.22],
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
		'昆明': [102.73, 25.04],
		'寿光': [118.73, 36.86],
		'盘锦': [122.070714, 41.119997],
		'长治': [113.08, 36.18],
		'深圳': [114.07, 22.62],
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
		'南昌': [115.89, 28.68],
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
		'大庆': [125.03, 46.58]
	};

	function convertData(data) {
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
	var myChartRi = echarts.init(document.getElementById('chartBoxThreeRi'));
	var option2 = {
		backgroundColor: "#182551",
		title: {
			text: "近七天品牌互动数全国分布(次)",
			textStyle: {
				color: "#fff",
				fontSize: 16
			},
			left: "center",
		},

		visualMap: {
			min: 0,
			max: 52,
			left: '10%',
			top: 'bottom',
			itemWidth: 15,
			itemHeight: 60,
			text: ['High', 'Low'],
			textStyle: {
				color: '#fff'
			},
			seriesIndex: [1],
			inRange: {
				color: ['#00C8F9', '#006edd']
			},
			calculable: true
		},
		geo: {
			map: 'china',
			roam: false,
			label: {
				normal: {
					show: false,
					textStyle: {
						color: 'rgb(255,255,255)',
						fontSize: 10
					}
				},
				emphasis: {
					show: false,
					color: '#fff'
				}

			},
			zoom: 0.9,
			itemStyle: {
				normal: {
					borderColor: 'rgba(0, 0, 0, 0.2)'
				},
				emphasis: {
					areaColor: "rgb(1, 56, 205)",
					shadowOffsetX: 0,
					shadowOffsetY: 0,
					shadowBlur: 20,
					borderWidth: 0,

					shadowColor: 'rgba(0, 0, 0, 0.5)'
				}
			}
		},
		series: [{
				type: 'scatter',
				coordinateSystem: 'geo',
				symbolSize: 0,

				data: convertData(data),
				label: {
					normal: {
						formatter: '{b}',
						position: 'right',
						show: false,

					},
					emphasis: {
						show: true,
					}
				},
				itemStyle: {
					normal: {
						color: '#fff'
					}
				}
			},
			{
				name: 'categoryA',
				type: 'map',
				geoIndex: 0,
				// tooltip: {show: false},
				data: [{
						name: '北京',
						value: 2
					},
					{
						name: '天津',
						value: 12
					},
					{
						name: '上海',
						value: 12
					},
					{
						name: '重庆',
						value: 12
					},
					{
						name: '河北',
						value: 2
					},
					{
						name: '河南',
						value: 12
					},
					{
						name: '云南',
						value: 12
					},
					{
						name: '辽宁',
						value: 12
					},
					{
						name: '黑龙江',
						value: 2
					},
					{
						name: '湖南',
						value: 16
					},
					{
						name: '安徽',
						value: 17
					},
					{
						name: '山东',
						value: 18
					},
					{
						name: '新疆',
						value: 2
					},
					{
						name: '江苏',
						value: 20
					},
					{
						name: '浙江',
						value: 21
					},
					{
						name: '江西',
						value: 22
					},
					{
						name: '湖北',
						value: 23
					},
					{
						name: '广西',
						value: 2
					},
					{
						name: '甘肃',
						value: 2
					},
					{
						name: '山西',
						value: 2
					},
					{
						name: '内蒙古',
						value: 2
					},
					{
						name: '陕西',
						value: 28
					},
					{
						name: '吉林',
						value: 2
					},
					{
						name: '福建',
						value: 30
					},
					{
						name: '贵州',
						value: 31
					},
					{
						name: '广东',
						value: 52
					},
					{
						name: '青海',
						value: 2
					},
					{
						name: '西藏',
						value: 2
					},
					{
						name: '四川',
						value: 2
					},
					{
						name: '宁夏',
						value: 2
					},
					{
						name: '海南',
						value: 37
					},
					{
						name: '台湾',
						value: 2
					},
					{
						name: '香港',
						value: 39
					},
					{
						name: '澳门',
						value: 40
					}
				]
			}
		]
	};
	myChartRi.setOption(option2);
}

function productBoxTwo() {
	var myChartRi = echarts.init(document.getElementById('chartBoxTwoRi'));
	var option = {
		backgroundColor: '#182551',
		title: {
			text: '近7天客户转化率',
			left: 'center',
			textStyle: {
				color: '#fff',
				fontSize: 16
			}
		},

		tooltip: {
			trigger: 'axis',
			axisPointer: {
				lineStyle: {
					color: '#fff'
				}
			}
		},

		grid: {
			left: '2%',
			right: '4%',
			bottom: '5%',
			top: "15%",
			containLabel: true
		},
		xAxis: [{
			type: 'category',
			boundaryGap: false,
			axisLine: {
				lineStyle: {
					color: '#fff'
				}
			},
			axisLabel: {
				margin: 10,
				textStyle: {
					fontSize: 22,
					color: '#fff'
				}
			},
			data: getSevenDay()
		}],
		yAxis: [{
			type: 'value',
			axisTick: {
				show: false
			},
			axisLine: {
				lineStyle: {
					color: '#fff'
				}
			},
			axisLabel: {
				margin: 10,
				formatter: '{value}%',
				textStyle: {
					fontSize: 12,
					color: '#fff',

				}
			},
			splitLine: {
				lineStyle: {
					type: 'dashed',
					color: '#ccc',
					width: 1
				}
			}
		}],
		series: [{

			label: {
				normal: {
					position: 'top',
					show: false,
					textStyle: {
						fontSize: 12,
						color: '#fff'
					},
					formatter: '{c}%',
				}
			},

			type: 'line',
			smooth: true,
			symbol: 'circle',
			symbolSize: 5,
			showSymbol: true,
			lineStyle: {
				normal: {
					width: 1
				}
			},
			areaStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 0,
						color: '#0D62CA'
					}, {
						offset: 0.5,
						color: '#0E5DC4'
					}, {
						offset: 1,
						color: '#1B4D97'
					}], false),
					shadowColor: 'rgba(0, 0, 0, 0.1)',
					shadowBlur: 10
				}
			},
			itemStyle: {
				normal: {
					color: 'rgb(0,136,212)',
					borderColor: 'rgba(0,136,212,0.2)',
					borderWidth: 12

				}
			},
			data: [25, 5, 35, 23, 23, 38, 50]
		}, ]
	}

	function getSevenDay() {
		var myDate = new Date();
		myDate.setDate(myDate.getDate() - 7);
		var dateArr = [];
		var dateTemp;
		var flag = 1;

		for(var i = 0; i < 7; i++) {
			dateTemp = (myDate.getMonth() + 1) + "-" + myDate.getDate();
			dateArr.push(dateTemp);
			myDate.setDate(myDate.getDate() + flag);
			// return ['07-01', '07-02', '07-03', '07-04', '07-05', '07-06', '07-07']
		}
		return ['07-01', '07-02', '07-03', '07-04', '07-05', '07-06', '07-07']; //dateArr

	}
	myChartRi.setOption(option);
	var myChartLe = echarts.init(document.getElementById('chartBoxTwole'));
	var geoCoordMap = {
		'深圳': [114.07, 22.62],
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

	};

	var data = [{
			name: '深圳',
			value: 280
		}, {
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
		}
	];
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

	var convertedData = [
		convertData(data),
		convertData(data.sort(function(a, b) {
			return b.value - a.value;
		}).slice(0, 6))
	];
	data.sort(function(a, b) {
		return a.value - b.value;
	})

	var selectedItems = [];
	var categoryData = [];
	var barData = [];
	//   var maxBar = 30;
	var sum = 0;
	var count = data.length;
	for(var i = 0; i < data.length; i++) {
		categoryData.push(data[i].name);
		barData.push(data[i].value);
		sum += data[i].value;
	}

	var option2 = {
		backgroundColor: '#182551',
		animation: true,
		animationDuration: 1000,
		animationEasing: 'cubicInOut',
		animationDurationUpdate: 1000,
		animationEasingUpdate: 'cubicInOut',
		title: [{
			text: '区域用户分布及对比情况(人)',
			left: 'center',
			textStyle: {
				color: '#fff',
				fontSize: 16
			}
		}],
		toolbox: {
			show: false,
			iconStyle: {
				normal: {
					borderColor: '#fff'
				},
				emphasis: {
					borderColor: '#fff'
				}
			},
			feature: {
				dataZoom: {},
				brush: {
					type: ['rect', 'polygon', 'clear']
				},
				saveAsImage: {
					show: true
				}
			}
		},
		brush: {
			outOfBrush: {
				color: '#abc'
			},
			brushStyle: {
				borderWidth: 2,
				color: 'rgba(0,0,0,0.2)',
				borderColor: 'rgba(0,0,0,0.5)',
			},
			seriesIndex: [0, 1],
			throttleType: 'debounce',
			throttleDelay: 300,
			geoIndex: 0
		},
		geo: {
			map: 'china',
			left: '2%',
			right: '38%',
			top: "20%",
			bottom: "2%",
			center: [106.110698, 30.837793],
			zoom: 0.8,
			label: {
				emphasis: {
					show: false
				}
			},
			roam: false,
			itemStyle: {
				normal: {
					areaColor: '#0564C8',
					borderColor: '#111'
				},
				emphasis: {
					areaColor: '#0143DA'
				}
			}
		},
		tooltip: {
			trigger: 'item'
		},
		grid: {
			right: '5%',
			top: '20%',
			bottom: '5%',
			width: '30%',
			height: '70%'
		},
		xAxis: {
			type: 'value',
			scale: true,
			position: 'top',
			boundaryGap: false,
			splitLine: {
				show: false
			},
			axisLine: {
				show: false,
				lineStyle: {
					color: "#fff"
				}
			},
			axisTick: {
				show: false
			},
			axisLabel: {
				show: false,
				margin: 2,
				textStyle: {
					color: '#fff',
					fontSize: 12
				}
			},
		},
		yAxis: {
			type: 'category',
			//  name: 'TOP 20',
			nameGap: 16,
			axisLine: {
				show: true,
				lineStyle: {
					color: '#fff'
				}
			},
			axisTick: {
				show: false,
				lineStyle: {
					color: '#fff'
				}
			},
			axisLabel: {
				interval: 0,
				textStyle: {
					color: '#fff',
					fontSize: 10
				}
			},
			data: categoryData
		},
		series: [{
			// name: 'pm2.5',
			type: 'scatter',
			coordinateSystem: 'geo',
			data: convertedData[0],
			symbolSize: function(val) {
				return Math.max(val[2] / 10, 8);
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
					color: '#fff',
					position: 'right',
					show: true
				}
			}
		}, {

			type: 'effectScatter',
			coordinateSystem: 'geo',
			data: convertedData[0],
			symbolSize: function(val) {
				return Math.max(val[2] / 15, 8);
			},
			showEffectOn: 'emphasis',
			rippleEffect: {
				brushType: 'stroke'
			},
			hoverAnimation: true,

			itemStyle: {
				normal: {
					color: '#fff',
					shadowBlur: 10,
					shadowColor: '#333'
				}
			},
			zlevel: 1
		}, {
			id: 'bar',
			zlevel: 2,
			type: 'bar',
			symbol: 'none',
			barWidth: '58%',
			label: {
				normal: {
					position: 'right',
					show: true,
					textStyle: {
						fontSize: 12,
						color: '#fff'
					}
				}
			},
			itemStyle: {
				normal: {
					color: '#0564C8',

				}
			},

			data: data
		}]
	};

	function renderBrushed(params) {
		var mainSeries = params.batch[0].selected[0];

		var selectedItems = [];
		var categoryData = [];
		var barData = [];
		var maxBar = 30;
		var sum = 0;
		var count = 0;

		for(var i = 0; i < mainSeries.dataIndex.length; i++) {
			var rawIndex = mainSeries.dataIndex[i];
			var dataItem = convertedData[0][rawIndex];
			var pmValue = dataItem.value[2];

			sum += pmValue;
			count++;

			selectedItems.push(dataItem);
		}

		selectedItems.sort(function(a, b) {
			//   return b.value[2] - a.value[2];
			return a.value - b.value;
		});

		for(var i = 0; i < Math.min(selectedItems.length, maxBar); i++) {
			categoryData.push(selectedItems[i].name);
			barData.push(selectedItems[i].value[2]);
		}

		this.setOption({
			yAxis: {
				data: categoryData
			},
			xAxis: {
				axisLabel: {
					show: !!count
				}
			},
			title: {
				id: 'statistic',
				text: count ? '平均: ' + (sum / count).toFixed(4) : ''
			},
			series: {
				id: 'bar',
				//        sort:'descending',
				data: barData
			}
		});
	}
	myChartLe.setOption(option2);
}

function productBoxOne() {
	var myChartLe = echarts.init(document.getElementById('chartBoxOneLe'));
	var option = option = {
		backgroundColor: '#182551',
		tooltip: {
			trigger: 'axis'
		},
		title: {
			text: '近七天新增用户和原始用户数对比(人)',
			textStyle: {
				color: '#fff',
				fontSize: 16
			},
			left: 'center'
		},
		toolbox: {
			feature: {
				dataView: {
					show: true,
					readOnly: false
				},
				magicType: {
					show: true,
					type: ['line', 'bar']
				},
				restore: {
					show: true
				},
				saveAsImage: {
					show: true
				}
			}
		},
		toolbox: {
			show: false
		},
		legend: {
			data: ['游客数', '新增用户数', '新增用户增长率'],
			textStyle: {
				color: "#fff",
				fontSize: 12
			},
			top: '10%',
			icon: 'circle',
			itemWidth: 14,
			itemHeight: 12
		},
		grid: {
			left: '3%',
			right: '4%',
			bottom: '5%',
			top: "25%",
			height: '70%',
			containLabel: true
		},
		xAxis: [{
			type: 'category',
			data: ['04-01', '04-02', '04-03', '04-04', '04-05', '04-06', '04-07'],
			axisLine: {
				lineStyle: {
					color: '#fff'
				}
			},
			axisLabel: {
				show: true,
				color: '#fff',
				fontSize: 12
			},
		}],
		yAxis: [{
				type: 'value',

				min: 0,
				max: 20,
				interval: 5,
				axisLabel: {
					formatter: '{value}'
				},
				axisLine: {
					lineStyle: {
						color: '#fff'
					}
				}
			},
			{
				type: 'value',
				min: -100,
				max: 300,
				interval: 100,
				axisLabel: {
					formatter: '{value} %'
				},
				axisLine: {
					lineStyle: {
						color: '#fff'
					}
				}
			}
		],
		series: [{
				name: '游客数',
				type: 'bar',
				itemStyle: {
					normal: {
						color: '#52F9F2'
					}

				},
				label: {
					normal: {
						position: 'top',
						show: false,
						textStyle: {
							color: '#fff'
						}
					}

				},

				data: [4, 3, 7.0, 9, 5, 16, 3]
			},
			{
				name: '新增用户数',
				type: 'bar',
				itemStyle: {
					normal: {
						color: '#A3CDFC'
					}

				},
				label: {
					normal: {
						position: "top",
						show: false,
						textStyle: {
							color: '#fff'
						}
					}
				},
				data: [2, 1, 3, 3, 3, 3, 1]
			},
			{
				name: '新增用户增长率',
				type: 'line',
				smooth: true,
				itemStyle: {
					normal: {
						lineStyle: {
							color: 'rgb(24,251, 254)'
						}
					}
				},
				areaStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
							offset: 0,
							color: 'rgba(24,251, 254, 0.6)'
						}, {
							offset: 1,
							color: 'rgba(76,79, 150, 0.6)'

						}], false),
						shadowColor: 'rgba(30, 73, 161, 0.1)',
						shadowBlur: 10
					}
				},
				label: {
					normal: {
						position: 'top',
						show: false,
						textStyle: {
							color: '#fff'
						}
					}
				},
				yAxisIndex: 1,
				data: [-50, 300, -30, 200, -20, 270, 210]
			}
		]
	};
	myChartLe.setOption(option);

	var myChartRi = echarts.init(document.getElementById('chartBoxOneRi'));
	var option2 = {
		backgroundColor: '#182551',
		title: {
			text: '24小时用户活跃度(人)',
			textStyle: {
				fontSize: 16,
				color: '#fff',
			},
			left: 'center'
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				lineStyle: {
					color: '#57617B'
				}
			}
		},
		legend: {
			icon: 'circle',
			itemWidth: 14,
			itemHeight: 12,
			itemGap: 33,
			data: ['今日', '昨日'],
			left: 'center',
			textStyle: {
				fontSize: 12,
				color: '#F1F1F3'
			},
			top: '10%'
		},
		grid: {
			left: '3%',
			right: '4%',
			bottom: '3%',
			top: "25%",
			height: '70%',
			containLabel: true
		},
		xAxis: [{
			type: 'category',
			boundaryGap: false,
			axisLine: {
				lineStyle: {
					color: '#fff'
				}
			},
			data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
		}],
		yAxis: [{
			type: 'value',
			axisTick: {
				show: false
			},
			axisLine: {
				lineStyle: {
					color: '#fff'
				}
			},
			axisLabel: {
				margin: 10,
				textStyle: {
					fontSize: 12,
					color: '#fff'
				}
			},
			splitLine: {
				lineStyle: {
					color: '#fff'
				}
			}
		}],
		series: [{
			name: '今日',
			type: 'line',
			smooth: true,
			lineStyle: {
				normal: {
					width: 1
				}
			},
			label: {
				normal: {
					position: 'top',
					show: false,
					textStyle: {
						fontSize: 14,
						color: 'rgba(111,247, 243, 0.8)'
					},

				}
			},
			areaStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 0,
						color: 'rgba(111,247, 243, 0.8)'
					}, {
						offset: 0.8,
						color: 'rgba(42, 61, 120, 0.8)'
					}], false),
					shadowColor: 'rgba(42, 61, 120,0.1)',
					shadowBlur: 10
				}
			},
			itemStyle: {
				normal: {
					color: 'rgb(0,136,212)'
				}
			},
			data: [2, 0, 1, 0, 0, 0, 0, 0, 2, 1, 0, 3, 1, 1, 1, 0, 5, 2]
		}, {
			name: '昨日',
			type: 'line',
			smooth: true,
			lineStyle: {
				normal: {
					width: 1
				}
			},
			label: {
				normal: {
					position: 'top',
					show: false,
					textStyle: {
						fontSize: 14,
						color: '#fff'
					},

				}
			},
			areaStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 0,
						color: 'rgba(30, 73, 161, 0.8)'
					}, {
						offset: 0.8,
						color: 'rgba(18, 93, 194, 0.8)'
					}], false),
					shadowColor: 'rgba(30, 73, 161, 0.1)',
					shadowBlur: 10
				}
			},
			itemStyle: {
				normal: {
					color: 'rgb(30, 73, 161)'
				}
			},
			data: [2, 0, 2, 1, 0, 0, 3, 0, 6, 2, 0, 2, 3, 2, 3, 1, 1, 1, 1, 1, 2, 2, 3, 1, 2]
		}, ]
	};
	myChartRi.setOption(option2);
}

function productFourLeftOne() {
	var chartRi = echarts.init(document.getElementById("chartFourRi"));
	var option = {
		backgroundColor: '#182551',
		title: {
			text: '收发存统计',
			left: 'center',
			textStyle: {
				fontSize: 16,
				color: '#fff' // 主标题文字颜色
			},

		},
		grid: {
			top: '15%',
			left: '1%',
			right: '4%',
			bottom: '5%',
			containLabel: true
		},
		xAxis: {
			data: ['单铜纸', '金卡纸', '银卡纸', '牛皮纸', '双铜纸', '坑纸', '特种纸', '纸板'],
			axisLabel: {
				show: true,
				rotate: 0,
				nameLocation: 'start',
				position: 'bottom',
				margin: 20,
				color: '#fff',
				fontSize: 12,
				interval: 0
			},
			axisTick: {
				show: false
			},
			axisLine: {
				show: false
			}
		},
		yAxis: {
			axisLine: {
				show: false
			},
			axisTick: {
				show: false
			},
			axisLabel: {
				show: true,
				rotate: 0,
				nameLocation: 'start',
				margin: 15,
				color: '#fff',
				fontSize: 12,
				formatter: function(value) {
					if(value != 0 && Math.abs(value) >= 1000) {
						return value / 1000 + '千';
					} else {
						return value;
					}
				}
			},
			splitLine: {
				show: true,
				lineStyle: {
					color: '#1A6082',
					width: 1,
					type: 'dashed'
				}
			}
		},
		dataZoom: [{
			type: 'inside'
		}],
		series: [{
				name: '收量',
				type: 'bar',
				stack: '数量',
				barWidth: '48%',
				label: {
					show: true,
					position: 'top',
					color: '#E9EDF0',
					fontSize: 12,
				},
				itemStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(
							0, 0, 0, 1, [{
									offset: 0.2,
									color: '#50D4D6'
								},
								{
									offset: 1,
									color: '#066099'
								}
							]
						)
					}
				},
				data: [3339, 3034, 2969, 2780, 2590, 2107, 1890, 1682]
			},
			{
				name: '存量',
				type: 'bar',
				stack: '数量',
				barWidth: '50%',
				label: {
					show: true,
					position: 'bottom',
					color: '#E9EDF0',
					fontSize: 12,
				},
				itemStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(
							0, 0, 0, 1, [{
									offset: 0,
									color: '#50D4D6'
								},
								{
									offset: 1,
									color: '#066099'
								}
							]
						)
					}
				},
				data: [-1858, -1975, -2620, -1423, -2132, -1676, -1060, -1288]
			}
		]
	};
	chartRi.setOption(option);

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
	var chartLe = echarts.init(document.getElementById("chartFourle"));
	var option = {
		backgroundColor: '#182551',
		title: {
			text: '经销商分布图',

			left: 'center',
			textStyle: {
				color: '#fff',
				fontSize: 16
			}
		},
		geo: {
			map: 'china',
			label: {
				emphasis: {
					show: false
				}
			},
			roam: false,
			itemStyle: {
				normal: {
					areaColor: '#B2B2B2',
					borderColor: '#fff',
					areaColor: "rgb(60,64,73)"
				},
				emphasis: {
					areaColor: '#999'
				}
			},
			zoom: 1
		},
		series: [{
				name: '人数',
				type: 'scatter',
				coordinateSystem: 'geo',
				data: convertData(data),
				symbolSize: function(val) {
					return val[2] / 24;
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
						color: '#ddb926',

					},

				}
			},
			{
				name: '排行前5',
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

				symbolSize: function(val) {
					return val[2] / 10;
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
						color: '#f4e925',
						shadowBlur: 10,
						shadowColor: '#333'
					}
				},
				zlevel: 1
			}
		]
	}
	chartLe.setOption(option)
}

function productThreeLeftOne() {
	var myChartLe = echarts.init(document.getElementById("chartThreele"))
	var data = [{
			name: '珠海',
			value: 42
		},

		{
			name: '乌鲁木齐',
			value: 84
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
			name: '深圳',
			value: 166
		},

		{
			name: '贵阳',
			value: 148
		}

	];
	var geoCoordMap = {

		'深圳': [114.07, 22.62],

		'合肥': [117.27, 31.86],
		'上海': [121.48, 31.22],

		'珠海': [113.52, 22.3],

		'贵阳': [106.71, 26.57],

		'北京': [116.46, 39.92],

		'乌鲁木齐': [87.68, 43.77],

		'济南': [117, 36.65],

		'长沙': [113, 28.21],

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
	var convertedData = [
		convertData(data),
		convertData(data.sort(function(a, b) {
			return b.value - a.value;
		}).slice(0, 6))
	];
	data.sort(function(a, b) {
		return a.value - b.value;
	})

	var option = {

		backgroundColor: '#182551',
		title: {
			text: '窜货分布图',
			left: 'center',
			textStyle: {
				color: '#fff',
				fontSize: 16
			}
		},
		tooltip: {
			trigger: 'item'
		},

		geo: {
			map: 'china',
			label: {
				emphasis: {
					show: false
				}
			},
			roam: false,
			itemStyle: {
				normal: {
					areaColor: '#0064C8',
					borderColor: '#fff'
				},
				emphasis: {
					areaColor: '#999'
				}
			},
			zoom: 1
		},
		series: [{

				type: 'scatter',
				coordinateSystem: 'geo',
				data: convertData(data),
				symbolSize: function(val) {
					return val[2] / 24;
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
						color: '#ddb926'
					}
				}
			},
			{

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
				symbolSize: function(val) {
					return val[2] / 10;
				},
				showEffectOn: 'render',
				rippleEffect: {
					brushType: 'stroke'
				},
				hoverAnimation: false,
				label: {
					normal: {
						formatter: '{b}',
						position: 'right',
						show: false
					}
				},
				itemStyle: {
					normal: {
						color: '#f4e925',
						shadowBlur: 10,
						shadowColor: '#333'
					}
				},
				zlevel: 1
			}
		]
	}
	myChartLe.setOption(option);

}

function productThreeLeftTwo() {
	var array = [30, 58, 68, 80, 140, 180];
	var array1 = [300, 300, 300, 300, 300, 300];
	var myChartRi = echarts.init(document.getElementById('chartThreeRi'));
	var option2 = {
		backgroundColor: '#182551',
		animation: false,
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'shadow',
			}
		},
		title: {
			text: "用户获取渠道排名(万次)",
			textStyle: {
				color: "#fff",
				fontSize: 16
			},
			left: "center"
		},

		grid: {
			top: "15%",
			bottom: "10%",
			height: "70%",
			left: "9%"
		},
		xAxis: {
			type: 'value',
			position: 'bottom',
			splitLine: {
				show: false,

			},
			axisLabel: {
				show: true,
				rotate: 0,
				fontSize: 12,
				color: '#fff'
			},
			axisLine: {
				lineStyle: {
					color: "#fff"
				}
			}
		},
		yAxis: {
			splitNumber: 25,
			type: 'category',
			axisLine: {
				lineStyle: {
					type: 'solid',
					color: "#fff"
				},

			},
			axisLabel: {
				show: true,
				rotate: 0,
				color: '#ffffff',
				fontSize: 12

			},

			axisTick: {
				show: true
			},
			data: ['微博', '二维码', 'Web', '微信', 'App', '其他']
		},
		series: [{

			type: 'bar',
			label: {
				normal: {
					textStyle: {
						color: '#682d19'
					},
					position: 'left',
					show: false,
					formatter: '{b}'
				}
			},
			itemStyle: {
				normal: {
					color: '#496799',
				}
			},

			data: array1
		}, {
			type: 'bar',
			silent: true,
			barGap: '-100%',
			data: array,
			barWidth: "40%",
			label: {
				normal: {
					position: 'right',
					show: true,
					textStyle: {
						color: "#fff"
					}
				}
			},
			itemStyle: {
				normal: {
					color: '#ff0',

				}
			},

		}]
	}
	myChartRi.setOption(option2);
}

function productTwoLeftOne() {
	var myChartRi = echarts.init(document.getElementById('chartTwoRi'));
	var option2 = {
		title: {
			text: "本月用户活跃趋势图(万次)",
			textStyle: {
				color: "#fff",
				fontSize: 16
			},
			left: "center"
		},
		legend: {
			data: ["活跃次数"],
			top: "10%",
			right: '5%',
			icon: 'circle',
			itemWidth: 14,
			itemHeight: 12,
			textStyle: {
				color: "#fff"
			}
		},
		color: ['#3398DB'],
		backgroundColor: "#182551",
		tooltip: {
			trigger: 'axis',
			axisPointer: { // 坐标轴指示器，坐标轴触发有效
				type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
			}
		},
		grid: {
			left: '3%',
			right: '4%',
			bottom: '3%',
			height: "80%",
			containLabel: true
		},
		xAxis: [{
			type: 'category',
			data: getMonDay(),
			axisTick: {
				alignWithLabel: true
			},
			axisLabel: {
				textStyle: {
					color: '#fff',
					fontSize: 13
				}

			},
			axisLine: {
				lineStyle: {
					color: "#fff"
				}
			}
		}],
		yAxis: [{
				type: 'value',
				axisLabel: {
					textStyle: {
						color: '#fff'
					},
					fontSize: 13
				},
				splitLine: {
					show: false
				},
				axisLine: {
					lineStyle: {
						color: "#fff"
					}
				}

			}

		],
		series: [{
			name: '活跃次数',
			type: 'bar',
			barWidth: '40%',
			data: creatData()
		}]
	};
	myChartRi.setOption(option2);

}

function productTwoLeftTwo() {
	var array = [21000, 60000, 60000, 70000, 90000];
	var myChartLe = echarts.init(document.getElementById('chartTwole'));
	var option = {
		backgroundColor: '#182551',
		animation: false,
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'shadow',
			}
		},
		title: {
			text: "用户各阶段体量分布(万人)",
			textStyle: {
				color: "#fff",
				fontSize: 16
			},
			left: "center"
		},

		grid: {
			top: "15%",
			bottom: "12%",
		},
		xAxis: {
			type: 'value',
			position: 'bottom',
			splitLine: {
				show: false,

			},
			axisLine: {
				lineStyle: {
					type: 'solid',
					color: "#fff"
				}
			},
			axisLabel: {
				show: true,
				rotate: 0,
				color: '#fff',
				fontSize: 13,
				formatter: function(value) {
					if(value > 10000) {
						return value / 10000 + 'w';
					} else {
						return value;
					}

				}
			},
		},
		yAxis: {
			splitNumber: 25,
			type: 'category',
			axisLine: {
				lineStyle: {
					type: 'solid',
					color: "#fff"
				}
			},
			axisLabel: {
				show: true,
				rotate: 0,
				color: '#fff',
				margin: 12,
				fontSize: 12
			},

			axisTick: {
				show: true
			},
			data: ['反馈', '验收', '派送', '生产', '预购']
		},
		series: [{
			type: 'bar',
			silent: false,
			data: array,
			barWidth: "40%",
			itemStyle: {
				normal: {
					color: function(params) {
						var colorArr = ['#0064C8', '#0064C8', '#0064C8', '#0064C8', '#4EE8C5'];
						return colorArr[params.dataIndex]
					},
					borderColor: '#eee',
					borderWidth: 2,

				}
			}

		}]
	}
	myChartLe.setOption(option);
}

function productLeftTopOne() {
	var myChartRi = echarts.init(document.getElementById('chartOneRi'));
	var option2 = {
		backgroundColor: "#182551",
		title: {
			text: '消费人群分布',
			textStyle: {
				color: "#fff",
				fontSize: 16
			},
			x: 'center',
			y: 'top'
		},
		dataRange: {
			min: 0,
			max: 1659821,
			text: ['High', 'Low'],
			textStyle: {
				color: "#fff"
			},
			show: false,
			realtime: false,
			calculable: true,
			color: ['orangered', 'yellow', '#0064C8']
		},

		geo: {
			roam: false,
			label: {
				normal: {
					show: true,
					textStyle: {
						color: '#f00'
					}
				},
				emphasis: {
					show: true,
					color: '#fff'
				}

			},
			itemStyle: {
				normal: {
					borderColor: 'rgba(0, 0, 0, 0.2)'
				},
				emphasis: {
					areaColor: "rgb(1, 56, 205)",
					shadowOffsetX: 0,
					shadowOffsetY: 0,
					shadowBlur: 20,
					borderWidth: 0,
					shadowColor: 'rgba(0, 0, 0, 0.5)'
				}
			}
		},
		series: [{
			name: 'World Population (2010)',
			type: 'map',
			mapType: 'world',
			roam: true,
			mapLocation: {
				y: 60
			},
			label: {
				normal: {
					position: 'right',
					show: false,
					color: "#fff"
				},
				emphasis: {
					show: true,
					color: "#fff"
				}
			},
			itemStyle: {
				normal: {
					areaColor: '#0064C8',
				}
			},
			data: [{
					name: 'Afghanistan',
					value: 28397.812
				},
				{
					name: 'Angola',
					value: 19549.124
				},
				{
					name: 'Albania',
					value: 3150.143
				},
				{
					name: 'United Arab Emirates',
					value: 8441.537
				},
				{
					name: 'Argentina',
					value: 40374.224
				},
				{
					name: 'Armenia',
					value: 2963.496
				},
				{
					name: 'French Southern and Antarctic Lands',
					value: 268.065
				},
				{
					name: 'Australia',
					value: 22404.488
				},
				{
					name: 'Austria',
					value: 8401.924
				},
				{
					name: 'Azerbaijan',
					value: 9094.718
				},
				{
					name: 'Burundi',
					value: 9232.753
				},
				{
					name: 'Belgium',
					value: 10941.288
				},
				{
					name: 'Benin',
					value: 9509.798
				},
				{
					name: 'Burkina Faso',
					value: 15540.284
				},
				{
					name: 'Bangladesh',
					value: 151125.475
				},
				{
					name: 'Bulgaria',
					value: 7389.175
				},
				{
					name: 'The Bahamas',
					value: 66402.316
				},
				{
					name: 'Bosnia and Herz.',
					value: 3845.929
				},
				{
					name: 'Belarus',
					value: 9491.07
				},
				{
					name: 'Belize',
					value: 308.595
				},
				{
					name: 'Bermuda',
					value: 64.951
				},
				{
					name: 'Bolivia',
					value: 716.939
				},
				{
					name: 'Brazil',
					value: 195210.154
				},
				{
					name: 'Brunei',
					value: 27.223
				},
				{
					name: 'Bhutan',
					value: 716.939
				},
				{
					name: 'Botswana',
					value: 1969.341
				},
				{
					name: 'Central African Rep.',
					value: 4349.921
				},
				{
					name: 'Canada',
					value: 135982.24
				},
				{
					name: 'Switzerland',
					value: 7830.534
				},
				{
					name: 'Chile',
					value: 17150.76
				},
				{
					name: 'China',
					value: 1359821.465
				},
				{
					name: 'Ivory Coast',
					value: 60508.978
				},
				{
					name: 'Cameroon',
					value: 20624.343
				},
				{
					name: 'Dem. Rep. Congo',
					value: 62191.161
				},
				{
					name: 'Congo',
					value: 3573.024
				},
				{
					name: 'Colombia',
					value: 46444.798
				},
				{
					name: 'Costa Rica',
					value: 4669.685
				},
				{
					name: 'Cuba',
					value: 11281.768
				},
				{
					name: 'Northern Cyprus',
					value: 1.468
				},
				{
					name: 'Cyprus',
					value: 1103.685
				},
				{
					name: 'Czech Rep.',
					value: 10553.701
				},
				{
					name: 'Germany',
					value: 83017.404
				},
				{
					name: 'Djibouti',
					value: 834.036
				},
				{
					name: 'Denmark',
					value: 5550.959
				},
				{
					name: 'Dominican Rep.',
					value: 10016.797
				},
				{
					name: 'Algeria',
					value: 37062.82
				},
				{
					name: 'Ecuador',
					value: 15001.072
				},
				{
					name: 'Egypt',
					value: 78075.705
				},
				{
					name: 'Eritrea',
					value: 5741.159
				},
				{
					name: 'Spain',
					value: 46182.038
				},
				{
					name: 'Estonia',
					value: 1298.533
				},
				{
					name: 'Ethiopia',
					value: 87095.281
				},
				{
					name: 'Finland',
					value: 5367.693
				},
				{
					name: 'Fiji',
					value: 860.559
				},
				{
					name: 'Falkland Islands',
					value: 49.581
				},
				{
					name: 'France',
					value: 63230.866
				},
				{
					name: 'Gabon',
					value: 1556.222
				},
				{
					name: 'United Kingdom',
					value: 62066.35
				},
				{
					name: 'Georgia',
					value: 4388.674
				},
				{
					name: 'Ghana',
					value: 24262.901
				},
				{
					name: 'Guinea',
					value: 10876.033
				},
				{
					name: 'Gambia',
					value: 1680.64
				},
				{
					name: 'Guinea-Bissau',
					value: 10876.033
				},
				{
					name: 'Eq. Guinea',
					value: 696.167
				},
				{
					name: 'Greece',
					value: 11109.999
				},
				{
					name: 'Greenland',
					value: 56.546
				},
				{
					name: 'Guatemala',
					value: 14341.576
				},
				{
					name: 'French Guiana',
					value: 231.169
				},
				{
					name: 'Guyana',
					value: 786.126
				},
				{
					name: 'Honduras',
					value: 7621.204
				},
				{
					name: 'Croatia',
					value: 4338.027
				},
				{
					name: 'Haiti',
					value: 9896.4
				},
				{
					name: 'Hungary',
					value: 10014.633
				},
				{
					name: 'Indonesia',
					value: 240676.485
				},
				{
					name: 'India',
					value: 120562.648
				},
				{
					name: 'Ireland',
					value: 4467.561
				},
				{
					name: 'Iran',
					value: 240676.485
				},
				{
					name: 'Iraq',
					value: 30962.38
				},
				{
					name: 'Iceland',
					value: 318.042
				},
				{
					name: 'Israel',
					value: 7420.368
				},
				{
					name: 'Italy',
					value: 60508.978
				},
				{
					name: 'Jamaica',
					value: 2741.485
				},
				{
					name: 'Jordan',
					value: 6454.554
				},
				{
					name: 'Japan',
					value: 127352.833
				},
				{
					name: 'Kazakhstan',
					value: 15921.127
				},
				{
					name: 'Kenya',
					value: 40909.194
				},
				{
					name: 'Kyrgyzstan',
					value: 5334.223
				},
				{
					name: 'Cambodia',
					value: 14364.931
				},
				{
					name: 'Dem. Rep. Korea',
					value: 51452.352
				},
				{
					name: 'Kosovo',
					value: 97.743
				},
				{
					name: 'Kuwait',
					value: 2991.58
				},
				{
					name: 'Lao PDR',
					value: 6395.713
				},
				{
					name: 'Lebanon',
					value: 4341.092
				},
				{
					name: 'Liberia',
					value: 3957.99
				},
				{
					name: 'Libya',
					value: 6040.612
				},
				{
					name: 'Sri Lanka',
					value: 20758.779
				},
				{
					name: 'Lesotho',
					value: 2008.921
				},
				{
					name: 'Lithuania',
					value: 3068.457
				},
				{
					name: 'Luxembourg',
					value: 507.885
				},
				{
					name: 'Latvia',
					value: 2090.519
				},
				{
					name: 'Morocco',
					value: 31642.36
				},
				{
					name: 'Moldova',
					value: 103.619
				},
				{
					name: 'Madagascar',
					value: 21079.532
				},
				{
					name: 'Mexico',
					value: 117886.404
				},
				{
					name: 'Macedonia',
					value: 507.885
				},
				{
					name: 'Mali',
					value: 13985.961
				},
				{
					name: 'Myanmar',
					value: 51931.231
				},
				{
					name: 'Montenegro',
					value: 620.078
				},
				{
					name: 'Mongolia',
					value: 2712.738
				},
				{
					name: 'Mozambique',
					value: 23967.265
				},
				{
					name: 'Mauritania',
					value: 3609.42
				},
				{
					name: 'Malawi',
					value: 15013.694
				},
				{
					name: 'Malaysia',
					value: 28275.835
				},
				{
					name: 'Namibia',
					value: 2178.967
				},
				{
					name: 'New Caledonia',
					value: 246.379
				},
				{
					name: 'Niger',
					value: 15893.746
				},
				{
					name: 'Nigeria',
					value: 159707.78
				},
				{
					name: 'Nicaragua',
					value: 5822.209
				},
				{
					name: 'Netherlands',
					value: 16615.243
				},
				{
					name: 'Norway',
					value: 4891.251
				},
				{
					name: 'Nepal',
					value: 26846.016
				},
				{
					name: 'New Zealand',
					value: 4368.136
				},
				{
					name: 'Oman',
					value: 2802.768
				},
				{
					name: 'Pakistan',
					value: 173149.306
				},
				{
					name: 'Panama',
					value: 3678.128
				},
				{
					name: 'Peru',
					value: 29262.83
				},
				{
					name: 'Philippines',
					value: 93444.322
				},
				{
					name: 'Papua New Guinea',
					value: 6858.945
				},
				{
					name: 'Poland',
					value: 38198.754
				},
				{
					name: 'Puerto Rico',
					value: 3709.671
				},
				{
					name: 'Korea',
					value: 1.468
				},
				{
					name: 'Portugal',
					value: 10589.792
				},
				{
					name: 'Paraguay',
					value: 6459.721
				},
				{
					name: 'Qatar',
					value: 1749.713
				},
				{
					name: 'Romania',
					value: 21861.476
				},
				{
					name: 'Russia',
					value: 21861.476
				},
				{
					name: 'Rwanda',
					value: 10836.732
				},
				{
					name: 'W. Sahara',
					value: 514.648
				},
				{
					name: 'Saudi Arabia',
					value: 27258.387
				},
				{
					name: 'Sudan',
					value: 35652.002
				},
				{
					name: 'S. Sudan',
					value: 9940.929
				},
				{
					name: 'Senegal',
					value: 12950.564
				},
				{
					name: 'Solomon Islands',
					value: 526.447
				},
				{
					name: 'Sierra Leone',
					value: 5751.976
				},
				{
					name: 'El Salvador',
					value: 6218.195
				},
				{
					name: 'Somaliland',
					value: 9636.173
				},
				{
					name: 'Somalia',
					value: 9636.173
				},
				{
					name: 'Serbia',
					value: 3573.024
				},
				{
					name: 'Suriname',
					value: 524.96
				},
				{
					name: 'Slovakia',
					value: 5433.437
				},
				{
					name: 'Slovenia',
					value: 2054.232
				},
				{
					name: 'Sweden',
					value: 9382.297
				},
				{
					name: 'Swaziland',
					value: 1193.148
				},
				{
					name: 'Syria',
					value: 7830.534
				},
				{
					name: 'Chad',
					value: 11720.781
				},
				{
					name: 'Togo',
					value: 6306.014
				},
				{
					name: 'Thailand',
					value: 66402.316
				},
				{
					name: 'Tajikistan',
					value: 7627.326
				},
				{
					name: 'Turkmenistan',
					value: 5041.995
				},
				{
					name: 'East Timor',
					value: 10016.797
				},
				{
					name: 'Trinidad and Tobago',
					value: 1328.095
				},
				{
					name: 'Tunisia',
					value: 10631.83
				},
				{
					name: 'Turkey',
					value: 72137.546
				},
				{
					name: 'United Republic',
					value: 44973.33
				},
				{
					name: 'Uganda',
					value: 33987.213
				},
				{
					name: 'Ukraine',
					value: 46050.22
				},
				{
					name: 'Uruguay',
					value: 3371.982
				},
				{
					name: 'United States',
					value: 312247.116
				},
				{
					name: 'Uzbekistan',
					value: 27769.27
				},
				{
					name: 'Venezuela',
					value: 236.299
				},
				{
					name: 'Vietnam',
					value: 89047.397
				},
				{
					name: 'Vanuatu',
					value: 236.299
				},
				{
					name: 'West Bank',
					value: 13.565
				},
				{
					name: 'Yemen',
					value: 22763.008
				},
				{
					name: 'South Africa',
					value: 51452.352
				},
				{
					name: 'Zambia',
					value: 13216.985
				},
				{
					name: 'Zimbabwe',
					value: 13076.978
				},
				{
					name: 'Tanzania',
					value: 13076.978
				},
				{
					name: 'Siachen Glacier',
					value: 13076.978
				},
				// {name : "Côte d'lvoire", value : 13076.978}
			]
		}]
	}
	myChartRi.setOption(option2)
}

function productLeftTopTwo() {
	var myChartLe = echarts.init(document.getElementById('chartOneLe'));
	var option = {
		backgroundColor: "#182551",
		title: {
			text: "全年用户增长率对比",
			textStyle: {
				color: "#fff",
				fontSize: 16
			},
			left: "center"
		},
		legend: {
			data: ['当月用户增长率', '去年当月用户增长率', '增长率对比'],
			top: "10%",
			icon: 'circle',
			itemWidth: 14,
			itemHeight: 12,
			textStyle: {
				color: "#fff",
				fontSize: 10
			}
		},
		grid: {
			top: "20%",
			height: "70%"
		},
		xAxis: [{
			type: 'category',
			data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
			axisPointer: {
				type: 'shadow'
			},
			axisLine: {
				lineStyle: {
					color: "#fff"
				}
			},
			splitLine: {
				show: false
			},
			axisLabel: {
				show: true,
				color: '#fff',
				fontSize: 12
			},
		}],
		yAxis: [{
				type: 'value',
				name: '水量',
				min: 0,
				max: 200,
				interval: 50,

				axisLabel: {
					show: true,
					color: '#fff',
					fontSize: 12
				},
				axisLine: {
					lineStyle: {
						color: "#fff"
					}
				},
				splitLine: {
					show: false
				}
			},
			{
				type: 'value',
				name: '温度',
				min: 0,
				max: 80,
				interval: 20,
				axisLabel: {
					formatter: '{value} %'
				},
				axisLine: {
					lineStyle: {
						color: "#fff"
					}
				},
				splitLine: {
					show: false
				}
			}
		],
		series: [{
				name: "当月用户增长率",
				type: 'bar',
				itemStyle: {
					color: "#0064C8"
				},
				data: [0.6, 2.9, 7.0, 8.2, 35.6, 76.7, 135.6, 182.2, 200, 60.0, 8.4, 0]
			},
			{
				name: '去年当月用户增长率',
				type: 'bar',
				itemStyle: {
					color: "#4EE8C5"
				},
				data: [2, 5.9, 9.0, 26.4, 88.7, 130.7, 175.6, 162.2, 50.7, 18.8, 4.0, 2.3]
			},
			{
				name: '增长率对比',
				type: 'line',
				itemStyle: {
					color: "#fff"
				},
				yAxisIndex: 1,
				data: [10.0, 15.0, 18.0, 30.0, 34.7, 70, 18, 14, 50.6, 16.5, 12.0, 6.2]
			}
		]
	}
	myChartLe.setOption(option);
}

function getMonDay() {
	var myDate = new Date();
	var day = myDate.getDate();
	var num = parseInt(day);
	var arr = [];
	for(var i = 1; i <= num; i++) {
		arr.push(i + "号");
	}
	return arr

}

function creatData() {
	var data = getMonDay();
	var leng = data.length;
	var dataArr = [];
	for(var i = 0; i < leng; i++) {
		var num = Math.floor(Math.random() * 300);
		dataArr.push(num)

	}
	return dataArr
}