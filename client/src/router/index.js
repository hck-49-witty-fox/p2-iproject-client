import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import ChatView from '@/views/ChatBoxView.vue';
import LoginView from '@/views/LoginView.vue';
import DetailView from '@/views/DetailView.vue';
import RegisterView from '@/views/RegisterView.vue';
import TechThreadView from '@/views/TechThreadView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },

    {
      path: '/detail/:id',
      name: 'detail',
      component: DetailView,
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

    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },

    {
      path: '/tech',
      name: 'tech-thread',
      component: TechThreadView,
    },
  ],
});

router.beforeEach((to, from) => {
  if (!localStorage.getItem('access_token') && to.name === 'chat') {
    return { path: '/login' };
  }
});

export default router;
