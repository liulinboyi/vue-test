<template>
    <div>
        <button @click="sendEvent">say Hi(brother)</button>
        <button @click="setEvent">say Hi bus 插件(brother)</button>
    </div>
</template>
<script>
export default {
    methods:{
        sendEvent(){
            this.Bus.$emit('setMsg','Hi Vue(brother)我是来自同级组件的')
        },
        setEvent(){
            this.$bus.emit('setMsgBus','say Hi bus 插件(brother)我是来自同级组件的')
        }
    }
}
</script>
<style>
    button{
        width:200px;
        height:34px;
        border-radius:5px;
        margin:10px;
    }
</style>

