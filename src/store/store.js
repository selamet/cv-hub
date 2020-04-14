import Vue from "vue";
import Vuex from "vuex";
import * as mutations from "./mutations";
import * as getters from "./getters";
import * as actions from "./actions";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    personalDetails: {
      name: '',
      surname: '',
      phoneNumber: '',
      email: '',
      address: '',
      city: '',
      birthday: null,
      placeOfBirth: '',
      drivingLicense: '',
      gender: null,
      maritalStatus: '',
      website: ''
    },
    birthdayValues: {
      day: null,
      year: null,
      month: null,
      months: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık']
    }

  },
  getters,
  mutations,
  actions,
  modules: {}
});
