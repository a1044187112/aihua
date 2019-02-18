var robot = {
	init() {
		this.initCharts1(); // 今天收益
		this.initCharts2(); // 最近七天收入
		this.initCharts3(); // 总收益
	},
	initCharts1() {
		$("#d_canvas_a").css('width', parseInt($('.head_con').css('width')) + 180 + 'px'); // 设置画布宽度
		var dom = document.getElementById("d_canvas_a");
		robot.myChart = echarts.init(dom);
		option = {
			calculable: true,
			xAxis: [{
				data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
				show: false,
				position: 'left',
			}],
			yAxis: [{
				show: false,
				type: 'value',
			}],
			series: [{
					name: '成交',
					type: 'line',
					smooth: true,
					clickable: false,
					showSymbol: false, // 隐藏数据点
					lineStyle: {
						type: 'solid',
					},
					itemStyle: { //237,141,26
						normal: {
							areaStyle: {
								type: 'default'
							}
						}
					},
					data: [800, 120, 210, 540, 260, 830, 710]
				},

			]
		};
		if (option && typeof option === "object") {
			robot.myChart.setOption(option, true);
		}
	},
	initCharts2() {
		$("#all_canvas_a").css('width', parseInt($('.head_con').css('width')) + 200 + 'px'); // 设置画布宽度
		var dom = document.getElementById("all_canvas_a");
		robot.myChart2 = echarts.init(dom);
		option = {
			calculable: true,
			xAxis: [{
				data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
				show: false,
				position: 'left',
			}],
			yAxis: [{
				show: false,
				type: 'value',
			}],
			series: [{
					name: '成交',
					type: 'line',
					smooth: true,
					clickable: false,
					showSymbol: false, // 隐藏数据点
					lineStyle: {
						type: 'solid',
					},
					itemStyle: { //237,141,26
						normal: {
							areaStyle: {
								type: 'default'
							}
						}
					},
					data: [800, 120, 210, 540, 260, 830, 710]
				},

			]
		};
		if (option && typeof option === "object") {
			robot.myChart2.setOption(option, true);
		}
	},
	initCharts3() {
		$("#charts_canvas").attr('width', $('.line_charts').css('width')); // 设置画布宽度
		$("#charts_canvas").attr('height', '350px');
		var dom = document.getElementById("charts_canvas");
		robot.myChart3 = echarts.init(dom);

		function randomData() {
			now = new Date(+now + oneDay);
			value = Math.random() * 5 ;
			return {
				name: now.toString(),
				value: [
					[now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
					Math.round(value)
				]
			}
		}

		var data = [];
		var now = +new Date(1997, 9, 3);
		var oneDay = 24 * 3600 * 1000;
		var value = Math.random() * 1000;
		for (var i = 0; i < 100; i++) {
			var item = randomData();
			console.log(item);
			data.push(item);
		}

		option = {
			xAxis: {
				type: 'time',
				splitLine: {
					show: false
				},
				axisLine: {
					onZero: false,
					lineStyle: {
						color: '#8392A5'
					},
				},
			},
			yAxis: {
				type: 'value',
				boundaryGap: [0, '100%'],
				splitLine: {
					show: false
				},
				axisLine: {
					onZero: false,
					lineStyle: {
						color: '#8392A5'
					},
				},
			},
			series: [{
				name: '模拟数据',
				type: 'line',
				showSymbol: false,
				hoverAnimation: false,
				data: data,
				lineStyle:{
					color:'#525d2f',
				},
				areaStyle: {
					color:'#525d2f',
// 					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
// 						offset: 0,
// 						color: 'rgb(255, 158, 68)'
// 					}, {
// 						offset: 1,
// 						color: 'rgb(255, 70, 131)'
// 					}])
				},
			}]
		};

// 		setInterval(function() {
// 
// 			for (var i = 0; i < 5; i++) {
// 				data.shift();
// 				data.push(randomData());
// 			}
// 
// 			robot.myChart3.setOption({
// 				series: [{
// 					data: data
// 				}]
// 			});
// 		}, 1000);

		if (option && typeof option === "object") {
			robot.myChart3.setOption(option, true);
		}
	},
};
