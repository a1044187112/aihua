var withdraw = {
	init() {
		this.initCharts1(); // 今天收益
		this.initCharts2(); // 总收益
	},
	initCharts1() {
		$("#container1").css('width', parseInt($('.wd_item').css('width')) + 250 + 'px'); // 设置画布宽度
		var dom = document.getElementById("container1");
		withdraw.myChart = echarts.init(dom);
		var dataArr = [];
		for(var i = 0 ; i < 7 ; i++){
			var itemData = Math.random()*1000+100;
			dataArr.push(itemData);
		}
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
					data: dataArr
				},

			]
		};
		if (option && typeof option === "object") {
			withdraw.myChart.setOption(option, true);
		}
	},
	initCharts2() {
		$("#container2").css('width', parseInt($('.wd_item').css('width')) + 250 + 'px'); // 设置画布宽度
		var dom = document.getElementById("container2");
		withdraw.myChart2 = echarts.init(dom);
		var dataArr = [];
		for(var i = 0 ; i < 7 ; i++){
			var itemData = Math.random()*1000+100;
			dataArr.push(itemData);
		}
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
					data: dataArr
				},

			]
		};
		if (option && typeof option === "object") {
			withdraw.myChart2.setOption(option, true);
		}
	},

};
