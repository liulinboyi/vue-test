<template>
	<div class="right-container">
		<div id="top-pic">
			
		</div>
		<div class="bottom-pic">
			<h3 class="bottom-title">设备状态</h3>
			<span class="extend-flag">...</span>
			<div id="right-bottom-pic"></div>
			<ul class="lists">
				<li v-for="item in Mockdatas" :key="item.id" @mousemove="changeColor(item)" :class="{'hover-item':hovers==item}">
					<span>{{item.a}}</span>
					<span>{{item.b}}</span>
					<span>{{item.c}}</span>
				</li>
			</ul>
		</div>

	</div>
</template>
<script>
	import echarts from 'echarts'
	export default{
		data (){
			return {
				Mockdatas:[],
                        hovers:''
			}
		},
		methods:{
                  draws(id){
                        this.charts = echarts.init(document.getElementById(id))
                        this.charts.setOption({
				    backgroundColor:'rgba(0,0,0,0.6)',
				    title : {
				       text: '食品生产情况',
				        subtext: '每年企业新办/注销许可证趋势',
				        textStyle:{
				            color:'#fff'
				        }
				    },
				    tooltip : {
				        trigger: 'axis',
				        textStyle:{
				            color:'#fff'
				        }
				    },
				     grid: {
				        left: '3%',
				        top:'30%',
				        bottom:'5%',
				        right:'5%',
				        containLabel: true,
				         textStyle:{
				            color:'#fff'
				        }
				    },
				   legend: {
				        data:['新办数','注销数'],
				         textStyle:{
				            color:'#fff'
				        }
				    },
				    calculable : true,
				    xAxis : [
				        {
				            type : 'category',
				            boundaryGap : false,
				            splitLine:{
				                show: true,
				                lineStyle:{
				                    color:'#444'
				                }
				            },
				            axisLabel:{
				                color:'rgba(255,255,255,0.8)'
				            },
				            data : ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']
				        }
				    ],
				    yAxis : {
				            type : 'value',
				            boundaryGap : true,
				            splitLine:{
				                show: true,
				                lineStyle:{
				                    color:'#444'
				                }
				            },//去除网格线
				            axisLine:{
				                lineStyle:{
				                    color:'gray'
				                }
				            },
				            axisLabel:{
				                color:'#fff'
				            }
				        }
				    ,
				    series : [
				        {
				            name:'新办数',
				            type:'line',
				            areaStyle: {
				                normal: {type: 'default',
				                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
				                        offset: 0,
				                        color: 'rgba(149, 100, 100,0.5)'
				                    }, {
				                        offset: 1,
				                        color: 'rgba(149, 100, 100,0.5)'
				                    }], false)
				                }
				            },
				            smooth:true,
				            itemStyle: {
				                normal: {areaStyle: {type: 'default'}}    
				            },
				            data:[136,375,380,449,114,267,142,318,357,193,421,391]
				        },
				         {
				            name:'注销数',
				            type:'line',
				            areaStyle: {
				                normal: {type: 'default',
				                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
				                        offset: 0,
				                        color: 'rgba(19, 37, 250,0.2)'
				                    }, {
				                        offset: 1,
				                        color: 'rgba(19, 37, 250,0.2)'
				                    }], false)
				                }
				            },
				            smooth:true,
				            itemStyle: {normal: {areaStyle: {type: 'default'}}},
				            data:[610, 312, 221,654, 910, 630, 310, 521, 354, 560, 830, 310]
				        }
				    ]
               })
            },
            drawsPie(id){
            	var dataStyle = {
            	    normal: {
            	        label: {
            	            show: false
            	        },
            	        labelLine: {
            	            show: false
            	        },
            	        shadowBlur: 40,
            	        shadowColor: 'rgba(40, 40, 40, 0.5)',
            	    }
            	};

            	var placeHolderStyle = {
            	    normal: {
            	        color: 'rgba(44,59,70,1)', // 未完成的圆环的颜色
            	        label: {
            	            show: false
            	        },
            	        labelLine: {
            	            show: false
            	        }
            	    },
            	    emphasis: {
            	        color: 'rgba(44,59,70,1)' // 未完成的圆环的颜色
            	    }
            	};
            	this.charts = echarts.init(document.getElementById(id))
            	this.charts.setOption({
            		title: [{
            		        text: 'Engine system',
            		        left: '20%',
            		        top: '75%',
            		        textAlign:'center',
            		        textStyle: {
            		            color: '#fff',
            		            fontSize:'14',
            		            textAlign:'center',
            		        }
            		    }, {
            		        text: 'drive system',
            		        left: '50%',
            		        top: '75%',
            		        textAlign: 'center',
            		        textStyle: {
            		        	fontSize:'14',
            		            color: '#fff'
            		        }
            		    },
            		    {
            		        text: 'bodywork',
            		        left: '80%',
            		        top: '75%',
            		        textAlign:'center',
            		        textStyle: {
            		            color: '#fff',
            		            fontSize:'14',
            		            textAlign:'center',
            		        }
            		    },
            		    ],
            	    tooltip: {
            	        show: false,
            	    },
                      grid: {
                         left: '3%',
                         top:'3%',
                         bottom:'15%',
                         right:'5%',
                         containLabel: true
                        },
            	    toolbox: {
            	        show: false,
            	    },
            	    backgroundColor: 'rgba(0,0,0,0.8)',
            	    series: [{
            	        name: 'Pie1',
            	        type: 'pie',
            	        clockWise: false,
            	        radius: [30, 35],
            	        itemStyle: dataStyle,
            	        hoverAnimation: false,
            	        center: ['20%', '50%'],
            	        data: [{
            	            value: 25,
            	            label: {
            	                normal: {
            	                    formatter: '{d}%',
            	                    position: 'center',
            	                    show: true,
            	                    textStyle: {
            	                        fontSize: '15',
            	                        fontWeight: 'normal',
            	                        color: '#3dd4de'
            	                    }
            	                }
            	            },
            	            itemStyle: {
            	                normal: {
            	                    color: '#3dd4de',
            	                    shadowColor: '#3dd4de',
            	                    shadowBlur: 10
            	                }
            	            }
            	        }, {
            	            value: 75,
            	            name: 'invisible',
            	            itemStyle: placeHolderStyle,
            	        }]
            	    }, {
            	        name: 'Pie2',
            	        type: 'pie',
            	        clockWise: false,
            	        radius: [30, 35],
            	        itemStyle: dataStyle,
            	        hoverAnimation: false,
            	        center: ['50%', '50%'],
            	        data: [{
            	            value: 50,
            	            label: {
            	                normal: {
            	                    formatter: '{d}%',
            	                    position: 'center',
            	                    show: true,
            	                    textStyle: {
            	                        fontSize: '15',
            	                        fontWeight: 'normal',
            	                        color: '#b697cd'
            	                    }
            	                }
            	            },
            	            itemStyle: {
            	                normal: {
            	                    color: '#b697cd',
            	                    shadowColor: '#b697cd',
            	                    shadowBlur: 10
            	                }
            	            }
            	        }, {
            	            value: 50,
            	            name: 'invisible',
            	            itemStyle: placeHolderStyle,
            	        }]
            	    }, {
            	        name: 'Pie3',
            	        type: 'pie',
            	        clockWise: false,
            	        radius: [30, 35],
            	        itemStyle: dataStyle,
            	        hoverAnimation: false,
            	        center: ['80%', '50%'],
            	        data: [{
            	            value: 75,
            	            label: {
            	                normal: {
            	                    formatter: '{d}%',
            	                    position: 'center',
            	                    show: true,
            	                    textStyle: {
            	                        fontSize: '15',
            	                        fontWeight: 'normal',
            	                        color: '#a6f08f'
            	                    }
            	                }
            	            },
            	            itemStyle: {
            	                normal: {
            	                    color: '#a6f08f',
            	                    shadowColor: '#a6f08f',
            	                    shadowBlur: 10
            	                }
            	            }
            	        }, {
            	            value: 25,
            	            name: 'invisible',
            	            itemStyle: placeHolderStyle,
            	        }]
            	    }, ]
            	})
            },
            ajaxDatas (){
                  var self = this;
            	this.utils.MlTools.ajax({
            		type:'get',
            		url:'/api/lists',
            		success: function(res){
            			console.log(res);
            			self.Mockdatas = res.bodyData;
            			console.log(self.Mockdatas);
            		}
            	})
            },
            changeColor(item){
                  this.hovers=item
            }
        },
        created(){
        	this.ajaxDatas();
        },
      //调用
        mounted(){
            this.$nextTick(function() {
                this.draws('top-pic')
                this.drawsPie('right-bottom-pic')
            })

        }
	}
</script>
<style lang="scss">
	.right-container{
		flex:1;
            width:35%;
		height:100%;
            overflow:hidden;
		background:rgba(0,0,0,0.95);
		color:#fff;
		#top-pic{
			height:200px;
			width:100%;
			border-bottom:1px solid #222;
		}
		.bottom-pic{
                  height:calc(100% - 200px);
			position: relative;
			border-bottom:1px solid #222;
			h3{
				display: inline-block;
                        margin:10px;
			}
			.extend-flag{
				font-size: 18px;
				font-weight: 600;
				float:right;
                        margin-right:10px;
			}
			#right-bottom-pic{
				height:160px;
				width:100%;
			}
			.lists{
				color:#fff;
                        margin:15px 10px;
                        height:calc(100% - 130px);
                        overflow-y:auto;
                        span{
                              display: inline-block;
                              width:30%;
                              margin-left:5px;
                              text-align: center;
                              padding:5px 0;
                              cursor: pointer;
                        }
			}

		}
            .hover-item{
                  color:orange;
                  font-weight: 600;
            }
		

	}
</style>