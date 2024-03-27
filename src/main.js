import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import vClickOutside from "./vClickOutside";

const app = createApp(App);

app.directive('click-outside', vClickOutside);

app.use(store).use(router).mount('#app');
