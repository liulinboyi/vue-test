<template>
  <div id="app">
    <nav>
    <img src="./assets/logo.png" class="logo">
      <router-link to='/home'>首页</router-link>
      <router-link to='/intention'>意图</router-link>
      <router-link to='/entity'>实体</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import './assets/css/common.css';
import './assets/css/style.scss';
export default {
  name: 'App'
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height:100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}
.logo{
  width:50px;
}
</style>
