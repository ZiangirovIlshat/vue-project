import { createStore } from 'vuex';
import posts from './modules/posts';
import issues from './modules/issues';
import readme from './modules/readme';

export default createStore({
  modules: {
    posts,
    issues,
    readme,
  }
});
