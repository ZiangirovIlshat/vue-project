const readme = {
    namespaced: true,
    state: {
      data: {},
      loading: {},
      error: {},
    },
  
    getters: {
      getPostsReadme: (state) => (postName) => {
        return state.data[postName]
      }
    },
  
    mutations: {
      SET_README_DATA(state, payload) {
        state.data[payload.params] = payload.data
      },
      SET_README_LOADING: (state, payload) => { 
        state.loading[payload.postName] = payload.loading
      },
      SET_README_ERROR(state, payload) {
        state.error = payload
      }
    },
  
    actions: {
      async fetchReadme({ commit }, params) {
        commit("SET_README_LOADING", { loading: true, postName: params[1] })
  
        try {
          const response = await fetch(`https://api.github.com/repos/${params[0]}/${params[1]}/readme`, {
            headers: {
              accept: 'application/vnd.github.v3.html+json'
            }
          })
          const data = await response.json()
  
          commit('SET_README_DATA', { data, params: params[1] })
        } catch {
          commit("SET_README_ERROR", { error: "<b>Не удалось получить данные :(", postName: params[1] })
        } finally {
          commit("SET_README_LOADING", { loading: false, postName: params[1] })
        }
      },
    }
  }
  
  export default readme;