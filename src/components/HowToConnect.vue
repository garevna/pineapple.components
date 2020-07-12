<template>
  <v-container fluid class="homefone my-12" v-if="howToConnect">
    <v-card flat class="transparent text-center mx-auto" width="100%">
      <v-card-text class="text-center">
        <h2>{{ howToConnect.header }}</h2>
      </v-card-text>
      <v-card-text v-if="howToConnect.text">
        <p v-html="howToConnect.text"></p>
      </v-card-text>
    </v-card>

    <v-container fluid class="mt-8 mb-12">
      <v-card flat class="d-flex flex-wrap justify-center transparent">
        <v-card
              flat
              class="card--offer transparent text-center mx-1 mx-sm-10"
              width="240"
              v-for="(item, index) in howToConnect.items"
              :key="index"
        >
          <v-img :src="item.icon" />
          <v-card-text class="text-center">
            <h3 v-html="item.title.split('\n').join('<br>')"></h3>
          </v-card-text>
          <v-card-text max-width="600" class="mx-auto">
            <p v-html="item.text.split('\n').join('<br>')"></p>
          </v-card-text>
        </v-card>
      </v-card>
    </v-container>
    <v-card flat class="transparent mx-auto text-center" width="600" min-width="300">
      <v-btn
          class="submit-button"
          @click="$emit('update:page', howToConnect.goto)"
          v-if="howToConnect.button && howToConnect.goto"
      >
          {{ howToConnect.button }}
      </v-btn>
    </v-card>
  </v-container>
</template>

<style scoped>

h3, p {
  width: 100%;
  text-align: center;
  color: #000;
}
.card--offer {
  width: 240px;
}
@media (max-width: 420px), (max-height: 420px) {
  .card--offer {
    width: 90%!important;
  }
}
</style>

<script>

import { VContainer, VCard, VCardText, VImg, VBtn } from 'vuetify/lib'

import { mapState } from 'vuex'

export default {
  name: 'HowToConnect',
  components: {
    VContainer,
    VCard,
    VCardText,
    VImg,
    VBtn
  },
  props: ['page'],
  data () {
    return {
      contact: false
    }
  },
  computed: {
    ...mapState('content', ['howToConnect'])
  },
  watch: {
    contact (val) {
      if (!val) return
      this.$emit('update:page', '#contact')
      this.contact = false
    }
  }
}
</script>
