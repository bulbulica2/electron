<template>
  <div>
    <v-custom-card-component
        :image-src="'https://cdn.vuetifyjs.com/images/cards/cooking.png'"
        :title="'Login panel'"
    >
      <template v-slot:content>
        <form>
          <v-text-field
              v-model="form.email"
              :error-messages="emailErrors"
              type="email"
              label="E-mail"
              required
              @input="$v.form.email.$touch()"
              @blur="$v.form.email.$touch()"
          ></v-text-field>
          <v-text-field
              v-model="form.password"
              :error-messages="passwordErrors"
              type="password"
              label="Password"
              required
              @input="$v.form.password.$touch()"
              @blur="$v.form.password.$touch()"
          ></v-text-field>

          <v-btn
              class="mr-4"
              @click="submitLoginForm"
          >
            submit
          </v-btn>
        </form>
        <br/><br/>
      </template>
    </v-custom-card-component>
  </div>
</template>

<script>
import {validationMixin} from 'vuelidate';
import {email, minLength, required} from 'vuelidate/lib/validators';
import VCustomCardComponent from '../components/VCustomCardComponent.vue';

export default {
  password: 'Login',
  components: { VCustomCardComponent },
  mixins: [validationMixin],

  validations: {
    form: {
      email: { required, email },
      password: { required, minLength: minLength(6) },
    },
  },

  data: () => ({
    form: {
      password: '',
      email: '',
    },
  }),

  computed: {
    emailErrors() {
      const errors = [];
      if (!this.$v.form.email.$dirty) {
        return errors;
      }
      if (!this.$v.form.email.email) {
        errors.push('It must be valid e-mail.');
      }
      if (!this.$v.form.email.required) {
        errors.push('The email is required.');
      }
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.form.password.$dirty) {
        return errors;
      }
      if (!this.$v.form.password.required) {
        errors.push('The password is required.');
      }
      if (!this.$v.form.password.minLength) {
        errors.push('The password is too short.');
      }
      return errors;
    },
  },

  methods: {
    submitLoginForm() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.loginForm();
      }
    },
    loginForm() {
      // aici trebuie adaugat axios
      if (!this.$v.$invalid) {
        this.displaySuccessfullyLoggedInMessage(this.form.email);
        this.clearLoginForm();
      } else {
        this.displayInvalidLoggedInMessage();
      }
    },
    displaySuccessfullyLoggedInMessage(emailAddress) {
      const message = `You have successfully logged in using ${emailAddress}.`;
      this.$store.commit('setSnackbarTextMessage', message);
    },
    displayInvalidLoggedInMessage() {
      const message = 'The email address or password is incorrect. Please try again.';
      this.$store.commit('setSnackbarTextMessage', message);
    },
    clearLoginForm() {
      this.$v.$reset();
      this.form.email = null;
      this.form.password = null;
    },
  },
};
</script>

<style scoped>

</style>
