// 权限管理
<template>
  <base-common-list v-bind:findListByPage="findListByPage" v-bind:pageInfo="pageInfo">

    <template slot="toolbar">
    </template>

    <template slot="table">
      <el-table ref="table" :data="pageInfo.list" style="width: 100%;" :height="tableHeight" border
        :highlight-current-row="true" v-loading="loading" size="small">
        <el-table-column label="序号" type="index" width="80"/>
        <el-table-column prop="appId" label="应用" width="100" show-overflow-tooltip sortable resizable/>
        <el-table-column prop="permName" label="权限名称" width="140" show-overflow-tooltip sortable resizable/>
        <el-table-column prop="permUrl" label="权限URL" width="200" show-overflow-tooltip sortable resizable/>
        <el-table-column prop="permMethod" label="权限方法" width="140" show-overflow-tooltip sortable resizable/>
        <el-table-column prop="permCode" label="权限代码" width="140" show-overflow-tooltip sortable resizable/>
        <el-table-column prop="creationById" label="创建人账号" min-width="140" show-overflow-tooltip sortable resizable/>
        <el-table-column prop="creationByUser" label="创建人名称" min-width="140" show-overflow-tooltip sortable resizable/>
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
    </template>
  </base-common-list>

</template>
<script>

import BaseCommonList from '@/components/common/BaseCommonList.vue'
import ListMixin from '@/components/mixin/ListMixin'

export default {
  components: {
    BaseCommonList,
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

