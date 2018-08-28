// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store/store'
import router from './router'

Vue.config.productionTip = false

import * as utils from './common/utils';


//开发环境加载mock数据
if(process.env.NODE_ENV == 'development'){
    require('./common/mockData');
}


Vue.prototype.utils = utils;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
