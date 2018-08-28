<template>
		<div class="conditions">
			<div 
			class="sub-cond" 
			v-for="(item,index) in conditions"
			@click="changeDownList(item.selFlag)"
			:class="{'sel-active':item.selFlag == downTypes && show == true}"
			v-on:click="show = !show">
				<span v-if="index==0">{{selectedSub}}</span>
				<span v-else>热度：{{selectedHot}}</span>
			</div>
			<sel-down :types="downTypes" :msg="show" @getshowVal="getval"></sel-down>
		</div>
	</div>
	
</template>
<script>
	import selDown from '@/components/selDown'
	import { mapState } from 'vuex'

	export default{
		components:{
			selDown
		},
		data (){
			return {
				conditions:[
					{name:'全部科目',selFlag:'selSub'},
					{name:'热度:全部',selFlag:'selHot'}
				],
				downTypes:'',
				show:false,
				selk:'全部科目'
			}
		},
		computed:mapState({
			selectedSub:state => state.examInfo.selSubs,
			selectedHot:state => state.examInfo.selHots
		}),
		methods:{
			changeDownList (arg) {
				this.downTypes = arg;
			},
			getval(val){
				this.show = val;
			}
		}
	}
</script>
<style scoped lang="scss">
	%bor1{
        border:1px solid #ccc;
    }
	.conditions{
		width:100%;
		height:30px;
		line-height:30px;
		-webkit-display:flex;
		display:flex;
		justify-content: space-around;
		align-items: center;
		@extend %bor1;
		border-left:none;
		border-right:none;
		.sub-cond{
			width:100%;
			height:100%;
			text-align:center;
			&:after{
				position:relative;
				top:2px;
				display:inline-block;
				width:0;
				height:0;
				content:'';
				border-style:bold;
				border:5px solid;
				border-color:red transparent transparent transparent;
			}
		}
		.sel-active{
			background-color:aliceblue;
			color:red;
		}
	}
</style>
