<template>
  <div id="app">
    <el-container>
      <el-header>
        <router-link to="/" tag="p"> AiData </router-link>
      </el-header>
      <el-container>
        <el-aside>
          <my-menu></my-menu>
        </el-aside>
        <el-main>
          <load-map></load-map>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>



<script>

import Menu from '@/menu/Menu'
import LoadMap from '@/page/LoadMap'

export default {
  components: {
    myMenu: Menu,
    loadMap: LoadMap
  },
  methods: {
    startHacking () {
      this.$notify({
        title: 'It works!',
        type: 'success',
        message: 'We\'ve laid the ground work for you. It\'s time for you to build something epic!',
        duration: 5000
      })
    }
  }
}
</script>

<style>
.el-header,
.el-footer {
  background-color: #404040;
  color: #b3c0d1;
}

.el-aside {
  background-color: rgb(84, 92, 100);
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  padding: 10px;
}

/*
	找到html标签、body标签，和挂载的标签
	都给他们统一设置样式
*/
html,
body,
#app,
.el-container {
  /*设置内部填充为0，几个布局元素之间没有间距*/
  padding: 0px;
  /*外部间距也是如此设置*/
  margin: 0px;
  /*统一设置高度为100%*/
  height: 100%;
}
</style>
