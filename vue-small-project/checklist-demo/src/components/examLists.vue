<template>
	<div class="exams-list">
		<ul>
			<li v-for="item in exams">
				<p>{{item.title}}<br><span class="address">{{item.desc}}</span></p>
				<p><span class="hotp" :class="hotdeg(item.hotDeg)"></span></p>
			 
			</li>
		</ul>
	</div>

	
</template>
<script>
	export default{
		computed:{
			exams () {
				return this.$store.state.examInfo.selectedExamLists;
			}
		},
		methods:{
			hotdeg (deg) {
				return {
					'bg-hot1':deg ===1,
					'bg-hot2':deg ===2,
					'bg-hot3':deg ===3,
					'bg-hot4':deg ===4,
					'bg-hot5':deg ===5,
				}
			}
		}
	}
</script>
<style scoped lang="scss">
	.bg-hot5 {
	    background-position:-10px -10px;
	}
	.bg-hot1 {
	    background-position: -10px -50px;
	}
	.bg-hot2 {
	    background-position: -10px -90px;
	}
	.bg-hot3 {
	    background-position: -10px -130px;
	}
	.bg-hot4 {
	    background-position:-10px -170px;
	}
	.exams-list{
		height:calc(100% - 60px);
		overflow:hidden;
		ul{
			height:100%;
			overflow:auto;
			li{
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding:5px 20px;
				p{
					
					width:100%;
					&:last-child{
						text-align: center;
						.hotp{
							display: inline-block;
							background-image:url('../assets/hotDeg.png');
							background-repeat:no-repeat;
							width:20px;
							height:20px;
						}
					}
					
					.address{
						font-size: 12px;
						color:gray;
					}
				}
			}
		}
		

	}
</style>