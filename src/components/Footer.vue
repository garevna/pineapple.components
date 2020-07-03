<template>
  <v-container fluid fill-height class="homefone" >
    <v-row style="position: relative; bottom: 0">
      <FooterFone :footerHeight="footerHeight" style="position: absolute; top: 0; left: 0; width: 100%" />
      <v-row align="start" justify="center" style="position: absolute; top: 8%; left: 0; width: 100%">
        <FooterForm />
      </v-row>
      <v-row style="position: absolute; top: 500px; left: 0; width: 100%" v-if="viewportWidth >= 600">
        <FooterBottomContent />
      </v-row>
      <v-row style="position: absolute; bottom: -850px; left: 0; width: 100%" v-if="viewportWidth < 600 && viewportWidth >= 420">
        <FooterBottomContentSmall class="footer--bottom-content-small"/>
      </v-row>
      <v-row style="position: absolute; bottom: -550px; left: 0; width: 100%" v-if="viewportWidth < 420">
        <FooterBottomContentSmall class="footer--bottom-content-small"/>
      </v-row>
    </v-row>
  </v-container>
</template>

<style scoped>

.footer--bottom-content-small {
  position: absolute;
  bottom: 40px;
  left: 0;
}

</style>

<script>

import { VContainer, VRow } from 'vuetify/lib'

import { mapState } from 'vuex'

import FooterFone from './FooterFone.vue'
import FooterForm from './FooterForm.vue'
import FooterBottomContent from './BottomContent.vue'
import FooterBottomContentSmall from './BottomContentSmall.vue'

export default {
  name: 'Footer',
  components: {
    VContainer,
    VRow,
    FooterFone,
    FooterForm,
    FooterBottomContentSmall,
    FooterBottomContent
  },
  props: ['page'],
  computed: {
    ...mapState(['viewportWidth']),
    topContentFont () {
      return this.viewportWidth < 420 ? '80px' : this.viewportWidth > 1904 ? '288px' : '198px'
    },
    footerHeight () {
      return this.viewportWidth < 420 ? 680 : this.viewportWidth > 1904 ? 980 : 860
    }
  },
  watch: {
    viewportWidth (val) {
      console.log('viewportWidth: ', val)
    }
  }
}
</script>
