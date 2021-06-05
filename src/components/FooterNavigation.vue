<template>
  <v-footer
    light
    padless
    class="footer-navigator"
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
          One of three columns
        </v-col>
        <v-col sm="3">
          One of three columns
        </v-col>
        <v-col sm="3">
          One of three columns
        </v-col>
        <v-col sm="3">
          <v-card
            class="mx-auto"
            tile
          >
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Single-line item</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title>Two-line item</v-list-item-title>
                <v-list-item-subtitle>Secondary text</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title>Three-line item</v-list-item-title>
                <v-list-item-subtitle>
                  Secondary line text Lorem ipsum dolor sit amet,
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                  consectetur adipiscing elit.
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-container>
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
    };
  },
};
</script>

<style scoped>
.footer-navigator {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
