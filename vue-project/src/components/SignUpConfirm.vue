<template>
  <!-- Registration Confirmation -->
  <section class="max-w-screen-xl px-4 py-8 mx-auto">
    <div class="py-8 bg-white dark:bg-gray-900 lg:py-0">
      <div class="lg:flex">
        <div
          class="flex items-center mx-auto md:w-[42rem] px-4 md:px-8 xl:px-0"
        >
          <div class="w-full">
            <div
              class="flex items-center justify-center mb-8 space-x-4 lg:hidden"
            >
              <a href="#" class="flex items-center text-2xl font-semibold">
                <img class="w-8 h-8 mr-2" src="../assets/logo.png" />
                <span class="text-gray-900 dark:text-white">Hearify</span>
              </a>
            </div>
            <ol
              class="flex items-center mb-6 text-sm font-medium text-center text-gray-500 dark:text-gray-400 lg:mb-12 sm:text-base"
            >
              <li
                class="flex items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-12 after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700"
              >
                <div
                  class="flex items-center sm:block after:content-['/'] sm:after:hidden after:mx-2 after:font-light after:text-gray-200 dark:after:text-gray-500"
                >
                  <svg
                    class="w-4 h-4 mr-2 sm:mb-2 sm:w-6 sm:h-6 sm:mx-auto shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Account <span class="hidden sm:inline-flex">Info</span>
                </div>
              </li>
              <li
                class="flex items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-12 after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700"
              >
                <div
                  class="flex items-center sm:block after:content-['/'] sm:after:hidden after:mx-2 after:font-light after:text-gray-200 dark:after:text-gray-500"
                >
                  <div class="mr-2 sm:mb-2 sm:mx-auto">2</div>
                  Confirmation
                </div>
              </li>
              <li class="flex items-center sm:block">
                <div class="mr-2 sm:mb-2 sm:mx-auto">3</div>
                Payment <span class="hidden sm:inline-flex">Info</span>
              </li>
            </ol>
            <h1
              class="mb-2 text-2xl font-extrabold tracking-tight text-gray-900 leding-tight dark:text-white"
            >
              Verify your email address
            </h1>
            <p class="font-light text-gray-500 dark:text-gray-400">
              We emailed you a six-digit code to
              <span class="font-medium text-gray-900 dark:text-white">{{
                email
              }}</span
              >. Enter the code below to confirm your email address.
            </p>
            <form @submit.prevent="confirm(code.join(''))">
              <div class="flex my-4 space-x-2 sm:space-x-4 md:my-6">
                <div>
                  <label for="code-1" class="sr-only">First code</label>
                  <input
                    type="text"
                    v-model="code[1]"
                    maxlength="1"
                    onkeyup="focusNextInput(this, 'code-1', 'code-2')"
                    id="code-1"
                    class="block w-12 h-12 py-3 text-2xl font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg sm:py-4 sm:text-4xl sm:w-16 sm:h-16 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label for="code-2" class="sr-only">Second code</label>
                  <input
                    type="text"
                    v-model="code[2]"
                    maxlength="1"
                    onkeyup="focusNextInput(this, 'code-1', 'code-3')"
                    id="code-2"
                    class="block w-12 h-12 py-3 text-2xl font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg sm:py-4 sm:text-4xl sm:w-16 sm:h-16 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label for="code-3" class="sr-only">Third code</label>
                  <input
                    type="text"
                    v-model="code[3]"
                    maxlength="1"
                    onkeyup="focusNextInput(this, 'code-2', 'code-4')"
                    id="code-3"
                    class="block w-12 h-12 py-3 text-2xl font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg sm:py-4 sm:text-4xl sm:w-16 sm:h-16 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label for="code-4" class="sr-only">Fourth code</label>
                  <input
                    type="text"
                    v-model="code[4]"
                    maxlength="1"
                    onkeyup="focusNextInput(this, 'code-3', 'code-5')"
                    id="code-4"
                    class="block w-12 h-12 py-3 text-2xl font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg sm:py-4 sm:text-4xl sm:w-16 sm:h-16 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
              </div>
              <p
                class="p-4 mb-4 text-sm text-gray-500 rounded-lg bg-gray-50 dark:text-gray-400 md:mb-6 dark:bg-gray-800"
              >
                Make sure to keep this window open while check your inbox.
              </p>
              <button
                v-if="!loading"
                type="submit"
                class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 sm:py-3.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Verify account
              </button>
              <button
                v-else
                disabled
                type="button"
                class="w-full py-2.5 px-5 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 text-center items-center"
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
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useIndexStore } from "../stores";

export default {
  props: ["email"],
  data() {
    return {
      code: [],
    };
  },
  computed: {
    ...mapState(useIndexStore, ["loading"]),
  },
  methods: {
    ...mapActions(useIndexStore, ["confirm"]),
  },
};
</script>
