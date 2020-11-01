<template>
  <div>
    <el-row>
      <el-col :span="10">
        <el-button type="primary" @click="createToken">生成一个TOKEN</el-button>
        <el-button type="primary" @click="clearToken">清除TOKEN</el-button>
      </el-col>
      <el-col :span="14">
        <el-input type="textarea" v-model="token" :disabled="true" />
      </el-col>
    </el-row>

    <el-row>
      <el-form ref="form" :model="editForm" label-width="80px">
        <el-form-item label="手机号码">
          <el-input v-model="editForm.phone"></el-input>
        </el-form-item>
        <el-form-item label="验证码" v-if="showSmsCode">
          <el-input v-model="editForm.smsCode"></el-input>
        </el-form-item>
        <el-button type="primary" @click="sendSmsCode"> 发送验证码 </el-button>
        <el-button type="primary" @click="login" :disabled="!loginAble">
          登录
        </el-button>
        {{ sessionid }}
        <el-button type="reset" @click="reset">重置</el-button>
      </el-form>
    </el-row>
  </div>
</template>
<script>

import qs from 'qs'

export default {
  created () {
    this.editForm = Object.assign({}, this.editFormDefault)
    this.token = localStorage.getItem("token")  //以“key”为名称存储一个值“value”

  },
  data () {
    return {
      editFormDefault: {
        phone: '13537349601',
        smsCode: ''
      },
      editForm: Object.assign({}, this.editFormDefault),
      loginAble: false,
      showSmsCode: false,
      sessionid: '',
      token: ''
    }
  },
  methods: {
    sendSmsCode () {
      this.$axiosPost(this.$AiDataApi.cmcc.gmcc.sendSmsCode,
        this.editForm,
        (response) => {
          this.showSmsCode = true
          this.loginAble = true
          this.$message({
            message: response.data.desc,
            type: 'success'
          })
        }
      )
    },
    login () {
      this.$axiosPost(this.$AiDataApi.cmcc.gmcc.login,
        this.editForm,
        (response) => {
          this.$message({
            message: response.data.desc,
            type: 'success'
          })
        }
      )
    },
    reset () {
      this.editForm = Object.assign({}, this.editFormDefault)
    },
    // 生成一个token，测试用
    createToken () {
      this.$axiosPost(this.$AiDataApi.core.sys.createToken,
        {},
        (response) => {
          localStorage.setItem("token", response.data.token)  //以“key”为名称存储一个值“value”
          this.token = localStorage.getItem("token")
          this.$axios.defaults.headers.post['token'] = localStorage.getItem("token")  //以“key”为名称存储一个值“value”
        })
    },
    // 清除token，登出时可以使用
    clearToken () {
      localStorage.removeItem("token");  //删除名称为“key”的信息。
      this.token = localStorage.getItem("token")
    }



  }
}
</script>