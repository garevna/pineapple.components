<template>
  <v-app>
    <InternetPlans :page.sync="page" />
  </v-app>
</template>

<script>

import { mapState, mapActions } from 'vuex'

import 'pineapple-styles'

import InternetPlans from '@/components/InternetPlans.vue'

export default {
  name: 'App',
  components: {
    InternetPlans
  },
  computed: {
    ...mapState(['viewportWidth'])
  },
  data () {
    return {
      page: undefined
    }
  },
  watch: {
    page (val) {
      console.log('Page: ', val)
    }
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
