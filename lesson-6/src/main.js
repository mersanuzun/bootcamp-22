import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.filter("getNumberFilterV2", (value) => {
  return `s-${value}`;
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
