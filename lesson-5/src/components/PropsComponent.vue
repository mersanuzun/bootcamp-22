<template>
  <div>
    <ul>
      <li v-for="item in getItems" :key="item.text">
        <component :is="item.component" :value="item.text">
          {{ item.text }}
        </component>
      </li>
    </ul>
    <div>
      <button type="button" @click="onlyInput">Sadece Inputlar</button>
      <button type="button" @click="onlyButton">Sadece Buttonlar</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PropsComponent",
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      componentType: "",
    };
  },
  computed: {
    getItems() {
      if (this.componentType === "") {
        return this.items;
      }
      return [...this.items].filter(
        (item) => item.component === this.componentType
      );
    },
  },
  methods: {
    onlyInput() {
      this.componentType = "input";
    },
    onlyButton() {
      this.componentType = "button";
    },
  },
};
</script>

<style scoped></style>
