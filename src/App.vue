<template>
  <v-app>
    <Footer :emailEndpoint="mailEndpoint" />
  </v-app>
</template>

<style>
  .section {
    width: 100%;
    max-width: 1440px;
  }
  body {
    overflow: hidden;
  }
</style>

<script>

import { mapState, mapActions } from 'vuex'

import 'pineapple-styles'
import 'pineapple-popup'
import 'pineapple-popup/dist/pineapple-popup.css'

import Footer from './components/Footer.vue'

export default {
  name: 'App',

  components: {
    Footer
  },

  data: () => ({
    //
  }),
  computed: {
    ...mapState(['viewportWidth', 'mailEndpoint', 'emailSubject', 'emailText']),
    ...mapState('content', ['browserTabTitle', 'footer'])
  },
  methods: {
    ...mapActions({
      getGeneralInfo: 'GET_GENERAL_INFO'
    }),
    ...mapActions('content', {
      getPageContent: 'GET_PAGE_CONTENT'
    }),
    onResize () {
      this.$store.commit('CHANGE_VIEWPORT')
    }
  },
  beforeMount () {
    this.getGeneralInfo()
    this.getPageContent(3)
      .then((response) => {
        document.title = response
        this.ready = true
      })
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
