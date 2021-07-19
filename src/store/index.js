import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentPage: {
      pageName: '',
      displayName: '',
    },
    snackbarTextMessage: null,
  },
  mutations: {
    setCurrentPage(state, currentPage) {
      state.currentPage = currentPage;
    },
    setSnackbarTextMessage(state, message) {
      state.snackbarTextMessage = message;
    },
  },
  getters: {
    getCurrentPage: (state) => state.currentPage,
    getSnackbarTextMessage: (state) => state.snackbarTextMessage,
  },
  actions: {},
  modules: {},
});
