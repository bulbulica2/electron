<template>
  <div id="nav">
    <v-card>
      <v-card no-gutters>
        <v-row>
          <v-col cols="12" sm="2" class="pa-md-5">
            <v-card>
              <table aria-describedby="logo">
                <tr>
                  <th id="logo_image">
                    <img alt="Xentrom logo" src="../../assets/small_logo.png">
                  </th>
                  <th id="logo_text">
                    <p>ENTROM</p>
                  </th>
                </tr>
              </table>
            </v-card>
          </v-col>
          <v-col cols="12" sm="8"></v-col>
          <v-col cols="12" sm="2" class="pa-md-5">
            <router-link to="/account">
              <v-card>
                <v-btn
                    rounded
                    color="primary"
                    dark
                >
                  Account
                </v-btn>
              </v-card>
            </router-link>
          </v-col>
        </v-row>
      </v-card>
      <v-tabs
          background-color="deep-purple accent-4"
          center-active
          centered
      >
        <v-tab @click="redirectToPage('')">
          Company
        </v-tab>
        <v-tab @click="redirectToPage('about')">
          Project
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
import redirect from '../../utils/redirect.vue';

export default {
  name: 'Header',
  mixins: [redirect],
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
