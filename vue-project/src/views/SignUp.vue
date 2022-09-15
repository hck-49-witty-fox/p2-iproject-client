<template>
  <SignUpAccInfo v-if="statusRegis === 1" />
  <SignUpConfirm v-else-if="statusRegis === 2" :email="meData.email" />
  <SignUpPayment v-else-if="statusRegis === 3" />
  <SignUpComplete v-else-if="statusRegis === 4" />
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useIndexStore } from "../stores";
import SignUpAccInfo from "../components/SignUpAccInfo.vue";
import SignUpConfirm from "../components/SignUpConfirm.vue";
import SignUpPayment from "../components/SignUpPayment.vue";
import SignUpComplete from "../components/SignUpComplete.vue";
export default {
  computed: {
    ...mapState(useIndexStore, ["statusRegis", "meData"]),
  },
  methods: {
    ...mapActions(useIndexStore, ["me"]),
  },
  async created() {
    if (localStorage.getItem("access_token")) {
      await this.me();
    }
  },
  components: { SignUpAccInfo, SignUpConfirm, SignUpPayment, SignUpComplete },
};
</script>
