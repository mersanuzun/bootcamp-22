<template>
  <div class="keep-alive-wrapper">
    <button @click="selected = 'ComponentA'">Component A</button>
    <button @click="selected = 'ComponentB'">Component B</button>
    <br />
    <keep-alive>
      <component :is="selected"></component>
    </keep-alive>
  </div>
</template>

<script>
import ComponentA from "@/components/ComponentA";
import ComponentB from "@/components/ComponentB";

export default {
  name: "KeepAliveDemo",

  components: {
    ComponentA,
    ComponentB,
  },

  data() {
    return {
      selected: "ComponentA",
    };
  },
};
</script>

<style lang="scss" scoped></style>
