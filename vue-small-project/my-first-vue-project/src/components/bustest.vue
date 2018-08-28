<template>
    <div>
        <label>通过bus父子或者兄弟组件之间传值来改变的：<strong>{{msg}}</strong></label><br>
        <label>通过使用bus插件（vue-bus.js)实现父子或者兄弟组件之间传值来改变的：<strong>{{msg1}}</strong></label>
    </div>
</template>
<script>
export default {
    data(){
        return {
            msg:'Hello World!',
            msg1:"vue bus 插件"
        }
    },
    created() {
        this.Bus.$on('setMsg',content =>{
            this.msg = content;
        })
        this.$bus.on('setMsgBus',content =>{
            this.msg1 = content;
        })
    }
}
</script>
