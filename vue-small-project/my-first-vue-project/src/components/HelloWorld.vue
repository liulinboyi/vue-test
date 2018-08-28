<template>
    <div class="hello">
        <h3>{{title}}</h3>
        <fieldset>
            <legend>
                Create New Person
            </legend>
           
            <table>
                <tr>
                    <th>姓名</th>
                    <th>年龄</th>
                    <th>性别</th>
                    <th>操作</th>
                </tr>
                <tr v-for="(i,index) in tds" :key="i.id" v-bind:class="{ism:i.ismela=='female'}">
                    <td>{{i.name}}</td>
                    <td>{{i.age}}</td>
                    <td>{{i.ismela}}</td>
                    <td><a href="javascript:void(0);"  @click="delThis">删除</a>&nbsp;&nbsp;<a href="javascript:void(0);" class="modify" v-on:click="modifyThis(index)">修改</a></td>
                </tr>
            </table>
            <!-- <button v-on:click="show = !show">增加</button>
            <transition name="fade">
                <changeInput v-if="show" :modify="oldMsg" @transferuser="getUser"/>  
            </transition> -->
            <button @click="addPerson">增加</button>
            <changeInput v-if="show" :modify="oldMsg" @transferPerson="getUser"/>  
        </fieldset>
        
        
        
    </div>
     
</template>

<script>
import changeInput from './changeInput.vue'
export default {
    components: {
        changeInput
    },
    data (){
        return {
            title:'This is a list that can be added, deleted and changed!',
            tds:[
                {
                    name:"zhangfang",
                    age:23,
                    ismela:'female',
                    id:1,
                },
                {
                    name:"wangliyi",
                    age:26,
                    ismela:"male",
                    id:2
                },
                {
                    name:"liuzhihui",
                    age:21,
                    ismela:"female",
                    id:3
                },
                {
                    name:"niuyuilan",
                    age:33,
                    ismela:"male",
                    id:4
                }
            ],
            oldMsg:{
                name:"",
                age:"",
                ismela:"",
                flag:''
            },
            show:false,
        }
    },
    
    methods:{
        getUser:function(msg){ 
            console.log(msg);
            // 数组方法传值
           /* this.show =msg[0];
            this.tds.push(msg[1]);*/
            //为何这种方法传值第一个参数接收的值为空呢？
           /* this.$on("transferPerson",this.noshow,this.oldMsg)
            console.log(this.noshow);
            this.show = this.noshow;
            console.log(this.show);
            this.tds.push(this.oldMsg);*/

            this.show = msg.noshow;
            if(msg.flag == 'add'){
                this.tds.push(msg.newPerson);
            }
           
        },  
        delThis:function(index){
            this.tds.splice(index,1)
        },
        modifyThis (index){
            this.show = true; 
            let val ={
                val1:this.tds[index],
                flag:'modifys'
            }
            this.oldMsg = val;
        },
        addPerson (){
            this.show = true; 
            let val ={
                val1:{
                    name:"",
                    age:"",
                    ismela:"",
                },
                flag:'add'
            } 
            this.oldMsg = val;
        }
    }
    
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3{
        font-size: 30px;
    }
    table{
        border-collapse: collapse;
        width:100%;
        margin:15px 0;
    }
    td,th{
        border:2px solid #ccc;
        padding:10px 20px;
    }
    .ism{
        background-color: pink;
    }
    fieldset{
        width:600px;
        margin:0 auto;
    }
    button{
        width:100px;
        height:32px;
        outline:none;
        border:1px solid #ccc;
        border-radius: 5px;
        letter-spacing: 0.2em;
        text-align:center;
        background-color: #fff;
        margin-top:20px;
        cursor: pointer;
     }
    a{
        color:#3DA3EF;
    }
   /*  .fade-enter-active, .fade-leave-active {
       transition: opacity .5s;
   }
   .fade-enter, .fade-leave-to .fade-leave-active below version 2.1.8 {
       opacity: 0;
   } */
</style>
