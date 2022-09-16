<template>
    <div
      class="bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700"
    >
      <router-link :to="`/${typeCard}/${data?.id || data?.name}`">
        <img
          class="p-4 w-full rounded-lg"
          :src="data?.images?.[0]?.url || data?.genres || data.imageUrl"
          :alt="data?.name"
        />
      </router-link>
      <div class="px-5 pb-5">
        <h3
          class="text-xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          <router-link :to="`/${typeCard}/${data.id || data?.name}`">{{
            cutString(data?.name, 24)
          }}</router-link>
        </h3>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ["data", "typeCard"],
    methods: {
      cutString(str, num) {
        return str.length > num ? str.substring(0, num) + "..." : str;
      },
    },
  };
  </script>
  