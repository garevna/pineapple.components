<template>
  <v-card
          flat
          width="100%"
          class="transparent my-10"
  >
    <v-card-text class="text-center">
      <h2 v-html="header"></h2>
    </v-card-text>

    <v-card-text>
      <p v-html="text"></p>
    </v-card-text>

    <v-card-text width="100%" class="mx-0 px-0 text-center">
      <SwitchMode />
    </v-card-text>

    <!-- <v-slide-x-transition> -->
      <v-card
              flat
              class="d-flex flex-wrap justify-center transparent"
              v-if="ready"
      >
        <PriceCard class="d-none d-md-block"
                  v-for="(item, index) in currentPlan"
                  :key="index"
                  :item="item"
                  :index="index"
                  :contact.sync="contact"
        />

      <v-carousel
          :height="carouselHeight"
          hide-delimiter-background
          show-arrows-on-hover
          class="d-block d-md-none"
        >
          <v-carousel-item
            v-for="(item, index) in currentPlan"
            :key="index"
          >
            <v-sheet
              height="320"
              light
              class="transparent"
            >
              <v-row
                class="fill-height transparent"
                align="center"
                justify="center"
              >
              <PriceCard
                        :mode="plan"
                        :item="item"
                        :index="index"
                        :contact.sync="contact"
                        :selected.sync="selected"
              />
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-card>
    <!-- </v-slide-x-transition> -->
    <v-card-actions class="text-center my-4 mb-md-8">
      <v-btn
          dark
          class="submit-button px-auto mx-auto"
          @click="$emit('update:page', goto)"
      >
        {{ button }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<style>

</style>

<script>

import { mapState } from 'vuex'

import PriceCard from './plans/PriceCard.vue'
import SwitchMode from './plans/SwitchToggle.vue'

export default {
  name: 'InternetPlans',
  components: {
    PriceCard,
    SwitchMode
  },
  props: ['page'],
  data () {
    return {
      contact: false,
      selected: null,
      plans: null
    }
  },
  computed: {
    ...mapState(['viewportWidth', 'plan']),
    ...mapState('content', {
      internetPlans: 'plans'
    }),
    currentPlan () {
      return this.plans && this.plan ? this.plans[this.plan] : {}
    },
    header () {
      return !!this.internetPlans && !!this.internetPlans.header
        ? this.internetPlans.header
        : 'FIBRE <span class="green--text">INTERNET PLANS</span>'
    },
    text () {
      return !!this.internetPlans && !!this.internetPlans.text ? this.internetPlans.text : ''
    },
    button () {
      return !!this.internetPlans && !!this.internetPlans.button ? this.internetPlans.button : 'Contact Us'
    },
    goto () {
      return !!this.internetPlans && !!this.internetPlans.goto ? this.internetPlans.goto : '#contact'
    },
    carouselHeight () {
      return this.viewportWidth < 960 ? this.viewportWidth < 600 ? 420 : 480 : 420
    },
    ready () {
      return this.plan && this.plans
    }
  },
  methods: {
    async getPrices () {
      const { plans } = await (await fetch('https://api.pineapple.net.au/content/plans')).json()
      this.plans = plans
    }
  },
  beforeMount () {
    this.getPrices()
  }
}
</script>
