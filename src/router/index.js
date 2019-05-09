import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import viewLogin from '@/components/components_login/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/login',
      name: 'HelloWorld',
      component: viewLogin,data(){
        return {
          msg: 'Welcome to Your Vue.js App',
          step : 1
        }
      }
    }
  ]
})
