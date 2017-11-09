<template>
  <div class="login">
    <transition name="form-fade" mode="in-out">
      <section class="form-contianer">
        <div class="manage_tip">
          <p><img src="/static/logo_g.png" width="80" /><br/>消息中心登录</p>
        </div>
        <el-form label-width="60px" v-model="formData">
          <el-alert
            v-show="showError"
            :title="errorMessage"
            type="error"
            :closable="false"
            show-icon
            style="margin:20px 0 20px 0"
          >
          </el-alert>
          <el-form-item prop="username" label="账号">
            <el-input placeholder="账号" v-model="formData.username" ></el-input>
          </el-form-item>
          <el-form-item prop="password"  label="密码">
            <el-input type="password" placeholder="密码" v-model="formData.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button  type="primary" @click="doLogin" >登陆</el-button>
          </el-form-item>
        </el-form>
      </section>
    </transition>
  </div>
</template>


<script>
  import Net from '@/service/net'
  export default {
    name: 'Login',
    data () {
      return {
        errorMessage: '登录失败，请重试',
        showError: false,
        formData: {
          username: '',
          password: ''
        },
        passwordError: '',
        usernameError: ''
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

      doLogin () {
        var url = global.BASE_URL + '/auth/get/token'
        var vm = this
        vm.$Progress.start()
        let postData = {username: this.formData.username, password: this.formData.password}
        console.log(postData)
        Net.postNoAuth(vm, url, postData, function (data) {
          localStorage.setItem('token', data.token)
          localStorage.setItem('uid', data.uid)
          localStorage.setItem('token.created', data.created_at)
          localStorage.setItem('token.expired', data.expired_at)
          vm.$message.success('登录成功')
          vm.$Progress.finish()
          vm.$router.push('/dashboard')
          vm.$store.commit('updateUserInfo', {uid: 0, uname: postData.username, token: data.token})
        })
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
