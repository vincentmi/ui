<template>
  <div class="bc">
    <el-breadcrumb separator="/" >
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/user/111' }">我的资料</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/user/111/desc' }">简介</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/user/111/post' }">文章</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
  export default {
    name: 'Breadcrumb',
    data () {
      return {
        msg: ''
      }
    },
    methods: {
    }
  }
</script>

<style>

</style>
