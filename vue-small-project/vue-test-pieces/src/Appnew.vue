<template>
	<div class="tables">
		<div class="tableWrap">
			<table>
				<tr>
					<th>名字</th>
					<th>年龄</th>
					<th>性别</th>
				</tr>
				<tr v-for="(p,index) in person" v-if="(index<curpage*5)&&(index>=(curpage-1)*5)">
					<td>{{p.name}}</td>
					<td>{{p.age}}</td>
					<td>{{p.ismela}}</td>
				</tr>
			</table>
			<page-list :pageSize="pageSizes" @pageNow="getPageNows"></page-list>  
		</div>
		<hr>
		<div class="pagenationWrap">
			<label>页数：</label><input type="text" name="pageCounts" ref="input" @change="getpages">
			<page-list :pageSize="pages" @pageNow="getPageNows"></page-list>  
			<div>
				<p>{{text}}</p>
			</div>
		</div>
	</div>
	
</template>
<script>
	import pageList from './components/page-list'

	export default{
		name:'Appnew',
		components:{pageList},
		data(){
			return {
				person:[{
                    name:"zhangfang",
                    age:23,
                    ismela:'female'
                },
                {
                    name:"wangliyi",
                    age:26,
                    ismela:"male"
                },
                {
                    name:"liuzhihui",
                    age:21,
                    ismela:"female"
                },
                {
                    name:"wangliyi",
                    age:26,
                    ismela:"male"
                },
                {
                    name:"少不更",
                    age:26,
                    ismela:"male"
                },
                {
                    name:"高大哥哥的",
                    age:26,
                    ismela:"male"
                },
                {
                    name:"高大哥哥",
                    age:26,
                    ismela:"male"
                },
                {
                    name:"个人个人",
                    age:26,
                    ismela:"male"
                },
                {
                    name:"风格仍然",
                    age:28,
                    ismela:"male"
                },
                {
                    name:"wandfefgliyi",
                    age:27,
                    ismela:"male"
                },
                {
                    name:"niuyuilan",
                    age:33,
                    ismela:"male"
                }],
				pages:10,
				curpage:1,//当前页的页码
				text:''
			}
		},
		computed:{
			pageSizes(){
				return Math.ceil(this.person.length/5)
			}
		},
		methods:{
			getpages(){
				this.pages= this.$refs.input.value;
			},
			getPageNows (msg){
				this.text=msg;
				this.curpage = msg;
			}
		}

	}
</script>
<style scoped>
	*{
		margin:0;
		padding:0;
	}
	.tables{
		margin: 60px;
	}
	input{
		padding-left:10px;
	    height:32px;
	    outline:none;
	    border:1px solid #ccc;
	    border-radius: 5px;
	    margin-bottom: 20px;
	}
	table{
		width:100%;
		border-collapse: collapse;
		margin-bottom: 30px;
	}
	th,td{
		text-align: left;
		padding:5px;
		border:1px solid #ccc;
	}
	.pagenationWrap{

	}
</style>