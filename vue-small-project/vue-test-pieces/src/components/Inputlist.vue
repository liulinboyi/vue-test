<template>
	<!-- 这个中绑定change事件和keydown.enter都可以，实现效果一致 -->
	<input type="text" name="inputLists" v-model="newLists" @keydown.enter="add">	
</template>
<script>
	export default{
		data (){
			return {
				newLists:''
			}
		},
		methods:{
			add(){
				let newListsval = this.newLists.trim();
				if(newListsval){
					this.$emit("getInputval",newListsval)
				}
				this.newLists = ''
			}
		}
	}

</script>