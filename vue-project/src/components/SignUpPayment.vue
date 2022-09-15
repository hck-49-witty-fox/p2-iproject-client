<template>
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
                  Confirmation
                </div>
              </li>
              <li
                class="flex items-center text-blue-600 dark:text-blue-500 sm:block"
              >
                <div class="mr-2 sm:mb-2 sm:mx-auto">3</div>
                Payment <span class="hidden sm:inline-flex">Info</span>
              </li>
            </ol>
            <h1
              class="mb-6 text-2xl font-extrabold tracking-tight text-gray-900 leding-tight dark:text-white"
            >
              Choose payment method
            </h1>
            <button
              v-if="!loading || loading === 'qris'"
              @click.prevent="createTrxDana2"
              type="button"
              class="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2"
            >
              <img
                class="mr-2 -ml-3 w-9"
                src="https://i.pinimg.com/originals/2b/1f/11/2b1f11dec29fe28b5137b46fffa0b25f.png"
              />
              Pay with Dana
            </button>
            <button
              v-else-if="loading === 'dana'"
              disabled
              type="button"
              class="py-2.5 px-5 mr-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center"
            >
              <svg
                aria-hidden="true"
                role="status"
                class="inline mr-2 w-9 h-6 text-gray-200 animate-spin dark:text-gray-600"
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
            <button
              v-if="!loading || loading === 'dana'"
              @click.prevent="createTrxQRIS2"
              type="button"
              class="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-800 dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-200 mr-2 mb-2"
            >
              <svg
                aria-hidden="true"
                class="mr-2 -ml-1 w-9 h-6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 300 110.71"
              >
                <defs></defs>
                <title>QRIS</title>
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_1-2" data-name="Layer 1">
                    <polygon
                      class="cls-1"
                      points="287.71 67.86 287.71 58.33 287.71 39.29 259.14 39.29 240.09 39.29 240.09 29.76 287.71 29.76 287.71 10.71 240.09 10.71 211.52 10.71 211.52 29.76 211.52 39.29 211.52 58.33 240.09 58.33 259.14 58.33 259.14 67.86 211.52 67.86 211.52 86.91 259.14 86.91 287.71 86.91 287.71 67.86"
                    />
                    <rect
                      class="cls-1"
                      x="182.95"
                      y="10.71"
                      width="19.05"
                      height="76.19"
                    />
                    <polygon
                      class="cls-1"
                      points="97.24 10.71 97.24 29.76 154.38 29.76 154.38 39.29 116.28 39.29 97.24 39.29 97.24 58.33 97.24 86.91 116.28 86.91 116.28 58.62 144.86 86.91 173.43 86.91 143.62 58.33 154.38 58.33 173.43 58.33 173.43 39.29 173.43 29.76 173.43 10.71 154.38 10.71 97.24 10.71"
                    />
                    <path
                      class="cls-1"
                      d="M40.09,58.33h19v-19h-19Zm4.77-14.28h9.52v9.52H44.86Z"
                    />
                    <path
                      class="cls-1"
                      d="M30.57,10.71H13.9a2.41,2.41,0,0,0-1.68.7,2.38,2.38,0,0,0-.7,1.69V84.52a2.38,2.38,0,0,0,.7,1.69,2.4,2.4,0,0,0,1.68.69H59.14v-19H30.57Z"
                    />
                    <path
                      class="cls-1"
                      d="M85.33,10.71H40.09V29.76H68.67V58.33h19V13.1A2.41,2.41,0,0,0,87,11.41,2.44,2.44,0,0,0,85.33,10.71Z"
                    />
                    <rect
                      class="cls-1"
                      x="68.67"
                      y="67.86"
                      width="19.05"
                      height="42.86"
                    />
                    <path
                      class="cls-1"
                      d="M38.1,0H2.38A2.39,2.39,0,0,0,0,2.38V38.1H4.76v-31A2.39,2.39,0,0,1,7.14,4.76h31Z"
                    />
                    <path
                      class="cls-1"
                      d="M295.24,61.9v31a2.39,2.39,0,0,1-2.38,2.38h-31V100h35.72A2.39,2.39,0,0,0,300,97.62V61.9Z"
                    />
                  </g>
                </g>
              </svg>
              Pay with QRIS
            </button>
            <button
              v-else-if="loading === 'qris'"
              disabled
              type="button"
              class="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm py-2.5 pr-10 text-center inline-flex items-center dark:focus:ring-gray-800 dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-200 mr-2 mb-2"
            >
              <svg
                aria-hidden="true"
                role="status"
                class="inline mr-2 w-14 h-6 text-gray-200 animate-spin dark:text-gray-600"
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
            <!-- Pay DANA -->
            <section v-if="payment?.paymentGateway === 'dana' && !loading">
              <div class="flex justify-center mt-6">
                <h2
                  class="mt-4 mb-2 text-xl tracking-tight font-light text-gray-900 dark:text-white"
                >
                  Click button below to proccess payment
                </h2>
              </div>
              <div class="flex justify-center">
                <a :href="payment.url" target="_blank">
                  <button
                    type="button"
                    class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"
                  >
                    Pay now
                  </button>
                </a>
              </div>
            </section>
            <!-- Pay QRIS -->
            <section v-else-if="payment?.paymentGateway === 'qris' && !loading">
              <div class="flex justify-center mt-6">
                <img
                  src="https://miro.medium.com/max/1400/0*Ys8T1S0PKkrzKtV-"
                  class="w-1/3 max-w-xl h-auto rounded-lg"
                  alt="image description"
                />
              </div>
              <div class="flex justify-center mt-4">
                <a :href="payment.url" target="_blank">
                  <button
                    type="button"
                    class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"
                  >
                    Click to pay
                  </button>
                </a>
              </div>
              <div class="flex justify-center items-center gap-3">
                <img
                  width="100px"
                  class="filter grayscale brightness-200 contrast-50 hover:grayscale-0"
                  src="https://upload.wikimedia.org/wikipedia/commons/e/eb/Logo_ovo_purple.svg"
                />
                <img
                  width="100px"
                  class="filter grayscale brightness-200 contrast-50 hover:grayscale-0"
                  src="https://1.bp.blogspot.com/-n_jPjNl97nw/YIJ78WnloPI/AAAAAAAACks/xPjLQ2YpcXwyPf64C708UExQOrJitxHSgCNcBGAsYHQ/s2048/ShopeePay.png"
                />
                <img
                  width="100px"
                  class="filter grayscale brightness-200 contrast-50 hover:grayscale-0"
                  src="https://image.cermati.com/v1585904886/o81yliwckjhywelnx13a.png"
                />
              </div>
              <div class="flex justify-center items-center gap-3">
                <img
                  width="100px"
                  class="filter grayscale brightness-200 contrast-50 hover:grayscale-0"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/2560px-Bank_Central_Asia.svg.png"
                />
                <img
                  width="100px"
                  class="filter grayscale brightness-200 contrast-50 hover:grayscale-0"
                  src="https://harianrakyataceh.com/wp-content/uploads/2021/07/beli-saldo-paypal-via-linkaja.png"
                />
                <img
                  width="100px"
                  class="filter grayscale brightness-200 contrast-50 hover:grayscale-0"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Logo_dana_blue.svg/2560px-Logo_dana_blue.svg.png"
                />
              </div>
            </section>
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
  computed: {
    ...mapState(useIndexStore, ["payment", "meData", "loading"]),
  },
  methods: {
    ...mapActions(useIndexStore, ["createTrxDana", "createTrxQRIS", "me"]),
    sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },
    async createTrxDana2() {
      if (this.payment?.paymentGateway) {
        this.payment.paymentGateway = "";
      }
      await this.createTrxDana();
      while (!this.meData.premium) {
        await this.me();
        await this.sleep(3000);
      }
    },
    async createTrxQRIS2() {
      if (this.payment?.paymentGateway) {
        this.payment.paymentGateway = "";
      }
      await this.createTrxQRIS();
      while (!this.meData.premium) {
        await this.me();
        await this.sleep(3000);
      }
    },
  },
};
</script>

<style>
.cls-1 {
  fill: #010101;
}
</style>
