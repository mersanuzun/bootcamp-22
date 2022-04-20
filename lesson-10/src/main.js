import Vue from "vue";
import App from "./App.vue";
import Vuex from "vuex";
import category from "@/store/category";

Vue.use(Vuex);
Vue.config.productionTip = false;

const store = new Vuex.Store({
  state: {
    text: "Component Text",
    productList: [],
  },
  mutations: {
    changeText(state, payload) {
      state.text = payload;
    },
  },
  actions: {
    changeText({ commit }, payload) {
      commit("changeText", payload);
    },
  },
  getters: {
    getText(state) {
      return state.text;
    },
    getReverseText(state) {
      return state.text.split("").reverse().join("");
    },
  },
  modules: { category },
});

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
