<template>

  <el-container>
    <el-header height="60" id="mm">
      <el-row >
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
          <el-col :span="4">
            <el-dropdown id="quick-link">
            <span class="el-dropdown-link">
              Vincent<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>修改密码</el-dropdown-item>
                <el-dropdown-item><router-link  class="logout-btn" :to="{name: 'login'}">退出</router-link></el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
        </el-row>
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

        <transition name="fade" mode="out-in">
          <router-view/>
        </transition>

      </el-main>
    </el-container>
  </el-container>

</template>

<script>


</script>

<style scoped >
  #mm {
    height:65px;
    background: #000000;
    color:#fff;
  }
  #mm .el-dropdown-link{
    color:#fff;
  }
  #quick-link{
    margin:18px 18px 0 0;
    float:right;
  }

  .logout-btn {
    text-decoration: none;
    color:#000;
  }
</style>
