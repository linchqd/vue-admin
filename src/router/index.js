import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      name: 'Dashboard',
      path: 'dashboard',
      component: () => import('@/views/dashboard/index')
    }]
  }
]

const router = new VueRouter({
  routes
})

export default router
