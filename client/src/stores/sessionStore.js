import { defineStore } from 'pinia'
import axios from 'axios'
import Swal from 'sweetalert2'

const baseUrl = 'http://localhost:3000'

export const useSessionStore = defineStore('session', {
  state : () => {
    return {
      isLogin : false,
      loggedInUser : []
    }
  },
  actions : {

    //? LOGIN
    // POST /pub/login
    async login(credential){
      try {
        const data = await axios.post(`${baseUrl}/session/login`, {
          email : credential.email,
          password : credential.password
        });

        // SET ACCESS TOKEN
        localStorage.setItem('access_token', data.data.access_token);

        // SET STATE
        this.isLogin = true;
        this.loggedInUser = data.data

        // REDIRECT HOME
        this.router.push('/');

        // ALERT
        Swal.fire(
          'Success !',
          `Welcome back ${data.data.name}!`,
          'success'
        );

      } catch (error) {
        console.log(error);

        // ALERT
        Swal.fire({
          icon: 'error',
          title: 'Oops!',
          text: error.responseJSON,
          confirmButtonText: 'Try Again',
        });
      };
    },

    //? REGISTER
    // POST /pub/register
    async register(credential){
      try {
        await axios.post(`${baseUrl}/session/register`, {
          name : credential.name,
          email : credential.email,
          password : credential.password,
        }); 

        // REDIRECT
        this.router.push('/session/login');

        // ALERT
        Swal.fire(
          'Success !',
          'Account Created Successfully',
          'success'
        );

      } catch (error) {
        console.log(error);

        // ALERT
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error  //! ???????
        });
      }
    },

    //? GOOGLE LOGIN
    // POST /session/googlesignin
    async handleCredentialResponse(response) {
      axios({
          url : `${baseUrl}/session/googlesignin`,
          method : "POST",
          data : {
              access_token : response.credential
          }
      })

      .then((res) => {
          console.log(res);
          localStorage.setItem("access_token", res.data.access_token);
          this.isLogin = true;
          this.router.push('/')
  
          // SWAL                  
          Swal.fire({
              icon: 'success',
              title: 'Success Logged in!',
              text :
              // "Welcome Back ${res.data.username} !",
              `Welcome back !`,
              showConfirmButton: false,
              timer: 1500
          })
      })
      .catch((error) => {
          Swal.fire({
              icon: 'error',
              title: 'Oops!',
              text: error,
              confirmButtonText: 'Try Again',
          })
      })
    },

    //? LOGOUT
    async logout(){
      try {
        // LOCAL STORAGE DELETE
        localStorage.clear();

        // GOOGLE LOGOUT
        google.accounts.id.disableAutoSelect();

        //! FACEBOOK LOGOUT

        // SET STATE
        this.isLogin = false;

        // REDIRECT TO LOGIN PAGE
        this.router.push('/');
        
      } catch (error) {
        console.log(error);
      }
    },

    //! FACEBOOK LOGIN
    
  }
})
