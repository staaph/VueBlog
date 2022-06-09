import { createRouter, createWebHistory } from 'vue-router';
import { fbUser } from '@/composables/useAuth';
import { ref } from 'vue';

const requireAuth = async(to, from, next) => {
  const user = await fbUser()
  if(!user){
    next({name:'requireLogin'})
  }
  else{
    next()
  }
}
const requireNoAuth = async(to, from, next) => {
  const user = ref(await fbUser())
  if(user.value){
    next({name:'home'})
  }
  else{
    next()
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/post',
      name: 'post',
      component: () => import('@/views/BlogpostView.vue'),
    },
    {
      path: '/write',
      name: 'write',
      component: () => import('@/views/WriteArticle.vue'),
      beforeEnter: requireAuth
    },
    {
      path: '/requirelogin',
      name: 'requireLogin',
      component: () => import('@/views/LoginRequired.vue'),
      beforeEnter: requireNoAuth
    },
    {
      path: '/:catchAll(.*)*',
      name: 'error',
      component: () => import('@/views/ErrorView.vue'),
    },
  ],
});

export default router;
