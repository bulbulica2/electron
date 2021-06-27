<template>
  <div>
    <v-card
        :loading="loading"
        class="align-page-center mx-auto my-12"
        max-width="1024"
    >
      <!--            <template slot="progress">-->
      <!--              <v-progress-linear-->
      <!--                  color="deep-purple"-->
      <!--                  height="10"-->
      <!--                  indeterminate-->
      <!--              ></v-progress-linear>-->
      <!--            </template>-->

      <v-img v-if="imageSrc"
             :height="imageHeight"
             :src="imageSrc"
      ></v-img>

      <v-card-title v-if="title" style="display: inherit">{{ title }}</v-card-title>

      <!--      <v-card-text>-->
      <!--        <v-row-->
      <!--            align="center"-->
      <!--            class="mx-0"-->
      <!--        >-->
      <!--          <v-rating-->
      <!--              :value="4.5"-->
      <!--              color="amber"-->
      <!--              dense-->
      <!--              half-increments-->
      <!--              readonly-->
      <!--              size="14"-->
      <!--          ></v-rating>-->

      <!--          <div class="grey&#45;&#45;text ms-4">-->
      <!--            4.5 (413)-->
      <!--          </div>-->
      <!--        </v-row>-->

      <!--        <div class="my-6 text-subtitle-1">-->
      <!--          $ • Italian, Cafe-->
      <!--        </div>-->

      <!--        <div>Small plates, salads & sandwiches - an intimate plus patio seating.</div>-->
      <!--      </v-card-text>-->

      <!--      <slot name="divider">-->
      <!--        <v-divider class="mx-4"></v-divider>-->
      <!--      </slot>-->

      <slot name="header-space">
        <br/>
      </slot>

      <slot name="content">
        <!--        <v-card-text>-->
        <!--          <v-chip-group-->
        <!--              v-model="selection"-->
        <!--              active-class="deep-purple accent-4 white&#45;&#45;text"-->
        <!--              column-->
        <!--          >-->
        <!--            <v-chip>5:30PM</v-chip>-->

        <!--            <v-chip>7:30PM</v-chip>-->

        <!--            <v-chip>8:00PM</v-chip>-->

        <!--            <v-chip>9:00PM</v-chip>-->
        <!--          </v-chip-group>-->
        <!--        </v-card-text>-->
      </slot>

      <!--      <slot name="actions">-->
      <!--        <v-card-actions>-->
      <!--          <v-btn-->
      <!--              color="deep-purple lighten-2"-->
      <!--              text-->
      <!--              @click="reserve"-->
      <!--          >-->
      <!--            Reserve-->
      <!--          </v-btn>-->
      <!--        </v-card-actions>-->
      <!--      </slot>-->
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'VCustomCardComponent',
  props: {
    title: {
      type: String,
      default: '',
    },
    imageSrc: {
      type: String,
      default: '',
    },
    imageHeight: {
      type: Number,
      default: 250,
    },
    // description: {
    //   type: String,
    //   default: '',
    // },
  },
  data: () => ({
    loading: false,
    selection: 1,
  }),
  methods: {
    reserve() {
      this.loading = true;

      // setTimeout(() => (this.loading = false), 2000);
    },
  },
};
</script>

<style scoped>

</style>
