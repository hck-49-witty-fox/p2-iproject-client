import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import LoginPage from "../views/LoginPage.vue";
import RecipePage from "../views/RecipePage.vue";
import MyRecipePage from "../views/MyRecipePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/login",
      name: "login",
      component: LoginPage,
    },
    {
      path: "/recipes",
      name: "recipes",
      component: RecipePage,
    },
    {
      path: "/myrecipes",
      name: "myrecipes",
      component: MyRecipePage,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.name !== "login" && !localStorage.getItem("access_token"))
    next("/login");
  else if (to.name === "login" && localStorage.getItem("access_token"))
    next("/home");
  else next();
});

export default router;
