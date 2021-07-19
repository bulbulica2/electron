<template>
  <div>
    <v-custom-card-component
      :image-src="'https://cdn.vuetifyjs.com/images/cards/cooking.png'"
      :title="'Account panel'"
    >
      <template v-slot:content>
        <v-btn
          elevation="4"
          rounded
        >
          <router-link to="/register">Join Us</router-link>
        </v-btn>
        <v-btn
          elevation="4"
          rounded
        >
          <router-link to="/login">Login</router-link>
        </v-btn>
        <br/><br/>
      </template>
    </v-custom-card-component>
  </div>
</template>

<script>
import VCustomCardComponent from '../components/VCustomCardComponent.vue';

export default {
  name: 'Account',
  components: { VCustomCardComponent },
};
</script>

<style scoped>

</style>
