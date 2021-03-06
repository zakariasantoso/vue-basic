import Axios from "axios";

import { SET_USER } from "../mutations";

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
    Axios({
      url: "http://localhost:8080/api/user/authenticated",
      method: "POST",
      auth: {
        username: payload.email,
        password: payload.password
      }
    })
      .then((response) => {
        commit(SET_USER, response.data.data);
      })
      .catch(() => {
        const data = {
          email: payload.email,
          firstName: "John",
          lastName: "Doe"
        }
        commit(SET_USER, data);
        // console.log(payload)
      })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}