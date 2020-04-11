import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./components/create/Home"
import PersonalDetails from "./components/create/PersonalDetails"
import PersonalHistory from "./components/create/PersonalHistory"
import NotFound from "./components/notFound/NotFound"

Vue.use(VueRouter);

const routes = [
  {path: "/", component: Home},
  {path: "/personal-details", component: PersonalDetails},
  {path: "/personal-history", component: PersonalHistory},


  {path: "*", redirect: "/"}

];

export const router = new VueRouter({
  mode: "history",
  routes
});
