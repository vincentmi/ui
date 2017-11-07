<template>
  <div class="login">
    <transition name="form-fade" mode="in-out">
      <section class="form-contianer">
        <div class="manage_tip">
          <p><img src="/static/logo_g.png" width="80" /><br/>消息中心登录</p>
        </div>
        <el-form label-width="80px">
          <el-form-item prop="username" label="用户名">
            <el-input placeholder="用户名" ></el-input>
          </el-form-item>
          <el-form-item prop="password" label="密码">
            <el-input type="password" placeholder="密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="jump" >登陆</el-button>
          </el-form-item>
        </el-form>
      </section>
    </transition>
  </div>
</template>


<script>
  export default {
    name: 'Login',
    data () {
      this.$router.push({path: '/login'})
      return {
        msg: ''
      }
    },

    methods: {

      open () {
        this.$alert('抱歉你的权限不够无法进行该操作', '权限不够', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${action}`
            })
          }
        })
      },
      jump () {
        this.$router.push('/')
      }
    }
  }
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .form-contianer{
    width:300px;
    margin:10% auto  auto auto;
  }
</style>
