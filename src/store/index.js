import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    snackbarTextMessage: null,
  },
  mutations: {
    setSnackbarTextMessage(state, message) {
      state.snackbarTextMessage = message;
    },
  },
  getters: {
    getSnackbarTextMessage: (state) => state.snackbarTextMessage,
  },
  actions: {},
  modules: {},
});
