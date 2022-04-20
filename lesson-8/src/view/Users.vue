<template>
  <div>users view for page {{ page }}</div>
</template>

<script>
export default {
  name: "UsersView",

  computed: {
    page() {
      return this.$route.query.page;
    },
  },
};
</script>

<style lang="scss" scoped></style>
