<template>
 <div class="personGroup">
     <div>
         <label>姓名：</label><input type="text" name="names" v-model="newPerson.name">
     </div>
     <div>
         <label>年龄：</label><input type="text" name="ages" v-model="newPerson.age" v-bind:requiredFlag="reqs">
     </div>
     <div>
         <label>性别：</label>
         <select name="sexs" v-model="newPerson.ismela">
             <option value="female">female</option>
             <option value="male">male</option>
         </select>
     </div>
     <button v-on:click="editPerson">确定</button>
 </div>
</template>
<script>
	export default {
		data(){
			return{
	            noshow:false
			}
		},
		props:['modify'],
		computed:{
			newPerson (){
				console.log(this.modify.val1);
				return this.modify.val1;
			}
		},
		methods:{
			editPerson: function(){
			/*	var edata = [
					this.noshow,
					this.newPerson
				]*/
				let edata ={
					noshow:this.noshow,
					newPerson:this.newPerson,
					flag:this.modify.flag
				} 
				this.$emit("transferPerson",edata)
			}

		}
	  	
	}
</script>
<style>
	.personGroup div{
	    margin:5px 0;
	}
	.personGroup input,.personGroup button,.personGroup select{
		padding-left:10px;
	    width:300px;
	    height:32px;
	    outline:none;
	    border:1px solid #ccc;
	    border-radius: 5px;
	}
	 .personGroup button{
	 	cursor: pointer;
	    width:100px;
	    letter-spacing: 0.2em;
	    text-align:center;
	    background-color: #fff;
	 }
</style>