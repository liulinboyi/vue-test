<template>
  <div id="app">
    <p>
        <router-link to="/home">Go to home</router-link>
        <router-link to="/foo">Go to Foo</router-link>
        <router-link to="/bar">Go to Bar</router-link>
        <router-link to="/User/home">Go to /User/home</router-link>
        <router-link to="/User/foo">Go to /User/Foo</router-link>
        <router-link to="/User/bar">Go to /User/Bar</router-link>
        <router-link :to="{ name: 'users', params: { userId: 123 },query: {selected: '2'}}">User</router-link>
    </p>
    <router-view/>
    <router-view name="a"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  watch:{
        $route:function(){
            console.log(this.$route.params);
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
.router-link-active{
    background: pink;
}
</style>
