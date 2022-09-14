import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import ChatView from '@/views/ChatBoxView.vue';
import LoginView from '@/views/LoginView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },

    {
      path: '/chat',
      name: 'chat',
      component: ChatView,
    },

    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
  ],
});

router.beforeEach((to, from) => {
  if (!localStorage.getItem('access_token') && to.name === 'chat') {
    return { path: '/login' };
  }
});

export default router;
