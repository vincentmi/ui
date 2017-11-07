<template>
  <div id="sm">
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
  </div>
</template>


<script>
  export default {
    name: 'Sidebar',
    data () {
      return {}
    },

    methods: {
    }
  }
</script>

<style scoped>
</style>
