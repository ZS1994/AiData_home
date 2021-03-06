<template>

  <base-common-edit ref="basCommonEdit" v-bind:submit="save">
    <div slot="default">

      <el-form ref="form" :model="editForm" :label-width="formLabelWidth" :rules="rules">
        <el-form-item label="应用" prop="appId">
          <el-input v-model="editForm.appId"/>
        </el-form-item>
        <el-form-item label="用户姓名" prop="userName">
          <el-input v-model="editForm.userName"/>
        </el-form-item>
        <el-form-item label="用户账号" prop="userNumber">
          <el-input v-model="editForm.userNumber"/>
        </el-form-item>
        <el-form-item label="用户密码" prop="userPassword">
          <el-input v-model="editForm.userPassword"/>
        </el-form-item>
      </el-form>

    </div>
  </base-common-edit>
</template>

<script>

import BaseCommonEdit from '@/components/common/BaseCommonEdit.vue'
import EditMixin from '@/components/mixin/EditMixin'

export default {
  components: {
    BaseCommonEdit
  },
  mixins:[EditMixin],
  data() {
    return {
      addURL: this.$AiDataApi.core.user.insertUser,
      updateURL: this.$AiDataApi.core.user.updateUser,
      editFormDefault:{
        appId: 'URBAN',
        userNumber: '',
        userPassword: '',
        userName: '',
      },
      rules: {
        appId: [
          {required: true, message: '请输入应用ID', trigger: 'blur'}
        ],
        userName: [
          {required: true, message: '请输入用户名', trigger: 'blur'}
        ],
        userNumber: [
          {required: true, message: '请输入用户账号', trigger: 'blur'}
        ],
        userPassword: [
          {required: true, message: '请输入用户密码', trigger: 'blur'}
        ],
      }
    }
  },
  methods: {
  },
}
</script>

