// 通用的分页查询页面模板
<template>
  <div style="height:100%;">
    <el-container>
      <el-main>
        <load-map></load-map>

        <slot name="toolbar"></slot>

        <div style="height:10px;"></div>

        <slot name="table"></slot>
        
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="pageInfo.pageNum"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="pageInfo.pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="pageInfo.total">
        </el-pagination>
      </el-main>
      <el-aside :width="searchWidth +'px'">

        <el-container>
          <el-aside width="45px" style="background:rgb(226 226 226);">

            <el-button type="text" @click="drawer" style="height:100%;width:45px;" :icon="searchIcon"></el-button>

          </el-aside>
          <el-main v-if="isShowSearch" style="background:rgb(248 248 248);">

            <slot name="searchForm"></slot>
            
          </el-main>
        </el-container>

      </el-aside>
    </el-container>
  </div>
</template>
<script>

import LoadMap from '@/page/LoadMap'

export default {
  components: {
    loadMap: LoadMap
  },
  props:{
    // 分页查询方法
    findListByPage: {
      type: Function,
      required: true
    },
    // 分页对象
    pageInfo: {
      type: Object,
      required: true,
      default: {
        pageNum:1,
        pageSize:100,
        total:0,
        list:[],
      }
    },
    // 抽屉最大宽度
    maxSearchWidth: {
      type: Number,
      required: false,
      default: 400
    },

  },
  created() {
    this.drawer()
  },
  data() {
    return {
      isShowSearch: false,
      searchWidth: 45,
      searchIcon: 'el-icon-d-arrow-left',
    }
  },
  methods: {
    // 抽屉方法
    drawer(){
      this.isShowSearch = !this.isShowSearch
      this.searchWidth = this.maxSearchWidth - this.searchWidth;
      if(this.searchIcon === 'el-icon-d-arrow-left'){
        this.searchIcon = 'el-icon-d-arrow-right'
      }else{
        this.searchIcon = 'el-icon-d-arrow-left'
      }
      
    },
    // 每页大小
    handleSizeChange(data){
      this.pageInfo.pageSize = data
      this.findListByPage()
    },
    // 当前页码
    handleCurrentChange(data){
      this.pageInfo.pageNum = data
      this.findListByPage()
    }
  },
}
</script>

