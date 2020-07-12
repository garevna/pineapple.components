<template>
  <v-app>
    <UserContact
        :userForm="userForm"
        :emailSubject="emailSubject"
        :emailText="emailText"
        :emailEndpoint="mailEndpoint"
    />
  </v-app>
</template>

<script>

import { mapState, mapActions } from 'vuex'

import 'pineapple-styles'
import 'pineapple-popup'

import UserContact from './components/UserContact.vue'

export default {
  name: 'App',

  components: {
    UserContact
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
    ...mapState(['viewportWidth']),
    ...mapState('content', ['userForm']),
    ...mapState('contact', ['emailSubject', 'emailText', 'mailEndpoint'])
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
