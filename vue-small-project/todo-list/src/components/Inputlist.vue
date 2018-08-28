<template>
	<input type="text" name="inputLists" v-model="newLists" @change="add" placeholder="接下来要做些什么呢？">	
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
				this.$emit("getInputval",this.newLists)
				this.newLists = ''
			}
		}
	}
</script>