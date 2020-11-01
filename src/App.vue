<template>
  <v-app>
    <v-container fluid fill-height class="homefone" v-if="ready">
      <FAQ />
    </v-container>
  </v-app>
</template>

<script>

import { mapState, mapActions } from 'vuex'

import 'pineapple-styles'

import FAQ from '@/components/FAQ.vue'

export default {
  name: 'App',

  components: {
    FAQ
  },

  data: () => ({
    page: null,
    ready: false
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
    this.getPageContent(2)
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
