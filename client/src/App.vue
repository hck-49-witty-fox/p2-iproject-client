<script setup>
import { RouterLink, RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
import SearchBar from "./components/SearchBar.vue";
</script>

<template>
  <!-- <NavBar v-if="this.$route.path !== '/login'" /> -->
  <SearchBar v-if="this.$route.path !== '/login'" />

  <RouterView />
</template>
