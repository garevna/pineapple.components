<template>
  <v-card hover :width="cardWidth" :height="cardHeight" style="position: relative" pa-4>
    <img :src="photo" class="testimonial-photo" width="40" height="40" style="border-radius: 50%" alt="" />
    <p class="testimonial-name">{{ name }}</p>
    <p class="testimonial-text" v-html="text"></p>
    <p class="testimonial-date">{{ date }}</p>
  </v-card>
</template>

<style scoped>
p {
  line-height: 150%!important;
}

.testimonial-name,
.testimonial-text,
.testimonial-date,
.testimonial-photo {
  position: absolute;
}

.testimonial-name, .testimonial-date { text-align: left; }

.testimonial-photo {
  top: 30px;
  left: 20px;
  border-radius: 50%!important;
}

.testimonial-name {
  top: 36px;
  left: 70px;
  font-size: 15px;
  font-weight: bold;
}

.testimonial-text {
  position: absolute;
  top: 80px;
  width: 80%!important;
  left: 10%;
  height: 200px;
  overflow: hidden;
  text-align: justify;
  font-weight: normal;
  font-size: 14px;
}

.testimonial-date {
  position: absolute;
  bottom: 4px;
  left: 24px;
  font-size: 12px;
  font-weight: normal;
}

@media screen and (max-width: 600px) {
  .testimonial-text {
    font-size: 12px;
  }
  .testimonial-date {
    font-size: 11px;
  }
}

@media screen and (max-width: 420px) {
  .testimonial-text {
    height: 280px;
    font-size: 12px!important;
  }
  .testimonial-date {
    font-size: 10px!important;
  }
}
</style>

<script>
import { mapState } from 'vuex'
export default {
  name: 'TestimonialsCard',
  props: ['date', 'photo', 'name', 'text'],
  computed: {
    ...mapState(['viewportWidth']),
    cardWidth () {
      return this.viewportWidth < 600 ? this.viewportWidth - 100 : 376
    },
    cardHeight () {
      return this.viewportWidth < 420 ? 360 : 320
    }
  }
}
</script>
