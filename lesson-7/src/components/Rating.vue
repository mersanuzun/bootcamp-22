<template>
  <div class="counter-wrapper">
    Tranlsation {{ $translate("raete") }} {{ value }}
    <u @click="onIncr"> Click to rate </u>
  </div>
</template>

<script>
import incrementMixin from "@/mixins/incrementMixin";

export default {
  name: "RatingComp",

  mixins: [incrementMixin],

  /*created() {
    console.log("rating component hook");
  },*/
};
</script>

<style scoped>
.counter-wrapper {
  border: 1px solid grey;
  margin-bottom: 10px;
  padding: 20px;
}
u {
  cursor: pointer;
}
</style>
