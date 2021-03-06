<template>

  <base-common-edit ref="basCommonEdit" v-bind:submit="save">
    <div slot="default">

      <el-form ref="form" :model="editForm" :label-width="formLabelWidth" :rules="rules">
        <el-form-item label="应用" prop="appId">
          <el-input v-model="editForm.appId"/>
        </el-form-item>
        <el-form-item label="角色名称" prop="roleName">
          <el-input v-model="editForm.roleName"/>
        </el-form-item>
        <el-form-item label="角色描述" prop="roleDesc">
          <el-input v-model="editForm.roleDesc"/>
        </el-form-item>
        <el-form-item label="角色代码" prop="roleCode">
          <el-input v-model="editForm.roleCode"/>
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
      addURL: this.$AiDataApi.core.role.insert,
      updateURL: this.$AiDataApi.core.role.update,
      editFormDefault:{
        appId: 'URBAN',
        roleName: '',
        roleDesc: '',
        roleCode: '',
      },
      rules: {
        appId: [
          {required: true, message: '请输入应用ID', trigger: 'blur'}
        ],
        roleName: [
          {required: true, message: '请输入角色名', trigger: 'blur'}
        ],
        roleDesc: [
          {required: true, message: '请输入角色描述', trigger: 'blur'}
        ],
        roleCode: [
          {required: true, message: '请输入角色代码', trigger: 'blur'}
        ],
      }
    }
  },
  methods: {
  },
}
</script>

