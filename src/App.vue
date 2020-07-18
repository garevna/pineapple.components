<template>
  <v-app class="homefone">
    <v-container fluid fill-height class="homefone" v-if="ready" v-mutate="mutationHandler">
      <SystemBar />
      <MainNavBar :page.sync="page" />
      <v-row scrolling="no">
        <v-card
          width="100%"
          max-width="1440"
          color="homefone"
          tile
          flat
          class="mx-auto"
        >
          <section id="top" class="section">
            <div class="base-title">
              <a href="#top" class="core-goto"></a>
              <Top :page.sync="page" />
            </div>
          </section>
        </v-card>
      </v-row>

      <!-- ============================= USER CONTACT ============================= -->
      <v-row>
        <v-card
            width="100%"
            max-width="1440"
            color="homefone"
            flat
            tile
            class="mx-auto"
        >
          <v-row align="center">
            <v-col cols="12" md="6" class="aside-col">
              <section id="benefits" class="section">
                <div class="base-title">
                  <a href="#benefits" class="core-goto"></a>
                  <Aside />
                </div>
              </section>
            </v-col>

            <v-col cols="12" md="6" class="mx-0 px-0">
              <section id="contact" class="section">
                <div class="base-title">
                  <a href="#contact" class="core-goto"></a>
                  <UserContact
                          :userForm.sync="userForm"
                          :emailSubject="emailSubject"
                          :emailText="emailText"
                          :emailEndpoint="mailEndpoint"
                          v-if="userForm && userForm.fieldsToShow"
                  />
                </div>
              </section>
            </v-col>
          </v-row>
        </v-card>
      </v-row>

      <!-- ============================= HOW TO CONNECT ============================= -->
      <v-row width="100%" justify="center">
        <section id="how-to-connect" class="section">
          <div class="base-title">
            <a href="#how-to-connect" class="core-goto"></a>
            <HowToConnect :page.sync="page" />
          </div>
        </section>
      </v-row>

      <!-- ============================= INTERNET PLANS ============================= -->
      <v-row width="100%" justify="center">
        <section id="plans" class="section">
          <div class="base-title">
            <a href="#plans" class="core-goto"></a>
            <InternetPlans :page.sync="page" v-if="ready" />
          </div>
        </section>
      </v-row>

      <!-- ============================= TESTIMONIALS ============================= -->
      <v-row width="100%" justify="center">
        <section id="testimonials" class="section">
          <div class="base-title">
            <a href="#testimonials" class="core-goto"></a>
            <Testimonials :page.sync="page"/>
          </div>
        </section>
      </v-row>

      <!-- ============================= FAQ ============================= -->
      <v-row width="100%" justify="center">
        <section id="faq" class="section">
          <div class="base-title">
            <a href="#faq" class="core-goto"></a>
            <FAQ :page.sync="page"/>
          </div>
        </section>
      </v-row>
      
      <!-- ============================= FOOTER ============================= -->
      <v-row width="100%">
        <section id="footer" style="width: 100%">
          <div class="base-title">
            <a href="#footer" class="core-goto"></a>
            <Footer :page.sync="page" v-mutate="footerMutationHandler" />
          </div>
        </section>
      </v-row>
    </v-container>
  </v-app>
</template>

<style>
  .section {
    width: 100%;
    max-width: 1440px;
  }
  body {
    overflow: hidden;
  }
</style>

<script>

import { mapState, mapActions } from 'vuex'

import 'pineapple-styles'

/* SystemBar */
import 'pineapple-system-bar'
import 'pineapple-system-bar/dist/pineapple-system-bar.css'

/* MainNavBar */
import 'pineapple-main-nav-bar'
import 'pineapple-main-nav-bar/dist/pineapple-main-nav-bar.css'

/* HowToConnect */
import 'pineapple-how-to-connect'
import 'pineapple-how-to-connect/dist/pineapple-how-to-connect.css'

/* Testimonials */
import 'pineapple-testimonials'
import 'pineapple-testimonials/dist/pineapple-testimonials.css'

/* InternetPlans */
import 'pineapple-internet-plans'
import 'pineapple-internet-plans/dist/pineapple-internet-plans.css'

/* Popup */
import 'pineapple-popup'
import 'pineapple-popup/dist/pineapple-popup.css'

/* UserContact */
import 'pineapple-contact-form'
import 'pineapple-contact-form/dist/pineapple-contact-form.css'

/* FAQ */
import 'pineapple-faq'
import 'pineapple-faq/dist/pineapple-faq.css'

/* Footer */
import 'pineapple-footer'
import 'pineapple-footer/dist/pineapple-footer.css'

import Top from '@/components/Top.vue'
import Aside from '@/components/Aside.vue'

export default {
  name: 'App',
  components: {
    Top,
    Aside
  },
  data () {
    return {
      page: null,
      plans: false,
      ready: false
    }
  },
  computed: {
    ...mapState(['viewportWidth', 'mailEndpoint', 'emailSubject', 'emailText', 'mainContentHeight', 'footerHeight']),
    ...mapState('content', ['userForm', 'top'])
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
    mutationHandler (mutations) {
      this.$store.commit('UPDATE_MAIN_CONTENT_HEIGHT', this.$el.offsetHeight)
      document.body.style.height = this.mainContentHeight + this.footerHeight - 36 + 'px'
    },
    footerMutationHandler (mutations) {
      this.$store.commit('UPDATE_FOOTER_HEIGHT', document.querySelector('.footer').offsetHeight)
      document.body.style.height = this.mainContentHeight + this.footerHeight - 36 + 'px'
    },
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
