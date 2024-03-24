import { createRouter, createWebHistory } from "vue-router"

import store from "../store/index";

import feeds from "../pages/feeds"
import stories from "../pages/stories"
import auth from "../pages/auth"


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
    path: "/auth",
    name: "auth",
    component: auth,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach( async (to, from, next)=> {
  if(to.name === "auth") {
    next();
    return;
  }

  try {
    await store.dispatch("user/fetchUser");
    next();
  } catch (e){
    console.log(e)
    next({name: "auth"});
  }
})

export default router
