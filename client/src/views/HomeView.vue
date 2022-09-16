<script>
import NavBar from "../components/NavBar.vue";
import { mapActions, mapState } from "pinia";
import { useStore } from "../stores/store";
import UserCard from "../components/UserCard.vue";
export default {
  components: { NavBar, UserCard },
  computed: {
    ...mapState(useStore, ["allUser"]),
  },
  methods: {
    ...mapActions(useStore, ["getAllUser"]),
  },
  created() {
    this.getAllUser();
  },
};
</script>

<template>
  <NavBar />

  <div class="container my-4">
    <h3 class="text-center my-4">Are we match?</h3>
    <div class="row">
      <!-- Card -->
      <UserCard v-for="user in allUser" :key="user.id" :user="user" />

      <!-- End Card -->
    </div>
  </div>
</template>
