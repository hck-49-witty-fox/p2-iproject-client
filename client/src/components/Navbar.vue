<script>
// export default {
//   components: {
//     LoginModal,
//   },
// };
</script>

<template>
  <nav
    class="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600"
  >
    <!-- forum nav -->

    <div class="container mx-auto">
      <div class="flex justify-center">
        <!-- Modal toggle
        <button
          class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
          data-modal-toggle="authentication-modal"
        >
          Toggle modal -->
        <!-- </button> -->
        <router-link
          to="/"
          class="block text-white bg-blue-700 ml-3 rounded md:bg-transparent md:p-0 dark:text-white py-2"
          aria-current="page"
          >Home
        </router-link>

        <router-link
          to="/"
          class="block text-white bg-blue-700 ml-3 rounded md:bg-transparent md:p-0 dark:text-white py-2"
          aria-current="page"
          >Tech
        </router-link>

        <router-link
          to="/"
          class="block text-white bg-blue-700 ml-3 rounded md:bg-transparent md:p-0 dark:text-white py-2"
          aria-current="page"
          >Music
        </router-link>

        <router-link
          to="/"
          class="block text-white bg-blue-700 ml-3 rounded md:bg-transparent md:p-0 dark:text-white py-2"
          aria-current="page"
          >Games
        </router-link>

        <router-link
          to="/chat"
          class="block text-white bg-blue-700 ml-3 rounded md:bg-transparent md:p-0 dark:text-white py-2"
          aria-current="page"
          >Chat room
        </router-link>

        <router-link
          to="/"
          class="block text-white bg-blue-700 ml-3 rounded md:bg-transparent md:p-0 dark:text-white py-2"
          aria-current="page"
          >Automotive
        </router-link>

        <router-link
          to="/login"
          class="block text-white bg-blue-700 ml-3 rounded md:bg-transparent md:p-0 dark:text-white py-2"
          aria-current="page"
          >Login
        </router-link>
      </div>
    </div>
  </nav>
</template>
<style></style>
