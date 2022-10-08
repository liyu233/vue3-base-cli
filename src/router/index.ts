import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        title: "首页",
        /*transition:"animate__fadeInUp",*/
      },
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/login.vue"),
      meta: {
        title: "登录",
      },
    },
  ],
});

export default router;
