//首页事件
function onHomePage() {

    $(".tabbar").css("top", window.screen.height + "px");
	$('html').removeClass('with-statusbar-overlay').addClass("with-statusbar");
    if (sUserAgentFlag)
    {
//      toolbarActiveImg("ipadHomeTool")
//      fiveHalfPieChart('fiveHalfChartId');
//      bgMusicPieChart('bgMusicId', 28);
//      electManagerPieChart('electManagerId', 28);
//      roomCallPieChart('roomCallId');
//      infoCommPieChart('infoCommId');
//      sceneCustomHuanChart('sceneCustomId');
		$(".mobileUser").hide();
		$(".mobileSet").hide();
		$(".ipadSet").show();
		$(".mobile-homeContents").hide();
		$(".ipad-homeContents").show();
		$(".mobile-home-toolbar").hide();
		$(".ipad-home-toolbar").show();
		$(".ipad-home-toolbar a").bind('click', function() {
			$(".ipad-home-toolbar a").each(function() {
				$(this).removeClass("active");
			})
			$(this).addClass("active");
			var flag = $(this).find('img').eq(1).is(':visible');
			$(".ipad-home-toolbar a").each(function() {
				$(this).find("img").eq(0).show();
				$(this).find("img").eq(1).hide();
			})
			$(this).find("img").eq(0).hide();
			$(this).find("img").eq(1).show();
		});
    }
    else
     {

        authorizationName();//授权名称			
        confirmNotice();// 通知待确认和已确认
        $('.homeConfirm p:eq(0)').text("服务员 " + window.localStorage.userName);

     }
}
function goPage(url,dom){
	$(dom).find("img").eq(0).hide();
	$(dom).find("img").eq(1).show();
	setTimeout(function(){
		$(dom).find("img").eq(1).hide();
		$(dom).find("img").eq(0).show();
	},200)
	myApp.router.navigate(url);
}
function sceneCustomHuanChart(id) {
    var myChart = echarts.init(document.getElementById(id));
    var option = {
        title: {
            text: '75%',
            subtext: '场景定制',
            top: 'center',
            left: 'center',
            textStyle: {
                fontSize: 13,
                fontWeight: '400',
                color: 'rgb(102,102,102)' // 主标题文字颜色
            },
            subtextStyle: {
                fontSize: 12,
                fontWeight: '400',
                color: 'rgb(102,102,102)' // 主标题文字颜色
            },
        },
        tooltip: {
            show: false,
            trigger: 'item',
            formatter: '{a} : ({d}%)'
        },
        series: [{
            name: '',
            center: ['50%', '55%'],
            radius: ['49%', '50%'],
            clockWise: true,
            type: 'pie',
            legendHoverLink: false,
            silent: true,
            data: [{
                value: 75,
                name: '',
                label: {
                    normal: {
                        show: false,
                        formatter: '{d} %',
                        textStyle: {
                            fontSize: 12,
                            fontWeight: 'bold'
                        },
                        position: 'center'
                    }
                },
                labelLine: {
                    show: false
                },
                itemStyle: {
                    normal: {
                        color: '#5886f0',
                        borderColor: '#6B93FA',
                        borderWidth: 15
                    },
                },
            }, {
                name: '',
                value: 25,
                itemStyle: {
                    normal: {
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        },
                        color: 'rgba(0,0,0,0)',
                        borderColor: 'rgba(0,0,0,0)',
                        borderWidth: 0
                    },
                    emphasis: {
                        color: 'rgba(0,0,0,0)',
                        borderColor: 'rgba(0,0,0,0)',
                        borderWidth: 0
                    }
                }
            }]
        }]
    };
    myChart.setOption(option);
}
function infoCommPieChart(id) {
    var myChart = echarts.init(document.getElementById(id));
    var option = {
        tooltip: {
            show: false,
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        series: [{
            name: '访问来源',
            type: 'pie',
            radius: ['42%', '58%'],
            center: ['50%', '55%'],
            avoidLabelOverlap: false,
            clockwise: true,
            legendHoverLink: false,
            silent: true,
            color: ['#6B93FA', '#92AFFB', '#6B93FA', '#92AFFB'],
            label: {
                normal: {
                    show: true,
                    position: 'outside',
                    formatter: "{b} \n {c}次",
                    textStyle: {
                        color: 'rgb(102,102,102)',
                        fontSize: 10,
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false,
                    length: 10,
                    length2: 0,
                }
            },
            data: [{
                value: 80,
                name: '已确认'
            }, {
                value: 20,
                name: '待确认'
            }]
        }]
    };
    myChart.setOption(option);
}
function roomCallPieChart(id) {
    var myChart = echarts.init(document.getElementById(id));
    var option = {
        title: {
            text: '人员呼叫',
            subtext: '391次',
            top: 'center',
            left: 'center',
            textStyle: {
                fontSize: 13,
                fontWeight: '400',
                color: 'rgb(102,102,102)' // 主标题文字颜色
            },
            subtextStyle: {
                fontSize: 12,
                fontWeight: '400',
                color: 'rgb(102,102,102)' // 主标题文字颜色
            },
        },
        tooltip: {
            show: false,
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            show: false,
            orient: 'vertical',
            x: 'left',
        },
        series: [{
            name: '',
            type: 'pie',
            radius: ['42%', '58%'],
            center: ['50%', '55%'],
            avoidLabelOverlap: false,
            legendHoverLink: false,
            silent: true,
            label: {
                normal: {
                    show: true,
                    position: 'outside',
                    formatter: "{b} \n {c}次",
                    textStyle: {
                        color: 'rgb(102,102,102)',
                        fontSize: 10,
                    }
                }
            },
            itemStyle: {
                normal: {
                    borderWidth: 2,
                    borderColor: '#ffffff',
                }
            },
            labelLine: {
                normal: {
                    show: false,
                    length: 10,
                    length2: 0,
                }
            },
            color: ['#83A2F1', '#6B93FA', '#92AFFB', '#6B93FA', '#92AFFB'],
            data: [{
                value: 88,
                name: '影院'
            }, {
                value: 88,
                name: '泳池'
            }, {
                value: 88,
                name: '客房'
            }, {
                value: 88,
                name: '餐厅'
            }, {
                value: 88,
                name: '水吧'
            }]
        }]
    };
    myChart.setOption(option);
}
function electManagerPieChart(id, sumnum) {
    var myChart = echarts.init(document.getElementById(id));
    var option = {
        title: {
            text: '水泵总数量' + sumnum + '个',
            bottom: '10',
            left: 'center',
            textStyle: {
                fontSize: 12,
                fontWeight: '400',
                color: 'rgb(102,102,102)' // 主标题文字颜色
            },
        },
        tooltip: {
            show: false,
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series: [{
            type: 'pie',
            radius: '58%',
            center: ['50%', '55%'],
            clockwise: true,
            legendHoverLink: false,
            silent: true,
            data: [{
                value: 14,
                name: '水泵报警数'
            }, {
                value: 14,
                name: '水泵开启数'
            }],
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter: "{c}个",
                    /*formatter: function(params) {
                    	return params.name+"\n"+params.value
                    },*/
                    textStyle: {
                        color: 'rgb(102,102,102)',
                        fontSize: 10,
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false,
                    length: 0,
                    length2: 2,
                }
            },
            itemStyle: {
                normal: {
                    borderWidth: 4,
                    borderColor: '#ffffff',
                },
                emphasis: {
                    borderWidth: 0,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            z: 2,
        }, {
            type: 'pie',
            radius: '58%',
            center: ['50%', '55%'],
            clockwise: true,
            legendHoverLink: false,
            silent: true,
            data: [{
                value: 22,
                name: '水泵报警数'
            }, {
                value: 6,
                name: '水泵开启数'
            }],
            color: ['rgba(255,255,250,0)', 'rgba(255,255,250,0)'],
            label: {
                normal: {
                    show: true,
                    position: 'outside',
                    formatter: "{b}",
                    /*formatter: function(params) {
                    	return params.name+"\n"+params.value
                    },*/
                    textStyle: {
                        color: 'rgb(102,102,102)',
                        fontSize: 10,
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false,
                    length: 4,
                    length2: 2,
                }
            },
            itemStyle: {
                normal: {
                    borderWidth: 4,
                    borderColor: '#ffffff',
                },
                emphasis: {
                    borderWidth: 0,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            z: 1
        }],
        color: ['rgb(107,147,250)', 'rgb(163,188,254)'],
    };
    myChart.setOption(option);
}
function bgMusicPieChart(id, sumnum) {
    var myChart = echarts.init(document.getElementById(id));
    var option = {
        title: {
            text: '分区总数量' + sumnum + '个',
            bottom: '10',
            left: 'center',
            textStyle: {
                fontSize: 12,
                fontWeight: '400',
                color: 'rgb(102,102,102)' // 主标题文字颜色
            },
        },
        tooltip: {
            show: false,
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series: [{
            type: 'pie',
            radius: '58%',
            center: ['50%', '55%'],
            clockwise: true,
            legendHoverLink: false,
            silent: true,
            data: [{
                value: 18,
                name: '分区空闲数'
            }, {
                value: 10,
                name: '分区播放数'
            }],
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter: "{c}个",
                    /*formatter: function(params) {
                    	return params.name+"\n"+params.value
                    },*/
                    textStyle: {
                        color: 'rgb(102,102,102)',
                        fontSize: 10,
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false,
                    length: 0,
                    length2: 2,
                }
            },
            itemStyle: {
                normal: {
                    borderWidth: 4,
                    borderColor: '#ffffff',
                },
                emphasis: {
                    borderWidth: 0,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            z: 2
        }, {
            type: 'pie',
            radius: '58%',
            center: ['50%', '55%'],
            clockwise: true,
            legendHoverLink: false,
            silent: true,
            data: [{
                value: 6,
                name: '分区空闲数'
            }, {
                value: 22,
                name: '分区播放数'
            }],
            label: {
                normal: {
                    show: true,
                    position: 'outside',
                    formatter: "{b}",
                    /*formatter: function(params) {
                    	return params.name+"\n"+params.value
                    },*/
                    textStyle: {
                        color: 'rgb(102,102,102)',
                        fontSize: 10,
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false,
                    length: 4,
                    length2: 2,
                }
            },
            itemStyle: {
                normal: {
                    borderWidth: 4,
                    borderColor: '#ffffff',
                },
                emphasis: {
                    borderWidth: 0,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            z: 1
        }],
        color: ['rgb(107,147,250)', 'rgb(163,188,254)'],
    };
    myChart.setOption(option);
}
function fiveHalfPieChart(id) {
    var myChart = echarts.init(document.getElementById(id));

    function getData(percent, val) {
        var color = 'rgb(163,188,254)';
        if (val == 1) {
            color = 'rgb(107,147,250)';
        }
        return [{
            value: percent,
            name: percent,
            itemStyle: {
                normal: {
                    color: color
                }
            }
        }, {
            value: 1 - percent,
            itemStyle: {
                normal: {
                    color: 'transparent'
                }
            }
        }];
    }
    var placeHolderStyle = {
        normal: {
            label: {
                show: false,
            },
            labelLine: {
                show: false,
            }
        }
    };
    var option = {
        title: [{
            text: '客户一',
            left: '10%',
            top: '20%',
            textStyle: {
                fontSize: 10,
                fontWeight: '400',
                color: 'rgb(102,102,102)' // 主标题文字颜色
            }
        }, {
            text: '客户二',
            left: '10%',
            top: '25%',
            textStyle: {
                fontSize: 10,
                fontWeight: '400',
                color: 'rgb(102,102,102)' // 主标题文字颜色
            }
        }, {
            text: '客户三',
            left: '10%',
            top: '30%',
            textStyle: {
                fontSize: 10,
                fontWeight: '400',
                color: 'rgb(102,102,102)' // 主标题文字颜色
            }
        }, {
            text: '客户四',
            left: '10%',
            top: '35%',
            textStyle: {
                fontSize: 10,
                fontWeight: '400',
                color: 'rgb(102,102,102)' // 主标题文字颜色
            }
        }, {
            text: '客户五',
            left: '10%',
            top: '40%',
            textStyle: {
                fontSize: 10,
                fontWeight: '400',
                color: 'rgb(102,102,102)' // 主标题文字颜色
            }
        }, ],
        tooltip: {
            trigger: 'item',
            formatter: function(params, ticket, callback) {
                return params.seriesName + ": " + params.name * 100 + "%";
            }
        },
        color: ['rgb(107,147,250)', 'rgb(163,188,254)'],
        tooltip: {
            show: false,
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            show: true,
            bottom: "10%",
            left: "8%",
            itemWidth: 17,
            itemHeight: 10,
            itemGap: 5,
            icon: 'rect',
            data: ['有人状态', '无人状态'],
            textStyle: {
                color: 'rgb(102,102,102)',
                fontSize: 10
            },
            selectedMode: true,
            orient: "vertical",
        },
        series: [{
            name: '有人状态',
            type: 'pie',
            clockWise: true, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            legendHoverLink: false,
            silent: true,
            radius: [60, 70],
            center: ['60%', '55%'],
            itemStyle: placeHolderStyle,
            data: getData(0.75, 1)
        }, {
            name: '无人状态',
            type: 'pie',
            clockWise: true, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            legendHoverLink: false,
            silent: true,
            radius: [50, 60],
            center: ['60%', '55%'],
            itemStyle: placeHolderStyle,
            data: getData(0.65, 0)
        }, {
            name: '有人状态',
            type: 'pie',
            clockWise: true, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            legendHoverLink: false,
            silent: true,
            radius: [40, 50],
            center: ['60%', '55%'],
            itemStyle: placeHolderStyle,
            data: getData(0.6, 1)
        }, {
            name: '无人状态',
            type: 'pie',
            clockWise: true, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            legendHoverLink: false,
            silent: true,
            radius: [30, 40],
            center: ['60%', '55%'],
            itemStyle: placeHolderStyle,
            data: getData(0.5, 0)
        }, {
            name: '有人状态',
            type: 'pie',
            clockWise: true, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            legendHoverLink: false,
            silent: true,
            radius: [20, 30],
            center: ['60%', '55%'],
            itemStyle: placeHolderStyle,
            data: getData(0.4, 1)
        }]
    };
    myChart.setOption(option);
}
//界面尺寸变化事件
function onResizeCustomized() {
    if ($(".view-main").attr("data-page") == "Voice") {
        var heightWindow = $(".page-content").height();
        if (heightWindow < 500) {
            $(".voiceDivs").css("g", "100%");
            $(".voiceDivs").css("bottom", "40px");
            $(".voiceDivs").css("position", "relative");
        } else {
            $(".voiceDivs").css("height", "300px");
            $(".voiceDivs").css("bottom", "60px");
            $(".voiceDivs").css("position", "absolute");
        }
    }
}
function authorizationName() {
    var ajaxVar = $.ajax({
        type: "POST",
        url: "/GWService.asmx/GetName2SFService",
        timeout: 5000,
        data: {
            userName: window.localStorage.userName,
        },
        success: function(data) {
            var dt = $(data).find('string').text();
            if (dt) {
                $(".auth_name_get").text(dt);
                window.localStorage.auth_name_title = dt;
            } else {
                // tipsInformtion("获取授权名失败,是否退出登陆界面?",exitLogin)
                window.localStorage.auth_name_title = "AlarmCenter";
            }
        },
        error: function(e) {
            tipsInformtion("获取授权名失败,是否退出登陆界面?", exitLogin);
        }
    });
}
//提示窗口
function tipsInformtion(tipsStr, tipsEvent) {
    myApp.dialog.create({
        title: "信息提示",
        text: tipsStr,
        buttons: [{
            text: '取消'
        }, {
            text: '确定',
            onClick: function() {
                tipsEvent();
            }
        }]
    }).open();
}

