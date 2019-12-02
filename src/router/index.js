import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Home from '@/pages/home'
import Show from '@/pages/show'
import Search from '@/pages/search'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'show',
      component: Show
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/show',
      name: 'Show',
      component: Show
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    }
  ]
})
