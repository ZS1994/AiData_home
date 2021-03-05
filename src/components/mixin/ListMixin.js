// 定义一个混入对象
const myMixin = {
  created() {
    this.searchKey = Object.assign({}, this.searchKeyDefault)
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
  data() {
    return {
      findPageListURL: '',
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
      
    },
  },
}
export default myMixin