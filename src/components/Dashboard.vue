<template>
  <div>

    <el-row>
      <el-col :span="6" :sm="6" :xs="12">
        <div class="card card-green">
          <h4>托管事件总数</h4>
          <h2>{{totalEvent}}</h2>
        </div>
      </el-col>
      <el-col :span="6" :sm="6" :xs="12">
        <div class="card card-blue">
          <h4>短信发送总量</h4>
          <h2>{{totalSms}}</h2>
        </div>
      </el-col>
      <el-col :span="6" :sm="6" :xs="12">
        <div class="card card-gray">
          <h4>邮件发送总量</h4>
          <h2>{{totalEmail}}</h2>
        </div>
      </el-col>
      <el-col :span="6" :sm="6" :xs="12">
        <div class="card card-red">
          <h4>失败任务数</h4>
          <h2>{{totalFailJobs}}</h2>
        </div>
      </el-col>
    </el-row>

    <el-row :span="24">
      <v-chart id="apistat" :option="apiStat" cssStyle="height:300px;width:100%;" ></v-chart>
    </el-row>

  </div>

</template>


<script>
  import ElRow from 'element-ui/packages/row/src/row'
  import VChart from './VChart.vue'

  export default {
    components: {
      VChart,
      ElRow},
    name: 'Dashboard',
    data () {
      let categories = []
      let inqueue = []
      let outqueue = []
      for (var i = 20171201; i < 20171210; i++) {
        categories.push(i)
        inqueue.push(Math.ceil(Math.random() * 100))
        outqueue.push(Math.ceil(Math.random() * 100))
      }

      return {
        totalEvent: 12423,
        totalFailJobs: 45,
        totalSms: 1293,
        totalEmail: 120,
        apiStat: {
          chart: {
            type: 'spline'
          },
          plotOptions: {
            series: {
              marker: {
                enabled: false
              }
            }
          },
          title: {
            text: 'API访问情况'
          },
          xAxis: {
            categories: categories
          },
          yAxis: {
            title: {
              text: '访问量'
            }
          },
          series: [{
            name: 'inqueue',
            data: inqueue
          }, {
            name: 'outqueue',
            data: outqueue
          }]
        }
      }
    },
    computed: {
      debug: function () {
        return this.$store.getters.token
      }
    }
  }
</script>


<style scoped>
  .card{
    background: #FFFFFF;
    color:#333;
    border:1px solid #999;
    margin:10px;
  }
  .card h2{
    margin:0;
    font-size:40px;
    padding:5px;
    font-weight: 100;

  }

  .card h4{
    padding:0;
    margin:0;
    font-size:16px;
    background: #999;
    color: #fff;
    text-align:center;
    padding:5px;
    font-weight: 200;
  }

  .card-green h4 {
    background:#dff0d8;
    color:#3c763d;
  }
  .card-green{
    border-color:#dff0d8;
  }

  .card-blue h4 {
    background:#bce8f1;
    color:#31708f;
  }
  .card-blue{
    border-color:#bce8f1;
  }

  .card-red h4 {
    background:#f2dede;
    color:#a94442;
  }
  .card-red{
    border-color:#f2dede;
  }

  .card-gray h4 {
    background:#eee;
    color:#888;
  }
  .card-gray{
    border-color:#eee;
  }

</style>
