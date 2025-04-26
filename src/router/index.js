import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/sacrament',
      name: 'sacrament',
      component: () => import('../views/Sacrament.vue')
    },
    {
      path: '/origins',
      name: 'origins',
      component: () => import('../views/Origins.vue')
    },
    {
      path: '/celebrate',
      name: 'celebrate',
      component: () => import('../views/Celebrate.vue')
    }
  ]
})

export default router