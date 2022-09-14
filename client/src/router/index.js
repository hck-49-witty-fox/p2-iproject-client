import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterPage from '../views/RegisterPage.vue'
import LoginPage from '../views/LoginPage.vue'
import MapsPage from '../views/MapsPage.vue'
import AddProfile from '../views/AddProfile.vue'
import ChatPage from '../views/ChatPage.vue'
import Swal from "sweetalert2";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
      children: [
        {
          path: '',
          component: MapsPage
        },
        {
          path: 'chat',
          component: ChatPage,
          beforeEnter: (to, from) => {
            if (!localStorage.getItem("access_token")) {
              Swal.fire({
                title: 'Error!',
                text: 'You Need To Login First!',
                icon: 'error',
                confirmButtonText: 'Try Again'
              })
              return { path: "/login" };
            }
          },
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
      beforeEnter: (to, from) => {
        if (localStorage.getItem("access_token")) {
          Swal.fire({
            title: 'Error!',
            text: 'You Already Login',
            icon: 'error',
            confirmButtonText: 'Try Again'
          })
          return { path: "/" };
        }
      },   
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterPage,
      beforeEnter: (to, from) => {
        if (localStorage.getItem("access_token")) {
          Swal.fire({
            title: 'Error!',
            text: 'You Already Login',
            icon: 'error',
            confirmButtonText: 'Try Again'
          })
          return { path: "/" };
        }
      },
    },
    {
      path: '/addprofile',
      name: 'profile',
      component: AddProfile,
      beforeEnter: (to, from) => {
        if (localStorage.getItem("access_token")) {
          Swal.fire({
            title: 'Error!',
            text: 'You Already Login',
            icon: 'error',
            confirmButtonText: 'Try Again'
          })
          return { path: "/" };
        }
      },
    },
  ]
})

export default router
