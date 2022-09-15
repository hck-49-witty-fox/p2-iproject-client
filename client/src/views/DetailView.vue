<template>
  <div class="details">
    <div class="game-banner">
      <img
        class="game-banner-img"
        :src="game.background_image"
        alt="background image"
      />
    </div>
    <div class="game-content">
      <div class="details-wrapper">
        <div class="game-header">
          <h1 class="game-header-title">{{ game.name }}</h1>
          <h2 class="game-header-release-date">
            Release: {{ game.released | date }}
          </h2>
          <p class="game-header-genres">
            <span v-for="genre in (game.genres, (last = last))"
              >{{ genre.name }}<span v-if="!last">, </span>
            </span>
          </p>
          <div class="game-gauge">
            <!-- <vue-gauge
              class="two"
              [max]="100"
              [dialStartAngle]="180"
              [dialEndAngle]="0"
              [value]="gameRating"
              [animated]="true"
              [color]="getColor"
              [animationDuration]="2"
            >
            </vue-gauge>
            <a
              class="game-gauge-label"
              target="_blank"
              href="{{ game.metacritic_url }}"
              >Metacritic</a
            > -->
          </div>
        </div>
        <app-game-tabs :game="game"></app-game-tabs>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["game"],
  components: {},
};
</script>

<style>
.details-wrapper {
  max-width: 900px;
  margin: 20px auto;
  position: relative;
}

.details::ng-deep vue-gauge {
  width: 150px;
  height: 150px;
  display: block;
  padding: 10px;
}

.details::ng-deep vue-gauge .dial {
  stroke-width: 10;
}

.details::ng-deep vue-gauge .value {
  stroke-dasharray: none;
  stroke-width: 13;
}

.details::ng-deep vue-gauge.value-text {
  fill: #fff;
  font-weight: 700;
  font-size: 24px;
}

.game-gauge {
  position: absolute;
  top: 50px;
  right: 0;
}

.game-gauge-label {
  font-size: 20px;
  color: #fff;
  position: relative;
  bottom: 60px;
}

.game-banner {
  height: 442px;
  overflow: hidden;
}

.game-banner-img {
  width: 100%;
  filter: blur(5px);
}

.game-content {
  text-align: center;
  position: relative;
  top: -200px;
}

.game-header-title {
  font-size: 70px;
  color: #fff;
  font-weight: 700;
  line-height: 70px;
  white-space: nowrap;
}

.game-header-release-date {
  color: #fff;
  font-weight: 700;
}

.game-header-genres {
  color: #fff;
  font-weight: 700;
}
</style>
