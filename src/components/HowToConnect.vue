<template>
  <v-container fluid class="homefone my-12" v-if="howToConnect">
    <v-card flat class="d-flex flex-wrap justify-center transparent">
      <v-card-text class="text-center" v-if="howToConnect.header">
        <h2>{{ howToConnect.header }}</h2>
      </v-card-text>
      <v-card-text v-if="howToConnect.text">
        <p v-html="howToConnect.text"></p>
      </v-card-text>
    </v-card>

    <v-container fluid class="mt-8 mb-12">
      <v-card flat class="transparent mx-auto" max-width="1200">
        <v-row align="center" justify="center">
          <v-col
              cols="12"
              md="4"
              v-for="(item, index) in howToConnect.items"
              :key="index"
          >
            <v-card
                  flat
                  class="transparent text-center mx-auto"
                  width="280"
            >
              <v-img
                    :src="item.icon"
                    max-width="248"
                    min-with="200"
                    class="icon-button mx-auto"
                    @click.stop="clickHandler(index)"
              />
              <v-card-text class="text-center">
                <h3 v-html="item.title.split('\n').join('<br>')"></h3>
              </v-card-text>
              <v-card-text max-width="600" class="mx-auto">
                <p v-html="item.text.split('\n').join('<br>')"></p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
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

.icon-button {
  cursor: pointer;
}

.submit-button {
  width: 420px;
  font-size: 16px;
}

@media screen and (max-width: 420px) {
  .submit-button {
    max-width: 280px!important;
    font-size: 14px!important;
  }
}
</style>

<script>

import { mapState } from 'vuex'

export default {
  name: 'HowToConnect',
  props: ['page', 'clicked'],
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
  },
  methods: {
    clickHandler (index) {
      this.$emit('update:clicked', index + 1)
    }
  }
}
</script>
