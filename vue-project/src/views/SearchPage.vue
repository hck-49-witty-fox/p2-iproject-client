<template>
  <div
    class="mt-4 py-4 px-2 mx-auto max-w-screen-xl mx-auto flex items-center gap-4 text-gray-900 whitespace-nowrap dark:text-white"
  >
    <div>
      <h2
        class="text-4xl tracking-tight font-normal text-gray-900 dark:text-white"
      >
        {{ `Search song: ${$route.query.q}` }}
      </h2>
    </div>
  </div>
  <TableSkeleton v-if="loading === true" />
  <TableSong v-else :tracks="song?.tracks?.items" />
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useIndexStore } from "../stores";
import TableSong from "../components/TableSong.vue";
import TableSkeleton from "../components/TableSkeleton.vue";
import HeaderTable from "../components/HeaderTable.vue";

export default {
  computed: {
    ...mapState(useIndexStore, ["song", "loading"]),
  },
  methods: {
    ...mapActions(useIndexStore, ["searchSong", "getMyPlaylist"]),
  },
  async created() {
    await this.getMyPlaylist();
    await this.searchSong(this.$route.query.q);
  },
  components: { TableSong, TableSkeleton, HeaderTable },
};
</script>
