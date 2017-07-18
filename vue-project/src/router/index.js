import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import search from '@/components/search'
import indexcontent from '@/components/indexcontent'
import hotscontent from '@/components/hotscontent'
import playcontent from '@/components/playcontent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children: [
        {
          path: '/',
          component: indexcontent
        },
        {
          path: 'hots',
          component: hotscontent
        },
        {
          path: 'play',
          component: playcontent
        }
      ]
    },
    {
      path: '/search',
      name: 'search',
      component: search
    }
  ]
})
