<template>
  <v-app>
    <div class="about">
      <h1>This is an about page</h1>
      <v-icon>mdi-account</v-icon>
      <span class="group pa-2">
        <v-icon>home</v-icon>
        <v-icon>event</v-icon>
        <v-icon>info</v-icon>
      </span>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>
        <div class="grey--text ms-4">
          4.5 (413)
        </div>
      </v-row>
      <v-btn
        elevation="2"
      >Click me
      </v-btn>
    </div>
  </v-app>
</template>
