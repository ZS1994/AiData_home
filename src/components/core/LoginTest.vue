<template>
  <div>
    <el-row>
      <el-form ref="form" :model="editForm" label-width="80px">
        <el-form-item label="账号">
          <el-input v-model="editForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="editForm.password"></el-input>
        </el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
        <el-button type="primary" @click="logout">登出</el-button>
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
        username: '13537349601',
        password: ''
      },
      editForm: Object.assign({}, this.editFormDefault)
    }
  },
  methods: {
    login () {
      this.$axiosPost(this.$AiDataApi.core.auth.login,
        this.editForm,
        (response) => {
          this.$message({
            message: response.data.message,
            type: 'success'
          })
        }
      )
    },
    logout(){
      this.$axiosPost(this.$AiDataApi.core.auth.logout,
        this.editForm,
        (response) => {
          this.$message({
            message: response.data.message,
            type: 'success'
          })
        }
      )    
    },
    reset () {
      this.editForm = Object.assign({}, this.editFormDefault)
    },

  }
}
</script>