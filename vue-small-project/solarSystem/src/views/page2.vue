<template>
    <div>
        <button @click="Toindex">page2回到首页</button>
    </div>
</template>
<script>
export default {
    methods: {
        Toindex () {
            this.$router.push('/index');
        }
    }
}
</script>
<style>
    button{
        position: absolute;
        top:20%;
        left:50%;
        margin-left:-100px;
        width:200px;
        height:60px;
        border:1px solid #ccc;
        border-radius: 6px;
        color:#fff;
        font-size:20px;
        background:rgb(78, 78, 216);
    }
</style>
