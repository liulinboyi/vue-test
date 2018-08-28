<template>
    <div id="App">
        
        <div class="footer">
            <router-link to='/ExamInfo'>考场信息</router-link>
            <router-link to='/checklist'>选择考场</router-link>
            <router-link to='/myInfo'>我的</router-link>
        </div>
        <router-view />
    </div>
</template>

<script>
import './assets/css/common.css'

export default {
    name: 'App',
}
</script>

<style lang="scss" scoped>
    %bor1{
        border:1px solid #ccc;
    }
    #App{
        width: 100%;
        height:100%;
    }
    .footer{
        position:fixed;
        bottom:0;
        left:0;
        height:50px; 
        line-height:50px;
        width:100%;
        display:flex;
        justify-content: space-around;
        align-items: enter;
        @extend %bor1;
        background:#1a427d;
        a{
            display:inline-block;
            width:100%;
            border-right:1px solid rgba(125,188,254,.5);
            text-align:center;
            color:rgba(125,188,254,.7);
        }
        .router-link-active{
            color:#fff;
        }
    }


</style>
