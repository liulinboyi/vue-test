<template>
	<div class="clearfix">
		<ul>
			<li :class="{disabled:first}" @click="prePage">上一页</li>
			<li v-for="(page,index) in pagess"  @click="activeNow(page)" v-bind:class="{active:page==checked}">{{page}}</li>
			<li :class="{disabled:last}" @click="nextPage">下一页</li>
		</ul>
		<p class="jumpPage">跳转至<input type="text" @change="jumpPages($event.target.value)">页</p>
		<p class="totalpages">共{{pageSize}}页</p>
	</div>
	
	
</template>
<script>
	export default{
		data (){
			return {
				first:true,
				checked:1,
				last:false,
				start:1,
				end:4,
				jumpPage:''
			}
		},
		props:['pageSize'],
		computed:{
			pagess(){
				let n=[];
				if(this.start<1){
					this.start = 1;
				}
				if(this.end>this.pageSize){
					this.end = this.pageSize;
				}
				for(var i = this.start;i<=this.end;i++){
					n.push(i)
				}
				return n;
			}
		},
		watch:{
			pageSize(){
				this.checked =1;
			},
			checked (){
				if(this.checked == 1){
					this.first=true
				}else{
					this.first=false;
				}
				if(this.checked == this.pageSize){
					this.last = true;
				}else{
					this.last = false;
				}
				
				//下一页
				if(this.checked == this.end&&this.end<this.pageSize){
					this.start ++
					this.end ++
				}
				//上一页
				if(this.checked == this.start&&this.start>1){
					this.start --
					this.end --
				}

				//跳转
				if(this.checked>this.end||this.checked<this.start){
					this.start = this.checked -1;
					this.end = parseInt(this.checked) + 2;
					if(this.end>this.pageSize){
						this.start = this.start-(this.end-this.pageSize)
					}
					if(this.start <1){
						this.end = this.end + (1-this.start)
					}
				}

				this.$emit("pageNow",this.checked);
			}
		},
		methods:{
			activeNow (page){
				this.checked = page;
			},
			prePage (){
				if(this.checked != 1){
					this.checked --;
				}else{
					return false;
				}
			},
			nextPage(){
				if(this.checked != this.pageSize){
					this.checked ++;
				}else{
					return false;
				}
			},
			jumpPages(value){
				if(value<1||value>this.pageSize){
					return false
				}else{
					this.checked =  value;
				}
			}
		}
	}
	
</script>
<style scoped>
	ul,li{
		list-style: none;
		float:left;
	}
	li{
		margin:0;
		float:left;
		width:40px;
		height:38px;
		line-height: 38px;
		border:1px solid #ccc;
		border-left:none;
		background-color: aliceblue;
		text-align: center;
		cursor: pointer;
		color:#347AB6;
	}
	li:first-child{
		border:1px solid #ccc;
		width:50px;
		border-top-left-radius: 5px;
		border-bottom-left-radius: 5px;
	}
	
	li:last-child{
		width:50px;
		border-top-right-radius: 5px;
		border-bottom-right-radius: 5px;
	}

	.active{
		background-color: #347AB6;
		color:#fff;
	}
	.disabled{
		color:#ccc;
	}
	.totalpages,.jumpPage{
		float:left;
		height:40px;
		line-height: 40px;
		margin-left: 15px;
	}
	.jumpPage input{
		padding-left:10px;
	    width: 40px;
	    height:32px;
	    outline:none;
	    border:1px solid #ccc;
	    border-radius: 5px;
	    margin-bottom: 20px;
	}
	/* 清除布局浮动 */
	.clearfix:before,.clearfix:after{ content:""; display:block;}
	.clearfix:after{ clear:both;}
	.clearfix{ zoom:1;}
	.clear{ clear:both; display:block; overflow:hidden; visibility:hidden; width:0; height:0;}
</style>