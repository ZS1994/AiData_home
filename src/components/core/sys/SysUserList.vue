<template>
  <base-common-list v-bind:findListByPage="findListByPage" v-bind:pageInfo="pageInfo">

    <template slot="toolbar">
      <el-button type="primary" @click="add" size="mini" icon="el-icon-circle-plus-outline">添加</el-button>
    </template>

    <template slot="table">
      <el-table ref="table" :data="pageInfo.list" style="width: 100%;" :height="tableHeight" border
        :highlight-current-row="true" v-loading="loading" size="small">
        <el-table-column label="操作" width="120">
          <template slot-scope="scope">
            <el-button size="mini" type="primary" @click="edit(scope.$index, scope.row)" icon="el-icon-edit" circle></el-button>
            <el-button size="mini" type="danger" @click="del(scope.$index, scope.row)" icon="el-icon-delete" circle></el-button>
          </template>
        </el-table-column>
        <el-table-column label="序号" type="index" width="80"/>
        <el-table-column prop="appId" label="应用" width="100" show-overflow-tooltip sortable resizable/>
        <el-table-column prop="userName" label="用户姓名" width="140" show-overflow-tooltip sortable resizable/>
        <el-table-column prop="userNumber" label="用户账号" width="120" show-overflow-tooltip sortable resizable/>
        <el-table-column prop="userPassword" label="用户密码" width="200" show-overflow-tooltip sortable resizable/>
        <el-table-column prop="phone" label="手机" width="200" show-overflow-tooltip sortable resizable/>
        <el-table-column prop="mail" label="邮箱" width="200" show-overflow-tooltip sortable resizable/>
        <el-table-column prop="deleteFlag" label="是否已删除" width="200" show-overflow-tooltip sortable resizable/>
        <el-table-column prop="img" label="头像" width="200" show-overflow-tooltip sortable resizable/>
        <el-table-column prop="creationById" label="创建人账号" min-width="140" show-overflow-tooltip sortable resizable/>
        <el-table-column prop="creationById" label="创建人名称" min-width="140" show-overflow-tooltip sortable resizable/>
        <el-table-column prop="creationDate" label="创建时间" min-width="200" show-overflow-tooltip sortable resizable/>
        <el-table-column prop="lastUpdatedById" label="最后修改账号" min-width="140" show-overflow-tooltip sortable resizable/>
        <el-table-column prop="lastUpdatedByUser" label="最后修改名称" min-width="140" show-overflow-tooltip sortable resizable/>
        <el-table-column prop="lastUpdatedDate" label="最后修改时间" min-width="200" show-overflow-tooltip sortable resizable/>
      </el-table>
    </template>

    <template slot="searchForm">
      <el-form ref="form" :model="searchKey" label-width="80px" size="medium">
        <el-form-item label="应用ID">
          <el-input v-model="searchKey.appId"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="findListByPage" icon="el-icon-search">搜索</el-button>
          <el-button type="warning" @click="reset" icon="el-icon-refresh-left">重置</el-button>
        </el-form-item>
      </el-form>
      <sys-user-edit ref="edit" v-on:findListByPage="findListByPage"/>
    </template>
  </base-common-list>

</template>
<script>

import BaseCommonList from '@/components/common/BaseCommonList.vue'
import ListMixin from '@/components/mixin/ListMixin'
import SysUserEdit from './SysUserEdit.vue'

export default {
  components: {
    BaseCommonList,
    SysUserEdit
  },
  mixins: [ListMixin],
  data() {
    return {
      findPageListURL: this.$AiDataApi.core.user.findListByPage,
      delURL: this.$AiDataApi.core.user.deleteUser,
      searchKeyDefault: {
        appId: 'URBAN',
      },
    }
  },
  methods: {

  },
}
</script>

