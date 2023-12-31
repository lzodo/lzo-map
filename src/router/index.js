import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/home.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
