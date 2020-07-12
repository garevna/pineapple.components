/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */

const state = {}

const getters = {
  contentEndpoint: (state, getters, rootState) => `${rootState.host}/content/1`,
  testimonialsEndpoint: (state, getters, rootState) => `${rootState.host}/testimonials`
}

const mutations = {
  UPDATE_BUTTONS: (state) => {
    state.top.buttons = state.mainNavButtons
  },
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
  async GET_CONTENT ({ state, getters, commit, dispatch }) {
    const content = await (await fetch(getters.contentEndpoint)).json()
    content.userForm.fieldsToShow.push({
      placeholder: 'State*',
      type: 'state',
      required: true
    })
    content.userForm.fieldsToShow.push({
      placeholder: 'Postcode*',
      type: 'postcode',
      required: true
    })
    content.userForm.fieldsToShow.push({
      placeholder: 'Position',
      type: 'combo',
      available: ['first', 'second', 'third'],
      required: false
    })
    content.userForm.fieldsToShow.push({
      placeholder: 'Apt number',
      type: 'number',
      required: false
    })
    for (const field in content) {
      commit('SET_PROPERTY', {
        object: state,
        propertyName: field,
        value: content[field]
      }, { root: true })
    }
    return state.browserTabTitle
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
