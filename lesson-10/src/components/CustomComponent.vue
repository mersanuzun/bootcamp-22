<template>
  <div>
    <input type="text" v-model="text" />
    <div>{{ $store.state.text }}</div>
    <button @click="onClick">Change Text</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "CustomComponent",
  data() {
    return {
      text: "",
    };
  },
  methods: {
    ...mapActions(["changeText"]),
    onClick() {
      this.changeText(this.text);
      // this.$store.dispatch("changeText", this.text);
    },
  },
};
</script>

<style scoped></style>
