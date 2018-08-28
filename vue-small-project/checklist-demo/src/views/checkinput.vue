<template>
	<div class="cl-div" id="App">
        <h1>填写选择考场信息</h1>
        <div class="inputInfo">
            <!-- <label><span>姓名：</span><input type="text" class="selExamInput" v-model="names"></label>
            <label><span>身份证号码：</span><input type="text" class="selExamInput" v-model="idCards"></label>
            <label><span>手机号：</span><input type="text" class="selExamInput" v-model="phoneNumbers"></label> -->
            <label>
                <span>选择考场：</span>
                <input readonly type="text" class="selExamInput" :value="addExam" placeholder="请选择考场" v-on:click="show = !show">
            </label>
        </div>
        <transition name="fade">
          <checklist v-if="show" :max="maxNum"  @getCancel="closes"></checklist>
        </transition>
        <div class="checklist-overlay"  v-if="show"></div>
    </div>
</template>
<script>
	import checklist from '@/components/checklist'
	export default {
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
<style scoped lang="scss">
h1{
    font-size:18px;
    padding:20px 10px;
    background-color: #fff;
    box-shadow: 0px 1px 3px 0px rgba(42, 93, 168, 0.078);
}
.inputInfo{
    width:100%;
    height:100%;
    background-color: #F4F5F9;
    padding:20px 0;
    text-align: center;
    label{
        display: inline-block;
        width:100%;
        padding:10px 0;
        span{
            display: inline-block;
            width:7em;
            text-align: right;
        }
        .selExamInput{
            padding-left:10px;
            font-size: 14px;
            display: inline-block;
            width:70%;
            height:35px;
            border:1px solid #eee;
            border-radius: 5px;
        } 
    }
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


</style>