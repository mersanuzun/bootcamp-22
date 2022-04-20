<template>
  <div class="counter-wrapper">
    {{ value }}
    <button v-my-on:click="onIncr">+</button>
  </div>
</template>

<script>
import incrementMixin from "@/mixins/incrementMixin";

export default {
  name: "CounterComp",
  mixins: [incrementMixin],

  data() {
    return {
      text: "hello",
    };
  },
  methods: {
    runCustomDirective() {
      console.log("runned custom directive");
    },
  },
  /*
  created() {
    console.log("counter component hook");
  },*/
};
</script>

<style scoped>
.counter-wrapper {
  border: 1px solid grey;
  margin-bottom: 10px;
  padding: 20px;
}

[v-cloak] {
  display: none;
}
</style>
