<template>
	<div class="left-bottom-container" id="bottom-pic">
		
	</div>
</template>
<script>

	import echarts from 'echarts';

	export default{
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
				        top:'35%',
				        bottom:'0%',
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
				            },//网格线
				            axisLine:{
				                show:true,
				                lineStyle:{
				                    color:'gray'
				                }
				            },
				            axisLabel:{
				                color:'#fff'
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
            }
        },
      //调用
        mounted(){
            this.$nextTick(function() {
                this.draws('bottom-pic')
            })
        }
	}
</script>
<style lang="scss">
	.left-bottom-container{
		position:absolute;
		bottom:0;
		width:75%;
		height:30%;
		background:rgba(0,0,0,0.6);
	}
</style>