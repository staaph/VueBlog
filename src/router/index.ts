import {
  createRouter,
  createWebHistory,
} from 'vue-router';
import { fbUser } from '@/composables/useAuth';

const requireAuth = async () => {
  const user = await fbUser();
  if (!user) {
    return { name: 'requireLogin' };
  } else {
    return;
  }
};
const requireNoAuth = async () => {
  const user = await fbUser();
  if (user) {
    return { name: 'home' }
  } else {
    return
  }
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/post/:id',
      name: 'post',
      component: () => import('@/views/BlogpostView.vue'),
    },
    {
      path: '/write',
      name: 'write',
      component: () => import('@/views/WriteArticle.vue'),
      beforeEnter: requireAuth,
    },
    {
      path: '/requirelogin',
      name: 'requireLogin',
      component: () => import('@/views/LoginRequired.vue'),
      beforeEnter: requireNoAuth,
    },
    {
      path: '/:catchAll(.*)*',
      name: 'error',
      component: () => import('@/views/ErrorView.vue'),
    },
  ],
});

export default router;
