import { createRouter, createWebHistory } from 'vue-router'

// PAGES IMPORT
import HomeView from '../views/HomeView.vue'
import SeatView from '../views/SeatsView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import NowPlayingView from '../views/NowPlayingView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    //? HOME
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    //? BOOK SEAT
    //
    {
      path: '/seats',
      name: 'seats',
      component : SeatView
    },

    //? LOGIN
    // /session/login
    {
      path: '/session/login',
      name: 'login',
      component: LoginView
    },

    //? REGISTER
    // /session/register
    {
      path: '/session/register',
      name: 'register',
      component: RegisterView
    },

    //? MOVIE
    // /movie/nowplaying
    {
      path: '/movie/nowplaying',
      name: 'nowplaying',
      component: NowPlayingView
    },

    //? MOVIE
    // /movie/nowplaying
    {
      path: '/movie/:id',
      name: 'n',
      component: NowPlayingView
    },
  ]
})

// USERS CANNOT ACCESS LOGIN & REGISTER PAGE IF ALREADY LOGGED IN
router.beforeEach(async (to, from) => {
  if(localStorage.getItem('access_token') && (to.name === 'login' || to.name === 'register' || to.name === 'favourite' )) {
    return { name : 'home' }
  }
})

export default router
