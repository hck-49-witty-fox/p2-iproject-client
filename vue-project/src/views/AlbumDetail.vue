<template>
  <HeaderSkeleton v-if="loading === true" />
  <HeaderTable
    v-else
    headerType="Album"
    :titleName="album?.name"
    :imageUrl="album?.images?.[0]?.url"
  ></HeaderTable>
  <TableSkeleton v-if="loading === true" />
  <TableSong v-else :tracks="album?.tracks?.items"></TableSong>
</template>

<script>
import TableSong from "../components/TableSong.vue";
import { mapActions, mapState } from "pinia";
import { useIndexStore } from "../stores";
import TableSkeleton from "../components/TableSkeleton.vue";
import HeaderSkeleton from "../components/HeaderSkeleton.vue";
import HeaderTable from "../components/HeaderTable.vue";
export default {
  computed: {
    ...mapState(useIndexStore, ["album", "loading"]),
  },
  methods: {
    ...mapActions(useIndexStore, ["getAlbumDetail", "getMyPlaylist"]),
  },
  async created() {
    await this.getMyPlaylist();
    await this.getAlbumDetail(this.$route.params.id);
  },
  components: { TableSong, TableSkeleton, HeaderSkeleton, HeaderTable },
};
</script>
