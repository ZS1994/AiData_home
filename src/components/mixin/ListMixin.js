// 定义一个混入对象
const myMixin = {
  created() {
    this.searchKey = Object.assign({}, this.searchKeyDefault)
  },
  mounted() {
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
  data() {
    return {
      findPageListURL: '',
      delURL: '',
      searchKeyDefault: {},
      searchKey: Object.assign({}, this.searchKeyDefault),
      tableHeight: 50,
      loading: false,
      pageInfo: {
        pageNum:1,
        pageSize:100,
        total:0,
        list:[],
      },
    }
  },
  methods: {
    // 分页查询
    findListByPage() {
      if (this.$isEmpty(this.findPageListURL)){
        this.$message({
          message: 'findPageListURL为空，请配置',
          type: 'error'
        })
        return
      }
      this.loading = true
      this.$axiosPost(
        this.findPageListURL+'/' + this.pageInfo.pageSize + '/' + this.pageInfo.pageNum,
        this.searchKey,
        (response) => {
          this.loading = false
          this.pageInfo = response.data
        },
        (err) => {
          this.loading = false
        }
      )
    },
    // 重置
    reset() {
      this.searchKey = Object.assign({}, this.searchKeyDefault)
    },
    add(){
      this.$refs.edit.add()
    },
    edit(index, row){
      this.$refs.edit.edit(index, row)
    },
    del(index, row){
      this.$confirm('请确认是否删除?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        if (this.$isEmpty(this.delURL)){
          this.$message({
            message: 'delURL为空，请配置',
            type: 'error'
          })
          return
        }
        this.$axiosPost(
          this.delURL + '/' + row.pId,
          {},
          (response) => {
            // 触发父类查询事件
            this.findListByPage()
          }
        )
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    }
  },
}
export default myMixin