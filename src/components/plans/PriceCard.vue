<template>
  <v-card
      :class="{ 'price-card-with-border': item.selected, 'price-card': true }"
  >
    <figure style="position: absolute; bottom: -8px; right: 0; z-index: 0">
      <svg width="173" height="158" viewBox="0 0 173 158" fill="none">
        <g style="mix-blend-mode:multiply">
          <path d="M173 3.05176e-05C77.4548 2.21647e-05 7.62439e-06 70.7 0 157.913L163 157.913C168.523 157.913 173 153.436 173 147.913L173 3.05176e-05Z" fill="#E6FED8"/>
          <path d="M173 41.2199C102.395 41.2199 45.1581 93.4651 45.1581 157.913L153 157.913C162.428 157.913 167.142 157.913 170.071 154.984C173 152.055 173 147.341 173 137.913L173 41.2199Z" fill="#D8FEC2"/>
          <path d="M173 84.1815C128.389 84.1815 92.2243 117.192 92.2243 157.913L163 157.913C168.523 157.913 173 153.436 173 147.913L173 84.1815Z" fill="#C2E9AB"/>
        </g>
      </svg>
    </figure>
    <v-card-text class="mt-2 mt-sm-0" align="center" style="position: relative; z-index: 1">
      <h1 class="price"><sup>$</sup>{{ item.price }}<span class="mo">/mo</span></h1>
      <p>{{ item.download }} Mbps Download</p>
      <p>{{ item.upload }} Mbps Upload</p>
      <p>Unlimited Data</p>
    </v-card-text>
  </v-card>
</template>

<style>

.price-card {
  padding: 28px 16px;
  margin: 40px 20px;
  width: 240px;
  height: 300px;
}

.price-card-with-border {
  box-sizing: border-box;
  border-style: solid;
  border-radius: 16px!important;
  transition: all 0.8s;
  border-top: 4px solid #20731C!important;
  border-bottom: 4px solid #20731C90!important;
}

p, .question {
  font-size: 16px;
  line-height: 180%;
}

p {
  text-align: center;
  color: #000;
}
.question {
  font-weight: bold;
}

.price {
  color: #20731C;
}
.mo {
  font-weight: normal;
  font-size: 18px;
}
/* .price-card-image {
  width: 172px;
  height: 157px;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 0;
} */

@media screen and (max-width: 959px) {
  .price-card {
    padding: 16px;
    width: 250px;
    height: 320px;
  }
}

</style>

<script>

import { VCard, VCardText } from 'vuetify/lib'

export default {
  name: 'PriceCard',
  components: {
    VCard,
    VCardText
  },
  props: ['item', 'index', 'contact']
}
</script>
