<template>
  <div
    class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 md:container md:mx-auto overflow-x-auto relative"
  >
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-transparent dark:text-gray-400"
      >
        <tr>
          <th scope="col" class="p-4">#</th>
          <th scope="col" class="py-3 px-6">Title</th>
          <th scope="col" class="py-3 px-6">Artist</th>
          <th scope="col" class="py-3 px-6">Preview</th>
          <th scope="col" class="py-3 px-6">
            <svg
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="no in 5"
          :key="no"
          class="bg-white shadow animate-pulse border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
        >
          <td class="p-4 w-4">
            <div
              class="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-6 mb-4"
            ></div>
          </td>
          <td
            class="flex items-center gap-2 py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            <div
              class="flex justify-center items-center mb-4 h-12 w-12 bg-gray-300 rounded dark:bg-gray-700"
            >
              <svg
                class="w-6 h-6 text-gray-200 dark:text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 640 512"
              >
                <path
                  d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"
                />
              </svg>
            </div>
            <div
              class="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-24 mb-4"
            ></div>
          </td>
          <td class="py-4 px-6">
            <div
              class="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-24 mb-4"
            ></div>
          </td>
          <td class="py-4 px-6">
            <div
              class="h-8 bg-gray-200 rounded-full dark:bg-gray-700 w-64 mb-4"
            ></div>
          </td>
          <td class="py-4 px-6">
            <div
              class="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-12 mb-4"
            ></div>
          </td>
          <td class="py-4 px-6">
            <div id="exampleWrapper" class="flex justify-center">
              <button
                id="dropdownDividerButton"
                data-dropdown-toggle="dropdownDivider"
                type="button"
              >
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
