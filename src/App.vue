<template>
  <div id="app">
    <vue-progress-bar></vue-progress-bar>

      <transition name="fade">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
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
