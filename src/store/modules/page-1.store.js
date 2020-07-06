/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */

const state = {}

const getters = {
  contentEndpoint: (state, getters, rootState) => `${rootState.host}/content/2-1`,
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
    for (const field in content) {
      console.log(field, content[field])
      commit('SET_PROPERTY', {
        object: state,
        propertyName: field,
        value: content[field]
      }, { root: true })
    }
    await dispatch('contact/SET_FIELDS_TO_SHOW', content.userForm.fieldsToShow, { root: true })
    return true
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
