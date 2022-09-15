<template>
  <!-- Login -->
  <div
    class="container-fluid d-flex justify-content-center align-items-center"
    style="background-color: #af0238; height: 100vh"
  >
    <div class="border w-50 p-5 my-5 bg-white rounded-3 shadow">
      <div class="row">
        <div class="col align-self-center">
          <form @submit.prevent="login(email, password)">
            <div class="mb-3">
              <h5 class="mb-4 text-center">Sign in</h5>
              <label for="email" class="form-label">Email address</label>
              <input
                v-model="email"
                type="email"
                class="form-control"
                id="email"
                autocomplete="off"
              />
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <input
                v-model="password"
                type="password"
                class="form-control"
                id="password"
              />
            </div>
            <button type="submit" class="btn btn-danger w-100">Login</button>
            <div class="text-center pt-4">
              <router-link to="/register" href="#">Register</router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- End Login -->
</template>

<script>
import { mapActions } from "pinia";
import { useStore } from "../stores/store";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(useStore, ["login"]),
  },
};
</script>
