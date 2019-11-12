export default {
  namespaced: true,
  state: {
    isModalVisible: false
  },
  actions: {
    setModalVisibility ({ commit }, status) {
      commit('SET_MODAL_VISIBILITY', status)
    }
  },
  mutations: {
    SET_MODAL_VISIBILITY (state, payload) {
      state.isModalVisible = payload
    }
  }
}
