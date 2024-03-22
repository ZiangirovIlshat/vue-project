import { createRouter, createWebHistory } from "vue-router"

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
    const response = await fetch("https://api.github.com/user", {
      headers: {
        Authorization: `token ${localStorage.getItem("token")}`
      }
    });
    if(response.status === 401) throw new Error;
    next();
  } catch {
    next({name: "auth"});
  }
})

export default router
