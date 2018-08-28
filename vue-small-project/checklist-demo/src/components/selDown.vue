<template>
	<div class="down-list">
		<transition name="fade">
		    <ul v-if="msg">
		     	<li v-for="(item,index) in actLists"  
		     	@click.stop="sele(item)" 
		     	:class="{backg:item == checked}"
		     	v-clickoutside="closeIt">
		     		{{item}}
		 		</li>
		    </ul>
		</transition> 
	</div>
</template>
<script>
	import { mapActions } from 'vuex'

	export default{
		data () {
			return {
				lists:[
					{type:'selSub',contents:['全部科目','科目一','科目二','科目三']},
					{type:'selHot',contents:['全部',1,2,3,4,5]}
				],
				checked:''
			}
		},
		computed:{
			actLists () {
				let self = this;
				let index = self.lists.findIndex((value,index) => {return value.type==self.types});
				return this.lists[index]['contents'];
			},

		},
		props:{
			types:{
				type:String,
				default:'selHot'
			},
			msg:{
				type:Boolean
			},
		},
		methods:{
			...mapActions([
				'seleCondition'
			]),
			sele (item){
			    if(Number(item)||item=='全部'){
			    	this.seleCondition({selectItem:item,kinds:'selHot'});
			    }else{
			    	this.seleCondition({selectItem:item,kinds:'selSub'});
			    }
			    this.$emit('getshowVal',false);
			},
			closeIt(){
				this.$emit('getshowVal',false);
			}
		}
	}
</script>
<style scoped lang="scss">
	.down-list{
		position:absolute;
		width:100%;
		top:110px;
		box-shadow:0px 1px 3px 0px rgba(42, 93, 168, 0.078);
		background:aliceblue;
		ul,li{
		    list-style: none;
		}
		ul{
		    width:100%;
		    border:1px solid #ddd;
		    border-top:none;
		    border-radius: 5px;
		}
		li{
		    padding:5px 10px;
		}
		li:nth-child(even){
		    background: #eee;
		}
		li.backg{
		    background: green;
		}
	}
	
</style>