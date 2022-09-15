<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="py-4 px-2 mx-auto max-w-screen-xl lg:py-8 lg:px-3">
      <div class="mx-auto mb-4 lg:mb-8">
        <h2
          class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
        >
          {{ $route.params.name }}
        </h2>
      </div>
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <CardSkeleton v-if="loading" v-for="a in 4" />
        <CardCover
          v-else
          v-for="data in genrePlaylist?.playlists?.items"
          :key="data.id"
          :data="data"
          typeCard="playlist"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useIndexStore } from "../stores";
import CardCover from "../components/CardCover.vue";
import CardSkeleton from "../components/CardSkeleton.vue";
export default {
  computed: {
    ...mapState(useIndexStore, ["genrePlaylist", "loading"]),
  },
  methods: {
    ...mapActions(useIndexStore, ["getPlaylistByGenre"]),
  },
  created() {
    this.getPlaylistByGenre(this.$route.params.name);
  },
  components: { CardCover, CardSkeleton },
};
</script>
