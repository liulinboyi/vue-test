<template>
    <div>
        <label>跨级通过bus传值</label>
        <button @click="setMsgs">bus 直接传</button>
        <button @click="setMsgsbus">bus 插件传</button>
    </div>
</template>
<script>
export default {
    methods:{
        setMsgs(){
            this.Bus.$emit("setMsg",'Hello 我是来自同级的组件的下一级组件的')
        },
        setMsgsbus(){
            this.$bus.emit("setMsgBus",'Hello bus 插件，我是来自同级的组件的下一级组件的')
        },
    }
}
</script>

