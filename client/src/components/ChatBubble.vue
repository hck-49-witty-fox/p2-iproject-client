<script>
export default {
  // data() {
  //   return {
  //     name: '',
  //   };
  // },
  // 'name
  props: ['message', 'name', 'dbMsg'],

  created() {
    // this.name = localStorage.getItem('name');
    // console.log(...this.dbMsg.username);
    // this.dbMsg.forEach(el => el.username);
  },
};
</script>

<template>
  <!-- class="flex items-end" -->
  <div class="chat-message">
    <div
      :class="
        this.message.username === this.name
          ? 'flex justify-start items-end flex-row-reverse text-right'
          : 'flex items-end text-left'
      "
    >
      <div
        class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-end"
      >
        <div class="flex flex-col gap-2">
          <span class="">{{ this.message.username }} </span>
          <span
            :class="
              this.message.username === this.name
                ? 'px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600'
                : 'px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white'
            "
            >{{ this.message.content }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>
<style></style>
