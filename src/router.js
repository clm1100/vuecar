import Vue from "vue";
import Router from "vue-router";
import Home from "./pages/Home.vue";
import Car from "./pages/car/car.vue";
import Car2 from "./pages/car2/car.vue";
const About = () => import(/* webpackChunkName: "about" */ "./pages/About.vue")

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/car",
      name: "car",
      component: Car
    },
    {
      path: "/car2",
      name: "car2",
      component: Car2
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      component: About
    }
  ]
});
