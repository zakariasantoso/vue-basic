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
    path: '/todo/:id',
    name: 'TodoDetail',
    component: () => import(/* webpackChunkName: "todoDetail" */ '../views/TodoDetail.vue')
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
  },
  {
    path: '/route',
    name: 'RouteGuard',
    component: () => import(/* webpackChunkName: "RouteGuard" */ '../views/RouteGuard.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "Profile" */ '../views/Profile.vue'),
    children: [
      {
        path: 'account',
        name: 'Account',
        component: () => import(/* webpackChunkName: "Account" */ '../views/Account.vue')
      },
      {
        path: 'setting',
        name: 'Setting',
        component: () => import(/* webpackChunkName: "Setting" */ '../views/Setting.vue')
      },
      {
        path: 'privacy',
        name: 'Privacy',
        component: () => import(/* webpackChunkName: "Privacy" */ '../views/Privacy.vue')
      },
    ]
  },
  {
    path: '/mixin',
    name: 'Mixin',
    component: () => import(/* webpackChunkName: "mixin" */ '../views/Mixin.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
