<template>
  <!-- Navbar -->
  <nav
    class="navbar navbar-expand-lg navbar-light bg-light"
    style="background-color: #af0238 !important"
  >
    <div class="container">
      <img src="../assets/starfish.png" alt="nav-logo" style="height: 40px" />
      <div class="me-auto"></div>
      <ul class="navbar-nav mx-2 mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link
            to="/chat"
            class="nav-link text-white"
            aria-current="page"
            href="#"
            >Chit Chat</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            to="/"
            class="nav-link text-white"
            aria-current="page"
            href="#"
            >Home</router-link
          >
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" aria-current="page" href="#"
            >Hi, {{ name }}
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link text-white"
            aria-current="page"
            href="#"
            @click.prevent="logout"
            >Logout</a
          >
        </li>
      </ul>
    </div>
  </nav>
  <!-- End Navbar -->
</template>

<script>
import { mapActions } from "pinia";
import { useStore } from "../stores/store";
export default {
  data() {
    return {
      name: "",
    };
  },
  methods: {
    ...mapActions(useStore, ["logout"]),
  },
  created() {
    this.name = localStorage.getItem("username");
  },
};
</script>
