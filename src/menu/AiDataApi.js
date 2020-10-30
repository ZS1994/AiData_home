const pathRoot = ''

const api = {
  cmcc: {
    dccp: {},
    gmcc: {
      // 发送短信验证码
      sendSmsCode: pathRoot + '/cmcc/gmcc/sendSmsCode',
      // 登录
      login: pathRoot + '/cmcc/gmcc/login'
    }
  }
}
export default api