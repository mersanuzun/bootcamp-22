<template>
  <div>
    <label><slot name="label" /></label>
    <button><slot /></button>
  </div>
</template>

<script>
export default {
  name: "ButtonComponent",
  props: ["text"],
  mounted() {
    console.log(this.$slots);
  },
};
</script>

<style scoped>
button {
  font-size: 12px;
  padding: 5px;
  border: 1px solid #2c3e50;
  background: white;
}
</style>
