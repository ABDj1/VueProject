import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {layout: 'main'},
      component: () => import('../views/Home')
    },
    {
      path: '/login',
      name: 'login',
      meta: {layout: 'empty'},
      component: () => import('../views/Login')
    },
    {
      path: '/categories',
      name: 'categories',
      meta: {layout: 'main'},
      component: () => import('../views/Categories')
    },
    {
      path: '/register',
      name: 'register',
      meta: {layout: 'empty'},
      component: () => import('../views/Register')
    },
    {
      path: '/profile',
      name: 'profile',
      meta: {layout: 'main'},
      component: () => import('../views/Profile')
    },
    {
      path: '/record',
      name: 'record',
      meta: {layout: 'main'},
      component: () => import('../views/Record')
    },
    {
      path: '/planning',
      name: 'planning',
      meta: {layout: 'main'},
      component: () => import('../views/Planning')
    },
    {
      path: '/history',
      name: 'history',
      meta: {layout: 'main'},
      component: () => import('../views/History')
    },
    {
      path: '/detail',
      name: 'detail',
      meta: {layout: 'main'},
      component: () => import('../views/DetailRecord')
    }
  ]
})