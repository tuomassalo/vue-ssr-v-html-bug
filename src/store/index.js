import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default function createStore () {
  return new Vuex.Store({
    state: {
      loading: false,
      submitting: false,

      project: '',
      query: {},
      cookies: {},

      activeType: null,
      itemsPerPage: 20,
      items: {},
      users: {},
      lists: {
        top: [],
        new: [],
        show: [],
        ask: [],
        job: [],
      },
    },

    // actions,
    // mutations,
    // getters,
  })
}
