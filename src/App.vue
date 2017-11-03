<template>
  <div id="app">
    <vue-progress-bar></vue-progress-bar>
    <el-container>
      <el-header height="120">
            <el-menu
              :default-active="topActiveIndex"
              class="topmenu"
              mode="horizontal" @select=""
              backgroundColor="#000"
              textColor="#eee"
              activeTextColor="#999"

            >
              <el-menu-item index="-1">
                <div class="logobox">
                  <img style="height:48px;" src='/static/logo1.png'/>
                </div>
              </el-menu-item>
              <el-menu-item index="1">概览</el-menu-item>
              <el-submenu index="2">
                <template slot="title">任务</template>
                <el-menu-item index="2-1">邮件</el-menu-item>
                <el-menu-item index="2-2">短信</el-menu-item>
              </el-submenu>

              <el-menu-item index="3">消息配置</el-menu-item>


              <el-menu-item index="4">日志</el-menu-item>

              <el-submenu index="5">
                <template slot="title">帮助</template>
                <el-menu-item index="5-1">接口文档</el-menu-item>
                <el-menu-item index="5-2">测试工具</el-menu-item>
              </el-submenu>
            </el-menu>

      </el-header>

      <el-container>

        <el-aside width="60px">
          <el-menu
            :collapse="true"
            :default-active="leftActiveIndex"
            class="el-menu-vertical-demo"
            @open=""
            @close="">
            <el-menu-item index="2">
              <i class="el-icon-plus"></i>
              <span slot="title">添加事件</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-search"></i>
              <span slot="title">全部事件</span>
            </el-menu-item>
          </el-menu>

        </el-aside>
        <el-main>
          <div class="bc">
            <el-breadcrumb separator="/" >
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item :to="{ path: '/user/111' }">我的资料</el-breadcrumb-item>
              <el-breadcrumb-item :to="{ path: '/user/111/desc' }">简介</el-breadcrumb-item>
              <el-breadcrumb-item :to="{ path: '/user/111/post' }">文章</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <transition name="fade" mode="out-in">
            <router-view/>
          </transition>

        </el-main>
      </el-container>
    </el-container>

  </div>
</template>

<script>
import ElAside from '../node_modules/element-ui/packages/aside/src/main.vue'

export default {
  components: {ElAside},
  name: 'app',
  data () {
    return {
      topActiveIndex: '1',
      leftActiveIndex: '2'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin:0;padding:0;
}

body{margin:0;padding:0}
.logobox{
  width:200px;
}
.el-main{
  padding:10px;
}
.el-header{
  padding:5px 0 5px 0;

}
.bc{
  padding:10px;
}

.el-menu--horizontal{
  border-bottom: 0px;
}
</style>
