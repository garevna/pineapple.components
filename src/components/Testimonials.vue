<template>
  <v-container fluid class="trasparent" v-if="ready">
    <v-card flat class="transparent mx-auto mt-12 mb-0 text-center" max-width="1360">
      <v-card-text class="text-center" max-width="940">
        <h2 v-if="testimonials.header">
          {{ testimonials.header }}
        </h2>
        <h1 v-else>
          Our customers <span class="green--text">love us.</span>
        </h1>
      </v-card-text>

      <v-slide-group
        v-if="viewportWidth >= 600"
        v-model="model"
        class="pa-12"
        center-active
        show-arrows
      >
        <v-slide-item
          v-for="(item, index) in content"
          :key="index"
          v-slot:default="{ active, toggle }"
        >
          <v-card
            flat
            class="transparent ma-4"
            height="340"
            width="376"
            @click="toggle"
          >
            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
              <v-scale-transition>
                <TestimonialsCard
                      :date="item.date"
                      :name="item.name"
                      :photo="item.photo"
                      :text="item.text"
                />
              </v-scale-transition>
            </v-row>
          </v-card>
        </v-slide-item>
      </v-slide-group>

      <v-carousel
            v-else
            :continuous="true"
            :show-arrows="true"
            hide-delimiters
            height="420"
            width="100%"
            light
            class="testimonials transparent my-10"
      >
        <v-carousel-item
          v-for="(item, index) in content"
          :key="index"
        >
          <v-sheet height="100%" flat tile class="transparent">
            <v-row align="center" justify="center">
              <TestimonialsCard
                    :date="item.date"
                    :name="item.name"
                    :photo="item.photo"
                    :text="item.text"
              />
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-card>
    <v-card-text class="text-center">
      <v-btn
          class="submit-button"
          @click="$emit('update:page', testimonials.goto)"
          v-if="testimonials.button"
      >
          {{ testimonials.button }}
      </v-btn>
    </v-card-text>
  </v-container>
</template>

<style>

.testimonials .v-btn__content,
.testimonials .mdi::before,
.testimonials .mdi-chevron-right::before,
.testimonials .v-icon::after {
  color: #fff!important;
}
.testimonials .theme--light.v-btn.v-btn--icon {
  background: #7b79!important;
  color: #fff!important;
}
</style>

<style scoped>

h1, h2 {
  width: 100%;
  text-align: center;
}
.v-carousel__controls {
  z-index: 0!important;
}
</style>

<script>

import TestimonialsCard from './TestimonialsCard.vue'
import { mapState } from 'vuex'
export default {
  name: 'Testimonials',
  components: {
    TestimonialsCard
  },
  props: ['page'],
  data: () => ({
    model: 0,
    content: null
  }),
  computed: {
    ...mapState('content', ['testimonials']),
    ...mapState(['viewportWidth']),
    ready () {
      return !!this.content && !!this.testimonials
    },
    cardWidth () {
      return this.viewportWidth < 600 ? this.viewportWidth - 100 : 376
    },
    textSize () {
      return this.viewportWidth < 600 ? '12px' : '14px'
    }
  },
  methods: {
    async getContent () {
      this.content = await (await fetch('https://api.pineapple.net.au/testimonials')).json()
    }
  },
  beforeMount () {
    this.getContent()
  }
}
</script>
