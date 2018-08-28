<template>
  <div id="app">
    <h1>this is a todo list！</h1>
    <inputlist @getInputval="getval"/>
    <lists :msg="newLists"/>
    
  </div>
</template>

<script>
import Lists from './components/Lists'
import Inputlist from './components/Inputlist'

export default {
    name: 'App',
    components: {
        Lists,Inputlist
    },
    data(){
        return {
            newLists:'',
        }
    },
    methods:{
        getval(msg){
            console.log(msg);
            this.newLists = msg;
        }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin:0 auto;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width:400px;
}
h1{
    text-align: center;
}
input{
    width:100%;
    height:32px;
    border-radius: 5px;
    border:1px solid #ccc;
}
</style>
 