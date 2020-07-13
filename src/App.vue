<template>
  <v-app>
    <Testimonials :page.sync="page" v-if="ready" />
  </v-app>
</template>

<script>

import { mapActions } from 'vuex'

import 'pineapple-styles'

import Testimonials from './components/Testimonials.vue'

export default {
  name: 'App',

  components: {
    Testimonials
  },

  data () {
    return {
      ready: false,
      page: undefined
    }
  },

  watch: {
    page (val) {
      console.log(val)
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
