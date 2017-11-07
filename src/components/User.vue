<template>
  <div class="hello">
    <h1>URL:{{ $route.params.id }}</h1>
    <h2>Name:{{  leaderName }}</h2>

    <label >简介：</label>
    <p>{{description}}
      <small>{{ id }}</small>
    <router-view/>
    <UserDesc @countup="clickname"></UserDesc>
    <el-button @click="countUp"  >{{ counter }}</el-button>
    </p>
  </div>
</template>

<script>
  import ElInput from '../../node_modules/element-ui/packages/input/src/input.vue'
  import ElButton from '../../node_modules/element-ui/packages/button/src/button.vue'
  import UserDesc from './UserDesc.vue'
  import Axios from 'axios'

  export default {
    components: {
      ElButton,
      ElInput,
      UserDesc},
    name: 'User',
    data () {
      return {
        leaderName: '',
        counter: 1,
        id: '',
        description: ''
      }
    },
    methods: {
      getUserInfo: function (uid) {
        var url = global.BASE_URL + '/svr.php'
        var vm = this
        Axios.get(url, {uid: uid})
          .then(
          function (response) {
            /*
            console.log(response)
            * */
            vm.leaderName = response.data.name
            vm.id = response.data.id
            vm.description = response.data.description
            vm.$store.commit('update', {
              uid: response.data.id,
              uname: response.data.name,
              token: response.data.token
            })
          }
        )
      },
      countUp: function (event) {
        this.counter += 1
      },
      clickname: function (event) {
        this.getUserInfo(1)
        console.log(this.$store.state.uid)
      }
    },
    created () {
      console.log('User created..')
      this.getUserInfo(this.$route.params.id)
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
