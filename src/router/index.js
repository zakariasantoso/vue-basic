import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/showcase',
    name: 'Showcase',
    component: () => import(/* webpackChunkName: "showcase" */ '../views/Showcase.vue')
  },
  {
    path: '/todo',
    name: 'TodoList',
    component: () => import(/* webpackChunkName: "todo" */ '../views/TodoList.vue')
  },
  {
    path: '/todoApi',
    name: 'TodoAPI',
    component: () => import(/* webpackChunkName: "todoAPI" */ '../views/TodoApi.vue')
  },
  {
    path: '/store',
    name: 'Store',
    component: () => import(/* webpackChunkName: "Store" */ '../views/Store.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
