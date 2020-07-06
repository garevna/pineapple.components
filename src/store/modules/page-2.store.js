/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */

const state = {}

const getters = {
  contentEndpoint: (state, getters, rootState) => `${rootState.host}/content/2-2`,
  testimonialsEndpoint: (state, getters, rootState) => `${rootState.host}/testimonials`
}

const mutations = {
  UPDATE_ALL: (state, payload) => {
    for (const field in payload) {
      if (typeof payload[field] !== 'object') {
        state[field] = payload[field] || state[field]
      } else {
        if (Array.isArray(payload[field])) {
          state[field] = Object.assign([], payload[field])
        } else {
          state[field] = Object.assign({}, payload[field])
        }
      }
    }
  }
}

const actions = {
  async GET_CONTENT ({ getters, commit, dispatch }) {
    const content = await (await fetch(getters.contentEndpoint)).json()
    commit('UPDATE_PAGES', { pages: content.mainNavButtons, selectors: content.mainNavSectors }, { root: true })
    commit('contact/UPDATE_EMAIL_SUBJECT', content.emailSubject, { root: true })
    commit('contact/UPDATE_EMAIL_TEXT', content.emailText, { root: true })
    const browserTabTitle = content.browserTabTitle
    for (const field of ['mainNavButtons', 'mainNavSectors', 'browserTabTitle', 'emailSubject', 'emailText']) {
      delete content[field]
    }
    commit('UPDATE_ALL', content)
    await dispatch('contact/SET_FIELDS_TO_SHOW', content.userForm.fieldsToShow, { root: true })
    return browserTabTitle
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
