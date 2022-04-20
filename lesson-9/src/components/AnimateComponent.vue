<template>
  <div>
    <ul class="tabs">
      <li :class="{ active: view === 'v-a' }" @click="view = 'v-a'">
        Component A
      </li>
      <li :class="{ active: view === 'v-b' }" @click="view = 'v-b'">
        Component B
      </li>
    </ul>
    <div class="container">
      <transition name="fade" mode="out-in">
        <component :is="view"></component>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "AnimateComponent",
  data() {
    return {
      view: "v-a",
    };
  },
  components: {
    "v-a": {
      template: "<div>Component A</div>",
    },
    "v-b": {
      template: "<div>Component B</div>",
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter, .fade-leave-to
  /* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.tabs {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.tabs li {
  padding: 0 10px;
  border: 1px solid #42b983;
  border-radius: 5px 5px 0 0;
}
.tabs li + li {
  border-left: 0;
}
.tabs li.active {
  color: white;
  background-color: #42b983;
}
.container {
  padding: 10px;
  border: 1px solid #145da0;
}
</style>
