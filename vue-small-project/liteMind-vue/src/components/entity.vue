<template>
	<div id="entity_contents">
		<div class="clearfix nav-right">
			<router-link to="/entity/barc">barc</router-link>
			<router-link to="/entity/fooc">fooc</router-link>
		</div>
		<router-view/>
	</div>
</template>
<script>
	import axios from 'axios'
	export default{
		methods:{
			getData(){
		    	this.$http.get('/api/seller')
	    	  	.then(function (response) {
	    	  		console.log(1233333);
	    	    	console.log(response.body);
	    	  	})
	    	  	.catch(function (error) {
	    	    	console.log(error);
	    	  	});
		    },
		    getAxios (){
		    	axios.get('/api/ratings')
		    	.then(res => {
		    		console.log(res.data);
		    	})
		    	axios.post('./api/goods',
		    	{
		    		data:1,
		    		params:233
		    	})
		    	.then(res => {
		    		console.log(11111);
		    		console.log(res.data);
		    	})
		    },
		    axiosAllTest (){
		    	function getUserAccount() {
		    	  	return axios.get('/api/seller')
	    	  			.then(res => {
	    	  				console.log(2222);
	    	  				console.log(res);
	    	  			})
		    	}
		    	function getUserPermissions() {
		    	  return axios.get('/api/ratings')
		    	  	.then(res => {
    	  				console.log(333333);
    	  				console.log(res);
    	  			})
		    	  	
		    	}
		    	axios.all([getUserAccount(), getUserPermissions()])
		    	.then(axios.spread(function (acct, perms){
		    	    //两个请求现已完成
		    	    console.log(acct);//undefined
		    	    console.log(perms);//undefined
		    	    console.log('complete');
		    	}));
		    }
		    
		},
		created (){
			this.getData();
			this.getAxios();
			this.axiosAllTest();
		}
	}
	
</script>
