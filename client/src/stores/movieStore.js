import { defineStore } from 'pinia'
import axios from 'axios'
import Swal from 'sweetalert2'

const baseUrl = 'http://localhost:3000'

export const useMovieStore = defineStore('movie', {
    state : () => {
        return {
            nowPlayingMovies : []
        }
    },
    actions : {

        //? NOW PLAYING MOVIES
        // GET /movie/nowplaying
        async nowplaying(){
            try {
                const nowPlayingMovies = await axios.get(`${baseUrl}/movie/nowplaying`)

                this.nowPlayingMovies = nowPlayingMovies.data.data
                console.log(this.nowPlayingMovies);

                console.log(this.nowPlayingMovies);
            } catch (error) {
                console.log(error);
            }
        }

    }
})