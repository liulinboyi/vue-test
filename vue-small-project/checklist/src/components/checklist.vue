<template>
    <div class="cl-checklist">
        <div class="checklist">
            <div class="topbar border-1px">
                <span class="cancel" @click="closeIt">取消</span>
                <span class="title">选择考场</span>
                <span class="confirm" @click="confirmIt">确定</span>
            </div>
            <div class="desc">您已经选中了<span class="selectedNum">{{checkboxValue.length}}</span>个，最多可选择<span class="selectedNum">{{max}}</span>个</div>
            <div class="list">
                <div class="line-wrapper" v-for="(item,index) in examinationLists" v-bind:disabled="disabledFun(item.id)">
                    <label 
                    :for="item.id" 
                    class="line border-1px" 
                    :class="{selected:checkboxValue.indexOf(item.id)>=0}">
                        <div class="l">
                            <div class="title" :class="{'gray':disabledFun(item.id)}">{{item.title}}</div>
                            <div class="address" v-if="item.desc.length>0">{{item.desc}}</div>
                        </div>
                        <div class="r" :class="{'backgray':disabledFun(item.id)}"></div>
                    </label>
                    <input 
                    type="checkbox" 
                    v-model="checkboxValue" 
                    :disabled="disabledFun(item.id)" 
                    style="display: none;" 
                    :id="item.id" 
                    :value="item.id">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import '../assets/css/checklist.scss';
    import axios from 'axios';

    export default{
        data (){
            return{
                checkboxValue:[],
                examinationLists:[],
            }
        },
        // props:['max'],
        props:{
            max:{
                type:Number,
                default:0
            }
        },
        created(){
            this.mockData();
        },
        methods:{
            mockData(){
                let self = this;
                 axios.get('/lists')
                 .then(res => {
                    console.log(res.data);
                    self.examinationLists = res.data.lists.result;
                 })
            },
            disabledFun(id){
                if(this.checkboxValue.length==this.max){
                    return this.checkboxValue.indexOf(id)==-1
                }
            },
            closeIt(){
                this.$emit('getCancel',false)
            },
            confirmIt (){
                let checkExam =[];
                for (let i = 0;i<this.checkboxValue.length;i++){
                    let index = this.examinationLists.findIndex((value,index) =>{
                        return this.checkboxValue[i] == value.id 
                    })
                    checkExam.push(this.examinationLists[index].title)
                }
                this.$store.dispatch('confirmExam',checkExam);
                this.$emit('getCancel',false)
            }
        }
    }
</script>
<style scoped>
    .cl-checklist{
        overflow: hidden;
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 2000;
        width: 100%;
        background-color: #fff;
    }
    .gray{
        color:#9e9e9e;
    }
    .backgray{
        background:#9e9e9e;
    }
</style>