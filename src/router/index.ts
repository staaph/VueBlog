import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/post',
      name: 'post',
      component: () => import('@/views/BlogpostView.vue')
    },
    {
      path: '/:catchAll(.*)*',
      name: 'error',
      component: () => import('@/views/ErrorView.vue')
    }
  ]
})

export default router
