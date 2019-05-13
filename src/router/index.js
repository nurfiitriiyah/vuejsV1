import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import viewLogin from '@/components/components_login/login'
import viewDash from '@/components/components_dashboard/dash'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/login',
      name: 'HelloWorld',
      component: viewLogin
    }, {
      path: '/dash',
      name: 'HelloWorld',
      component: viewDash
    }
  ]
})
