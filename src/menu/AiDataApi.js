
const api = {
  cmcc: {
    dccp: {},
    gmcc: {
      // 发送短信验证码
      sendSmsCode: '/cmcc/gmccAppController/sendSmsCode',
      // 登录
      login: '/cmcc/gmccAppController/login',
      getProdToken: '/cmcc/gmccAppController/getProdToken'
    },
    jwt: {
      // 生成一个token
      createToken: '/cmcc/jwtController/createToken'
    }
  },
  core: {
    auth: {
      // 测试shiro的登录认证
      login: '/core/loginController/login',
      // 登出
      logout: '/core/loginController/logout',
      test1: '/core/loginController/test1',
      test2: '/core/loginController/test2',
    },
    permission:{
      findListByPage: '/core/coreSysPermissionController/findListByPage',
    },
    user:{
      findListByPage: '/core/coreSysUserController/findListByPage',
      insertUser: '/core/coreSysUserController/insertUser',
      updateUser: '/core/coreSysUserController/updateUser',
      deleteUser: '/core/coreSysUserController/deleteUser',
      
    },
  }
}
export default api