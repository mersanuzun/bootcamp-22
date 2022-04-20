<template>
  <div>
    <button @click="onClick">Go to users page</button>
  </div>
</template>

<script>
export default {
  name: "HomeView",

  methods: {
    onClick() {
      this.$router.push({ name: "Users", query: { page: 1 } });
    },
  },
};
</script>

<style lang="scss" scoped></style>
