<template>
  <section class="bg-gray-50 dark:bg-gray-900">
    <div class="max-w-screen-xl px-4 py-8 mx-auto">
      <div class="mb-6 text-center lg:hidden">
        <a
          href="#"
          class="inline-flex items-center text-2xl font-semibold text-gray-900 lg:hidden dark:text-white"
        >
          <img class="w-8 h-8 mr-2" src="../assets/logo.png" alt="logo" />
          Hearify
        </a>
      </div>
      <div
        class="w-full col-span-6 mx-auto bg-white rounded-lg shadow dark:bg-gray-800 md:mt-0 sm:max-w-lg xl:p-0"
      >
        <div class="p-6 space-y-4 lg:space-y-6 sm:p-8">
          <h1
            class="text-xl font-bold leading-tight tracking-tight text-gray-900 sm:text-2xl dark:text-white"
          >
            Welcome back
          </h1>
          <div class="items-center space-y-3 sm:space-x-4 sm:space-y-0 sm:flex">
            <a
              href
              @click.prevent="spotify"
              class="w-full inline-flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 mr-2"
                viewBox="0 0 1333.33 1333.3"
                shape-rendering="geometricPrecision"
                text-rendering="geometricPrecision"
                image-rendering="optimizeQuality"
                fill-rule="evenodd"
                clip-rule="evenodd"
              >
                <path
                  d="M666.66 0C298.48 0 0 298.47 0 666.65c0 368.19 298.48 666.65 666.66 666.65 368.22 0 666.67-298.45 666.67-666.65C1333.33 298.49 1034.88.03 666.65.03l.01-.04zm305.73 961.51c-11.94 19.58-37.57 25.8-57.16 13.77-156.52-95.61-353.57-117.26-585.63-64.24-22.36 5.09-44.65-8.92-49.75-31.29-5.12-22.37 8.84-44.66 31.26-49.75 253.95-58.02 471.78-33.04 647.51 74.35 19.59 12.02 25.8 37.57 13.77 57.16zm81.6-181.52c-15.05 24.45-47.05 32.17-71.49 17.13-179.2-110.15-452.35-142.05-664.31-77.7-27.49 8.3-56.52-7.19-64.86-34.63-8.28-27.49 7.22-56.46 34.66-64.82 242.11-73.46 543.1-37.88 748.89 88.58 24.44 15.05 32.16 47.05 17.12 71.46V780zm7.01-189.02c-214.87-127.62-569.36-139.35-774.5-77.09-32.94 9.99-67.78-8.6-77.76-41.55-9.98-32.96 8.6-67.77 41.56-77.78 235.49-71.49 626.96-57.68 874.34 89.18 29.69 17.59 39.41 55.85 21.81 85.44-17.52 29.63-55.89 39.4-85.42 21.8h-.03z"
                  fill="#1ed760"
                  fill-rule="nonzero"
                />
              </svg>
              Log in with Spotify
            </a>
            <a
              href
              @click.prevent="twitter"
              class="w-full inline-flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="mr-2 -ml-1 w-4 h-4"
                viewBox="0 0 333333 333333"
                shape-rendering="geometricPrecision"
                text-rendering="geometricPrecision"
                image-rendering="optimizeQuality"
                fill-rule="evenodd"
                clip-rule="evenodd"
              >
                <path
                  d="M333328 63295c-12254 5480-25456 9122-39241 10745 14123-8458 24924-21861 30080-37819-13200 7807-27871 13533-43416 16596-12499-13281-30252-21537-49919-21537-37762 0-68336 30591-68336 68330 0 5326 591 10537 1748 15562-56820-2880-107194-30081-140915-71467-6049 10435-9250 22300-9250 34367v8c0 23696 12031 44654 30389 56876-11202-333-21739-3457-30991-8519v854c0 33138 23554 60789 54852 67039-5734 1557-11787 2417-18023 2417-4417 0-8673-455-12905-1224 8742 27139 33975 46923 63857 47500-23430 18356-52858 29286-84939 29286-5537 0-10931-339-16318-984 30326 19458 66251 30727 104844 30727 125735 0 194551-104198 194551-194543 0-3002-67-5911-191-8852 13354-9553 24932-21609 34097-35333l31-31-6 4z"
                  fill="#1da1f2"
                />
              </svg>
              Log in with Twitter
            </a>
          </div>
          <div class="flex items-center">
            <div class="w-full h-0.5 bg-gray-200 dark:bg-gray-700"></div>
            <div class="px-5 text-center text-gray-500 dark:text-gray-400">
              or
            </div>
            <div class="w-full h-0.5 bg-gray-200 dark:bg-gray-700"></div>
          </div>
          <form class="space-y-4 lg:space-y-6" @submit.prevent="login(user)">
            <div>
              <label
                for="text"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Username / email</label
              >
              <input
                type="text"
                v-model="user.username"
                name="username"
                id="username"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your username or email"
                required=""
              />
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Password</label
              >
              <input
                type="password"
                v-model="user.password"
                name="password"
                id="password"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>
            <div class="flex items-end justify-between">
              <div class="flex items-start"></div>
              <a
                href="#"
                class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                >Forgot password?</a
              >
            </div>
            <button
              v-if="!loading"
              type="submit"
              class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Sign in to your account
            </button>
            <button
              v-else
              disabled
              type="button"
              class="w-full py-2.5 px-5 mr-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              <svg
                aria-hidden="true"
                role="status"
                class="inline mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="#1C64F2"
                />
              </svg>
              Loading...
            </button>
            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
              Don’t have an account yet?
              <router-link
                to="/signup"
                class="font-medium text-blue-600 hover:underline dark:text-blue-500"
                >Sign up here</router-link
              >
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useIndexStore } from "../stores";

export default {
  data() {
    return {
      user: {},
    };
  },
  computed: {
    ...mapState(useIndexStore, ["loading"]),
  },
  methods: {
    ...mapActions(useIndexStore, [
      "login",
      "twitter",
      "sosmedLogin",
      "spotify",
      "supabase",
    ]),
  },
  mounted() {
    this.supabase();
  },
};
</script>
