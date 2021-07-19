import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const store = require('../store/index').default;

function createCurrentPagePayload(newPage) {
  return {
    displayName: newPage.name,
    pageName: newPage.name,
  };
}

function simpleBeforeEnterCallback(newPage, currentPage, next) {
  store.commit('setCurrentPage', createCurrentPagePayload(newPage));
  next();
}

const routes = [
  {
    path: '/',
    name: 'Company',
    component: Home,
    beforeEnter: simpleBeforeEnterCallback,
  },
  {
    path: '/project',
    name: 'Project',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    beforeEnter: simpleBeforeEnterCallback,
  },
  {
    path: '/account',
    name: 'Account',
    component: () => import('../views/Account.vue'),
    beforeEnter: simpleBeforeEnterCallback,
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    beforeEnter: simpleBeforeEnterCallback,
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue'),
    beforeEnter: simpleBeforeEnterCallback,
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
