<template>
  <div id="app">
      <h1>{{msg}}</h1> 
      <HelloWorld/>
      <hr>
      <p>用户名为:{{user}}(我是子组件传递给父组件的数据)</p>  
    
    <headerDiv :logo="logoMsg" @transferuser="getUser"></headerDiv>  
    
    <bus-test></bus-test>
    <bus-emit></bus-emit>
    <button @click="emits">bus father emit</button>
    <button @click="emitsbus">bus插件 father emit</button>
  </div>

</template>

<script>
import HelloWorld from './components/HelloWorld'
import headerDiv from './components/headerDiv.vue'  
import busTest from './components/bustest.vue'  
import busEmit from './components/busemit.vue'  
export default {
  name: 'App',
  components: {
    HelloWorld,headerDiv,busTest,busEmit
  },
  data(){  
    return{  
        msg:'hellow Vue',  
        logoMsg:'WiseWrong',  
        user:''  
    }  
  },  
  methods:{  
    getUser:function(msg1){  
        this.user = msg1;  
        console.log(msg1);  
    },
    emits(){
      this.Bus.$emit('setMsg',"Hi Dad 我是来自父级组件的")
    },
    emitsbus(){
      this.$bus.emit('setMsgBus',"Hi dad 插件 我是来自父级组件的")
    }
    // getPrice () {
    //   fetch('/api/seller')
    //   .then(response => response.json())
    //   .then(function(datas){
    //   console.log(datas);
    // })
    // },
    // postRatings (){
    //     fetch('/api/goods',{method:'post'})
    //     .then(response => response.json())
    //     .then(function(datas){
    //       console.log(datas);
    //     })
    //    }
    },
created () {
  // this.getPrice(),
  // this.postRatings()
} 
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

  <!--<template>  
  <div id="app">  
    <img src="./assets/logo.png">  
    
        父组件传递数据给子组件:  
          
        在调用组件的时候,使用v-bind将logo的值绑定为 APP.vue中定义的变量 logoMsg  
        然后就能将App.vue中的logoMsg的值传给header.vue 了  
    -->  
      
    <!--  
        子组件传递数据给父组件:  
          
        1.在父组件App.vue中,声明了一个方法getUser,用transferUser事件调用getUser方法，  
          获取到从子组件传递过来的参数username  
        2.getUser方法中的参数msg就是从子组件传递过来的参数 username  
           
    -->  
      
    <!--  
        总结:vue的组件作用域都是孤立的，不允许在子组件的模板内直接引用父组件的数据。必须使用特定的方法才能实现组件之间的数据传递。  
      1:父组件向子组件传递数据:  
              在vue中,可以使用props向子组件传递数据  
        1): 子组件在props中创建一个属性,用于接收父组件传过来的值  
        2): 父组件中注册子组件  
        3): 在子组件标签中添加子组件props中创建的属性  
        4): 把需要传给子组件的值赋给该属性  
          
      2:子组件向父组件传递数据:  
              子组件主要通过事件传递数据给父组件  
        1):子组件中需要以某种方式例如点击事件的方法来触发一个自定义事件  
        2):将需要传的值作为$emit的第二个参数,该值将作为实参传给相应自定义事件的方法  
        3):在父组件中注册子组件并在子组件标签上绑定对自定义事件的监听  
          
      3:子组件向子组件传递数据  
        vue没有直接子组件对子组件传参的方法,建议将需要传递数据的子组件，都合并为一个组件.  
         如果一定需要子组件对子组件传参,可以先传到父组件,再传到子组件，为了便于开发,vue推出了一个状态管理工具vuex，  
         可以很方便的实现组件之间的参数传递。  
    
    <headerDiv :logo="logoMsg" @transferuser="getUser"></headerDiv>  
    <p>用户名为:{{user}}(我是子组件传递给父组件的数据)</p>  
    <h1>{{msg}}</h1>  
  </div>  
</template>  
<script>  
import headerDiv from './components/header.vue'  
export default {  
  name: 'app',  
  data(){  
    return{  
        msg:'hellow Vue',  
        logoMsg:'WiseWrong',  
        user:''  
    }  
  },  
  components:{headerDiv},  
  methods:{  
    getUser:function(msg){  
        this.user = msg;  
        console.log(msg);  
    }  
  }  
}  
</script>  
  
<style>  
#app {  
  font-family: 'Avenir', Helvetica, Arial, sans-serif;  
  -webkit-font-smoothing: antialiased;  
  -moz-osx-font-smoothing: grayscale;  
  text-align: center;  
  color: #2c3e50;  
  margin-top: 60px;  
}  
</style>  -->  