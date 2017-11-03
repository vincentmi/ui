<template>
  <div class="hello">
    <ul>
       <li>{{ $route.params.id }}</li>
       <li>{{  name }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'UserPost',
    data () {
      var uid = this.$route.params.id
      var name = '用户' + uid
      return {
        name: name
      }
    }
  }
</script>
