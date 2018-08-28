import Vue from 'vue'
import Router from 'vue-router'
import checkInput from '@/views/checkinput'
import ExamInfo from '@/views/ExamInfo'
import myInfo from '@/views/myInfo'

Vue.use(Router)


const routes=[
	{path: '/', redirect: '/ExamInfo'},
	// {path:'/login',name:'login',component:login},
	{path:'/checklist',name:'checklist',component:checkInput},
	{path:'/ExamInfo',name:'ExamInfo',component:ExamInfo,
	// children:[
	// 	{path: '/', redirect: '/entity/barc'},
	// 	{ path: '/entity/barc', component: Barc},
	// 	{ path: '/entity/fooc', component: Fooc }
	// ]
	},
	{path:'/myInfo',name:'myInfo',component:myInfo},

]

export default new Router({
	mode:'history',
	base:__dirname,
  	routes: routes
})
