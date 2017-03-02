import Vue from 'vue'
import Router from 'vue-router'
import Index from 'components/Index'
import SiteList from 'components/SiteList'
import Choose from 'components/Choose'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
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
