import { createRouter, createWebHashHistory } from "vue-router";

import store from "../store/index";

import feeds from "../pages/feeds";
import stories from "../pages/stories";
import myProfile from "../pages/myProfile";
import auth from "../pages/auth";
import notFound from "../pages/notFound";

const routes = [
  {
    path: "/",
    alias: "/home",
    name: "home",
    component: feeds,
  },
  {
    path: "/stories/:initialSlide?",
    name: "stories",
    component: stories,
  },
  {
    path: "/myprofile/:page(repos|following)?",
    name: "myProfile",
    component: myProfile,
  },
  {
    path: "/auth",
    name: "auth",
    component: auth,
  },
  {
    path: "/:pathMatch(.*)*",
    component: notFound,
  },
];

const router = createRouter({
  history: createWebHashHistory(), // Изменили createWebHistory на createWebHashHistory здесь
  routes,
});

router.beforeEach(async (to, from, next) => {
  if (to.name === "auth") {
    next();
    return;
  }

  try {
    await store.dispatch("user/fetchUser");
    next();
  } catch (e) {
    next({ name: "auth" });
  }
});

export default router;