<template>
  <div
    class="py-8 px-4 mx-auto max-w-screen-xl md:container md:mx-auto overflow-x-auto relative"
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
          v-for="(track, i) in tracks"
          :key="track?.id || track?.track?.id"
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
        >
          <td class="p-4 w-4">{{ i + 1 }}</td>
          <td
            class="flex items-center gap-2 py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            <img
              :src="
                track?.track?.album?.images?.[0]?.url ||
                track?.album?.images?.[0]?.url
              "
              width="64"
              class="rounded"
            />{{ cutString(track?.track?.name || track?.name, 35) }}
          </td>
          <td class="py-4 px-6">
            <router-link
              :to="`/artist/${
                track?.track?.artists?.[0]?.id || track?.artists?.[0]?.id
              }`"
              >{{
                cutString(
                  track?.track?.artists?.[0]?.name || track?.artists?.[0]?.name,
                  15
                )
              }}</router-link
            >
          </td>
          <td class="py-4 px-6">
            <audio controls="" class="g-blue-600">
              <source
                :src="track?.track?.preview_url || track?.preview_url"
                type="audio/ogg"
              />
              <source
                :src="track?.track?.preview_url || track?.preview_url"
                type="audio/mpeg"
              />
              Your browser does not support the audio element.
            </audio>
          </td>

          <td class="py-4 px-6">
            {{ toSecond(track?.track?.duration_ms || track?.duration_ms) }}
          </td>
          <td class="py-4 px-6">
            <div
              class="flex justify-center"
              role="status"
              v-if="
                loading === (track?.id || track?.track?.id) ||
                loading === track?.disc_number
              "
            >
              <svg
                class="inline mr-2 w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
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
                  fill="currentFill"
                />
              </svg>
              <span class="sr-only">Loading...</span>
            </div>
            <div v-else-if="!hideAdd" class="flex justify-center">
              <button
                id="dropdownDividerButton"
                @click.prevent="toggleButton(i)"
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

              <!-- Dropdown menu -->
              <div
                :class="opened === i ? '' : 'hidden'"
                class="absolute m-0 mt-5 mr-40 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 block"
                data-popper-placement="bottom"
              >
                <div class="py-1">
                  <a
                    class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >Add to playlist</a
                  >
                </div>
                <ul
                  class="py-1 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDividerButton"
                >
                  <li v-for="data in myPlaylist" :key="data.id">
                    <a
                      @click.prevent="
                        addSong2(data.id, track?.id || track?.track?.id)
                      "
                      href
                      class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >{{ data.name }}</a
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div v-else class="flex justify-center">
              <button
                id="dropdownDividerButton"
                @click.prevent="toggleButton(i)"
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
                    d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>

              <!-- Dropdown menu -->
              <div
                :class="opened === i ? '' : 'hidden'"
                class="absolute m-0 mt-5 mr-40 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 block"
                data-popper-placement="bottom"
              >
                <div class="py-1">
                  <a
                    href
                    @click.prevent="
                      removeSong2(
                        $route.params.id,
                        track?.disc_number || track?.id || track?.track?.id
                      )
                    "
                    class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >Remove song</a
                  >
                </div>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useIndexStore } from "../stores";

export default {
  computed: {
    ...mapState(useIndexStore, ["myPlaylist", "loading"]),
  },
  props: ["tracks", "hideAdd"],
  data() {
    return {
      opened: null,
    };
  },
  methods: {
    ...mapActions(useIndexStore, ["addSong", "removeSong"]),
    async addSong2(playlistId, songId) {
      await this.addSong(playlistId, songId);
      this.opened = null;
    },
    async removeSong2(playlistId, songId) {
      await this.removeSong(playlistId, songId);
      this.opened = null;
    },
    toSecond(ms) {
      var minutes = Math.floor(ms / 60000);
      var seconds = ((ms % 60000) / 1000).toFixed(0);
      return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    },
    cutString(str, num) {
      return str.length > num ? str.substring(0, num) + "..." : str;
    },
    toggleButton(id) {
      if (id === this.opened) {
        this.opened = null;
      } else {
        this.opened = id;
      }
    },
  },
};
</script>
