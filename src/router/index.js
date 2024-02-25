import { createRouter, createWebHistory } from 'vue-router'

import feeds from '../pages/feeds'


const routes = [
  {
    path: '/',
    alias: '/home',
    component: feeds,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
