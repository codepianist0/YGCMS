import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/main"
    },
    {
      path: "/:pathMatch(.*)*",
      component: () => import("@/views/not-fount/not-fount.vue")
    },
    {
      path: "/main",
      component: () => import("@/views/mian/Main.vue")
    },
    {
      path: "/login",
      component: () => import("@/views/login/Login.vue")
    }
  ]
})

export default router
