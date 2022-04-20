import Vue from "vue";
import App from "./App.vue";
import router from "@/router";

Vue.config.productionTip = false;

Vue.filter("getNumberFilterV2", (value) => {
  return `s-${value}`;
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
