<script>
import { mapState, mapActions } from 'pinia';
import { useYalawStore } from '../stores/yalaw';

export default {
  computed: {
    ...mapState(useYalawStore, ['isLoggedIn']),
  },

  methods: {
    ...mapActions(useYalawStore, ['logout']),
  },

  created() {
    // console.log(this.isLoggedIn);
  },
};
</script>

<template>
  <nav
    class="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600"
  >
    <!-- forum nav -->

    <div class="container mx-auto">
      <div class="flex justify-between">
        <router-link
          to="/"
          class="block text-white bg-blue-700 ml-3 rounded md:bg-transparent md:p-0 dark:text-white py-2"
          aria-current="page"
          >Home
        </router-link>

        <div class="forum flex">
          <router-link
            to="/tech"
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
        </div>

        <div class="login flex">
          <router-link
            v-if="!this.isLoggedin"
            to="/login"
            class="block text-white bg-blue-700 ml-3 rounded md:bg-transparent md:p-0 dark:text-white py-2"
            aria-current="page"
            >Login
          </router-link>

          <router-link
            v-if="this.isLoggedIn"
            @click="logout"
            to="/"
            class="block text-white bg-blue-700 ml-3 rounded md:bg-transparent md:p-0 dark:text-white py-2"
            aria-current="page"
            >Logout
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>
<style></style>
