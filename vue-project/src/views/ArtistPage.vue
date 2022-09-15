<template>
  <section class="max-w-screen-xl px-4 py-8 mx-auto">
    <section v-if="loading">
      <div
        class="animate-pulse py-4 px-2 mx-auto max-w-screen-xl mx-auto flex items-center gap-4 text-gray-900 whitespace-nowrap dark:text-white"
      >
        <div
          class="flex justify-center items-center w-32 h-32 bg-gray-300 rounded dark:bg-gray-700"
        >
          <svg
            class="w-12 h-12 text-gray-200"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 640 512"
          >
            <path
              d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"
            />
          </svg>
        </div>
        <div>
          <div
            class="-mt-4 mb-8 h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-16"
          ></div>
          <div
            class="h-8 bg-gray-200 rounded-full dark:bg-gray-700 w-40 mb-4"
          ></div>
          <div class="flex items-center space-x-2 w-full">
            <div
              class="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-32"
            ></div>
            <div
              class="h-4 bg-gray-300 rounded-full dark:bg-gray-600 w-24"
            ></div>
            <div
              class="h-4 bg-gray-300 rounded-full dark:bg-gray-600 w-full"
            ></div>
          </div>
        </div>
      </div>
    </section>
    <div
      v-else
      class="mx-auto max-w-screen-xl mx-auto flex items-center gap-4 mx-auto mb-2 lg:mb-4"
    >
      <img
        :src="artist?.artist?.images?.[0]?.url"
        width="120"
        class="rounded"
      />
      <div>
        <h2
          class="-mt-2 mb-4 text-md tracking-tight font-light text-gray-900 dark:text-white"
        >
          {{ artist?.artist?.type }}
        </h2>
        <h2
          class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
        >
          {{ artist?.artist?.name }}
        </h2>
        <router-link
          v-for="(genre, i) in artist?.artist?.genres"
          :key="i"
          :to="'/genre/' + genre"
          class="bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
          >{{ genre }}</router-link
        >
      </div>
    </div>
    <div
      class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700"
    >
      <ul class="flex flex-wrap -mb-px">
        <li class="mr-2">
          <a
            @click.prevent="clickSong"
            href
            :class="
              showAlbum
                ? 'inline-block p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500'
                : 'inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
            "
            aria-current="page"
            >Song</a
          >
        </li>
        <li class="mr-2">
          <a
            @click.prevent="clickAlbum"
            href
            :class="
              !showAlbum
                ? 'inline-block p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500'
                : 'inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
            "
            >Album</a
          >
        </li>
      </ul>
    </div>

    <!-- Song -->
    <TableSkeleton v-if="loading === true" />
    <TableSong v-else :class="showSong" :tracks="artist.tracks"></TableSong>

    <!-- Album -->
    <section :class="showAlbum" class="bg-white dark:bg-gray-900">
      <div class="py-4 px-2 mx-auto max-w-screen-xl lg:py-8 lg:px-3">
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div
            v-for="album in artist.albums"
            :key="album.id"
            class="bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700"
          >
            <router-link :to="`/album/${album.id}`">
              <img
                class="p-4 w-full rounded-lg"
                :src="album?.images?.[0]?.url"
                alt="Santai Sejenak"
              />
            </router-link>
            <div class="px-5 pb-5">
              <h3
                class="text-xl font-bold tracking-tight text-gray-900 dark:text-white"
              >
                <router-link :to="`/album/${album.id}`">{{
                  album?.name
                }}</router-link>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useIndexStore } from "../stores";
import TableSong from "../components/TableSong.vue";
import TableSkeleton from "../components/TableSkeleton.vue";
export default {
  data() {
    return {
      showSong: "",
      showAlbum: "hidden",
    };
  },
  computed: {
    ...mapState(useIndexStore, ["artist", "loading"]),
  },
  methods: {
    ...mapActions(useIndexStore, ["getArtistDetail", "getMyPlaylist"]),
    clickSong() {
      this.showSong = "";
      this.showAlbum = "hidden";
    },
    clickAlbum() {
      this.showSong = "hidden";
      this.showAlbum = "";
    },
  },
  async created() {
    await this.getMyPlaylist();
    await this.getArtistDetail(this.$route.params.id);
  },
  components: { TableSong, TableSkeleton },
};
</script>
