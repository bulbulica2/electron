<template>
  <v-snackbar
    :timeout="2000"
    :centered="true"
    v-model="displaySnackbar"
  >
    {{snackbarMessage}}
    <template v-slot:action="{ attrs }">
      <v-btn
        text
        color="white"
        v-bind="attrs"
        @click="displaySnackbar = false"
      >
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  name: 'VSnackbarComponent',
  data: () => ({
    displaySnackbar: false,
  }),
  computed: {
    snackbarMessage() {
      this.displaySnackbarOnPage(this.$store.getters.getSnackbarTextMessage);
      return this.$store.getters.getSnackbarTextMessage;
    },
  },
  methods: {
    displaySnackbarOnPage(vuexSnackbarTextMessage) {
      if (vuexSnackbarTextMessage) {
        this.displaySnackbar = true;
      }
    },
  },
};
</script>

<style scoped>

</style>
