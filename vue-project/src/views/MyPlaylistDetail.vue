<template>
  <HeaderSkeleton v-if="loading === true" />
  <HeaderTable
    v-else
    headerType="Playlist"
    :titleName="myPlaylistDetail?.playlist?.name"
    :imageUrl="myPlaylistDetail?.playlist?.imageUrl"
  ></HeaderTable>
  <TableSkeleton v-if="loading === true" />
  <TableSong v-else :tracks="myPlaylistDetail.tracks" hideAdd="true" />
</template>

<script>
import { mapActions, mapState } from "pinia";
import TableSong from "../components/TableSong.vue";
import { useIndexStore } from "../stores";
import TableSkeleton from "../components/TableSkeleton.vue";
import HeaderTable from "../components/HeaderTable.vue";
import HeaderSkeleton from "../components/HeaderSkeleton.vue";
export default {
  computed: {
    ...mapState(useIndexStore, ["myPlaylistDetail", "loading"]),
  },
  methods: {
    ...mapActions(useIndexStore, ["getMyPlaylistDetail"]),
  },
  async created() {
    await this.getMyPlaylistDetail(this.$route.params.id);
  },
  components: { TableSong, TableSkeleton, HeaderTable, HeaderSkeleton },
};
</script>
