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
  name: "VSnackbarComponent",
  data: () => ({
    displaySnackbar: false,
  }),
  computed: {
    snackbarMessage() {
      if (this.$store.getters.getSnackbarTextMessage) {
        this.displaySnackbar = true;
      }
      return this.$store.getters.getSnackbarTextMessage;
    },
  },
}
</script>

<style scoped>

</style>