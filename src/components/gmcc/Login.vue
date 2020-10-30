<template>
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
</template>
<script>

import qs from 'qs'

export default {
  created () {
    this.editForm = Object.assign({}, this.editFormDefault)
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
      sessionid: ''
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
    }
  }
}
</script>