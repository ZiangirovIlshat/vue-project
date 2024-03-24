const user = {
  namespaced: true,
  state: {
    data: null,
  },

  mutations: {
    SET_USER_DATA(state, payload) {
      state.data = payload
    },
  },

  actions: {
    async fetchUser({ commit }) {
      try {
        const response = await fetch("https://api.github.com/user", {
          headers: {
            Authorization: `token ${localStorage.getItem("token")}`
          }
        });

        if(response.status === 401) throw new Error;

        const data = await response.json();
        commit("SET_USER_DATA", data);
      } catch(e){
        throw e
      }
    },
  }
}

export default user