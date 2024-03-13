import { createRouter, createWebHistory } from 'vue-router'

import feeds from '../pages/feeds'
import stories from '../pages/stories'


const routes = [
  {
    path: '/',
    alias: '/home',
    name: 'home',
    props: true,
    component: feeds,
  },
  {
    path: '/stories',
    name: 'stories',
    props: true,
    component: stories,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
