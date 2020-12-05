import { createStore } from 'vuex'

export default createStore({
  state: {
    homeShow: false
  },
  mutations: {
    setHomeShow(state, value) {
      state.homeShow = value
    }
  },
  actions: {
  },
  modules: {
  }
})
