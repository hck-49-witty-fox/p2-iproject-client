<template>
    <section class="vh-100">
      <div class="container-fluid h-custom h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              class="img-fluid"
              alt="Sample image"
            />
          </div>
          <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form>
              <!-- Email input -->
              <div class="form-outline mb-4">
                <input
                  v-model="email"
                  type="email"
                  id="form3Example3"
                  class="form-control form-control-lg"
                  placeholder="Enter a valid email address"
                />
                <label class="form-label text-white" for="form3Example3"
                  >Email address</label
                >
              </div>
  
              <!-- Password input -->
              <div class="form-outline mb-3">
                <input
                  v-model="password"
                  type="password"
                  id="form3Example4"
                  class="form-control form-control-lg"
                  placeholder="Enter password"
                />
                <label class="form-label text-white" for="form3Example4">Password</label>
              </div>
  
              <div class="text-center text-lg-start mt-4 pt-2">
                <button
                  type="button"
                  class="btn btn-primary btn-lg"
                  style="padding-left: 2.5rem; padding-right: 2.5rem"
                  @click.prevent="handleLogin"
                >
                  Login
                </button>
                <p class="small fw-bold mt-2 pt-1 mb-0 text-white">
                  Or Sign In with
                  <div id="buttonDiv"></div> 
                </p>
                <p class="small fw-bold mt-2 pt-1 mb-0 text-white">
                  Don't have an account?
                  <a href="#!" class="link-danger" @click.prevent="register"
                    >Register</a
                  >
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import axios from "axios";
  import { mapActions } from "pinia";
  import { useCustomStore } from "../stores/index";
  
  export default {
    data() {
      return {
        email: "",
        password: "",
      };
    },
    methods: {
      ...mapActions(useCustomStore, ['login']),
      home() {
        this.$router.push("/");
      },
      register() {
        this.$router.push("/register");
      },
      async handleLogin() {
        try {
          await this.login(this.email, this.password);
          if (localStorage.getItem("access_token")) {
            Swal.fire("Cool!", "You have logged-in succesfully!", "success");
            this.home();
          }
        } catch (error) {
        //   console.log(error, "<><><>><><");
          console.log(error);
        }
      },
  
      async handleCredentialResponse(response) {
  
        try {
          console.log("Encoded JWT ID token: " + response.credential);
          // console.log("hihihihihih");
          let login = await axios.post("http://localhost:3000/googleLogin", {}, {
            headers: {
              google_token: response.credential
            }
          })
          console.log(login, "<><><><><><>");
          localStorage.setItem("access_token", login.data.access_token);
          localStorage.setItem("email", login.data.email);
          localStorage.setItem("username", login.data.username);
          localStorage.setItem("role", login.data.role);
  
            Swal.fire("Cool!", "You have logged-in succesfully!", "success");
            this.fetchGames()
          this.home();
        } catch (error) {
          console.log(error);
        }
        
      },
  
      googleLogin() {
        let cb = this.handleCredentialResponse
        window.onload = function () {
          google.accounts.id.initialize({
            client_id: "851325068562-p1clsgekdqh72k5ct6elgaq18qhjcduj.apps.googleusercontent.com",
            callback: cb
          });
          google.accounts.id.renderButton(
            document.getElementById("buttonDiv"),
            { theme: "outline", size: "large" }  // customization attributes
            );
        google.accounts.id.prompt(); // also display the One Tap dialog
      }
      }
    },
    created() {
      // console.log("hahahaha");
      // this.googleLogin()
      // this.handleLogin()
    },
  };
  </script>
  