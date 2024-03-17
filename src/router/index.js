import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DataBinding from "../views/DataBinding.vue";
import DataBindingLoop from "../views/DataBindingLoop.vue";
import DataBindingIfShow from "../views/DataBindingIfShow.vue";
import EventBinding from "../views/EventBinding.vue";
import ComputedWatch from "../views/ComputedWatch.vue";
import DataBindingApi from "../views/DataBindingApi.vue";
import KakaoLogin from "../views/KakaoLogin.vue";
import LoginView from "../views/LoginView.vue";
import NaverLogin from "../views/NaverLogin.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/databinding",
    name: "dataBinding",
    component: DataBinding,
  },
  {
    path: "/databindingLoop",
    name: "dataBindingLoop",
    component: DataBindingLoop,
  },
  {
    path: "/databindingIfShow",
    name: "databindingIfShow",
    component: DataBindingIfShow,
  },
  {
    path: "/eventbinding",
    name: "eventbinding",
    component: EventBinding,
  },
  {
    path: "/computed",
    name: "computed",
    component: ComputedWatch,
  },
  {
    path: "/databindingApi",
    name: "databindingApi",
    component: DataBindingApi,
  },
  {
    path: "/kakaologin",
    name: "kakaologin",
    component: KakaoLogin,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/naverlogin",
    name: "naverlogin",
    component: NaverLogin,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
