<template>
<v-row justify="center">
  <v-dialog
        v-model="dialog"
        dark
        persistent
        max-width="300px"
  >
    <v-card class="deepgreen pa-4 pt-8">
      <v-row class="mx-auto">
        <v-col cols="12" class="mx-auto">
              <v-text-field
                    height="53"
                    class="input-field input-field-rounded transparent"
                    label="Name"
                    hide-details
                    outlined
                    dark
                    color="#fff"
                    v-model="__name"
                    :rules="[rules.required]"
              ></v-text-field>
        </v-col>
      </v-row>
      <v-row class="mx-auto">
        <v-col cols="12" class="mx-auto">
              <v-text-field
                    height="53"
                    class="input-field input-field-rounded transparent"
                    label="Email"
                    hide-details
                    outlined
                    dark
                    color="#fff"
                    v-model="__email"
                    :rules="[rules.required, rules.email]"
              ></v-text-field>
        </v-col>
      </v-row>
      <v-row class="mx-auto">
        <v-col cols="12" class="mx-auto">
              <v-text-field
                    height="53"
                    class="input-field input-field-rounded transparent"
                    label="Phone"
                    hide-details
                    outlined
                    dark
                    color="#fff"
                    v-model="__phone"
                    style="font-size: 16px"
                    background-color="transparent"
              ></v-text-field>
        </v-col>
      </v-row>
      <v-row class="mx-auto">
        <v-col cols="12" class="mx-auto">
              <v-btn
                  height="53"
                  class="mx-auto"
                  max-width="240"
                  min-width="240"
                  dense
                  hide-details
                  rounded
                  light
                  @click="submit"
                  style="color: #20731C"
              >Get started</v-btn>
        </v-col>
      </v-row>
      <Popup :opened.sync="popupOpened" :type="popupType" />
    </v-card>
  </v-dialog>
</v-row>
</template>

<style scoped>
* {
  color: #fff;
}

.input-field-rounded {
  border-radius: 48px!important;
}
.input-field {
  width: 280px;
}

.centered {
  text-align: center;
}

.white-text {
  color: #fff;
}
</style>

<script>

import { VDialog, VCard, VRow, VCol, VTextField, VBtn } from 'vuetify/lib'

import { mapState } from 'vuex'

export default {
  name: 'FooterFormSmall',
  components: {
    VDialog,
    VCard,
    VRow,
    VCol,
    VTextField,
    VBtn
  },
  props: ['dialog', 'name', 'email', 'phone', 'submitted'],
  data () {
    return {
      send: false,
      rules: {
        required: value => !!value || 'Required',
        email: () => this.validateEmail() ? true : 'Invalid email'
      },
      popupOpened: false,
      popupType: null
    }
  },
  computed: {
    ...mapState(['viewportWidth']),
    ...mapState('content', ['emailSubject', 'emailText']),
    __name: {
      get () {
        return this.name
      },
      set (val) {
        this.$emit('update:name', val)
      }
    },
    __email: {
      get () {
        return this.email
      },
      set (val) {
        this.$emit('update:email', val)
      }
    },
    __phone: {
      get () {
        return this.phone
      },
      set (val) {
        this.$emit('update:phone', val)
      }
    }
  },
  methods: {
    validateEmail () {
      return this.__email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    },
    initFields () {
      this.__name = ''
      this.__email = ''
      this.__phone = ''
      this.popupType = null
    },
    submit () {
      this.$emit('update:submitted', true)
      this.$emit('update:dialog', false)
    }
  }
}
</script>
