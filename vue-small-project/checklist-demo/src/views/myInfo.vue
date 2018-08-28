<template>
	<div class="myInfo">
		<h1>我选择的考场是：</h1>
		<ul v-if="items.length>0">
			<li v-for="item in items">
				{{item}}
			</li>
		</ul>
		<p v-else>您还没有选择考场</p>	
	</div>
</template>
<script>
	export default{
		computed:{
			items (){
			    return this.$store.state.addExam.addExam;
			}
		}
	}
</script>
<style scoped lang="scss">
.myInfo{
	height:100%;
	h1{	
	    font-size:18px;
	    padding:20px 10px;
	    background-color: #fff;
	    box-shadow: 0px 1px 3px 0px rgba(42, 93, 168, 0.078);
	}
	ul{
		margin:20px;
		li{
			margin:10px 0;
		}
	}
	p{
		margin:20px;
		margin-top:40px;

	}
}
</style>