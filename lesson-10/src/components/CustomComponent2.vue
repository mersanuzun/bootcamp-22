<template>
  <div>{{ getReverseText }}</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "CustomComponent",
  computed: {
    ...mapGetters(["getReverseText"]),
  },
};
</script>

<style scoped></style>
