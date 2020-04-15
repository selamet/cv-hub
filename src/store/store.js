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
    },
    personalHistory: {
      profile: {
        formShow: true,
        saveStatus: false,
        values: {
          content: '',
        }
      },
      educationData: {
        months: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık']
        ,
        formShow: true,
        isUpdate: {
          status: false,
          index: null
        },
        education: {
          agree: '',
          city: '',
          school: '',
          starter_date: {
            month: 'Month',
            year: 'Year'
          },
          end_date: {
            month: 'Month',
            year: 'Year'
          },
          content: '',
        },
        educationList: [],
      },
      experienceData: {
        months: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık']
        ,
        formShow: true,
        isUpdate: {
          status: false,
          index: null
        },
        experience: {
          jobTitle: '',
          city: '',
          employer: '',
          starter_date: {
            month: 'Month',
            year: 'Year'
          },
          end_date: {
            month: 'Month',
            year: 'Year'
          },
          content: '',
        },
        experienceList: [],
      },
      abilityData: {
        abilityLevel: ['Acemi', 'Başlangıç', 'Yetenekli', 'Deneyimli', 'Uzman'],
        formShow: true,
        abilityList: [],
        ability: {
          name: '',
          level: 'Seç'
        },
        isUpdate: {
          status: false,
          index: null
        }
      },
      languageData: {
        formShow: true,
        languageList: [],
        language: {
          name: '',
          level: 'Seç',
        },
        isUpdate: {
          status: false,
          index: null
        }
      },
      referenceData: {
        formShow: true,
        isUpdate: {
          status: false,
          index: null
        },
        reference: {
          company: '',
          person: '',
          telephone: '',
          email: '',

        },
        referenceList: [],
      },
      hobbyData: {
        formShow: true,
        hobbyList: [],
        hobby: {
          name: '',
        },
        isUpdate: {
          status: false,
          index: null
        }
      },
      courseData: {
        months: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık']
        ,
        formShow: true,
        isUpdate: {
          status: false,
          index: null
        },
        course: {
          name: '',
          institution: '',
          starter_date: {
            month: 'Month',
            year: 'Year'
          },
          end_date: {
            month: 'Month',
            year: 'Year'
          },
          content: '',
        },
        courseList: [],
      },
      achievementData: {
        formShow: true,
        achievementList: [],
        achievement: {
          content: '',
        },
        isUpdate: {
          status: false,
          index: null
        }
      },
      publicationData : {
        formShow: true,
        publicationList: [],
        publication: {
          content: '',
        },
        isUpdate: {
          status: false,
          index: null
        }
      }

    },

  },
  getters,
  mutations,
  actions,
  modules: {}
});
