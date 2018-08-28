<!--父组价向子组件传递数据-->
<template>
<div>
<!--
logo 是在data中(父组件)定义的变量
如果需要从父组件中获取logo的值,就需要使用props['logo'], 如30行
在props中添加了元素以后,就不需要在data中(子组件)中再添加变量了
-->
<div>{{logo}}(我是父组件传递过来的值)</div>
<ul class="nav">
	<li v-for="nav in navs" :key="nav.id">{{nav.li}}</li>
</ul> 

<!--子组件向父组件传数据
1.@ : 是  v-on的简写
2.子组件主要通过事件传递数据给父组件
3.当input 的值发生变化时,将username传递给App.vue,首先声明了一个方法setUser，
 用change事件来调用setUser
4.在setUser中,使用了$emit来遍历transferUser事件,并返回this.username,其中transferUser
 是一个自定义事件,功能类似于一个中转,this.username将通过这个事件传递给父组件
-->
<span>用户名</span>
<input v-model="username" @change='setUser'>向父组件传值
<hr>
<button @click="sendMsgs">bus test(brother)</button>
<cross-level></cross-level>
</div>


</template>
<script>
import crossLevel from './crossLevel.vue'
export default{
	components:{
		crossLevel
	},
	data(){
		return{
			navs:[
				{li:'主页',id:1},
				{li:'日志',id:2},
				{li:'说说',id:3},
				{li:'主页',id:4},
				{li:'相册',id:5}
			],
			username:''
		}
	},
	props:['logo'],
	methods:{
		setUser:function(){
			this.$emit("transferuser",this.username);
		},
		sendMsgs(){
			this.Bus.$emit("setMsg",'hi headerDiv');
		}
	}
}

</script>
<style scoped>
.nav li{list-style: none;} 
</style>