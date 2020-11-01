<template>
  <v-app v-mutate="mutationHandler">
    <v-card class="mx-auto my-5 pa-auto" min-width="300" max-width="900" width="80%" height="300"><h1>1</h1></v-card>
    <v-card class="mx-auto my-5 pa-auto" min-width="300" max-width="900" width="80%" height="300"><h1>2</h1></v-card>
    <v-card class="mx-auto my-5 pa-auto" min-width="300" max-width="900" width="80%" height="300"><h1>3</h1></v-card>
    <v-card class="mx-auto my-5 pa-auto" min-width="300" max-width="900" width="80%" height="300"><h1>4</h1></v-card>
    <Footer
            :emailEndpoint="mailEndpoint"
            style="position: absolute; bottom: 0"
    />
  </v-app>
</template>

<style>

body {
  overflow-y: hidden !important;
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
  data () {
    return {
      mainContentHeight: 0
    }
  },
  computed: {
    ...mapState(['viewportWidth', 'browserTabTitle', 'mailEndpoint', 'emailSubject', 'emailText', 'footerHeight']),
    ...mapState('content', ['footer'])
  },
  methods: {
    ...mapActions({
      getGeneralInfo: 'GET_GENERAL_INFO'
    }),
    ...mapActions('content', {
      getPageContent: 'GET_PAGE_CONTENT'
    }),
    mutationHandler (mutations) {
      this.mainContentHeight = this.$el.offsetHeight
    },
    onResize () {
      this.$store.commit('CHANGE_VIEWPORT')
      document.body.style.height = this.mainContentHeight + this.footerHeight + 'px'
    },
    async getData () {
      this.getGeneralInfo()
      this.getPageContent(2)
        .then((response) => {
          document.title = response
          this.ready = true
        })
    }
  },
  watch: {
    mainContentHeight (val) {
      document.body.style.height = val + this.footerHeight + 'px'
    },
    footerHeight (val) {
      document.body.style.height = this.mainContentHeight + val + 'px'
    }
  },
  mounted () {
    this.onResize()
    window.addEventListener('resize', this.onResize, { passive: true })
    this.getData()
  },
  beforeDestroy () {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.onResize, { passive: true })
    }
  }
}
</script>
