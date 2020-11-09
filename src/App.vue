<template>
  <v-app>
    <v-container fluid fill-height>
      <v-btn text @click="success">Success</v-btn>
      <v-btn text @click="error">Error</v-btn>
      <v-btn text @click="disable">Disabled action</v-btn>
      <v-btn text @click="sample">Other message</v-btn>
    </v-container>
    <Popup
      :opened.sync="popupOpened"
      :type="popupType"
      :title="title"
      :text="text"
      :color="color"
    />
  </v-app>
</template>

<script>

import { mapState } from 'vuex'

import 'pineapple-styles'
import Popup from './components/Popup.vue'

export default {
  name: 'App',

  components: {
    Popup
  },

  data: () => ({
    popupOpened: false,
    popupType: '',
    title: '',
    text: '',
    color: ''
  }),
  computed: {
    ...mapState(['viewportWidth'])
  },
  methods: {
    success () {
      this.popupType = 'success'
      this.popupOpened = true
    },
    error () {
      this.popupType = 'error'
      this.popupOpened = true
    },
    disable () {
      this.popupType = 'disabled'
      this.popupOpened = true
    },
    sample () {
      this.popupType = ''
      this.title = 'Pineapple NET'
      this.text = 'Welcome, human! Welcome, human! Welcome, human! Welcome, human! Welcome, human! Welcome, human! Welcome, human! Welcome, human! Welcome, human! Welcome, human!'
      this.color = '#f50'
      this.popupOpened = true
    },
    onResize () {
      this.$store.commit('CHANGE_VIEWPORT')
    }
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
