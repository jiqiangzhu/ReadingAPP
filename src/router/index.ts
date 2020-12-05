import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
// import InitPageCom from '../components/InitPageCom.vue'

const routes: Array<RouteRecordRaw> = [
  // 引导页
  {
    path: '/',
    name: 'InitPageCom',
    component: () => import(/* webpackChunkName: "about" */ '../components/InitPagesCom.vue')
  },
  {
    path: '/bookDetails',
    name: 'BookDetails',
    component: () => import(/* webpackChunkName: "about" */ '../views/BookDetails.vue')
  },
  {
    path: '/explore',
    name: 'ExploreCom',
    component: () => import(/* webpackChunkName: "about" */ '../views/ExploreCom.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/home',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Home
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
