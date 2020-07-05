<template>
  <v-card flat class="transparent footer--top-content" :style="{ top: topContentTop }" v-if="footer">
    <v-card-text class="text-center">
      <h2 class="white-text centered">{{ footer.topHead }}</h2>
      <h5 class="white-text centered mt-8">
          {{ footer.topText }}
      </h5>
    </v-card-text>
    <v-row class="mx-auto">
      <v-col cols="12" class="mx-auto">
        <v-row align="center" justify="center">
          <v-card flat class="transparent mx-1 my-1" v-if="viewportWidth > 420">
            <v-text-field
                  height="53"
                  class="input-field input-field-rounded transparent"
                  label="Name"
                  hide-details
                  outlined
                  dark
                  color="#fff"
                  v-model="name"
                  :rules="[rules.required]"
            ></v-text-field>
          </v-card>
          <v-card flat class="transparent mx-1 my-1" v-if="viewportWidth > 420">
            <v-text-field
                  height="53"
                  class="input-field input-field-rounded transparent"
                  label="Email"
                  hide-details
                  outlined
                  dark
                  color="#fff"
                  v-model="email"
                  :rules="[rules.required, rules.email]"
            ></v-text-field>
          </v-card>
          <v-card flat class="transparent mx-1 my-1" v-if="viewportWidth > 420">
            <v-text-field
                  height="53"
                  class="input-field input-field-rounded transparent"
                  label="Phone"
                  hide-details
                  outlined
                  dark
                  color="#fff"
                  v-model="phone"
                  style="font-size: 16px"
                  background-color="transparent"
            ></v-text-field>
          </v-card>
          <v-card flat class="transparent mx-1 my-0">
            <v-btn
                height="53"
                max-width="280"
                min-width="280"
                label="Phone"
                dense
                hide-details
                rounded
                light
                @click="submit"
                style="color: #20731C"
            >Get started</v-btn>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
    <Popup :opened.sync="popupOpened" :type="popupType" />
  </v-card>
</template>

<style scoped>
* {
  color: #fff;
}
.footer--top-content {
  position: absolute;
  width: 100%;
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

import { VCard, VCardText, VRow, VCol, VTextField, VBtn } from 'vuetify/lib'

import { mapState, mapActions } from 'vuex'

const emailValidator = require('email-validator')

export default {
  name: 'FooterForm',
  components: {
    VCard,
    VCardText,
    VRow,
    VCol,
    VTextField,
    VBtn
  },
  data () {
    return {
      name: '',
      email: '',
      phone: '',
      send: false,
      rules: {
        required: value => !!value || 'Required',
        email: () => emailValidator.validate(this.email) ? true : 'Invalid email'
      },
      popupOpened: false,
      popupType: null
    }
  },
  computed: {
    ...mapState(['viewportWidth']),
    ...mapState('content', ['footer', 'emailSubject', 'emailText']),
    topContentTop () {
      return this.viewportWidth < 420 ? '80px' : this.viewportWidth > 1904 ? '288px' : '198px'
    }
  },
  methods: {
    ...mapActions('contact', { sendEmail: 'SEND_SIMPLE_EMAIL' }),
    initFields () {
      this.name = ''
      this.email = ''
      this.phone = ''
      this.popupType = null
    },
    submit () {
      if (location.host === 'garevna.github.io' || location.port) {
        this.popupType = 'disabled'
        this.popupOpened = true
        return
      }
      this.progress = true
      if (!this.name || !this.phone || !emailValidator.validate(this.email)) {
        this.popupType = 'error'
        this.popupOpened = true
        return
      }
      this.popupType = 'success'
      this.popupOpened = true
      this.sendEmail({
        subject: this.emailSubject,
        email: this.email,
        message: `
          <p>${this.emailText}</p>
          <fieldset>
            <legend>Details</legend>
            <h3>Name: ${this.name}</h3>
            <h4>Email: ${this.email}</h4>
            <h4>Phone: ${this.phone}</h4>
          </fieldset>
          <p><b>Get started!</b></p>
        `
      })
      this.initFields()
    }
  }
}
</script>
