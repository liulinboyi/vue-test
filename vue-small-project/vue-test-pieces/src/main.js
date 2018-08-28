// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Appnew from './Appnew'
import Appright from './Appright'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})

new Vue({
  el: '#appnew',
  components: { Appnew },
  template: '<Appnew/>'
})

new Vue({
  el: '#appRight',
  components: { Appright },
  template: '<Appright/>'
})


