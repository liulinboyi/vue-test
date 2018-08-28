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
			msg:function(){
				// this.add()
				this.lists.push(this.msg)
			}
		},
		methods:{
			delthis (index){
				return this.lists.splice(index,1)
			},
			add (){
				this.lists.push(this.msg)
			}
		}
	}
</script>
<style>
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