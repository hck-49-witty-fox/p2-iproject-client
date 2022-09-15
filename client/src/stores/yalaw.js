import { defineStore } from 'pinia';
import axios from 'axios';
const baseURL = 'http://localhost:3000';

export const useYalawStore = defineStore('Yalaw', {
  state: () => ({
    isLoggedIn: false,
    fullName: '',
    threadData: [],
    threadById: {},
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
        this.isLoggedIn = true;

        localStorage.setItem('name', data.name);
        localStorage.setItem('fullName', data.fullName);
        // this.fullName = data.fullName;
      } catch (err) {
        console.log(err);
      }
    },

    async logout() {
      try {
        localStorage.clear();
        this.isLoggedIn = false;
      } catch (err) {
        console.log(err);
      }
    },

    async register(cred) {
      try {
        // console.log(cred);
        await axios.post(`${baseURL}/user/register`, {
          username: cred.username,
          firstName: cred.firstName,
          lastName: cred.lastName,
          password: cred.password,
        });

        // localStorage.setItem('access_token', data.access_token);

        this.router.push('/login');
        // this.isLoggedIn = true;

        // localStorage.setItem('name', data.name);
        // localStorage.setItem('fullName', data.fullName);
        // this.fullName = data.fullName;
      } catch (err) {
        console.log(err);
      }
    },

    async fetchThread() {
      try {
        const { data } = await axios.get(`${baseURL}/home`);

        // console.log(data.data);
        this.threadData = data.data;
      } catch (err) {
        console.log(err);
      }
    },

    async fetchThreadById(id) {
      try {
        console.log(id);
        const { data } = await axios.get(`${baseURL}/thread/${id}`);

        console.log(data);

        this.threadData = data.data;
        this.router.push(`/detail/${id}`);
      } catch (err) {
        console.log(err);
      }
    },
  },
});
