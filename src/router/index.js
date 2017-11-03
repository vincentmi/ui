import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import User from '@/components/User'
import UserDesc from '@/components/UserDesc'
import UserPost from '@/components/UserPost'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
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
