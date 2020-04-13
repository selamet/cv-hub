import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./components/create/Home"
import PersonalDetails from "./components/create/PersonalDetails"
import PersonalHistory from "./components/create/PersonalHistory"
import CreateCV from "./components/create/CreateCV"

Vue.use(VueRouter);

const routes = [
  {path: "/", component: Home},
  {path: "/personal-details", component: PersonalDetails},
  {path: "/personal-history", component: PersonalHistory},
  {path: "/create-cv", component: CreateCV},


  {path: "*", redirect: "/"}

];

export const router = new VueRouter({
  mode: "history",
  routes
});
