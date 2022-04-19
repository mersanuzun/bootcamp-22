<template>
  <div id="app">
    Axios Example
    <HavaDurumu />
  </div>
</template>

<script>
import HavaDurumu from "@/components/HavaDurumu";
export default {
  name: "App",
  components: { HavaDurumu },
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
