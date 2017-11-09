<template>
  <div class="bc">
    <el-breadcrumb separator="/" >
      <el-breadcrumb-item  v-for="item in items" :to="item.to" :key="item.label">{{item.label}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
  export default {
    name: 'Breadcrumb',
    prop: {
      items: {
        type: 'Array'
      }
    },
    data () {
      console.log(this.items)
      return {
      }
    },
    methods: {
    }
  }
</script>

<style>

</style>
