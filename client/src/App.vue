<script>
import { RouterLink, RouterView } from 'vue-router';
import Navbar from '@/components/Navbar.vue';

export default {
  components: {
    Navbar,
  },
};
</script>

<template>
  <Navbar></Navbar>
  <!-- <LoginView></LoginView> -->
  <RouterView></RouterView>
</template>

<style></style>
