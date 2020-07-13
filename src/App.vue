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
    ...mapActions('content', {
      getContent: 'GET_CONTENT'
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
