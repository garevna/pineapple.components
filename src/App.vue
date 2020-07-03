<template>
  <v-app>
    <SystemBar />
    <!-- <v-main app tag="main"> -->
      <v-container fluid fill-height>
        <v-btn @click="popupOpened = true">Success</v-btn>
        <v-btn @click="popupErrorOpened = true">Error</v-btn>
        <v-btn @click="popupEmailDisabled = true">Email disabled</v-btn>
      </v-container>
      <PopupError :opened.sync="popupErrorOpened" />
      <PopupEmailDisabled :opened.sync="popupEmailDisabled" />
      <Popup :opened.sync="popupOpened" />
    <!-- </v-main> -->
    <Footer />
  </v-app>
</template>

<script>

import { mapState, mapActions } from 'vuex'

import '@/css/main.css'

import SystemBar from './components/SystemBar.vue'
import Footer from './components/Footer.vue'
import Popup from './components/Popup.vue'
import PopupError from './components/PopupError.vue'
import PopupEmailDisabled from './components/PopupEmailDisabled.vue'

export default {
  name: 'App',

  components: {
    SystemBar,
    Popup,
    PopupError,
    PopupEmailDisabled,
    Footer
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
    this.getContent()
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
