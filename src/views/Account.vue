<template>
  <div>
    <v-custom-card
        :image-src="'https://cdn.vuetifyjs.com/images/cards/cooking.png'"
        :title="'Account panel'"
    >
      <template v-slot:content>
        <v-btn
            elevation="4"
            rounded
        >Join Us
        </v-btn>
        <v-btn
            elevation="4"
            rounded
        >
          <router-link to="/login">Login</router-link>
        </v-btn>
        <br/><br/>
      </template>
    </v-custom-card>
  </div>
</template>

<script>
import VCustomCard from '../components/VCustomCard.vue';

export default {
  name: 'Account',
  components: { VCustomCard },
};
</script>

<style scoped>

</style>
