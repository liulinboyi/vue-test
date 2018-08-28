# my-first-vue-project

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


### 说明：

>简单学习了父子组件之间传值。实现了一个可以增删改的表格展示功能。


**2018-6-12**
####增加bus父子兄弟跨级间传值:
##### 1.直接创建vue实例，Bus.js,在main.js中引入
```
import Bus from './Bus'

Vue.prototype.Bus = Bus;
```
使用：
```
created() {
    this.Bus.$on('setMsg',content =>{
        this.msg = content;
    })
}
////////////////
methods:{
    sendEvent(){
            this.Bus.$emit('setMsg','Hi Vue(brother)我是来自同级组件的')
    }
},
```
##### 2.仿效vue-rooter或者vuex插件那样制造bus插件使用，vue-bus.js,在main.js中引入
```
import VueBus from './vue-bus';
Vue.use(VueBus)
```
使用：
```
created() {
    this.$bus.on('setMsgBus',content =>{
        this.msg1 = content;
    })
}
//////////////
methods:{
    setEvent(){
        this.$bus.emit('setMsgBus','say Hi bus 插件(brother)我是来自同级组件的')
    }
}
```
