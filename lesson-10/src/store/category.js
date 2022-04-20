export default {
  namespaced: true,
  state: {
    categoryList: [1, 2, 3, 4, 5, 6, 7],
  },
  mutations: {
    addCategory(state) {
      state.categoryList.push(state.categoryList.length + 1);
    },
  },
  actions: {
    addCategory({ commit }) {
      commit("addCategory");
    },
  },
  getters: {
    getCategoryList(state) {
      return state.categoryList;
    },
    getText(state) {
      return state.categoryList.join("");
    },
  },
};
