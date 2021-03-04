<template>
  <div style="height:100%;">
    <el-container>
      <el-main>
        <load-map></load-map>
        <el-table ref="table" :data="pageInfo.list" style="width: 100%;" :height="tableHeight" :highlight-current-row="true">
          <el-table-column prop="appId" label="应用ID" min-width="120" show-overflow-tooltip sortable/>
          <el-table-column prop="permName" label="权限名称" min-width="120" show-overflow-tooltip sortable/>
          <el-table-column prop="permUrl" label="权限URL" min-width="120" show-overflow-tooltip sortable/>
        </el-table>
        <!-- @size-change="handleSizeChange"
          @current-change="handleCurrentChange" -->
        <el-pagination
          :current-page="pageInfo.pageNum"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="pageInfo.pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="pageInfo.total">
        </el-pagination>
      </el-main>
      <el-aside :width="searchWidth +'px'">

        <el-container>
          <el-aside width="45px" style="background:#cacfd4;">

            <el-button type="text" @click="ttt" style="height:100%;width:45px;" size="mini">{{searchIcon}}</el-button>

          </el-aside>
          <el-main v-if="isShowSearch">

            <el-form ref="form" :model="searchKey" label-width="80px">
              <el-form-item label="应用ID">
                <el-input v-model="searchKey.appId"></el-input>
              </el-form-item>
              <!-- <el-form-item label="活动区域">
                <el-select v-model="searchKey.region" placeholder="请选择活动区域">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="活动时间">
                <el-col :span="11">
                  <el-date-picker type="date" placeholder="选择日期" v-model="searchKey.date1" style="width: 100%;"></el-date-picker>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                  <el-time-picker placeholder="选择时间" v-model="searchKey.date2" style="width: 100%;"></el-time-picker>
                </el-col>
              </el-form-item>
              <el-form-item label="即时配送">
                <el-switch v-model="searchKey.delivery"></el-switch>
              </el-form-item>
              <el-form-item label="活动性质">
                <el-checkbox-group v-model="searchKey.type">
                  <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                  <el-checkbox label="地推活动" name="type"></el-checkbox>
                  <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                  <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                </el-checkbox-group>
              </el-form-item>
              <el-form-item label="特殊资源">
                <el-radio-group v-model="searchKey.resource">
                  <el-radio label="线上品牌商赞助"></el-radio>
                  <el-radio label="线下场地免费"></el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="活动形式">
                <el-input type="textarea" v-model="searchKey.desc"></el-input>
              </el-form-item> -->
              <el-form-item>
                <el-button type="primary" @click="findListByPage">搜索</el-button>
                <el-button @click="reset">重置</el-button>
              </el-form-item>
            </el-form>

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
  created() {
    this.searchKey = Object.assign({}, this.searchKeyDefault)
  },
  data() {
    return {
      findPageListURL: this.$AiDataApi.core.permission.findListByPage,
      searchKeyDefault: {
        appId: 'URBAN',
      },
      searchKey: Object.assign({}, this.searchKeyDefault),
      tableHeight: 50,
      isShowSearch: false,
      searchWidth: 45,
      maxSearchWidth: 600,
      searchIcon: '<<',
      pageInfo: {
        pageNum:1,
        pageSize:100,
        total:0,
        list:[],
      },
    }
  },
  mounted:function(){
      this.$nextTick(function () {
          this.tableHeight = window.innerHeight - this.$refs.table.$el.offsetTop - 60;
          
          // 监听窗口大小变化
          let self = this;
          window.onresize = function() {
              self.tableHeight = window.innerHeight - self.$refs.table.$el.offsetTop - 60
          }
      })
      //this.$refs.table.$el.offsetTop：表格距离浏览器的高度
      //50表示你想要调整的表格距离底部的高度（你可以自己随意调整），因为我们一般都有放分页组件的，所以需要给它留一个高度　
  },
  methods: {
    findListByPage() {
      this.$axiosPost(
        this.findPageListURL,
        this.searchKey,
        (response) => {
          this.pageInfo = response.data
        }
      )
    },
    reset() {
      this.searchKey = Object.assign({}, this.searchKeyDefault)
    },
    ttt(){
      this.isShowSearch = !this.isShowSearch
      this.searchWidth = this.maxSearchWidth - this.searchWidth;
      if(this.searchIcon === '<<'){
        this.searchIcon = '>>'
      }else{
        this.searchIcon = '<<'
      }
      
    }
  },
}
</script>

