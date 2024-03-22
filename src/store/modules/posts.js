const posts = {
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
      state.data = payload.items
    },
    SET_README_DATA(state, payload) {
      state.data = state.data.map( repo => {
        if(payload.id === repo.id) {
          repo.readme = payload.content
        }

        return repo;
      })
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
    async fetchPosts({ commit }) {
      commit("SET_POSTS_LOADING", true);

      try {
        const url = new URL("https://api.github.com/search/repositories");
        url.searchParams.set("order", "desc");
        url.searchParams.set("sort", "start");
        url.searchParams.set("q", "language:javascript created:>" + getOneWeekAgoDate());
        url.searchParams.set("per_page", 10);

        const response = await fetch(url.toString());
        const data = await response.json();

        if(data.items === undefined) {
          commit("SET_POSTS_ERROR", "<b>Ой! Что-то пошло не так... :(</b><br>Не удалось получить данные");
          return
        }

        commit("SET_POSTS_DATA", data);
      } catch (error) {
        commit("SET_POSTS_ERROR", "<b>Ой! Что-то пошло не так... :(</b><br>Не удалось получить данные");
      } finally {
        commit("SET_POSTS_LOADING", false);
      }
    },

    async fetchReadme({ commit, getters }, { id, owner, name }) {
      const curRepo = getters.getRepoById(id)
      if(curRepo.readme !== undefined) return

      try {
        const response = await fetch(`https://api.github.com/repos/${owner}/${name}/readme`, {
          headers: {
            "accept" : "application/vnd.github.v3.html+json",
          },
        })

        const data = await response.text()

        commit("SET_README_DATA", { id, content: data })
      } catch (e){
        throw e
      }
    },

    async fetchIssues({ commit, getters }, { id, owner, name }) {
      const curRepo = getters.getRepoById(id)
      if(curRepo.issues !== undefined) return

      try {
        const response = await fetch(`https://api.github.com/repos/${owner}/${name}/issues`)
        const data = await response.json()

        commit("SET_ISSUES_DATA", { id, content: data })
      } catch (e){
        throw e
      }
    },
  }
}


function getOneWeekAgoDate() {
  const currentDate = new Date();
  const oneWeekAgo = new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000)

  const year = oneWeekAgo.getFullYear()
  const month = String(oneWeekAgo.getMonth() + 1).padStart(2, "0")
  const day = String(oneWeekAgo.getDate()).padStart(2, "0")

  const formattedDate = `${year}-${month}-${day}`

  return formattedDate
}

export default posts;