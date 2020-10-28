<template>
  <div class="CopClass">
    <h1>{{ msg }}</h1>
    <h2>Element UI Button</h2>
    <el-button>默认按钮</el-button>
    <el-button type="primary" v-on:click="getData()">主要按钮</el-button>
    <el-button type="text">文字按钮</el-button>
  </div>
</template>
 
<script>
export default {
  name: 'CopName',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>