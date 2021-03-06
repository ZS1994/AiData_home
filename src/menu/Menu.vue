<template>
<div>
  <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
    <el-radio-button :label="false">展开</el-radio-button>
    <el-radio-button :label="true">收起</el-radio-button>
  </el-radio-group> -->
  <el-menu
    default-active="1"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    @select="handleMenuSelect"
    background-color="#545c64"
    text-color="#fff"
    :collapse="isCollapse"
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
        <el-menu-item index="2-3">
          <router-link to="/core/sysRoleList" tag="p">角色管理</router-link>
        </el-menu-item>
        <el-menu-item index="2-4">
          <router-link to="/core/sysPermissionList" tag="p">权限管理</router-link>
        </el-menu-item>
        <el-menu-item index="2-5">
          <router-link to="/core/sysMenuList" tag="p">菜单管理</router-link>
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-menu-item index="3">
      <i class="el-icon-setting"></i>
      <span slot="title">导航四</span>
    </el-menu-item>
  </el-menu>
</div>
</template>

<script>
export default {
  data(){
    return {
      breads:[],
      isCollapse: false,
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath);
    },
    handleMenuSelect(index,indexPath){
      this.breads=indexPath;
      console.log(this.breads)
    }
  }
}
</script>