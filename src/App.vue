<template>
  <v-app>
    <v-container fluid fill-height class="homefone" v-if="ready" v-mutate="mutationHandler">
      <SystemBar />
      <FAQ />
      <Footer />
    </v-container>
  </v-app>
</template>

<script>

import { mapState, mapActions } from 'vuex'

import 'pineapple-styles'

/* SystemBar */
import 'pineapple-system-bar'
import 'pineapple-system-bar/dist/pineapple-system-bar.css'

/* MainNavBar */
import 'pineapple-main-nav-bar'
import 'pineapple-main-nav-bar/dist/pineapple-main-nav-bar.css'

/* HowToConnect */
import 'pineapple-how-to-connect'
import 'pineapple-how-to-connect/dist/pineapple-how-to-connect.css'

/* Testimonials */
import 'pineapple-testimonials'
import 'pineapple-testimonials/dist/pineapple-testimonials.css'

/* InternetPlans */
import 'pineapple-internet-plans'
import 'pineapple-internet-plans/dist/pineapple-internet-plans.css'

/* Popup */
import 'pineapple-popup'
import 'pineapple-popup/dist/pineapple-popup.css'

/* UserContact */
import 'pineapple-contact-form'
import 'pineapple-contact-form/dist/pineapple-contact-form.css'

/* Footer */
import 'pineapple-footer'
import 'pineapple-footer/dist/pineapple-footer.css'

import FAQ from '@/components/FAQ.vue'

export default {
  name: 'App',

  components: {
    FAQ
  },

  data: () => ({
    page: null,
    plans: false,
    ready: false,
    mainContentHeight: 0
  }),
  computed: {
    ...mapState(['viewportWidth', 'mailEndpoint', 'emailSubject', 'emailText', 'footerHeight']),
    ...mapState('content', ['userForm', 'top'])
  },
  watch: {
    page (val) {
      if (!val) return
      this.$vuetify.goTo(val, {
        duration: 500,
        offset: 20,
        easing: 'easeInOutCubic'
      })
      this.page = undefined
    },
    mainContentHeight (val) {
      document.body.style.height = val + this.footerHeight + 'px'
    },
    footerHeight (val) {
      document.body.style.height = this.mainContentHeight + val + 'px'
    }
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
    }
  },
  beforeMount () {
    this.getGeneralInfo()
    this.getPageContent(5)
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
