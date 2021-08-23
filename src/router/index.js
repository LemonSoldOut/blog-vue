import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Demo from '../views/Demo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/histogram',
    name: 'Histogram',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Histogram.vue')
  },
  {
    path: '/demo',
    name: 'Demo',
    // 只要上面 import 之后就可以直接写 component: Demo
    // component: () => import(/* webpackChunkName ../demo */ '../views/Demo.vue')
    component: Demo
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
