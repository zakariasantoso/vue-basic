import {SET_USER} from "../mutations";
const state = {
  authenticatedUser: {}
}
const getters = {
  getAuthenticatedUser:(state) => {
    return state.authenticatedUser;
  }
}
const mutations = {
  [SET_USER] (state, payload) {
    state.authenticatedUser = payload;
  }
}
const actions = {
  login({commit}, payload) {
    commit(SET_USER, payload)
  }
}
export default {
  state,
  getters,
  mutations,
  actions
}