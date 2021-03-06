// 通用添加修改模板
<template>
  <el-dialog :title="title" :visible.sync="isShow" modal :close-on-click-modal="false" >

    <slot></slot>
    
    <div slot="footer" class="dialog-footer">
      <el-button @click="isShow = false">取消</el-button>
      <el-button type="primary" @click="doneSubmit">确定</el-button>
    </div>
  </el-dialog>
</template>

<script>


export default {
  components: {
  },
  props: {
    submit:{
      type: Function,
      required: true,
      default: function(){
      }
    }
  },
  data() {
    return {
      isShow: false,
      editStatus: 'add',
      title: '添加',
    }
  },
  methods: {
    add(){
      this.isShow = true
      this.title = '添加'
      this.editStatus = 'add'
    },
    edit(){
      this.isShow = true
      this.title = '修改'
      this.editStatus = 'edit'
    },
    doneSubmit(){
      this.submit()
    },
    close(){
      this.isShow = false
    }

  },
}
</script>

