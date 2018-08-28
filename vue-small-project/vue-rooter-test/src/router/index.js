import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/Home'
import user from '../components/User'

Vue.use(Router)


const Home = home
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
const Fooc = { template: '<div>fooccc</div>' }
const Barc = { template: '<div>barccccc</div>' }
const user13 = {template:'<div>124143434343nbjfnvnonrovnorinvor</div>'}
const user1 = {template:'<div>12414uibue4355353599305803rinvor</div>'}
const User = user

const routes = [
  { path: '/home', component: Home,alias:'/foo'},
  { path: '/foo', components: {default:Foo,a:Fooc}},
  { path: '/bar', component: Bar,redirect: '/home'},
  { path: '/users/:userId',name:'users',component: user13},
  { path: '/users1/:id',name:'users1',component: user1},
  { path: '/User/:id', component: User,props: true,
	children:[
		{ path: 'barc', components: {default:Barc,b:user1}},
		{ path: 'fooc', component: Fooc }
	]}
]





export default new Router({
	mode:'history',
	base:__dirname,
  	routes,
})
