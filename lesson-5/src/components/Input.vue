<template>
  <div>
    <label><slot /></label>
    <input :value="value" @input="onInput" />
    <div class="error" v-if="!value">Bu alan boş olamaz</div>
  </div>
</template>

<script>
export default {
  name: "InputComponent",
  props: ["value"],
  methods: {
    onInput(e) {
      this.$emit("input", e.target.value);
    },
  },
};
</script>

<style scoped></style>
