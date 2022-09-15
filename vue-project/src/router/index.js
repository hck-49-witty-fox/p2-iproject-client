import { createRouter, createWebHistory } from "vue-router";
import NavBar from "../components/NavBar.vue";
import HomePage from "../views/HomePage.vue";
import GenrePage from "../views/GenrePage.vue";
import GenrePlaylist from "../views/GenrePlaylist.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "navbar",
      component: NavBar,
      beforeEnter: (to, from) => {
        if (!localStorage.getItem("access_token")) {
          return { path: "/signin" };
        }
      },
      children: [
        {
          path: "",
          name: "home",
          component: HomePage,
        },
        {
          path: "genre",
          name: "genre",
          component: GenrePage,
        },
        {
          path: "genre/:name",
          name: "genreplaylist",
          component: GenrePlaylist,
        },
      ],
    },
  ],
});

export default router;
