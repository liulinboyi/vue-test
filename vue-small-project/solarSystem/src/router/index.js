/**
 * create 2018-7-26 by tlm
 */
import Vue from 'vue'
import Router from 'vue-router'

// 按模块打包
const home = resolve => require.ensure([], () => resolve(require('@/views/index')), 'index');
const page1 = resolve => require.ensure([], () => resolve(require('@/views/page1')), 'page1');
const page2 = resolve => require.ensure([], () => resolve(require('@/views/page2')), 'page2');

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/index'
        },
        {
            path: '/index',
            component: home
        },
        {
            path: '/page1',
            name: page1,
            component: page1
        },
        {
            path: '/page2',
            name: page2,
            component: page2
        }
    ]
})
