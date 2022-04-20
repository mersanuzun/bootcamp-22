<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <hr />
    <div :class="{ 'shake-class': shake }">
      <input type="text" v-model="text" @keydown.enter="onSubmit" />
    </div>

    <hr />

    <button @click="show = !show">Show</button>
    <transition name="slide-fade">
      <p v-if="show">Vue Bootcamp 2022</p>
    </transition>
    <hr />
    <button @click="addItem">+</button>
    <button @click="removeItem">-</button>
    <TransitionGroup
      name="custom-classes-transition"
      tag="ul"
      enter-active-class="animated rotateIn"
      leave-active-class="animated rotateIn"
    >
      <li v-for="item in items" :key="item">
        {{ item }}
      </li>
    </TransitionGroup>

    <hr />

    <GsapComponent />

    <hr />
    <AnimateComponent />
  </div>
</template>

<script>
import GsapComponent from "@/components/GsapComponent";
import AnimateComponent from "@/components/AnimateComponent";
export default {
  name: "App",
  components: { AnimateComponent, GsapComponent },
  data() {
    return {
      text: "hello world",
      shake: false,
      show: false,
      items: [1, 2, 3, 4, 5, 6, 7],
    };
  },
  methods: {
    onSubmit() {
      if (this.text !== "musaakkayaa") {
        this.shake = true;
        setTimeout(() => {
          this.shake = false;
        }, 3000);
      }
    },
    addItem() {
      this.items.push(this.items.length + 1);
    },
    removeItem() {
      this.items.pop();
    },
  },
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
.shake-class {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}

.slide-fade-enter-active {
  transition: all 3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-leave-active {
  transition: all 8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(100px);
  opacity: 0;
}
</style>
