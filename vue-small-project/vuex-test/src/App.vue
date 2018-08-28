<template>
  <div id="app">
    <div class="myInfo">
      <p class="loginBtn">
        <span v-if="isHaveMobile">欢迎您，{{mobile}}&nbsp;&nbsp;</span>
        <span @click="goLogin" v-if="!isHaveMobile">登录</span>
        <span @click="logout" >注销</span>
      </p>
    </div>
    <p>{{msg}}</p>
     <login v-if='isShowLogin'></login>
    <div class="todoListWrap">
        <h2>This is a todoList!</h2>
        <addTodo></addTodo>
        <todoList></todoList>
    </div>
    
    
  </div>
</template>

<script>
import login from './components/login'
import addTodo from './components/addTodo'
import todoList from './components/todoList'

export default {
  name: 'App',
  components: {
    login,addTodo,todoList
  },
  data (){
    return {
    }
  },
  computed:{
    isShowLogin (){
        return this.$store.state.login.isShowLogin;
    },
    mobile (){
        return this.$store.state.login.mobile;
    },
    isHaveMobile: function () {
      if(this.mobile.length == 11){
        return true;
      }else{
        return false;
      }
    },
    msg(){
        return this.$store.getters.getMsg;
    }
  },
  methods:{
    goLogin:function(){
        this.$store.dispatch('showLogin',true)
    },
    logout (){
        this.$store.dispatch('relogin')
    }
  }
}
</script>

<style>
.todoListWrap {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
.loginBtn{
    cursor:pointer;
    margin-bottom: 50px;
    text-align: right;
    margin-right: 50px;
}
.loginBtn span:first-child{
    font-size:18px;
    font-weight: 500;

}
.loginBtn span:last-child{
    color:#ccc;
    box-shadow: 2px 3px 1px 1px #eee;
    border-radius: 2px;
}
</style>
