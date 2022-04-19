import Vue from "vue";
import App from "./App.vue";
import FButtonCounter from "./components/NewButtonComponent";

Vue.config.productionTip = false;

Vue.component("other-button", {
  data: function () {
    return {
      count: 0,
    };
  },
  template:
    '<button v-on:click="count++">Sayaç {{ count }} kere tıklandı.</button>',
});

Vue.component("FButtonCounter", FButtonCounter);
new Vue({
  render: (h) => h(App),
}).$mount("#app");
