<template>
  <v-app>
    <SystemBar />
    <MainNavBar :page.sync="page" v-if="ready" />

    <section id="top" style="width: 100%">
          <div class="base-title">
            <a href="#top" class="core-goto"></a>
            <v-card width="100%" height="600" class="mx-auto pa-10 text-center">
              <h2>TOP</h2>
            </v-card>
          </div>
        </section>

      <!-- </v-sheet> -->

      <!-- ============================= LIST ============================= -->

      <section id="list" style="width: 100%">
        <div class="base-title">
          <a href="#list" class="core-goto"></a>
          <v-card width="100%" height="600" class="mx-auto pa-10 text-center">
            <h2>LIST</h2>
          </v-card>
        </div>
      </section>

      <!-- ============================= CREEN SECTION ============================= -->
      <section id="dgtek" style="width: 100%">
        <div class="base-title">
          <a href="#dgtek" class="core-goto"></a>
          <v-card width="100%" height="600" class="mx-auto pa-10 text-center">
            <h2>GREEN SECTION</h2>
          </v-card>
        </div>
      </section>

      <!-- ============================= HOW TO CONNECT ============================= -->

      <section id="how-to-connect" style="width: 100%">
        <div class="base-title">
          <a href="#how-to-connect" class="core-goto"></a>
          <v-card width="100%" height="600" class="mx-auto pa-10 text-center">
            <h2>HOW TO CONNECT</h2>
          </v-card>
        </div>
      </section>

      <!-- ============================= TESTIMONIALS ============================= -->

      <section id="testimonials" style="width: 100%">
        <div class="base-title">
          <a href="#testimonials" class="core-goto"></a>
          <v-card width="100%" height="600" class="mx-auto pa-10 text-center">
            <h2>TESTIMONIALS</h2>
          </v-card>
        </div>
      </section>

      <!-- ============================= INTERNET PLANS ============================= -->
      <v-row width="100%" justify="center">
        <section id="plans">
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
        <section id="faq" style="width: 100%">
          <div class="base-title">
            <a href="#faq" class="core-goto"></a>
            <v-card width="100%" height="600" class="mx-auto pa-10 text-center">
              <h2>FAQs</h2>
            </v-card>
          </div>
        </section>
      </v-row>
      <!-- ============================= FOOTER ============================= -->
      <section id="footer" class="homefone">
        <div class="base-title">
          <a href="#footer" class="core-goto"></a>
            <v-card width="100%" height="600" class="mx-auto pa-10 text-center">
              <h2>FOOTER</h2>
            </v-card>
        </div>
      </section>
  </v-app>
</template>

<script>

import { mapState, mapActions } from 'vuex'

import 'pineapple-styles'

import 'pineapple-system-bar'

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
