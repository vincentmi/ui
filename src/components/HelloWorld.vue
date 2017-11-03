<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{  linkTitle }}</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>{{ ecoTitle }}</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>


    <div class="block">
      <span class="demonstration">默认不区分颜色</span>
      <el-rate v-model="value2"></el-rate>
    </div>
    <div class="block">
      <span class="demonstration">区分颜色</span>
      <el-rate
        v-model="value3"
        :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
      </el-rate>
    </div>

    <el-button type="primary" @click="open">主按钮</el-button>


    <el-time-select
      v-model="value1"
      :picker-options="{
    start: '08:30',
    step: '00:15',
    end: '18:30'
  }"
      placeholder="选择时间">
    </el-time-select>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    this.$router.push({path: '/'})
    return {
      msg: '欢迎使用VUE',
      value1: new Date(),
      value2: 2,
      value3: 3,
      linkTitle: '链接地址',
      ecoTitle: '生态系统'
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
    }
  }
}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
