const baseUrl = "http://localhost:3000";
import axios from "axios";
import Swal from "sweetalert2";
import { defineStore } from "pinia";

export const useStore = defineStore("counter", {
  state: () => {
    return {
      allUser: [],
      loveCalculator: null,
    };
  },
  actions: {
    async register(
      username,
      email,
      password,
      fullname,
      gender,
      birthyear,
      imgUrl
    ) {
      try {
        const registeredUser = await axios.post(`${baseUrl}/register`, {
          username,
          email,
          password,
          fullname,
          gender,
          birthyear,
          imgUrl,
        });
        this.router.push("/login");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Register success. Please Login",
          showConfirmButton: false,
          timer: 1500,
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.message,
        });
      }
    },

    async login(email, password) {
      try {
        const login = await axios.post(`${baseUrl}/login`, { email, password });
        localStorage.setItem("access_token", login.data.access_token);
        localStorage.setItem("username", login.data.username);
        this.router.push("/");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Success",
          showConfirmButton: false,
          timer: 1000,
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.message,
        });
      }
    },

    async logout() {
      try {
        const result = await Swal.fire({
          title: "Are you sure?",
          text: "You will log out",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, logout!",
        });

        if (result.isConfirmed) {
          localStorage.clear();
          this.router.push("/login");
          Swal.fire("Logout!", "Success");
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.message,
        });
      }
    },

    async getAllUser() {
      try {
        const getIt = await axios.get(`${baseUrl}/user`, {
          headers: { access_token: localStorage.getItem("access_token") },
        });
        this.allUser = getIt.data;
      } catch (error) {
        console.log(error);
      }
    },

    async calculate(username) {
      try {
        const calcLove = await axios.get(`${baseUrl}/calculate/${username}`, {
          headers: { access_token: localStorage.getItem("access_token") },
        });

        this.loveCalculator = calcLove.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
