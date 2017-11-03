<template>
  <div class="hello">
    <h1>{{ $route.params.id }}</h1>
    <h2>{{  name }}</h2>
    <el-button @click="countUp"  >{{ counter }}</el-button>
    <label >输入测试：</label>
    <el-input v-model.lazy="input">123</el-input>
    {{input}}
    <router-view/>
    <UserDesc @countup="clickname"></UserDesc>
  </div>
</template>

<script>
  import ElInput from '../../node_modules/element-ui/packages/input/src/input.vue'
  import ElButton from '../../node_modules/element-ui/packages/button/src/button.vue'
  import UserDesc from './UserDesc.vue'

  export default {
    components: {
      ElButton,
      ElInput,
      UserDesc},
    name: 'User',
    data () {
      var uid = this.$route.params.id
      console.log(this.$route)
      var name = '用户' + uid
      return {
        name: name,
        counter: 1,
        input: ''
      }
    },
    methods: {
      countUp: function (event) {
        this.counter += 1
      },
      clickname: function (event) {
        alert(event.name)

        console.log(event)

        throw new Error('VUE Error', 'Error for vue')
      }
    },
    created () {
      console.log('User created..')
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
