<template>
  <el-row id="mm">
    <el-col :span="20">
      <el-menu
        :default-active="topActiveIndex"
        class="topmenu"
        mode="horizontal" @select=""
        backgroundColor="#000"
        textColor="#eee"
        activeTextColor="#AAA"
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
    </el-col>
    <el-col>
      <el-dropdown>
        <span class="el-dropdown-link">
          下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>黄金糕</el-dropdown-item>
                <el-dropdown-item>狮子头</el-dropdown-item>
                <el-dropdown-item>螺蛳粉</el-dropdown-item>
                <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
              </el-dropdown-menu>
      </el-dropdown>
    </el-col>
  </el-row>

</template>


<script>
  export default {
    name: 'Mainmenu',
    data () {
      return {}
    },

    methods: {
    }
  }
</script>

<style scoped>
</style>
