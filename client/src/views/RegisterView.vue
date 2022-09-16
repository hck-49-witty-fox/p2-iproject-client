<template>
  <div
    class="container-fluid d-flex justify-content-center align-items-center"
    style="background-color: #af0238"
  >
    <div class="border w-50 p-5 my-5 bg-white rounded-3 shadow">
      <div class="row">
        <div class="col align-self-center">
          <form @submit.prevent="submitRegister">
            <div class="mb-3">
              <h5 class="mb-4 text-center">REGISTER</h5>
              <label for="username" class="form-label">Username</label>
              <input
                v-model="username"
                type="text"
                class="form-control"
                id="username"
                autocomplete="off"
              />
            </div>
            <div class="mb-3">
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
            <div class="mb-3">
              <label for="fullname" class="form-label">Fullname</label>
              <input
                v-model="fullname"
                type="text"
                class="form-control"
                id="fullname"
                autocomplete="off"
              />
            </div>
            <div class="mb-3">
              <p>Please select your gender</p>
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                v-model="gender"
              />
              <label for="male">Male</label><br />
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                v-model="gender"
              />
              <label for="female">Female</label><br />
            </div>
            <div class="mb-3">
              <label for="birthdate" class="form-label">Birthyear</label>
              <input
                v-model="birthyear"
                type="number"
                class="form-control"
                id="birthdate"
                autocomplete="off"
              />
            </div>
            <div class="mb-3">
              <label for="imgUrl" class="form-label">Image</label>
              <input
                v-model="imgUrl"
                type="text"
                class="form-control"
                id="imgUrl"
                autocomplete="off"
              />
            </div>
            <button type="submit" class="btn btn-danger w-100">Register</button>
            <div class="text-center pt-4">
              <router-link to="/login" href="#">Login</router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "pinia";
import { useStore } from "../stores/store";
export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
      fullname: "",
      gender: "",
      birthyear: "",
      imgUrl: "",
    };
  },
  methods: {
    ...mapActions(useStore, ["register"]),
    submitRegister() {
      this.register(
        this.username,
        this.email,
        this.password,
        this.fullname,
        this.gender,
        this.birthyear,
        this.imgUrl
      );

      this.username = "";
      this.email = "";
      this.password = "";
      this.fullname = "";
      this.gender = "";
      this.birthyear = "";
      this.imgUrl = "";
    },
  },
};
</script>
