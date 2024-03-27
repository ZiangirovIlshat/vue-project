const following = {
    namespaced: true,
    state: {
      data: [],
      loading: false,
      error: '',
    },
  
    mutations: {
      SET_FOLLOWING_DATA(state, payload) {
        state.data = payload
      },
      SET_FOLLOWING_LOADING(state, payload) {
        state.loading = payload
      },
      SET_FOLLOWING_ERROR(state, payload) {
        state.error = payload
      }
    },
    
    actions: {
      async fetchFollowing({ commit }) {
        commit("SET_FOLLOWING_LOADING", true);
        try {
          const response = await fetch("https://api.github.com/user/following", {
            headers: {
                Authorization: `token ${localStorage.getItem("token")}`
            }
          });
          const data = await response.json();
          commit("SET_FOLLOWING_DATA", data);
        } catch (error) {
          commit("SET_FOLLOWING_ERROR", "<b>Ой! Что-то пошло не так... :(</b><br>Не удалось получить данные");
        } finally {
          commit("SET_FOLLOWING_LOADING", false);
        }
      },

      async follow() {
        
      },

      async unFollow() {

      },
    }
  }
  
  export default following;