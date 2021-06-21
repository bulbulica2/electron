<template>
  <div id="nav">
    <v-card>
      <v-tabs>
        <p style="text-align: left">logo</p>
        <router-link to="/account">Account</router-link>
      </v-tabs>
      <v-tabs
          background-color="deep-purple accent-4"
          center-active
          centered
      >
        <v-tab @v-on:click="this.$router.go('/')">
          <router-link to="/">
            Company
          </router-link>
        </v-tab>
        <v-tab @v-on:click="location.href='/about'">
          <router-link to="/about">
            Project
          </router-link>
        </v-tab>
        <v-tab>Roadmap</v-tab>
        <v-tab>Portofolio</v-tab>
        <v-tab>Community</v-tab>
        <v-tab>FAQ</v-tab>
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
