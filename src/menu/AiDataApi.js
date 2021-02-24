
const api = {
  cmcc: {
    dccp: {},
    gmcc: {
      // 发送短信验证码
      sendSmsCode: '/cmcc/gmcc/sendSmsCode',
      // 登录
      login: '/cmcc/gmcc/login',

      getProdToken: '/cmcc/gmcc/getProdToken'

    }
  },
  core: {
    sys: {
      // 生成一个token
      createToken: '/core/sys/createToken'
    },
    auth: {
        // 测试shiro的登录认证
        login: '/core/sys/auth/login',
        // 登出
        logout: '/core/sys/auth/logout',
    }
  }
}
export default api