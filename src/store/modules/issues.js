const issues = {
  namespaced: true,
  state: {
    data: {},
    loading: false,
    error: '',
  },

  getters: {
    getIssues: (state) => (postName) => {
      return state.data[postName]
    }
  },

  mutations: {
    SET_ISSUES_DATA(state, payload) {
      state.data[payload.params] = payload.data
    },
    SET_ISSUES_LOADING(state, payload) {
      state.loading = payload
    },
    SET_ISSUES_ERROR(state, payload) {
      state.error = payload
    }
  },

  actions: {
    async fetchIssues({ commit }, params) {
      commit("SET_ISSUES_LOADING", true)

      try {
        const response = await fetch(`https://api.github.com/repos/${params[0]}/${params[1]}/issues`)
        const data = await response.json()

        commit('SET_ISSUES_DATA', {data, params: params[1]})
      } catch (error) {
        commit("SET_ISSUES_ERROR", "<b>Не удалось получить вопросы к этому посту")
      } finally {
        commit("SET_ISSUES_LOADING", false)
      }
    },
  }
}

export default issues;