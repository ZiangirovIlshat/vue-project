const posts = {
  namespaced: true,
  state: {
    data: [],
    loading: false,
    error: "",
  },

  getters: {
    getRepoById: (state) => (id) => state.data.find((post) => post.id === id)
  },

  mutations: {
    SET_POSTS_DATA(state, payload) {
      state.data = payload.items.map(item => {
        item.following = {
          status: false,
          loading: false,
          error: "",
        }
        return item
      })
    },
    SET_POSTS_LOADING(state, payload) {
      state.loading = payload
    },
    SET_POSTS_ERROR(state, payload) {
      state.error = payload
    },

    SET_README_DATA(state, payload) {
      state.data = state.data.map( repo => {
        if(payload.id === repo.id) {
          repo.readme = payload.content
        }

        return repo;
      })
    },

    SET_FOLLOWING_DATA(state, payload) {
      state.data = state.data.map(item => {
        if(payload.id === item.id) {
          item.following = {
            ...item.following,
            ...payload.data
          }
        }
        return item
      })
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

        const response = await fetch(url.toString(), {
          headers: {
            Authorization: `token ${localStorage.getItem("token")}`
          }
        });
        const data = await response.json();

        commit("SET_POSTS_DATA", data);
      } catch {
        commit("SET_POSTS_DATA", []);
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
            Authorization: `token ${localStorage.getItem("token")}`
          },
        })

        const data = await response.text()

        commit("SET_README_DATA", { id, content: data })
      } catch (e){
        throw e
      }
    },

    async setStar({ commit, getters }, id) {
      const { name, owner } = getters.getRepoById(id)
      commit("SET_FOLLOWING_DATA", { id, data: { status: false, loading: true, error: "" } })

      try {
        await fetch(`https://api.github.com/user/starred/${owner.login}/${name}`, {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Length": "0"
          }
        });
        commit("SET_FOLLOWING_DATA", { id, data: { status: true } })
      } catch {
        commit("SET_FOLLOWING_DATA", { id, data: { error: "Не удалось выполнить действие" } })
      } finally {
        commit("SET_FOLLOWING_DATA", { id, data: { loading: false } })
      }
    },

    async removeStar({ commit, getters }, id) {
      const { name, owner } = getters.getRepoById(id)

      commit("SET_FOLLOWING_DATA", { id,data: { status: true, loading: true, error: "" } })

      try {
        await fetch(`https://api.github.com/user/starred/${owner.login}/${name}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Length": "0"
          }
        });
        commit("SET_FOLLOWING_DATA", { id, data: { status: false, } })
      } catch {
        commit("SET_FOLLOWING_DATA", { id, data: { error: "Не удалось выполнить действие", } })
      } finally {
        commit("SET_FOLLOWING_DATA", { id, data: { loading: false, } })
      }
    }
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