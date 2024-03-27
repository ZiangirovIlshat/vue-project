const repos = {
  namespaced: true,
  state: {
    data: null,
    loading: false,
    error: "",
  },

  mutations: {
    SET_REPOS_DATA(state, payload) {
      state.data = payload
    },
    SET_LOADING_DATA(state, payload) {
      state.loading = payload
    },
    SET_ERROR_DATA(state, payload) {
      state.error = payload
    },
  },
  
  actions: {
    async fetchRepos({ commit }) {
      commit("SET_REPOS_DATA", true);
      try {
        const response = await fetch("https://api.github.com/users/ZiangirovIlshat/repos", {
          headers: {
            Authorization: `token ${localStorage.getItem("token")}`
          }
        });
        const data = await response.json();
        commit("SET_REPOS_DATA", data);
      } catch(e){
        commit("SET_POSTS_ERROR", "<b>Ой! Что-то пошло не так... :(</b><br>Не удалось получить данные");
      } finally {
        commit("SET_LOADING_DATA", false);
      }
    },
  }
}

export default repos