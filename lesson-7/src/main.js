import Vue from "vue";
import App from "./App.vue";
import firstPlugin from "@/plugins/firstPlugin";

Vue.config.productionTip = false;

Vue.use(firstPlugin);

Vue.myGlobalMethod();

Vue.filter("getNumberFilterV2", (value) => {
  return `s-${value}`;
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
