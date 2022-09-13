import { defineStore } from 'pinia';
import axios from 'axios';
const baseURL = 'http://localhost:3000';

export const useYalawStore = defineStore('Yalaw', {
  state: () => ({
    isLoggedIn: false,
    name: '',
    fullName: '',
  }),

  actions: {
    async login(cred) {
      try {
        const { data } = await axios.post(`${baseURL}/user/login`, {
          username: cred.username,
          password: cred.password,
        });

        localStorage.setItem('access_token', data.access_token);

        this.router.push('/');

        console.log(data);
        this.isLoggedIn = true;
        this.name = data.name;
        this.fullName = data.fullName;
      } catch (err) {
        console.log(err);
      }
    },
  },
});
