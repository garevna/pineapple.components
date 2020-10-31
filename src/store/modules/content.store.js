const state = {
  mainNavButtons: [],
  mainNavSectors: []
}

const getters = {
  contentEndpoint: (state, getters, rootState) => rootState.contentEndpoint
}

const mutations = {
  UPDATE_NAV_BUTTONS: (state, payload) => {
    state.mainNavButtons = Object.assign([], payload.mainNavButtons)
    state.mainNavSectors = Object.assign([], payload.mainNavSectors)
  }
}

const actions = {
  async GET_PAGE_CONTENT (context, route) {
    const content = await (await fetch(`${context.getters.contentEndpoint}/${route}`)).json()
    const { mainNavButtons, mainNavSectors, browserTabTitle, emailSubject, emailText, ...rest } = content
    context.commit('UPDATE_NAV_BUTTONS', { mainNavButtons, mainNavSectors })
    if (emailSubject) context.commit('UPDATE_EMAIL_SUBJECT', emailSubject, { root: true })
    if (emailText) context.commit('UPDATE_EMAIL_TEXT', emailText, { root: true })

    for (const prop in rest) {
      if (!rest[prop]) continue
      if (Object.keys(rest[prop]).length === 0) continue
      context.commit('SET_PROPERTY', {
        object: state,
        propertyName: prop,
        value: rest[prop]
      }, { root: true })
    }

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
