// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '../theme/index.css'
import ElementUI from 'element-ui'
import Vue from 'vue'
import App from './App'
import router from './router'
import VueProgressBar from 'vue-progressbar'

Vue.config.productionTip = false

Vue.use(ElementUI, { size: 'large' })

Vue.use(VueProgressBar, {
  color: 'rgb(143, 255, 199)',
  failedColor: 'red',
  height: '2px'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
