<template>
  <v-app>
    <SystemBar />
    <MainNavBar :page.sync="page" v-if="ready" />

    <section id="top" class="section">
          <div class="base-title">
            <a href="#top" class="core-goto"></a>
            <v-card width="100%" height="600" class="mx-auto pa-10 text-center">
              <h2>TOP</h2>
            </v-card>
          </div>
        </section>

      <!-- </v-sheet> -->

      <!-- ============================= LIST ============================= -->

      <section id="list" class="section">
        <div class="base-title">
          <a href="#list" class="core-goto"></a>
          <v-card width="100%" height="600" class="mx-auto pa-10 text-center">
            <h2>LIST</h2>
          </v-card>
        </div>
      </section>

      <!-- ============================= CREEN SECTION ============================= -->
      <section id="dgtek" class="section">
        <div class="base-title">
          <a href="#dgtek" class="core-goto"></a>
          <v-card width="100%" height="600" class="mx-auto pa-10 text-center">
            <h2>GREEN SECTION</h2>
          </v-card>
        </div>
      </section>

      <!-- ============================= HOW TO CONNECT ============================= -->

      <section id="how-to-connect" class="section">
        <div class="base-title">
          <a href="#how-to-connect" class="core-goto"></a>
          <v-card width="100%" height="600" class="mx-auto pa-10 text-center">
            <h2>HOW TO CONNECT</h2>
          </v-card>
        </div>
      </section>

      <!-- ============================= TESTIMONIALS ============================= -->

      <section id="testimonials" class="section">
        <div class="base-title">
          <a href="#testimonials" class="core-goto"></a>
          <v-card width="100%" height="600" class="mx-auto pa-10 text-center">
            <h2>TESTIMONIALS</h2>
          </v-card>
        </div>
      </section>

      <!-- ============================= INTERNET PLANS ============================= -->
      <v-row width="100%" justify="center">
        <section id="plans" class="section">
          <div class="base-title">
            <a href="#plans" class="core-goto"></a>
            <v-card width="100%" height="600" class="mx-auto pa-10 text-center">
              <h2>INTERNET PLANS</h2>
            </v-card>
          </div>
        </section>
      </v-row>
      <!-- ============================= FAQ ============================= -->
      <v-row width="100%">
        <section id="faq" class="section">
          <div class="base-title">
            <a href="#faq" class="core-goto"></a>
            <v-card width="100%" height="600" class="mx-auto pa-10 text-center">
              <h2>FAQs</h2>
            </v-card>
          </div>
        </section>
      </v-row>
      <!-- ============================= FOOTER ============================= -->
      <section id="footer" class="homefone" style="width: 100%">
        <div class="base-title">
          <a href="#footer" class="core-goto"></a>
          <v-card width="100%">
            <Footer />
          </v-card>
        </div>
      </section>
  </v-app>
</template>

<style>
  .section {
    width: 100%;
    max-width: 1440px;
  }
</style>

<script>

import { mapState, mapActions } from 'vuex'

import 'pineapple-styles'

import 'pineapple-system-bar'
import 'pineapple-system-bar/dist/pineapple-system-bar.css'

import 'pineapple-footer'
import 'pineapple-footer/dist/pineapple-footer.css'

import MainNavBar from '@/components/MainNavBar.vue'

export default {
  name: 'App',
  components: {
    MainNavBar
  },
  computed: {
    ...mapState(['viewportWidth'])
  },
  data () {
    return {
      page: undefined,
      ready: false
    }
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
