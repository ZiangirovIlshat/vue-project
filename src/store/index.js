import { createStore } from 'vuex';
import posts from './modules/posts';
import issues from './modules/issues';

export default createStore({
  modules: {
    posts,
    issues,
  }
});
