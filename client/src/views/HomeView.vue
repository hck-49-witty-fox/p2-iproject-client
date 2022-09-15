<script>
import { mapActions, mapState } from "pinia";
import { useCustomStore } from "../stores/index";
import GameCard from "../components/GameCard.vue";

export default {
  data() {
    return {
      category: "",
    };
  },
  computed: {
    ...mapState(useCustomStore, ["games"]),
  },
  methods: {
    ...mapActions(useCustomStore, ["fetchGames"]),
    openGameDetails(id) {
      console.log(id);
    },
    sort(event) {
      let sorting =
        event.target.options[event.target.options.selectedIndex].text;
      this.fetchGames(undefined, this.category);
      // console.log(
      //   event.target.options[event.target.options.selectedIndex].text
      // );
    },
    handleClick() {
      console.log(this.category);
    },
  },
  created() {
    this.fetchGames();
  },
  components: { GameCard },
};
</script>
<!-- @change="sort($event)" -->
<template>
  <div class="filters">
    <form>
      <!-- <label style="color: white">Sort</label> -->
      <select class="sort-select" v-model="category" @click="sort">
        <option value="" selected disabled>Sort</option>
        <option value="-name">Name</option>
        <option value="released">Released</option>
        <option value="-added">Added</option>
        <option value="-created">Created</option>
        <option value="-updated">Updated</option>
        <option value="-rating">Rating</option>
        <option value="-metacritic">Metacritic</option>
      </select>
    </form>
  </div>
  <div class="games">
    <template v-for="game in games" :game="game">
      <div class="game" @click="openGameDetails(game.id)">
        <div class="game-thumb-container">
          <img
            v-if="game.background_image"
            :src="game.background_image"
            alt="thumbnail"
            class="game-thumbnail"
          />
          <p v-if="!game.background_image">No image</p>
        </div>
        <div class="game-description">
          <p class="game-name">{{ game.name }}</p>
          <div class="game-platforms">
            <img
              v-for="gamePlatform of game.parent_platforms"
              :key="gamePlatform.platform.id"
              class="game-platform"
              :src="`/${gamePlatform.platform.slug}.svg`"
              :alt="gamePlatform.platform.slug"
            />
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<style>
.filters {
  max-width: 1200px;
  margin: 20px auto;
  padding-left: 20px;
}

.games {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1200px;
  margin: 20px auto;
}

.game {
  width: 280px;
  margin: 10px;
  height: 330px;
  overflow: hidden;
  border-radius: 5px;
  background-color: #202020;
  box-shadow: 4px 3px 8px 0px rgb(200 152 44 / 22%);
  transition-duration: 0.3s;
  cursor: pointer;
}

.game:hover {
  box-shadow: 4px 3px 11px 6px rgb(200 152 44 / 46%);
  transform: translateY(-3px);
}

.game-thumb-container {
  background-color: #000;
  position: relative;
  height: 172px;
  color: #fff;
  text-align: center;
}

.game-thumbnail {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  height: 172px;
}

.game-description {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 157px;
}

.game-name {
  color: #fff;
  font-weight: 700;
  font-size: 22px;
  margin-bottom: 20px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.game-platforms {
  display: flex;
}

.game-platform {
  width: 20px;
  margin-right: 10px;
}
</style>
