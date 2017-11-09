<template>
  <div :id="id" :option="option"  :style="cssStyle"></div>
</template>

<script>
  import HighCharts from 'highcharts'
  export default {
    name: 'VChart',
    componentName: 'VChart',
    props: {
      id: {
        type: String
      },
      option: {
        type: Object
      },
      cssStyle: {
        type: String
      }
    },
    mounted () {
      HighCharts.chart(this.id, this.option)
    }
  }
</script>
