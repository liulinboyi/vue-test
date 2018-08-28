<template>
	<div>
		<ul v-if="flags">
			<li v-for="(items,index) in lists">{{items}}<a class="del" @click="delthis(index)" href="javascript:void(0);">x</a></li>
		</ul>
		<p v-else>there is no list! Please input something above.</p>
	</div>
	
</template>
<script>
	export default {
		data (){
			return{
				lists:["zhongbuibiubu","bubnibubgr","bubobgnoab"]
			}
		},
		props:{
			msg:{
				requried:true
			}
		},
		computed:{
			flags:function(){
				return this.lists.length
			}
		},
watch:{
	/*第一种：
	可以在watch中直接使用this.lists.push(this.msg)
	第二种：
	在watch中监测到msg变化时调用methods定义的add函数*/
	msg:function(){
		this.add()
		// this.lists.push(this.msg)
	}
},
methods:{
	delthis (index){
		return this.lists.splice(index,1)
	},
	add (){
		this.lists.push(this.msg)
		//子组件更新父组件传回来的值，父组件绑定中加了.sync<lists :msg.sync="newLists"/>;由于监测着msg的变化，所以这种改变了msg，所以还会增加多个li。
		if(this.msg.length>5){
			this.$emit('update:msg',this.msg.slice(2))
		}
		

	}
}
	}

	

</script>
<style scoped>
	ul,li{
		margin:10px;
		padding:0;
	}
	ul{
		text-align: left;
	}
	.del{
		display: inline-block;
	    width: 20px;
	    height: 20px;
	    color: #000;
	    text-decoration: none;
	    font-size: 20px;
	    text-align: center;
	    border-radius: 3px;
	    font-weight: 600;
	}

</style>