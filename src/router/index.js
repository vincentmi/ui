import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'
import User from '@/components/User'
import UserDesc from '@/components/UserDesc'
import UserPost from '@/components/UserPost'
import Login from '@/components/Login'
import NoticeList from '@/components/NoticeList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children: [
        {
          name: 'NoticeList',
          path: 'notice-list',
          component: NoticeList
        }

      ]
    },

    {
      path: '/login',
      name: 'login',
      component: Login

    },

    {
      path: '/user/:id',
      name: 'User',
      component: User,
      children: [
        {
          name: 'UserDesc',
          path: 'desc',
          component: UserDesc
        },
        {
          name: 'UserPost',
          path: 'post',
          component: UserPost
        }
      ]
    }
  ]
})
