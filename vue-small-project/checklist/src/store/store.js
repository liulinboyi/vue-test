import Vue from 'vue'
import Vuex from 'vuex'
import addExam from './modules/addExam/index'

Vue.use(Vuex);

export default new Vuex.Store({
	modules:{
		addExam
	}
})