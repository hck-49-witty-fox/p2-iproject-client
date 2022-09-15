<template>
  <div
    class="mt-4 py-4 px-2 mx-auto max-w-screen-xl mx-auto flex items-center gap-4 text-gray-900 whitespace-nowrap dark:text-white"
  >
    <img :src="imageUrl" width="120" class="rounded" />
    <div class="">
      <h2
        class="-mt-4 mb-4 text-md tracking-tight font-light text-gray-900 dark:text-white"
      >
        {{ headerType }}
      </h2>
      <h2
        class="whitespace-normal break-words text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
      >
        {{ titleName }}
      </h2>
      <h2
        class="whitespace-normal break-words text-md tracking-tight font-light text-gray-900 dark:text-white"
      >
        {{ stripHtml(descriptionText) }}
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  props: ["headerType", "imageUrl", "titleName", "descriptionText"],
  methods: {
    stripHtml(str) {
      if (str) {
        return str.replace(/<[^>]*>?/gm, "");
      }
    },
  },
};
</script>
