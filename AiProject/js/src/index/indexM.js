var indexM = {
	init() {
		this.initCharts1(); // 今天收益
		this.initCharts2(); // 总收益
		this.initCharts3(); // 收益完成度
	},
	initCharts1() {
		$("#d_canvas_a").css('width', parseInt($('.head_con').css('width')) + 180 + 'px'); // 设置画布宽度
		var dom = document.getElementById("d_canvas_a");
		indexM.myChart = echarts.init(dom);
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
			indexM.myChart.setOption(option, true);
		}
	},
	initCharts2() {
		$("#all_canvas_a").css('width', parseInt($('.head_con').css('width')) + 180 + 'px'); // 设置画布宽度
		var dom = document.getElementById("all_canvas_a");
		indexM.myChart2 = echarts.init(dom);
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
			indexM.myChart2.setOption(option, true);
		}
	},
	initCharts3() {
		if(parseInt($('.head_con').css('width'))<350){
			$("#end_canvas").css('width', parseInt($('.head_con').css('width'))+ 'px'); // 设置画布宽度
		}
		var dom = document.getElementById("end_canvas");
		indexM.myChart3 = echarts.init(dom);
		option = {
			tooltip: {
				formatter: "{a} <br/>{b} : {c}%"
			},
// 			toolbox: {
// 				feature: {
// 					restore: {},
// 					saveAsImage: {}
// 				}
// 			},
			series: [{
				// name: '业务指标',
				type: 'gauge',
				radius: '65%',
				detail: {
					show:false,
					formatter: '{value}%',
				},
				data: [{
					value: 50,
					name: '',
				}],
				color:"#ffffff",
				axisLine: {
					show:true,
					// 属性lineStyle控制线条样式
					lineStyle: {
						width: 5,
						color:[[0.3,'#9eba46'],[0.5,'#9eba46'],[1, '#9eba46']]
					}
				},
				splitLine:{
                        show:false,
                    },
				 axisLabel: {//大刻度标签。
					distance: -42,//数字刻度距离
					textStyle: {//数字刻度样式
						color: '#ababab',
						fontSize:6,
					},
					data: [{value: 0, name: ''}],
					formatter:function(param){
						if ((param % 10)==0) {
							return param
						}
					}
				},
				pointer:{
					length:'60px',
					width:'3px',
				},
			}]
		};
		if (option && typeof option === "object") {
			indexM.myChart3.setOption(option, true);
		}
	},
};
