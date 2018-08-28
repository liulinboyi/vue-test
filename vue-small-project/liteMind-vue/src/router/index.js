import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import intention from '@/components/intention'
import entity from '@/components/entity'

Vue.use(Router)

const Barc={ template: '<div>barccccc</div>' };
const user1={ template: '<div>r34343c</div>' };
const Fooc={ template: '<div>knoknokn</div>' };

const routes=[
	{path: '/', redirect: '/home'},
	{path:'/home',name:'home',component:home},
	{path:'/intention',name:'intention',component:intention},
	{path:'/entity',name:'entity',component:entity,
	children:[
		{path: '/', redirect: '/entity/barc'},
		{ path: '/entity/barc', component: Barc},
		{ path: '/entity/fooc', component: Fooc }
	]},

]

export default new Router({
	mode:'history',
	base:__dirname,
  	routes: routes
})
