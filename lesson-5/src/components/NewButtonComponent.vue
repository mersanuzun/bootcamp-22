<template>
  <div>
    <input type="text" v-model="text" @keydown.enter="add" />
    <button v-on:click="add">+</button>
    <button v-on:click="remove">-</button>
  </div>
</template>
<script>
export default {
  name: "NewButtonComponent",
  data() {
    return {
      count: 0,
      text: "",
    };
  },
  methods: {
    add() {
      ++this.count;
      this.$emit("add", {
        text: this.text,
        component: this.count % 2 === 0 ? "button" : "input",
      });
      this.text = "";
    },
    remove() {
      this.$emit("remove");
    },
  },
};
</script>
<style></style>
