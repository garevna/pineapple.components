import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'

const emailValidator = require('email-validator')

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    host: 'https://api.pineapple.net.au',
    landhost: `${location.origin}${location.pathname}`,
    officeAddress: '75 Brighton Road, Elwood VIC 3184',
    officePhone: '1300 857 501',
    officeEmail: 'info@pineapple.net.au',
    officeABN: '55 618 934 437',
    linkedIn: 'https://www.linkedin.com/company/pineapplenet/',
    faceBook: 'https://www.facebook.com/PineappleNetAU/',
    contactEndpoint: '',
    viewportWidth: window.innerWidth,
    viewportHeight: window.innerHeight,
    plan: 'residential',
    fieldTypes: {
      text: 'input-with-validation',
      number: 'input-with-validation',
      email: 'input-with-validation',
      phone: 'phone-number',
      state: 'selector',
      postcode: 'input-with-validation',
      list: 'selector',
      combo: 'combobox',
      message: 'textarea'
    },
    validators: {
      text: val => val.length > 2,
      number: val => val.match(/^[0-9]*$/),
      email: emailValidator.validate,
      phone: null,
      state: null,
      postcode: val => Number(val) && Number(val) >= 3000 && Number(val) < 9999,
      list: null,
      combo: function (val) { return this.available.indexOf(val) !== -1 },
      message: val => val.length >= 5
    }
  },
  modules,

  mutations: {
    UPDATE_PAGES: (state, payload) => {
      state.pages = payload.pages
      state.selectors = payload.selectors
    },
    CHANGE_VIEWPORT: (state) => {
      console.log(state.viewportWidth, state.viewportHeight)
      state.viewportWidth = window.innerWidth
      state.viewportHeight = window.innerHeight
    },
    CHANGE_VIEWPORT_WIDTH: (state, width) => { state.viewportWidth = width },
    CHANGE_VIEWPORT_HEIGHT: (state, height) => { state.viewportHeight = height },

    CHANGE_PLAN: (state, plan) => { state.plan = plan },
    SET_PROPERTY: (state, payload) => {
      Vue.set(payload.object, payload.propertyName, payload.value)
    },
    DELETE_PROPERTY: (state, payload) => {
      Vue.delete(payload.object, payload.propertyName)
    }
  },
  actions: {
  }
})
