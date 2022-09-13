<script>
import { createDOMCompilerError } from '@vue/compiler-dom';

export default {
  props: ['message', 'name', 'dbMsg'],

  created() {
    // console.log(...this.dbMsg.username);
    // this.dbMsg.forEach(el => el.username);
    console.log(this.name);
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
