import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import DetailView from "../views/DetailView.vue";
import RegisterView from "../views//RegisterView.vue";

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
      path: "/detail",
      name: "detail",
      component: DetailView,
    },
  ],
});

router.beforeEach((to, from) => {
  if (
    (!localStorage.getItem("access_token") && to.path == "/detail") ||
    (!localStorage.getItem("access_token") && to.path == "/")
  ) {
    return { name: "login" };
  }
  if (
    (localStorage.getItem("access_token") && to.path == "/login") ||
    (localStorage.getItem("access_token") && to.path == "/register")
  ) {
    return { path: "/" };
  }
  if (!to.name) {
    return { path: "/" };
  }
});

export default router;
