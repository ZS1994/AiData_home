// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import axios from 'axios'
import VueAxios from 'vue-axios'
import qs from 'qs'
import AiDataApi from '@/menu/AiDataApi'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'
// 设置反向代理，前端请求默认发送到 http://localhost:8443/api
axios.defaults.baseURL = '/api'
Vue.use(VueAxios, axios)
axios.defaults.withCredentials = true
Vue.config.productionTip = false
/*作用是阻止vue 在启动时生成生产提示。*/

Vue.prototype.$AiDataApi = AiDataApi
// 封装POST请求
Vue.prototype.$axiosPost = function (url, params, callback) {
	axios.post(url,
		qs.stringify(params),
		{ headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' } }
	).then(response => {
		callback(response)
	})

}
// 封装GET请求
Vue.prototype.$axiosGet = function (url, callback) {
	axios.get(url,
		{ headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' } }
	).then(response => {
		callback(response)
	})

}


Vue.use(ElementUI)





/* eslint-disable no-new */
new Vue({
	el: '#app',
	render: h => h(App),
	router,                /*router 代表该对象包含 Vue Router，并使用项目中的路由*/
	components: { App },   /*components 表示该对象包含的 Vue 组件，*/
	template: '<App/>'     /*template 是用一个字符串模板作为 Vue 实例的标识使用，类似于定义一个 html 标签*/
})