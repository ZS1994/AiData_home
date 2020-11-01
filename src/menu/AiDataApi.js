
const api = {
  cmcc: {
    dccp: {},
    gmcc: {
      // 发送短信验证码
      sendSmsCode: '/cmcc/gmcc/sendSmsCode',
      // 登录
      login: '/cmcc/gmcc/login'
    }
  },
  core: {
    sys: {
      // 生成一个token
      createToken: '/core/sys/createToken'
    }
  }
}
export default api