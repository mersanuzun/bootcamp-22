<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <hr />
    {{ getText }} -- {{ getCategoryList }}
    <button @click="addCategory">+</button>
    <hr />
    <Comp msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import Comp from "./components/FormComponent.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "App",
  computed: {
    ...mapGetters("category", ["getText", "getCategoryList"]),
  },
  components: {
    Comp,
  },
  methods: {
    ...mapActions("category", ["addCategory"]),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
