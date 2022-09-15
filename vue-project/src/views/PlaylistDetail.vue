<template>
  <HeaderSkeleton v-if="loading === true" />
  <HeaderTable
    v-else
    headerType="Playlist"
    :titleName="playlist?.name"
    :imageUrl="playlist?.images?.[0]?.url"
    :descriptionText="playlist?.description"
  ></HeaderTable>
  <TableSkeleton v-if="loading === true" />
  <TableSong v-else :tracks="playlist.tracks.items"></TableSong>
</template>

<script>
import TableSong from "../components/TableSong.vue";
import { mapActions, mapState } from "pinia";
import { useIndexStore } from "../stores";
import TableSkeleton from "../components/TableSkeleton.vue";
import HeaderTable from "../components/HeaderTable.vue";
import HeaderSkeleton from "../components/HeaderSkeleton.vue";
export default {
  computed: {
    ...mapState(useIndexStore, ["playlist", "loading"]),
  },
  methods: {
    ...mapActions(useIndexStore, ["getPlaylistDetail", "getMyPlaylist"]),
  },
  async created() {
    await this.getMyPlaylist();
    await this.getPlaylistDetail(this.$route.params.id);
  },
  components: { TableSong, TableSkeleton, HeaderTable, HeaderSkeleton },
};
</script>
