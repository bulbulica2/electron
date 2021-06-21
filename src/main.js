import Vue from 'vue';
import Vuetify from 'vuetify';
import isElectron from 'is-electron';
import App from './App.vue';
import router from './router';

import store from './store';

import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

Vue.config.productionTip = false;

const vuetifyOptions = {
  theme: { dark: true },
};

// check for desktop or web app
if (isElectron()) {
  new Vue({
    router,
    vuetify: new Vuetify(vuetifyOptions),
    render: (h) => h(App),
  }).$mount('#app');
} else {
  new Vue({
    router,
    store,
    vuetify: new Vuetify(vuetifyOptions),
    render: (h) => h(App),
  }).$mount('#app');
}
