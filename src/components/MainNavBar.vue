<template>
<v-container fluid class="main-nav-bar-container">
  <!-- Viewport width less then lg -->
  <v-expansion-panels
          tile
          flat
          v-model="panel"
          class="app-bar app-bar--short d-lg-none"
          width="100%"
          style=""
  >
    <v-expansion-panel style="background: #FAFAFA">
      <v-expansion-panel-header
                    expand-icon="none"
                    hide-actions
                    height="70"
          >
            <div></div>
            <v-spacer></v-spacer>
            <figure class="burger-menu">
              <span :class="burgerMenuClassFirst"></span>
              <span :class="burgerMenuClassSecond"></span>
            </figure>
      </v-expansion-panel-header>
      <v-expansion-panel-content color="#FAFAFA">
            <v-list flat class="main-menu-content text-center">
              <v-list-item
                  v-for="(button, index) in mainNavButtons"
                  :key="button"
                  @click="$emit('update:page', mainNavSectors[index]); panel=false"
              >
                <v-list-item-title class="main-menu-items">{{ button }}</v-list-item-title>
              </v-list-item>
            </v-list>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>

  <!-- Viewport width wider or equal lg -->
  <v-app-bar
          app
          fixed
          height="80"
          flat
          class="homefone d-none d-lg-block"
  >
    <v-row align="center" justify="end">
      <v-btn-toggle
              group
              flat
              class="mr-10 d-none d-lg-flex"
              color="transparent"
              v-model="toggle"
      >
        <v-btn text
               v-for="(button, index) in mainNavButtons"
               :key="button"
               :class="getClassName(button)"
               @click="$emit('update:page', mainNavSectors[index]); panel=false">
              {{ button }}
        </v-btn>
      </v-btn-toggle>
    </v-row>
  </v-app-bar>
  <logo class="main-menu-logo" />
</v-container>
</template>

<style scoped>
.v-btn-toggle > .v-btn.v-btn--active {
  color: #72BF44!important;
}
.main-menu-logo {
  position: fixed;
  top: 60px;
  left: 24px;
  width: 110px;
  height: 35px;
  z-index: 11;
}
.app-bar {
  position: fixed;
  top: 0;
  left: 0;
  margin-top: 40px;
  z-index: 10;
}
.app-bar-icon {
  display: inline-block;
  width: 10px;
  height: 10px;
}
.app-bar-menu {
  font-size: 13px;
  line-height: 24px;
  text-transform: none!important;
  font-style: normal;
  font-weight: 500;
  color: #000;
}
.app-bar-menu-bordered {
  border: solid 2px #51AD30!important;
  border-radius: 100px!important;
}
.burger-menu {
  position: relative;
  height: 48px;
  min-width: 48px!important;
  max-width: 64px!important;
  top: 24px!important;
  left: 16px!important;
}
.burger-menu--first, .burger-menu--second,
.burger-menu-active--first, .burger-menu-active--second {
  position: absolute;
  height:3px;
  background: #20731C;
  left: 0;
  transition: all 0.5s;
}
.burger-menu--first {
  width: 32px;
  top: -8px;
}
.burger-menu--second {
  width: 16px;
  top: 2px;
}
.burger-menu-active--first {
  top: 0;
  width: 32px;
  transform: rotate(-45deg);
}
.burger-menu-active--second {
  top: 0;
  width: 32px;
  transform: rotate(45deg);
}
.main-menu-content {
  background: #FAFAFA!important;
}
.main-menu-items {
  font-size: 18px;
  line-height: 40px;
}
</style>

<script>

// import { VContainer, VExpansionPanels, VExpansionPanel, VExpansionPanelHeader, VExpansionPanelContent, VAppBar, VRow, VBtnToggle, VBtn } from 'vuetify/lib'
import logo from '@/components/logo.vue'

import { mapState } from 'vuex'

export default {
  name: 'AppHeader',
  components: {
    // VContainer,
    // VExpansionPanels,
    // VExpansionPanel,
    // VExpansionPanelHeader,
    // VExpansionPanelContent,
    // VAppBar,
    // VRow,
    // VBtnToggle,
    // VBtn,
    logo
  },
  props: ['page'],
  data () {
    return {
      toggle: 0,
      panel: undefined
    }
  },
  computed: {
    ...mapState('content', ['mainNavButtons', 'mainNavSectors']),
    burgerMenuClassFirst () {
      return this.panel === 0 ? 'burger-menu-active--first' : 'burger-menu--first'
    },
    burgerMenuClassSecond () {
      return this.panel === 0 ? 'burger-menu-active--second' : 'burger-menu--second'
    }
  },
  methods: {
    getClassName (pageName) {
      const className = pageName === 'Contact Us' ? ' app-bar-menu-bordered py-2 px-12' : ''
      return `app-bar-menu${className}`
    }
  }
}
</script>
