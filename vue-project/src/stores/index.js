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
  },
});
