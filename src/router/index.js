import Vue from "vue";
import VueRouter from "vue-router";
import VueLogin from "../components/Auth/VueLogin.vue";
import Home from "../components/VueHome.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/login",
    component: VueLogin,
    name: "login",
  },
];
const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
