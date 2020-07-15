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
    ...mapState(['viewportWidth', 'emailSubject', 'emailText', 'mailEndpoint']),
    ...mapState('content', ['userForm'])
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
    this.getPageContent(1)
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
