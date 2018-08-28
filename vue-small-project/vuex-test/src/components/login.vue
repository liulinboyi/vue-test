<template>
	<div>
		<div class="login">
			<span @click="cancelLogin" class="cancelLogin">x</span>
			<div><label>请输入手机号:</label><input type="text" name="userName" v-model.trim="mobile"><span  class="tips" v-if="mobile.length!=11">11位数字</span></div>
			<br>
			<div><label>请输入密码:</label><input type="password" name="passwords" v-model.trim="password"></div>
			<br>
			<div><button @click="logins">登录</button></div>
		</div>
		<div class="bg">
			
		</div>
	</div>
	
</template>
<script>
	export default{
		data (){
			return {
				mobile:'',
				password:''
			}
		},
		methods:{
			logins (){
				if(this.mobile.length == 11){
				  	this.$store.dispatch('addMyInfo',{'mobile':this.mobile,'password':this.password});
					this.$store.dispatch('showLogin',false);
				}else{
				  this.$store.dispatch('showLogin',true);
				}
			},
			cancelLogin(){
				this.$store.dispatch('showLogin',false);
			}
		}
	}
	
</script>
<style scoped>
	label{
		display: inline-block;
	}
	.login{
	  width: 500px;
	  height: 190px;
	  position: fixed;
	  z-index: 999;
	  background-color: white;
	  border-radius: 2px;
	  padding-top:30px;
	  left:50%;
	  top:50%;
	  margin-top: -85px;
	  margin-left: -150px;
	  text-align: center;
	}
	.tips{
		color:red;
		font-size:12px;
		margin-right: -4em;
	}
	input{
	  width: 200px;
	  height:35px;
	  border-radius: 2px;
	  border:1px solid #8e8e8e;
	  margin-top: 10px;
	  padding-left: 5px;
	}
	button{
	  width: 208px;
	  height: 35px;
	  background-color: #42b983;
	  color:white;
	  border-radius: 2px;
	  border:0px;
	  margin-top: 10px;
	}
	  .bg{
	    background-color: black;
	    width: 100%;
	    height: 100%;
	    opacity: 0.2;
	    position: fixed;
	    top:0;
	    left: 0;
	  }
	  .cancelLogin{
	  	font-size:20px;
	  	font-weight: 600;
	  	cursor: pointer;
	  	margin-right:10px;
	  	margin-top: -20px;
	  	float:right;
	  }
</style>