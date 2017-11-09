import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'
import Login from '@/components/Login'
import MainRoutes from './main'

Vue.use(Router)

let routes = [
  {
    path: '/',
    meta: {label: '首页'},
    name: 'Layout',
    component: Layout,
    children: MainRoutes
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = new Router({
  history: true,
  routes: routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) {
    next({path: '/exception', params: { message: '404 Page Not Found' }})
  } else {
    next()
  }
})

export default router
