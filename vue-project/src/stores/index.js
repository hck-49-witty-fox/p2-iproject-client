const BASE_URL = "https://hearify-server.herokuapp.com";
import { defineStore } from "pinia";
import axios from "axios";
import { createClient } from "@supabase/supabase-js";
import Swal from "sweetalert2";
const Toast = Swal.mixin({
  toast: true,
  position: "bottom-end",
  showConfirmButton: false,
  timer: 3000,
  background: "rgb(55 65 81)",
  color: "rgb(156 163 175)",
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});
const supabase = createClient(
  "https://svckksjzdehsktwpfucg.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN2Y2trc2p6ZGVoc2t0d3BmdWNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjMxMjU3NjQsImV4cCI6MTk3ODcwMTc2NH0.ZFUwoZcxgx7Ip9IRo7kE1Sa-JnIxdA33zkLesdV0v9k"
);
export const useIndexStore = defineStore("index", {
  state: () => ({
    featuredPlaylist: [],
    newRelease: [],
    playlist: {},
    myPlaylist: [],
    genrePlaylist: [],
    artist: {},
    song: [],
    album: {},
    genre: [],
    statusRegis: 1,
    user: {},
    myPlaylistDetail: [],
    meData: {},
    payment: {},
    twitterUrl: "",
    loading: false,
  }),
  actions: {
    async me() {
      try {
        const response = await axios.get(`${BASE_URL}/me`, {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.meData = response.data.data;
        if (!this.meData.isConfirmed) {
          this.statusRegis = 2;
        } else if (!this.meData.premium) {
          const response = await axios.get(`${BASE_URL}/transaction/me`, {
            headers: {
              access_token: localStorage.getItem("access_token"),
            },
          });
          this.payment = response.data;
          this.statusRegis = 3;
        } else {
          this.statusRegis = 4;
        }
      } catch (error) {
        this.statusRegis = 1;
        Toast.fire({
          icon: "error",
          title: error.response.data.message,
        });
      }
    },

    async login(user) {
      try {
        this.loading = true;
        const response = await axios.post(`${BASE_URL}/login`, {
          username: user.username,
          password: user.password,
        });
        localStorage.setItem("access_token", response.data.access_token);
        const response2 = await axios.get(`${BASE_URL}/me`, {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        if (!response2.data.data.premium || !response2.data.data.isConfirmed) {
          this.router.push("/signup");
        } else {
          this.router.push("/");
        }
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: error.response.data.message,
        });
      } finally {
        this.loading = false;
      }
    },

    async register(user) {
      try {
        this.loading = true;
        const response = await axios.post(`${BASE_URL}/register`, {
          username: user.username,
          email: user.email,
          name: user.name,
          password: user.password,
        });
        localStorage.setItem("access_token", response.data.access_token);
        this.statusRegis = 2;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: error.response.data.message,
        });
      } finally {
        this.loading = false;
      }
    },

    async confirm(code) {
      try {
        this.loading = true;
        await axios.patch(
          `${BASE_URL}/confirm`,
          {
            confirmationCode: code,
          },
          {
            headers: {
              access_token: localStorage.getItem("access_token"),
            },
          }
        );
        this.statusRegis = 3;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: error.response.data.message,
        });
      } finally {
        this.loading = false;
      }
    },

    async getFeaturedPlaylist() {
      try {
        this.loading = true;
        const response = await axios.get(
          `${BASE_URL}/api/get-featured-playlist`,
          {
            headers: {
              access_token: localStorage.getItem("access_token"),
            },
          }
        );
        this.featuredPlaylist = response.data.data;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: error.response.data.message,
        });
      } finally {
        this.loading = false;
      }
    },

    async getGenre() {
      try {
        this.loading = true;
        const response = await axios.get(`${BASE_URL}/api/get-genre`, {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.genre = response.data.data;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: error.response.data.message,
        });
      } finally {
        this.loading = false;
      }
    },

    async getPlaylistByGenre(name) {
      try {
        this.loading = true;
        const response = await axios.get(
          `${BASE_URL}/api/get-playlist-by-genre?name=${name}`,
          {
            headers: {
              access_token: localStorage.getItem("access_token"),
            },
          }
        );
        this.genrePlaylist = response.data.data;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: error.response.data.message,
        });
      } finally {
        this.loading = false;
      }
    },

    async getNewRelease() {
      try {
        this.loading = true;
        const response = await axios.get(`${BASE_URL}/api/get-new-release`, {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.newRelease = response.data.data;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: error.response.data.message,
        });
      } finally {
        this.loading = false;
      }
    },

    async getPlaylistDetail(id) {
      try {
        this.loading = true;
        const response = await axios.get(
          `${BASE_URL}/api/get-playlist?playlistId=${id}`,
          {
            headers: {
              access_token: localStorage.getItem("access_token"),
            },
          }
        );
        this.playlist = response.data.data;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: error.response.data.message,
        });
      } finally {
        this.loading = false;
      }
    },

    async getAlbumDetail(id) {
      try {
        this.loading = true;
        const response = await axios.get(
          `${BASE_URL}/api/get-album?albumId=${id}`,
          {
            headers: {
              access_token: localStorage.getItem("access_token"),
            },
          }
        );
        this.album = response.data.data;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: error.response.data.message,
        });
      } finally {
        this.loading = false;
      }
    },

    async getArtistDetail(id) {
      try {
        this.loading = true;
        const response = await axios.get(
          `${BASE_URL}/api/get-artist?artistId=${id}`,
          {
            headers: {
              access_token: localStorage.getItem("access_token"),
            },
          }
        );
        this.artist = response.data.data;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: error.response.data.message,
        });
      } finally {
        this.loading = false;
      }
    },

    async createTrxDana() {
      try {
        this.loading = "dana";
        const response = await axios.get(`${BASE_URL}/transaction/dana`, {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.payment = response.data;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: error.response.data.message,
        });
      } finally {
        this.loading = false;
      }
    },

    async createTrxQRIS() {
      try {
        this.loading = "qris";
        const response = await axios.get(`${BASE_URL}/transaction/qris`, {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.payment = response.data;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: error.response.data.message,
        });
      } finally {
        this.loading = false;
      }
    },
  },
});
