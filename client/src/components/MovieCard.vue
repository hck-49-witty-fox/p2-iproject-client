<template>
<div class="container-xl px-4 mt-4">
    <div class="row">
        <div class="col-xl-4">
            <!-- Profile picture card-->
            <div class="card mb-4 mb-xl-0">
                <div class="card-header">Profile Picture</div>
                    <div class="card-body text-center">

                        <!-- Profile picture image-->
                        <img class="img-account-profile rounded-circle mb-2" :src="cardDatas.poster_path" alt="" />

                        <!-- Profile picture help block-->
                        <div class="small font-italic text-muted mb-4">{{ cardDatas.original_title }}</div>

                        <!-- Profile picture upload button-->
                        <button class="btn btn-primary" type="button">Upload new image</button>
                    </div>
                </div>
            </div>
    </div>
</div>                   
</template>

<script>
    import { mapActions } from 'pinia';
    import { useMovieStore } from '../stores/movieStore';

    export default {
        props: [ 'cardDatas' ],
        methods : {
            ...mapActions(useMovieStore, ['nowPlaying'])
        }
    }
</script>

