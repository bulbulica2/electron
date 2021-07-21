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
          <v-col cols="12" sm="2" class="pa-md-7">
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
        <v-tab
          v-for="tab in TABS"
          @click="redirectToPage(tab.location)"
          :id="`${tab.id}_${tab.title}`"
          :key="tab.id"
        >
<!--          :class="checkCurrentPage(tab.title) ? ''
: removeActiveTab(`${tab.id}_${tab.title}`)"-->
          <v-menu
            :open-on-hover="true"
            offset-y
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                rounded
                dark
                v-bind="attrs"
                v-on="on"
              >
                {{tab.title}}
              </v-btn>
            </template>
            <v-list v-if="tab.subPages">
              <v-list-item
                v-for="subItem in tab.subPages"
                :key="subItem.id"
              >
                <v-list-item-title
                  @click="redirectToPage(subItem.location)"
                >
                  {{ subItem.title }}
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-tab>
      </v-tabs>
    </v-card>
  </div>
</template>

<script>
import redirect from '../../utils/redirect.vue';
import constants from '../../utils/constants';

export default {
  name: 'Header',
  mixins: [redirect],
  data() {
    return {
      TABS: null,
      // activeTab: this.$store.getters.getCurrentPage.pageName
      //   ? this.$store.getters.getCurrentPage.pageName : 'company',
    };
  },
  created() {
    this.TABS = constants.PAGES;
  },
  computed: {
    // getCurrentPage() {
    //   // debugger
    //   return this.$store.getters.getCurrentPage;
    // },
  },
  methods: {
    // checkCurrentPage(pageName) {
    //   return this.$store.getters.getCurrentPage.pageName === pageName;
    // },
    // removeActiveTab(currentTab) {
    //   // currentTab.style.removeProperty('v-tab--active');
    //   const selectedElement = document.getElementById(currentTab);
    //   if (selectedElement) {
    //     selectedElement.style.removeProperty('v-tab--active');
    //   }
    // },
  },
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

/*.v-tabs .v-tab--active {*/
/*  color: #fff;*/
/*}*/

/*.v-tab:before, .v-tabs-slider {*/
/*  !*text-decoration: none;*!*/
/*  !*background-color: red;*!*/
/*}*/
</style>
