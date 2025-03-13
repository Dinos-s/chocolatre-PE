import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cart',
    name: 'carrinho',
    component: () => import(/* webpackChunkName: "pedidos" */ '../views/Cart.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router