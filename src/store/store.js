import Vue from "vue";
import Vuex from "vuex";
import * as mutations from "./mutations";
import * as getters from "./getters";
import * as actions from "./actions";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    personalDetails: {
      name : ''
    }
  },
  getters,
  mutations,
  actions,
  modules: {}
});
