<template>
    <div class="cl-div" id="App">
        <div class="center">checklist demo</div>
        <div>
            <label class="selExamLabel">请选择考场：</label>
            <input readonly type="text" class="selExamInput" :value="addExam" placeholder="请选择考场" v-on:click="show = !show">
            <transition name="fade">
              <checklist v-if="show" :max="maxNum"  @getCancel="closes"></checklist>
            </transition>
            <div class="checklist-overlay"  v-if="show"></div>
        </div>
        
        
    </div>
</template>

<script>
import checklist from './components/checklist'
import './assets/css/common.css'

export default {
    name: 'App',
    components: {
        checklist
    },
    data (){
        return{
            maxNum:3,
            show:false
        }
    },
    computed:{
        addExam (){
            return this.$store.state.addExam.addExam.join(',');
        }
    },
    methods:{
        closes (msg){
            this.show=msg;
        }
    }
}
</script>

<style scoped>
.center{
    text-align: center;
    font-size:18px;
    margin:20px 10px;
}
.fade-enter-active,.fade-leave-active{
    -webkit-transition: all .5s;
    transition: all .5s;
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
}
.fade-enter-to{
    -webkit-transition: all .5s;
    transition: all .5s;
    -webkit-transform: translateY(0%);
    transform: translateY(0%);
} 
.checklist-overlay{
    z-index:1888;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    background: rgba(0, 0, 0, .5);
    transition: all .5s;
}
.selExamLabel{
    width:30%;
    display: inline;
    margin:10px;
}
.selExamInput{
    display: inline-block;
    width:70%;
    height:35px;
    border:1px solid #eee;
    border-radius: 5px;
}

</style>
