import { createStore } from 'vuex';

import posts from './modules/posts';
import likedPosts from './modules/likedPosts';
import user from './modules/user';

export default createStore({
  getters: {
    getUnstarredOnly(state) {
      return state.posts.data.filter((post)=> {
        return !state.likedPosts.data.some(likedPosts => {
          return post.id === likedPosts.id
        })
      })
    }
  },
  modules: {
    posts,
    likedPosts,
    user,
  }
});