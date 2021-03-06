<template>

  <base-common-edit ref="edit" v-bind:submit="save">
    <div slot="default">

      <el-form :model="editForm" :label-width="formLabelWidth">
        <el-form-item label="应用" >
          <el-input v-model="editForm.appId"/>
        </el-form-item>
        <el-form-item label="用户姓名">
          <el-input v-model="editForm.userName"/>
        </el-form-item>
        <el-form-item label="用户账号" >
          <el-input v-model="editForm.userNumber"/>
        </el-form-item>
        <el-form-item label="用户密码">
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
    }
  },
  methods: {
  },
}
</script>

