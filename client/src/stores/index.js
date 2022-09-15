import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useCustomStore = defineStore("index", {
  state: () => {
    return {
      games: [],
    };
  },

  actions: {
    async login(email, password) {
      try {
        let login = await axios.post("http://localhost:3000/login", {
          email,
          password,
        });
        // console.log(login);

        localStorage.setItem("access_token", login.data.access_token);
      } catch (error) {
        console.log(error, ">>>>>>>");
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.message,
          footer: "Input Your Email/Password Correctly!",
        });
        console.log("hihihihihihihihi");
        return error;
      }
    },

    async register(email, password) {
      try {
        let data = await axios.post("http://localhost:3000/register", {
          email,
          password,
        });
        return data.data;
      } catch (error) {
        console.log(error);
        let err = error.response.data.message.map((el) => el);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err,
          footer: "Input Your Email/Password Correctly!",
        });
        return error;
      }
    },
    async fetchGames(search, ordering) {
      try {
        if (search) {
          let data = await axios.get(
            `http://localhost:3000/games?search=${search}`
          );
          this.games = data.data.results;
        } else if (ordering) {
          let data = await axios.get(
            `http://localhost:3000/games?ordering=${ordering}`
          );
          this.games = data.data.results;
        } else {
          let data = await axios.get(`http://localhost:3000/games`);
          this.games = data.data.results;
        }
      } catch (error) {
        console.log(error);
        return error;
      }
    },

    async gameDetails(id) {
      try {
        let response = await axios.get(`http://localhost:3000/detail/${id}`);

        console.log(response.data);
      } catch (err) {
        console.log(err);
        return err;
      }
    },
  },
});
