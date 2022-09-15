import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import ChatView from "../views/ChatView.vue";
import SpeechView from "../views/SpeechView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
    {
      path: "/chat",
      name: "chat",
      component: ChatView,
    },
    {
      path: "/speech",
      name: "speech",
      component: SpeechView,
    },
  ],
});

router.beforeEach(async (to, from) => {
  if (!localStorage.getItem("access_token") && to.name === "home") {
    return { name: "login" };
  } else if (localStorage.getItem("access_token") && to.name === "login") {
    return { name: "home" };
  } else if (localStorage.getItem("access_token") && to.name === "register") {
    return { name: "home" };
  } else if (!localStorage.getItem("access_token") && to.name === "chat") {
    return { name: "login" };
  } else if (!localStorage.getItem("access_token") && to.name === "speech") {
    return { name: "login" };
  }
});

export default router;
