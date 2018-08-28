<template>
	<div>{{a}}</div>

</template>
<script>
	import axios from 'axios'
	export default{
		data (){
			return {
				a:[]
			}
		},
		methods:{

			getData(){
				var self = this;
				console.log(this);
		    	this.$http1.get('/api/seller')
	    	  	.then(function (response) {
	    	  		console.log(1123);
	    	  		console.log(response.data);
	    	  		console.log(self.a);
	    	  		self.a=response.data;
	    	  		console.log(self.a);
	    	  	})
	    	  	.catch(function (error) {
	    	    	console.log(error);
	    	  	});
		    },
		    postData(){
		    	axios({
		    	  method: 'post',
		    	  url: '/api/goods',
		    	  data: {
		    	    firstName: 'Fred',
		    	    lastName: 'Flintstone'
		    	  }
		    	});
		    },
		    mockReq (){
		    	/*axios.get('/api1/posts')
		    	.then(res => {
		    		console.log('mock server');
		    		console.log(res.data);
		    	})
		    	axios.post('/api1/comments')
		    	.then(res => {
		    		console.log('mock server1');
		    		console.log(res.data);
		    	})*/
		    	/*axios.get('/api1/tasklists')
		    	.then(res => {
		    		console.log('mock server2');
		    		console.log(res.data);
		    	})*/
		    }
		    
		},
		created (){
			this.getData();
			this.postData();
			this.mockReq();
		}
	}
	
</script>