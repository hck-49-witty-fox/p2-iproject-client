import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import Swal from 'sweetalert2'

const baseUrl = 'http://localhost:3000'


export const useIProjStore = defineStore('IProj', {
  state: () => {
    return {
      nearby: '',
      UserId: 0,
      isLogin: false,
      username: localStorage.getItem('username')
    }
  },
  actions: {
    async fetchDataNearby(lat, lng){
      try {
        const response = await axios.get(`${baseUrl}/nearby?lat=${lat}&lng=${lng}`)
        this.nearby = response.data
      } catch (err) {
        console.log(err);
      }
    },
    async handleLogin(email, password){
      try {
        const response =  await axios.post(`${baseUrl}/login`, {
            email,
            password
        })
        localStorage.setItem("access_token", response.data.access_token)
        localStorage.setItem("username", response.data.username)
        this.isLogin = true
        this.router.push('/')
        Swal.fire({
          title: 'Success!',
          text: 'Login Success',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
      } catch (err) {
        Swal.fire({
          title: 'Error!',
          text: err.response.data.message,
          icon: 'error',
          confirmButtonText: 'Try Again'
        })
      }
    },
    handleCredentialResponse(response) {
      axios({
          method: "post",
          url: `${baseUrl}/loginGoogle`,
          data: {
              google_token: response.credential
          }
      })
          .then((response) => {
              console.log(response);
              localStorage.setItem("access_token", response.data.access_token)
              localStorage.setItem("username", response.data.username)
              this.isLogin = true
              this.router.push('/')
          })
          .catch((err) => {
            Swal.fire({
              title: 'Error!',
              text: err.response.data.message,
              icon: 'error',
              confirmButtonText: 'Try Again'
            })
          })

      console.log("Encoded JWT ID token: " + response.credential);
    },
    logout(){
      localStorage.clear()
      this.isLogin = false
      Swal.fire({
        title: 'Success!',
        text: 'Logouted',
        icon: 'success',
        confirmButtonText: 'Ok'
      })
      this.router.push('/login')
    },
    
      async handleRegister(username, email, password){
        try {
          const response =  await axios.post(`${baseUrl}/register`, {
            username, 
            email, 
            password, 
          })
          this.UserId = response.data.UserId
          this.router.push('/addprofile')
          Swal.fire({
            title: 'Success!',
            text: 'Now Add Your Profile',
            icon: 'success',
            confirmButtonText: 'Ok'
          })
        } catch (err) {
          Swal.fire({
            title: 'Error!',
            text: err.response.data.message,
            icon: 'error',
            confirmButtonText: 'Try Again'
          })
        }
      },
      async handleProfile(fullname, bio, imgUrl){
        try {
          const response =  await axios.post(`${baseUrl}/regprofile`, {
            fullname,
            bio,
            imgUrl,
            UserId: this.UserId
          })
          this.UserId = 0
          this.router.push('/login')
          Swal.fire({
            title: 'Success!',
            text: 'Registered Success',
            icon: 'success',
            confirmButtonText: 'Ok'
          })
        } catch (err) {
          Swal.fire({
            title: 'Error!',
            text: err.response.data.message,
            icon: 'error',
            confirmButtonText: 'Try Again'
          })
        }
      }
    
    }
})
