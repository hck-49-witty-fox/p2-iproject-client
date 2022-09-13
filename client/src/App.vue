<script>
import { RouterLink, RouterView } from 'vue-router';
import ChatBox from '@/components/ChatBox.vue';

export default {
  components: {
    ChatBox,
  },
};
</script>

<template>
  <ChatBox></ChatBox>
  <RouterView />
</template>

<style></style>
