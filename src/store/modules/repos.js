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
    SET_REPOS_LOADING(state, payload) {
      state.loading = payload
    },
    SET_REPOS_ERROR(state, payload) {
      state.error = payload
    },
  },

  actions: {
    async fetchRepos({ commit }, userLogin) {
      commit("SET_REPOS_LOADING", true);
      try {
        const response = await fetch(`https://api.github.com/users/${userLogin}/repos`, {
          headers: {
            Authorization: `token ${localStorage.getItem("token")}`
          }
        });
        const data = await response.json();
        commit("SET_REPOS_DATA", data);
      } catch(e){
        commit("SET_REPOS_ERROR", "<b>Ой! Что-то пошло не так... :(</b><br>Не удалось получить данные");
      } finally {
        commit("SET_REPOS_LOADING", false);
      }
    },
  }
}

export default repos