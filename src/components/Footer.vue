<template>
  <v-container
          fluid
          class="homefone"
          id="footer-container"
  >
    <v-row style="position: relative; bottom: 0">
      <FooterFone
          :height="figureHeight + 'px'"
          style="position: absolute; top: 0; left: 0; width: 100%"
      />
      <v-row align="start" justify="center" :style="{ position: 'absolute', top: top, left: '0', width: '100%' }">
        <FooterForm
              :emailEndpoint="emailEndpoint"
              :emailSubject="emailSubject"
              :emailText="emailText"
        />
      </v-row>

      <v-row
              :style="{ position: 'absolute', top: bottomContent, left: '0', width: '100%' }"
              v-if="viewportWidth >= 640"
      >
        <FooterBottomContent />
      </v-row>

      <v-row
              :style="{ position: 'absolute', top: bottomContentSmall, left: '0', width: '100%' }"
              v-if="viewportWidth < 640"
      >
        <FooterBottomContentSmall class="footer--bottom-content-small" />
      </v-row>
    </v-row>
  </v-container>
</template>

<script>

// import { VContainer, VRow } from 'vuetify/lib'

import { mapState } from 'vuex'

import FooterFone from './FooterFone.vue'
import FooterForm from './FooterForm.vue'
import FooterBottomContent from './BottomContent.vue'
import FooterBottomContentSmall from './BottomContentSmall.vue'

export default {
  name: 'Footer',
  components: {
    // VContainer,
    // VRow,
    FooterFone,
    FooterForm,
    FooterBottomContentSmall,
    FooterBottomContent
  },
  props: ['emailEndpoint', 'height'],
  data () {
    return {
      footerHeight: 0
    }
  },
  computed: {
    ...mapState(['viewportWidth', 'emailSubject', 'emailText']),

    top () {
      const top = this.viewportWidth < 360 ? 64
        : this.viewportWidth < 608 ? 140
          : this.viewportWidth < 900 ? 128
            : this.viewportWidth < 1440 ? 160
              : this.viewportWidth < 1904 ? 180 : 420
      return top + 'px'
    },

    bottomContent () {
      const top = this.viewportWidth <= 1440 ? 440
        : this.viewportWidth <= 1904 ? 480 : 680
      return top + 'px'
    },

    bottomContentSmall () {
      const top = this.viewportWidth < 430 ? 380 : 640
      return top + 'px'
    },

    figureHeight () {
      const height = this.viewportWidth < 430 ? 560
        : this.viewportWidth <= 1440 ? 860
          : this.viewportWidth <= 1904 ? 1060 : 1300
      this.$store.commit('UPDATE_FOOTER_HEIGHT', height)
      return height
    }
  }
}
</script>
