<template>
  <div class="container">
    <form class="form" @submit.prevent="handleSearch">
      <router-link to="/" @click.prevent="clear"
        ><span class="logo">Game Wiki</span></router-link
      >
      <input
        class="input"
        name="search"
        v-model="search"
        placeholder="Search 500,000+ games"
      />
      <button class="button">Search</button>
    </form>
    <a href="#" @click.prevent="logout" class="button">LogOut</a>
  </div>
</template>

<script>
import { mapActions } from "pinia";
import { useCustomStore } from "../stores/index";

export default {
  data() {
    return {
      search: "",
    };
  },
  methods: {
    ...mapActions(useCustomStore, ["fetchGames"]),
    handleSearch() {
      this.fetchGames(this.search);
    },
    clear() {
      this.fetchGames();
    },
    logout() {
      localStorage.clear();
      this.$router.push("/login");
    },
  },
};
</script>

<style>
.container {
  width: 100%;
  height: 60px;
  background-color: #687383;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 4;
}

.form {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.input {
  margin-left: 10px;
  padding: 10px;
  width: 300px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  outline: none;
  border: none;
}

.button {
  border: none;
  outline: none;
  background: darkblue;
  padding: 10px;
  border-left: 1px solid rgba(0, 0, 0, 0.3);
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  color: #fff;
  font-weight: 700;
  transition-duration: 0.3s;
  text-transform: uppercase;
  cursor: pointer;
}

.button:hover {
  color: darkblue;
  background-color: #fff;
}

.logo {
  margin-left: 10px;
  color: #fff;
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
}
</style>
