import Vue from 'vue'
import Router from 'vue-router'
import Index from '../page/Index'
import SiteList from '../page/SiteList'
import Choose from '../page/Choose'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/siteList/:id',
      name: 'siteList',
      component: SiteList
    },
    {
      path: '/choose/:id',
      name: 'choose',
      component: Choose
    }
  ]
})
