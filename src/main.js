// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '../theme/index.css'
import ElementUI from 'element-ui'
import Vue from 'vue'
import App from './App'
import router from './router'
import VueProgressBar from 'vue-progressbar'
import Raven from 'raven-js'
import RavenVue from 'raven-js/plugins/vue'
import './config/setting'
import Vuex from 'vuex'
import store from './store/index.js'
import VChart from './components/VChart.vue'

Vue.component('v-chart', VChart)

Raven
  .config('http://21e8d546983840b99622cbaa4c96ead7@qasentry.mxj.mx/2')
  .addPlugin(RavenVue, Vue)
  .install()

Vue.config.productionTip = false

Vue.use(Vuex)

Vue.use(ElementUI, { size: 'large' })

Vue.use(VueProgressBar, {
  color: 'rgb(0, 153, 0)',
  failedColor: 'red',
  height: '2px'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
