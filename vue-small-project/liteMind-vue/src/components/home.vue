<template>
	<ul class="methodsLists">
		<li v-for="item in tasksList">
			<p><img src="../assets/methodsLogo.png" alt="文件"></p>
			<p>
				<span>{{item.methods}}</span>
				<span class="symbol" :class="{'green':item.hasContent}"></span>
			</p>
		</li>
	</ul>
</template>
<script>
	import mockData from '../mock';
	export default{
		data (){
			return {
				tasksList:mockData.tasklists.bodyData
			}
		},
methods: {
  	getPrice () {
    	fetch('/api/seller')
    	.then(response => response.json())
		.then(function(datas){
			console.log(datas);
		})
  	},
  	getRatings (){
  		// 这个需要vue-resource插件
  		this.$http.get('/api/ratings')
	        .then((res) => {
	            console.log(res)
	            console.log(res.body);//获取数据
	        })
	     },
	     postR (){
	     	this.$http.post('/api/goods')
	        .then((res) => {
	            console.log(res)
	            console.log(res.body);//获取数据
	        })
	     },
	     postgoods (){
	     	fetch('/api/goods',{method:'post'})
	    	.then(response => response.json())
			.then(function(datas){
				console.log(datas);
			})
	    },
	    postData () {
	        this.$http.post(
	          '/api/goods',
	          {data: {
	            name: 'xiaoming',
	            info: '12'
	          }
	    	}).then(function(res){
	    		console.log(res.body);
	    	})
	    },
	    getData(){
	    	this.$http.get('/api/seller')
    	  	.then(function (response) {
    	    	console.log(response.body);
    	  	})
    	  	.catch(function (error) {
    	    	console.log(error);
    	  	});
	    }
},
created () {
  // this.getPrice(),
  // this.getRatings(),
  // this.postgoods(),
  // this.postR(),
  this.postData(),
  this.getData()
}
	}
</script>
<style scoped>
	.methodsLists{
		margin: 20px;
		width:100%;
		flex:1;
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		flex-wrap:wrap;
	}
	li{	
		padding:10px;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		margin:15px;
		box-shadow: 1px 3px 2px 1px #ccc;
		border-radius: 3px;
	}
	img{
		width:100px;
		height:100px;
	}
	.symbol{
		display: inline-block;
		width: 15px;
		height:15px;
		border-radius: 50%;
		vertical-align: middle;
		background: rgb(221,215,90);
	}
	.green{
		background: green;
	}
</style>
