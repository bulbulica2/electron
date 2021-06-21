<template>
  <v-footer
      class="footer-navigator"
      padless
  >
    <v-card
        width="100%"
    >
      <v-container>
        <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 white--text"
            icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
        <v-row>
          <v-col sm="3">
            <v-list dense>
              <v-list-item-group
                  color="primary"
              >
                <v-list-item
                    v-for="(item, i) in items"
                    :key="i"
                >
                  <v-list-item-content>
                    <v-list-item-title v-text="item.text"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-col>
          <v-col sm="3">
            <ul class="ul-without-bullets">
              <li>Coffee</li>
              <li>Tea</li>
              <li>Coca Cola</li>
            </ul>
          </v-col>
          <v-col sm="3">
            <p>One of three columns</p>
            <p>One of three columns</p>
            <p>One of three columns</p>
            <p>One of three columns</p>
          </v-col>
          <v-col sm="3">
            <v-card
                class="mx-auto"
                style="border: 0"
            >
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Single-line item</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-divider></v-divider>
        </v-row>
        <v-row>
          <v-card-text class="white--text">
            {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
          </v-card-text>
        </v-row>
      </v-container>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'FooterNavigation',
  data() {
    return {
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
      selectedItem: 1,
      items: [
        {text: 'Real-Time', icon: 'mdi-clock'},
        {text: 'Audience', icon: 'mdi-account'},
        {text: 'Conversions', icon: 'mdi-flag'},
      ],
    };
  },
};
</script>

<style>
.footer-navigator {
  position: absolute;
  width: 100%;
  bottom: 0;
  margin-top: 30px;
}

.ul-without-bullets {
  list-style-type: none;
  text-align: left;
}
</style>
