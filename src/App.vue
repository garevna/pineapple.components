<template>
  <v-app>
    <SystemBar />
    <!-- <v-main app tag="main"> -->
      <v-container fluid fill-height>
        <v-btn @click="popupOpened = true">Success</v-btn>
        <v-btn @click="popupErrorOpened = true">Error</v-btn>
        <v-btn @click="popupEmailDisabled = true">Email disabled</v-btn>
      </v-container>
      <UserContact :userForm="userForm" />
      <PopupError :opened.sync="popupErrorOpened" />
      <PopupEmailDisabled :opened.sync="popupEmailDisabled" />
      <Popup :opened.sync="popupOpened" />
    <!-- </v-main> -->
    <Footer />
  </v-app>
</template>

<script>

import { mapState, mapActions } from 'vuex'

import SystemBar from 'pineapple-system-bar'
import 'pineapple-system-bar/dist/pineapple-system-bar.css'
import Footer from 'pineapple-footer'
import 'pineapple-footer/dist/pineapple-footer.css'

import 'pineapple-footer/css/main.css'

import UserContact from './components/UserContact.vue'

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
    UserContact,
    Footer
  },

  data: () => ({
    ready: false,
    page: null,
    goto: null,
    popupOpened: false,
    popupErrorOpened: false,
    popupEmailDisabled: false
  }),
  computed: {
    ...mapState(['viewportWidth', 'pages', 'selectors']),
    ...mapState('content', ['browserTabTitle', 'footer']),
    ...mapState('page-1', ['userForm'])
  },
  methods: {
    ...mapActions('content', {
      getContent: 'GET_CONTENT'
    }),
    ...mapActions('testimonials', {
      getTestimonials: 'GET_CONTENT'
    }),
    ...mapActions('contact', {
      updateFields: 'SET_FIELDS_TO_SHOW'
    }),
    onResize () {
      this.$store.commit('CHANGE_VIEWPORT')
    }
  },
  beforeMount () {
    this.getContent()
      .then((response) => {
        document.title = this.browserTabTitle
        this.updateFields(this.userForm.fieldsToShow)
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
