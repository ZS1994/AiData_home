<template>
  <el-menu
    default-active="1"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <el-submenu index="1">
      <span slot="title"><i class="el-icon-menu"></i>广东移动</span>
      <el-menu-item-group>
        <el-menu-item index="1-1">
          <router-link to="/gmcc/login" tag="p">登录</router-link>
        </el-menu-item>
        <el-menu-item index="1-2">
          <router-link to="/" tag="p">首页</router-link>
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="2">
      <span slot="title"><i class="el-icon-menu"></i>测试</span>
      <el-menu-item-group>
        <el-menu-item index="2-1">
          <router-link to="/core/login" tag="p">用户登录认证</router-link>
        </el-menu-item>
        <el-menu-item index="2-2">
          <router-link to="/core/sysUserList" tag="p">用户管理</router-link>
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-menu-item index="3">
      <i class="el-icon-setting"></i>
      <span slot="title">导航四</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>