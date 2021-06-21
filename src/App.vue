<template>
  <v-app id="app">
    <header-navigation/>
    <router-view/>
    <footer-navigation/>
  </v-app>
</template>

<script>
import HeaderNavigation from './components/HeaderNavigation.vue';
import FooterNavigation from './components/FooterNavigation.vue';

export default {
  name: 'App',
  components: { FooterNavigation, HeaderNavigation },
};
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
  min-height: 100%;
}

/* Global css, need to be transferred to another place */
.align-page-center {
  margin-left: auto;
  margin-right: auto;
}
</style>
