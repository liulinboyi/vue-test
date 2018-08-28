import Vue from 'vue'
import Vuex from 'vuex'
import addExam from './modules/addExam/index'
import examInfo from './modules/ExamInfo/examInfo'

Vue.use(Vuex);

export default new Vuex.Store({
	modules:{
		addExam,
		examInfo,
	}
})