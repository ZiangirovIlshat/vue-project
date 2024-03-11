const posts = {
  namespaced: true,
  state: {
    data: null,
    loading: false,
    error: '',
  },

  getters: {
    getPosts(state) {
      return state.data
    }
  },

  mutations: {
    SET_POSTS_DATA(state, payload) {
      state.data = payload
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
        url.searchParams.set('order', "desc");
        url.searchParams.set('sort', "start");
        url.searchParams.set('q', "language:javascript created:>" + getOneWeekAgoDate());
        url.searchParams.set('per_page', 10);

        const response = await fetch(url.toString());
        const data = await response.json();

        commit('SET_POSTS_DATA', data);
      } catch (error) {
        commit("SET_POSTS_ERROR", "<b>Ой! Что-то пошло не так... :(</b><br>Не удалось получить данные");
      } finally {
        commit("SET_POSTS_LOADING", false);
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