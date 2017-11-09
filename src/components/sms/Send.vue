<template>
  <div id="sms">
    <Breadcrumb :items="[{label:'首页', to:'/'},{label:'短信发送',to:''}]"></Breadcrumb>
    <el-form  label-width="80px">
      <el-form-item label="活动名称">
        <el-input ></el-input>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
  import Breadcrumb from '../Breadcrumb.vue'

  export default {
    components: {Breadcrumb},
    name: 'ServiceSmsSend',
    data () {
      return {}
    }
  }
</script>

<style>

</style>
