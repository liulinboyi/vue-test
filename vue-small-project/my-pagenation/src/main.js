// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import mlBar2d from 'vue-amcharts-bar'
import solarSystem from 'vue-solar-system'

Vue.use(mlBar2d);
Vue.use(solarSystem);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
