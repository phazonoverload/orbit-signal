export const state = () => ({
  auth: JSON.parse(localStorage.getItem('auth')) || false,
  event: JSON.parse(localStorage.getItem('event')) || false,
})

export const mutations = {
  setAuthDetails(state, auth) {
    state.auth = auth
  },
  setEventDetails(state, event) {
    state.event = event
  },
}

export const actions = {
  setAuthDetails({ commit }, auth) {
    commit('setAuthDetails', auth)
    localStorage.setItem('auth', JSON.stringify(auth))
  },
  setEventDetails({ commit }, event) {
    commit('setEventDetails', event)
    localStorage.setItem('event', JSON.stringify(event))
  },
}
