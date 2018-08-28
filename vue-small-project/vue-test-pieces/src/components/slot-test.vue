<template>
	<div :class="alertClasses" v-show="show">
	    <slot><strong>Default!</strong>Hello World~</slot>
	    <span class="alert_close" @click="show=false">x</span>
	</div>	
</template>
<script>
	export default{
		data (){
			return {
				show:true
			}
		},
		props:['type'],
		computed:{
			alertClasses:function(){
				return {
					'alert-success':this.type ==='success',
					'alert-warning':this.type ==='warning',
					'alert-error':this.type ==='error'
				}
			}
		}
	} 
</script>
<style scoped>
	.alert_close{
	    font-weight: bold;
	    cursor: pointer;
	}
	.alert-success{
	    color: green;
	}
	.alert-warning{
	    color:#aa0;
	}
	.alert-error{
	    color: red;
	}
</style>