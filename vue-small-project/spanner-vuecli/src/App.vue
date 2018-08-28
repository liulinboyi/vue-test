<template>
    <div id="app">
        <input type="text"  @blur="hide"  class="seInput" name="fruitInput" v-model="fruitInput" placeholder="请选择" v-on:click="show = !show" v-on:keyup.delete="cancel">
        <transition name="fade">
            <ul v-if="show" @click="hides(event)">
             <li v-for="(item,index) in lists"  @mousemove="changeBackColor(item)"  @click.stop="sele(item)" :class="{backg:item == checked}">{{item}}</li>
            </ul>
        </transition> 
    </div>
</template>

<script>

export default {
    name: 'App',
    data (){
        return {
            fruitInput:'',
            lists:['苹果','榴莲','核桃','橘子','香蕉','猕猴桃'],
            show:false,
            checked:''
        }
    },
    methods:{
        changeBackColor (item){
            this.checked = item
        },
        sele (item){
            this.fruitInput = item;
            this.show=false;
        },
        cancel (){
            this.fruitInput='';
            this.checked = '';
        },
        hide (){
            var _this = this;
            //暂时就这样了，基本从体验上实现了想要的效果。后面学习了自定义指令和vnode 再来修改。
            //延时100ms刚好能取到值，10ms的话就取不到了，本来想0，实现异步就行，不成想不可以的。再探究
            setTimeout(function(){
                _this.show = false;
            },100)
        },
        hides (event) {
            console.log(event.target);
        }
    }
}

   

/*document.onclick = function(e){
    console.log(App);
    if(e.target.className != 'seInput'){
        App.show = false;
    }
}*/
</script>

<style>
*{
    margin: 0;
    padding:0;
    font-size:14px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin:100px;
}

ul,li{
    list-style: none;
}
input{
    width:300px;
    height:32px;
    border:1px solid #ddd;
    border-radius: 5px;
    padding-left:10px;
}
input:focus{
    outline: none;
}
ul{
    width:310px;
    border:1px solid #ddd;
    border-top:none;
    border-radius: 5px;
}
li{
    height:30px;
    line-height: 30px;
    padding:5px 10px;
}
li:nth-child(even){
    background: #eee;
}
li.backg{
    background: green;
}
</style>
