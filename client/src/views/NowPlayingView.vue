<template>
    <!-- HEADER -->
    <HeaderBar/>

    <div id="layoutSidenav">
            <div id="layoutSidenav_content">
                <main>
                    <header class="page-header page-header-compact page-header-light border-bottom bg-white mb-4">
                        <div class="container-xl px-4">
                            <div class="page-header-content">
                                <div class="row align-items-center justify-content-center pt-3">
                                    <div class="col-auto mb-3">
                                        <h1 class="page-header-title">
                                            <div class="page-header-icon"><i data-feather="clock"></i></div>
                                            Now Playing
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>

                    <!--? MOVIE CARDS -->
                    <MovieCard
                        v-for="(movie, i) in nowPlayingMovies" :key='i' :cardDatas='movie'
                    />

                </main>
                
                <!--? FOOTER BAR -->
                <FooterBar/>

            </div>
        </div>
</template>

<script>
    import { mapState, mapActions } from 'pinia';
    import { useMovieStore } from '../stores/movieStore'

    // COMPONENTS
    import HeaderBar from '../components/HeaderBar.vue';
    import FooterBar from '../components/FooterBar.vue';
    import MovieCard from '../components/MovieCard.vue';
    
    export default {
        components: { HeaderBar, FooterBar, MovieCard },
        computed : {
            ...mapState(useMovieStore, ['nowPlayingMovies'])
        },
        methods : {
            ...mapActions(useMovieStore, ['nowplaying'])
        },
        created() {
            this.nowplaying()
        }
    };
</script>