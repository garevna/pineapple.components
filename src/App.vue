<template>
  <v-app>
    <SystemBar />
    <HowToConnect :page.sync="page" />
    <Footer />
  </v-app>
</template>

<script>

import { mapState, mapActions } from 'vuex'

import 'pineapple-styles'

/* SystemBar */
import 'pineapple-system-bar'
import 'pineapple-system-bar/dist/pineapple-system-bar.css'

/* Popup */
import 'pineapple-popup'
import 'pineapple-popup/dist/pineapple-popup.css'

/* Footer */
import 'pineapple-footer'
import 'pineapple-footer/dist/pineapple-footer.css'

import HowToConnect from '@/components/HowToConnect.vue'

export default {
  name: 'App',

  components: {
    HowToConnect
  },

  data: () => ({
    popupOpened: false,
    popupErrorOpened: false,
    popupEmailDisabled: false
  }),
  computed: {
    ...mapState(['viewportWidth', 'pages', 'selectors']),
    ...mapState('content', ['browserTabTitle', 'footer'])
  },
  methods: {
    ...mapActions('content', {
      getContent: 'GET_CONTENT'
    }),
    ...mapActions('testimonials', {
      getTestimonials: 'GET_CONTENT'
    }),
    onResize () {
      this.$store.commit('CHANGE_VIEWPORT')
    }
  },
  beforeMount () {
    this.getContent(5)
      .then((response) => {
        document.title = this.browserTabTitle
        this.ready = true
      })
    this.getTestimonials()
  },
  mounted () {
    this.onResize()
    window.addEventListener('resize', this.onResize, { passive: true })
  },
  beforeDestroy () {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.onResize, { passive: true })
    }
  }
}
</script>
