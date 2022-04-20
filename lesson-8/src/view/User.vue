<template>
  <div>user view</div>
</template>

<script>
export default {
  name: "UserView",

  computed: {
    page() {
      return this.$route.query.page;
    },
  },
};
</script>

<style lang="scss" scoped></style>
