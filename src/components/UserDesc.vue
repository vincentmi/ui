<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>个人简介</span>
      <el-button style="float: right; padding: 3px 0" type="text" @click="emitEvent">{{ name }}</el-button>
    </div>
    <div>{{ description }}
    </div>
    <div class="footer">用户编号：{{ uid }}</div>
  </el-card>
</template>

<script>
  import ElCard from '../../node_modules/element-ui/packages/card/src/main.vue'

  export default {
    components: {ElCard},
    name: 'UserDesc',
    data () {
      var uid = this.$route.params.id
      return {
        name: 'Elon Musk',
        uid: this.$store.state.uid,
        description: 'CEO of SpaceX' + uid
      }
    },
    methods: {
      emitEvent: function (event) {
        this.$emit('countup', {name: 'Elon Musk'})
      }
    }
  }
</script>

<style scoped>

  .footer{
    font-size: 9px;
    text-align: right;
    color:#aaa
  }

</style>
