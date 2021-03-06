import Vue from 'vue'
import Router from 'vue-router'
import CopClass from '@/components/EnterPage'
import GmccLogin from '@/components/gmcc/login'
import CoreLogin from '@/components/core/LoginTest'
import SysUserList from '@/components/core/sys/SysUserList'
import SysRoleList from '@/components/core/sys/SysRoleList'
import SysPermissionList from '@/components/core/sys/SysPermissionList'
import sysMenuList from '@/components/core/sys/sysMenuList'

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
		},
		{
			path: '/core/login',
			name: 'CoreLogin',
			component: CoreLogin
    },
		{
			path: '/core/sysUserList',
			name: 'SysUserList',
			component: SysUserList
    },
    {
			path: '/core/sysRoleList',
			name: 'SysRoleList',
			component: SysRoleList
    },
    {
			path: '/core/SysPermissionList',
			name: 'SysPermissionList',
			component: SysPermissionList
    },
    {
			path: '/core/sysMenuList',
			name: 'sysMenuList',
			component: sysMenuList
    },
	]
})