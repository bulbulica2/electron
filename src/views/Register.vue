<template>
  <div>
    <v-custom-card-component
        :image-src="'https://cdn.vuetifyjs.com/images/cards/cooking.png'"
        :title="'Login panel'"
    >
      <template v-slot:content>
        <form>
          <v-text-field
              v-model="form.username"
              :error-messages="usernameErrors"
              :counter="50"
              type="text"
              label="Username"
              required
              @input="$v.form.username.$touch()"
              @blur="$v.form.username.$touch()"
          ></v-text-field>
          <v-text-field
              v-model="form.email"
              :error-messages="emailErrors"
              :counter="50"
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
          <v-text-field
              v-model="form.repeatPassword"
              :error-messages="repeatPasswordErrors"
              type="password"
              label="Confirm Password"
              required
              @input="$v.form.repeatPassword.$touch()"
              @blur="$v.form.repeatPassword.$touch()"
          ></v-text-field>
          <v-text-field
              v-model="form.promotionalCode"
              :error-messages="promotionalCodeErrors"
              type="text"
              label="Promotional Code"
              @input="$v.form.promotionalCode.$touch()"
              @blur="$v.form.promotionalCode.$touch()"
          ></v-text-field>

          <v-btn
              class="mr-4"
              @click="submitRegisterForm"
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
import { validationMixin } from 'vuelidate';
import {
  alphaNum, email, maxLength, minLength, required, sameAs,
} from 'vuelidate/lib/validators';
import VCustomCardComponent from '../components/VCustomCardComponent.vue';

export default {
  name: 'Register',
  components: { VCustomCardComponent },
  mixins: [validationMixin],
  validations: {
    form: {
      username: { required, minLength: minLength(6), maxLength: maxLength(50) },
      email: { required, email, maxLength: maxLength(50) },
      password: { required, minLength: minLength(6) },
      repeatPassword: {
        required,
        minLength: minLength(6),
        sameAsPassword: sameAs('password'),
      },
      promotionalCode: { alphaNum, minLength: minLength(10), maxLength: maxLength(10) },
    },
  },
  data: () => ({
    form: {
      username: '',
      email: '',
      password: '',
      repeatPassword: '',
      promotionalCode: '',
    },
  }),

  computed: {
    usernameErrors() {
      const errors = [];
      if (!this.$v.form.username.$dirty) {
        return errors;
      }
      if (!this.$v.form.username.required) {
        errors.push('The username is required.');
      }
      if (!this.$v.form.username.minLength) {
        errors.push('The username is too short.');
      }
      if (!this.$v.form.username.maxLength) {
        errors.push('The username is too big.');
      }
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.form.email.$dirty) {
        return errors;
      }
      if (!this.$v.form.email.required) {
        errors.push('The email is required.');
      }
      if (!this.$v.form.email.email) {
        errors.push('It must be valid e-mail.');
      }
      if (!this.$v.form.email.maxLength) {
        errors.push('The email is too big.');
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
    repeatPasswordErrors() {
      const errors = [];
      if (!this.$v.form.repeatPassword.$dirty) {
        return errors;
      }
      if (!this.$v.form.repeatPassword.required) {
        errors.push('The confirmation password is required.');
      }
      if (!this.$v.form.repeatPassword.sameAsPassword) {
        errors.push('The confirmation password does not match the password.');
      }
      return errors;
    },
    promotionalCodeErrors() {
      const errors = [];
      if (!this.$v.form.promotionalCode.$dirty) {
        return errors;
      }
      if (!this.$v.form.promotionalCode.alphaNum) {
        errors.push('The promotional code is not alphanumeric.');
      }
      if (!this.$v.form.promotionalCode.minLength || !this.$v.form.promotionalCode.maxLength) {
        errors.push('The promotional code is not the right length.');
      }
      return errors;
    },
  },

  methods: {
    submitRegisterForm() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.registerForm();
      }
    },
    registerForm() {
      // aici trebuie adaugat axios
      if (!this.$v.$invalid) {
        this.displaySuccessfullyRegisterMessage(this.form.email);
        this.clearRegisterForm();
      } else {
        this.displayInvalidRegisterMessage(this.form.email);
      }
    },
    displaySuccessfullyRegisterMessage(emailAddress) {
      const message = `You have successfully registered using ${emailAddress}.`;
      this.$store.commit('setSnackbarTextMessage', message);
    },
    displayInvalidRegisterMessage(emailAddress) {
      const message = `The email already exists. Try logging in using ${emailAddress} or add a new email.`;
      this.$store.commit('setSnackbarTextMessage', message);
    },
    clearRegisterForm() {
      this.$v.$reset();
      this.form.username = null;
      this.form.email = null;
      this.form.password = null;
      this.form.repeatPassword = null;
      this.form.promotionalCode = null;
    },
  },
};
</script>

<style scoped>

</style>
