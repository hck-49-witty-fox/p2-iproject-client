<template>
  <div class="col-12 col-md-4">
    <div class="card mb-3">
      <img :src="user.imgUrl" class="card-img-top" />
      <div class="card-body card-body">
        <h5 class="card-title">{{ user.username }}</h5>
        <p class="card-text">{{ user.gender }}, {{ user.birthyear }}</p>
        <p
          class="card-text text-danger"
          v-if="loveCalculator && loveCalculator.fname === user.username"
        >
          Love Percentage {{ loveCalculator.percentage }}%
        </p>
        <p
          class="card-text text-danger"
          v-if="loveCalculator && loveCalculator.fname === user.username"
        >
          {{ loveCalculator.result }}
        </p>
        <a
          href="#"
          class="btn btn-danger"
          @click.prevent="calculate(user.username)"
          >Check love</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useStore } from "../stores/store";

export default {
  props: ["user"],
  computed: {
    ...mapState(useStore, ["loveCalculator"]),
  },
  methods: {
    ...mapActions(useStore, ["calculate"]),
  },
};
</script>
