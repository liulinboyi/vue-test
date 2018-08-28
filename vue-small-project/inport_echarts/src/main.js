// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'


import * as utils from './common/utils';


//开发环境加载mock数据
if(process.env.NODE_ENV == 'development'){
    require('./common/mockData');
}


Vue.prototype.utils = utils;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
