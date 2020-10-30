<template>
  <el-breadcrumb separator="/" class="my_load_map">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item :to="{ path: '/gmcc' }">广东移动</el-breadcrumb-item>
    <el-breadcrumb-item :to="{ path: '/gmcc/login' }">登录</el-breadcrumb-item>
  </el-breadcrumb>
</template>


<script>
export default {

}
</script>
<style scoped>
.my_load_map {
  padding-bottom: 20px;
}
</style>