<template>
	<div>
		<p>
			User  测试一下{{id}}
		</p>
		<button @click="routerPush">点击我</button>
		<router-link to="/barc">Go to Barc</router-link>
        <router-link to="/fooc">Go to Fooc</router-link>
		<router-view/>
		<router-view name="b"></router-view>
	</div>

</template>
<script>

	export default {
	        data(){
	            return {
	                test:'改变之前'
	            }
	        },
	        props:['id','query'],
        	created: function (vm) {
          	// `this` 指向 vm 实例
          		console.log('created:'+this.$route.params.id)
        	},
		  	methods:{
		    	routerPush (){
		      		this.$router.push({path:'/user1',name:'users1',params:{id:234},query:{ids:23},props: (route) => ({ query: route.query.ids})})
		    	}
			}
	        
	    }
</script>
