<template>
  <div id="app">
    <h1>this is a todo list！</h1>
    <inputlist @getInputval="getval"/>
    <lists :msg.sync="newLists"/>
    <currency-input1 v-model="price">
    </currency-input1>

    <my-com>
        <!-- <p>这是一些初始内容</p>
        <p>这是更多的初始内容</p>  -->
            <div slot-scope="props">
                <p>hello from parent</p>
                <p>{{ props.text }}</p>
            </div>
            
    </my-com>
    <app-layout>
        <h1 slot="header">这里可能是一个页面标题</h1>

        <p>主要内容的一个段落。</p>
        <p>另一个主要段落。</p>

        <p slot="footer">这里有一些联系信息</p>
    </app-layout>

    <my-awesome-list :items="items">
    <!-- 作用域插槽也可以是具名的 -->
        <li
        slot="item"
        slot-scope="props"
        class="my-fancy-item">
        {{ props.text }}
        </li>
    </my-awesome-list>

    <slot-test></slot-test>
    <slot-test type="success">
        <slot><strong>success!</strong>Looks good to me!</slot>
    </slot-test>
    <slot-test type="warning">
        <slot><strong>warning!</strong>Looks good to me!</slot>
    </slot-test>
    <slot-test type="error">
        <slot><strong>error!</strong>Looks good to me!</slot>
    </slot-test>   
    
  </div>
</template>

<script>
import Lists from './components/Lists'
import Inputlist from './components/Inputlist'
import currencyInput1 from './components/currency-input'
import myCom from './components/my-com'
import appLayout from './components/app-layout'
import myAwesomeList from './components/my-awesome-list'
import slotTest from './components/slot-test'

export default {
    name: 'App',
    components: {
        Lists,Inputlist,currencyInput1,myCom,appLayout,myAwesomeList,slotTest
    },
    data(){
        return {
            newLists:'',
            price: 0,
            items:[],
            shipping: 0,
            handling: 0,
            discount: 0
        }
    },
    computed: {
        total: function () {
            return ((
                this.price * 100 + 
                this.shipping * 100 + 
                this.handling * 100 - 
                this.discount * 100
            ) / 100).toFixed(2)
        },
        
    },
    methods:{
        getval(msg){
            console.log(msg);
            this.newLists = msg;
        }
    }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-left: 30px;
  margin-top: 60px;
  width:400px;
}
h1{
    text-align: center;
}
input{
    width:100%;
    height:32px;
    border-radius: 5px;
    border:1px solid #ccc;
}


</style>
 