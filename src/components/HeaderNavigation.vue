<template>
  <div id="nav">
    <v-card>
      <v-tabs
          background-color="deep-purple accent-4"
          center-active
          centered
          light
      >
        <v-tab class="logo" @v-on:click="location.href='/'">
          <router-link to="/">
            Logo Student Coin
          </router-link>
        </v-tab>
        <v-tab>Buy STC Token</v-tab>
        <v-tab @v-on:click="location.href='/about'">
          <router-link to="/about">
            Roadmap
          </router-link>
        </v-tab>
        <v-tab>Team</v-tab>
        <v-tab>Community</v-tab>
        <v-tab>Buy STC</v-tab>
      </v-tabs>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
#nav {
  padding-bottom: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
