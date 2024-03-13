const issues = {
  namespaced: true,
  state: {
    data: {},
    loading: {},
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
    SET_ISSUES_LOADING: (state, payload) => { 
      state.loading[payload.postName] = payload.loading
    },
    SET_ISSUES_ERROR(state, payload) {
      state.error = payload
    }
  },

  actions: {
    async fetchIssues({ commit }, params) {
      commit("SET_ISSUES_LOADING", { loading: true, postName: params[1] })

      try {
        const response = await fetch(`https://api.github.com/repos/${params[0]}/${params[1]}/issues`)
        const data = await response.json()

        commit('SET_ISSUES_DATA', {data, params: params[1]})
      } catch (error) {
        commit("SET_ISSUES_ERROR", "Не удалось получить вопросы к этому посту")
      } finally {
        commit("SET_ISSUES_LOADING", { loading: false, postName: params[1] })
      }
    },
  }
}

export default issues;