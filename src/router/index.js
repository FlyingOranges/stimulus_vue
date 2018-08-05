import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/components/Index'
import ListPage from '@/components/List'
import InfoPage from '@/components/Info'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: IndexPage
    },
    {
      path: '/lists',
      name: 'Lists',
      component: ListPage
    },
    {
      path: '/info',
      name: 'Info',
      component: InfoPage
    }
  ]
})
