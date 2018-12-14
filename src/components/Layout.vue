<template>
  <el-container>
    <el-header height="60" id="mm">
      <el-row >
        <el-col :span="5">
          <div class="logobox">
            <img style="height:48px;" src='/static/logo1.png'/>
          </div>
        </el-col>
          <el-col :span="15">
            <el-menu
              :default-active="topActiveIndex"
              class="topmenu"
              mode="horizontal" @select=""
              backgroundColor="#000"
              textColor="#eee"
              activeTextColor="#AAA"
              @select="mmSelect"
            >
              <el-menu-item index="dashboard">概览</el-menu-item>
              <el-submenu index="service">
                <template slot="title">服务</template>
                <el-menu-item index="email">邮件发送</el-menu-item>
                <el-menu-item index="sms">短信发送</el-menu-item>
              </el-submenu>
              <el-menu-item index="event-list">配置</el-menu-item>
              <el-menu-item index="log">日志</el-menu-item>
              <el-submenu index="debug">
                <template slot="title">调试</template>
                <el-menu-item index="token">修改token</el-menu-item>
              </el-submenu>
            </el-menu>
          </el-col>
          <el-col :span="4">
            <el-dropdown id="quick-link" @command="dwSelect">
            <span class="el-dropdown-link">
              {{ userName }}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
              <el-dropdown-menu slot="dropdown" >
                <el-dropdown-item command="change-pwd">修改密码</el-dropdown-item>
                <el-dropdown-item command="login">退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
        </el-row>
    </el-header>

    <el-container>
      <el-aside width="40" >
        <el-menu
          :collapse="true"
          :default-active="leftActiveIndex"
          class="el-menu-vertical-demo"
          @select="smSelect"
         >
          <el-menu-item index="event-add">
            <i class="el-icon-plus"></i>
            <span slot="title">添加事件</span>
          </el-menu-item>
          <el-menu-item index="event-list">
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
  export default {
    data () {
      return {
        topActiveIndex: '1',
        leftActiveIndex: '1'
      }
    },
    methods: {
      mmSelect (key, keyPath) {
        console.log(this.$store)
        if (key === 'token') {
          this.$store.commit('updateUserInfo', {uid: 0, uname: 'Admin', token: 'xxx'})
        } else {
          this.$router.push(keyPath.join('-'))
        }
      },
      smSelect (key, keyPath) {
        this.$router.push(keyPath.join('-'))
      },
      dwSelect (command) {
        this.$router.push(command)
      }
    },
    computed: {
      userName: function () {
        return this.$store.getters.uname
      }
    }
  }
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
  .logobox{
    text-align: center;
  }
  .logout-btn {
    text-decoration: none;
    color:#000;
  }
</style>
