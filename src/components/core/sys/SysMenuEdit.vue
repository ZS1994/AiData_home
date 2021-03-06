<template>

  <base-common-edit ref="basCommonEdit" v-bind:submit="save">
    <div slot="default">

      <el-form ref="form" :model="editForm" :label-width="formLabelWidth" :rules="rules">
        <el-form-item label="应用" prop="appId">
          <el-input v-model="editForm.appId"/>
        </el-form-item>
        <el-form-item label="菜单名称" prop="menuName">
          <el-input v-model="editForm.menuName"/>
        </el-form-item>
        <el-form-item label="菜单路径">
          <el-input v-model="editForm.menuPath"/>
        </el-form-item>
        <el-form-item label="父菜单">
          <el-input v-model="editForm.parentMenuCode"/>
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
      addURL: this.$AiDataApi.core.menu.insert,
      updateURL: this.$AiDataApi.core.menu.update,
      editFormDefault:{
        appId: 'URBAN',
        menuName: '',
        menuPath: '',
        parentMenuCode: '',
      },
      rules: {
        appId: [
          {required: true, message: '请输入应用ID', trigger: 'blur'}
        ],
        menuName: [
          {required: true, message: '请输入菜单名', trigger: 'blur'}
        ],
      }
    }
  },
  methods: {
  },
}
</script>

