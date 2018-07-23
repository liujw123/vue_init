import Vue from 'vue'
import Router from 'vue-router'
import init from '@/components/init'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'init',
      component: init
    }
  ]
})
