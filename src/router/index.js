import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "main",
    component: () => import(/* webpackChunkName: "main" */ "../views/Main.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () => import(/* webpackChunkName: "login" */ "../views/auth/Login.vue")
  },
  {
    path: "/forgot-password",
    name: "forgot-password",
    component: () => import(/* webpackChunkName: "forgot-password" */ "../views/auth/ForgotPassword.vue")
  },
  {
    path: "/dashboard",
    component: () => import(/* webpackChunkName: "dashboard" */ "../views/Dashboard.vue"),
    children: [
      {
        path: "/",
        name: "dashboard.home",
        component: () => import(/* webpackChunkName: "dashboard.home" */ "../views/dashboard/Home.vue")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes
});

export default router;
