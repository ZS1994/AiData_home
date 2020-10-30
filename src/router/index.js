import Vue from 'vue'
import Router from 'vue-router'
import CopClass from '@/components/EnterPage'
import GmccLogin from '@/components/gmcc/login'


Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'CopName',
			component: CopClass
		},
		{
			path: '/gmcc/login',
			name: 'GmccLogin',
			component: GmccLogin
		}
	]
})