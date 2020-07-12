/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */

const state = {
  mailEndpoint: 'https://api.pineapple.net.au/email/landing',
  emailSubject: 'Ultra-Fast Fibre To Your Home',
  emailText: 'Thank you for your interest in Pineapple NET! A member of our team will be in touch shortly.'
}

const getters = {
  pages: (state, getters, rootState) => rootState.pages.filter(item => item !== 'Contact Us'),
  selectors: (state, getters, rootState) => rootState.selectors.filter(item => item !== '#contact')
}

const mutations = {
  UPDATE_EMAIL_SUBJECT: (state, payload) => { state.emailSubject = payload },
  UPDATE_EMAIL_TEXT: (state, payload) => { state.emailText = payload }
}

const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
