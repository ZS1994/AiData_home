// 定义一个混入对象
const myMixin = {
  created() {
    this.editForm = Object.assign({}, this.editFormDefault)
  },
  data() {
    return {
      formLabelWidth: '100px',
      editStatus: 'add',
      addURL: '',
      updateURL: '',
      editFormDefault: {},
      editForm: Object.assign({}, this.editFormDefault),
    }
  },
  methods: {
    add(){
      this.$refs.basCommonEdit.add()
      this.editStatus = 'add'
      this.editForm = Object.assign({}, this.editFormDefault)
    },
    edit(index, row){
      this.$refs.basCommonEdit.edit()
      this.editStatus = 'edit'
      this.editForm = Object.assign({}, row)
    },
    // 添加或者修改的提交
    save(){
      this.$refs.form.validate((valid) => {
        if (valid) {
          let url = ''
          if(this.editStatus === 'add'){
            url = this.addURL
          }else if(this.editStatus === 'edit'){
            url = this.updateURL
          }
          if (this.$isEmpty(url)){
            this.$message({
              message: 'url为空，请配置',
              type: 'error'
            })
            return false
          }
          this.$axiosPost(
            url,
            this.editForm,
            (response) => {
              // 触发父类查询事件
              this.$emit('findListByPage')
              this.$refs.basCommonEdit.close()
              return true
            }
          )
        } else {
          return false
        }
      })
    }

  },
}
export default myMixin