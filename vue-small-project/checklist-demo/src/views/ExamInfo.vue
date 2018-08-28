<template>
	<div class="exam-info">
		<div class="topImg"><img src="../assets/addressback.png" alt=""></div>
		<sel-conditions />
		<exam-lists />
	</div>
</template>
<script>
import selConditions from '@/components/selConditions'
import examLists from '@/components/examLists'
export default{
	components:{
		selConditions,examLists
	}, 
	methods:{
		initPage () {
			if(this.$store.state.examInfo.allExamLists.length==0){
			    this.$store.dispatch('initAllExamlists');
			}
		}
	},
	mounted(){
        this.initPage();
    }
}
	
</script>
<style scoped lang="scss">
	.exam-info{
		height:calc(100% - 60px);
		.topImg,img{
			height:80px;
			width:100%;
		}
	}
</style>