import Vue from 'vue'
import Router from 'vue-router'
import findMusic from '@/pages/findMusic/findMusic'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'findMusic',
      component: findMusic
    }
  ]
})
