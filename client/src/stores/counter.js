const baseUrl = "http://localhost:3000";
import axios from "axios";
import Swal from "sweetalert2";
import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => {
    return {
      isLogin: false,
      username: "",
      images: [],
      recipes: [],
      myrecipes: [],
    };
  },
  actions: {
    changeIsLogin(login) {
      this.isLogin = login;
    },
    async registerUser(username, password, email) {
      try {
        await axios.post(`${baseUrl}/register`, { username, password, email });
        this.router.push("/login");
        Swal.fire(
          "Welcome!",
          "You are now a member, please log in to continue!",
          "success"
        );
      } catch (err) {
        console.log(err);
      }
    },
    async loginUser(username, password) {
      try {
        console.log(username, password, "===masuk");
        const response = await axios.post(`${baseUrl}/login`, {
          username,
          password,
        });

        console.log(response.data);

        localStorage.setItem("access_token", response.data.access_token);
        this.isLogin = true;
        this.username = username;
        this.router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
    async showSlideShow() {
      try {
        const response = await axios.get(`${baseUrl}/images`, {
          headers: { access_token: localStorage.getItem("access_token") },
        });
        this.images = response.data.data;
        console.log(this.images, "=== ini image");
      } catch (err) {
        console.log(err);
      }
    },
    async showRecipes() {
      try {
        const response = await axios.get(`${baseUrl}/recipes`, {
          headers: { access_token: localStorage.getItem("access_token") },
        });
        this.recipes = response.data.data;
        console.log(this.recipes);
      } catch (err) {
        console.log(err);
      }
    },
    async showMyRecipes() {
      try {
        const response = await axios.get(`${baseUrl}/myrecipes`, {
          headers: { access_token: localStorage.getItem("access_token") },
        });
        this.myrecipes = response.data.data;
      } catch (err) {
        console.log(err);
      }
    },
  },
});
