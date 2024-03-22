const likedPosts = {
  namespaced: true,
  state: {
    data: [],
    loading: false,
    error: '',
  },

  getters: {
    getRepoById: (state) => (id) => state.data.find((post) => post.id === id)
  },

  mutations: {
    SET_POSTS_DATA(state, payload) {
      state.data = payload
    },
    SET_ISSUES_DATA(state, payload) {
      state.data = state.data.map( repo => {
        if(payload.id === repo.id) {
          repo.issues = payload.content
        }

        return repo;
      })
    },
    SET_POSTS_LOADING(state, payload) {
      state.loading = payload
    },
    SET_POSTS_ERROR(state, payload) {
      state.error = payload
    }
  },
  
  actions: {
    async fetchLikedPosts({ commit }) {
      try {
        const response = await fetch("https://api.github.com/user/starred", {
          headers: {
            Authorization: `token ${localStorage.getItem("token")}`
          }
        });
        const data = await response.json();

        if(data === undefined) {
          commit("SET_POSTS_ERROR", "<b>Ой! Что-то пошло не так... :(</b><br>Не удалось получить данные");
          return
        };

        commit("SET_POSTS_DATA", data);
      } catch (error) {
        commit("SET_POSTS_ERROR", "<b>Ой! Что-то пошло не так... :(</b><br>Не удалось получить данные");
      } finally {
        commit("SET_POSTS_LOADING", false);
      }
    },

    async fetchIssues({ commit, getters }, { id, owner, name }) {
      const curRepo = getters.getRepoById(id)
      if(curRepo.issues !== undefined) return

      try {
        const response = await fetch(`https://api.github.com/repos/${owner}/${name}/issues`, {
          headers: {
            Authorization: `token ${localStorage.getItem("token")}`
          }
        })
        const data = await response.json()

        commit("SET_ISSUES_DATA", { id, content: data })
      } catch (e){
        throw e
      }
    },
  }
}

export default likedPosts;