<template>
    <div id="app">
        <Header />
        <main>
            <div class="left-container">
                <div class="title">
                    <h2>12443434</h2>
                    <small>nuinuibuibb</small>
                </div>
                <left-bottom></left-bottom>
            </div>
            <right-side></right-side>
        </main>
    </div>
</template>

<script>
import Header from './components/Header'
import RightSide from './components/right-side'
import leftBottom from './components/left-bottom'
export default {
    name: 'App',
    components:{
        Header,RightSide,leftBottom
    },
    data (){
        return {
            Mockdatas:[],
            hovers:''
        }
    },
    created(){
        this.getDatas();
        this.expressData();
        this.postDatas();
    },
    methods:{
        // 测试
        getDatas (){
            var self = this;
            this.utils.MlTools.ajax({
                type:'get',
                url:'/lists',
                success: function(res){
                    // console.log(res);
                    self.Mockdatas = res.bodyData;
                }
            })
        },
        postDatas (){
            this.utils.MlTools.ajax({
                type:'post',
                url:'/sPost',
                data:{"a":1},
                success: function(res){
                    console.log(res);
                }
            })
        },
        expressData(){
            this.utils.MlTools.ajax({
                type:'get',
                url:'/api/s1',
                success: function(res){
                    console.log(res);
                }
            })
        },
        expressData(){
            this.utils.MlTools.ajax({
                type:'get',
                url:'/api1/tests',
                success: function(res){
                    console.log(res);
                }
            })
        },
        changeColor(item){
            this.hovers=item
        }
  }
  
}
</script>

<style lang="scss">
@import './assets/css/common.css';
#app {
    height:100%;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
main{
    width:100%;
    height:calc(100% - 44px);
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    .left-container{
        width:75%;
        height:100%;
        color:#fff;
        background-image: url(./assets/car1.jpg);
        background-size: cover;
        .title{
            margin:20px;
            h2{
                font-size:18px;
            }
            small{
                color:rgba(255,255,255,0.8)
            }
        }
        


    }
}
.hover-item{
    color:orange;
    font-weight: 600;
}

</style>
