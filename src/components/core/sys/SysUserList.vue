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
            <el-button size="mini" type="primary" @click="handleEdit(scope.$index, scope.row)" icon="el-icon-edit" circle></el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)" icon="el-icon-delete" circle></el-button>
          </template>
        </el-table-column>
        <el-table-column label="序号" type="index" width="80"/>
        <el-table-column prop="appId" label="应用ID" width="120" show-overflow-tooltip sortable resizable/>
        <el-table-column prop="permName" label="权限名称" width="200" show-overflow-tooltip sortable resizable/>
        <el-table-column prop="permUrl" label="URL" min-width="200" show-overflow-tooltip sortable resizable/>
        <el-table-column prop="permMethod" label="METHOD" min-width="140" show-overflow-tooltip sortable resizable/>
        <el-table-column prop="permCode" label="权限代码" min-width="200" show-overflow-tooltip sortable resizable/>
        <el-table-column prop="creationById" label="创建人账号" min-width="140" show-overflow-tooltip sortable resizable/>
        <el-table-column prop="creationById" label="创建人名称" min-width="140" show-overflow-tooltip sortable resizable/>
        <el-table-column prop="creationByDate" label="创建时间" min-width="200" show-overflow-tooltip sortable resizable/>
        <el-table-column prop="lastUpdatedById" label="最后修改账号" min-width="140" show-overflow-tooltip sortable resizable/>
        <el-table-column prop="lastUpdatedByUser" label="最后修改名称" min-width="140" show-overflow-tooltip sortable resizable/>
        <el-table-column prop="lastUpdatedByDate" label="最后修改时间" min-width="200" show-overflow-tooltip sortable resizable/>
      </el-table>
    </template>

    <template slot="searchForm">
      <el-form ref="form" :model="searchKey" label-width="80px">
        <el-form-item label="应用ID">
          <el-input v-model="searchKey.appId"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="findListByPage" icon="el-icon-search">搜索</el-button>
          <el-button type="warning" @click="reset" icon="el-icon-refresh-left">重置</el-button>
        </el-form-item>
      </el-form>
    </template>

  </base-common-list>
</template>
<script>

import BaseCommonList from '@/components/common/BaseCommonList.vue'
import ListMixin from '@/components/mixin/ListMixin'

export default {
  components: {
    BaseCommonList,
    ListMixin
  },
  mixins: [ListMixin],
  data() {
    return {
      findPageListURL: this.$AiDataApi.core.permission.findListByPage,
      searchKeyDefault: {
        appId: 'URBAN',
      },
    }
  },
  methods: {

  },
}
</script>

