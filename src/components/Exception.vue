<template>
  <div>
    <h3>Exception</h3>
    <h1>{{ msg }}</h1>
  </div>

</template>

<script>
  export default {
    name: 'Exception',
    prop: [ 'message' ],
    data () {
      /*
      var routeMsg = this.prop.message
      if (typeof (routeMsg) !== 'string') {
        routeMsg = this.$route.params('message')
      }
      */
      return {
        msg: '404 Not Found'
      }
    }
  }
</script>

<style scoped>
  h1 {
    font-size:60pt;
    font-weight:100;
    color:#eee;
    margin:0;padding:0;
    font-style: italic;
    letter-spacing: 0px;
    word-spacing:0px;
  }
  h3 {
    font-size:30pt;
    font-weight: 100;
    color:#eee;
    margin:0;padding:0  0 0 30%;
    text-align: left;
    margin-top:10%;
    font-style: italic;
  }

</style>
