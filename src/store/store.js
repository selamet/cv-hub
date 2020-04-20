import Vue from "vue";
import Vuex from "vuex";
import * as mutations from "./mutations";
import * as getters from "./getters";
import * as actions from "./actions";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    personalDetails: {
      name: 'Selamet',
      surname: 'ŞAMLI',
      phoneNumber: '+905331968053',
      email: 'selametsamli@icloud.com',
      address: 'Şükrüpaşa Mahallesi Çaykur Lojmanları',
      city: 'Erzurum',
      birthday: '',
      placeOfBirth: 'Rize',
      drivingLicense: '1',
      gender: 'Erkek',
      maritalStatus: 'Bekar',
      website: 'selametsamli.github.io',
      image: '/src/assets/selo_reis.png'
    },
    birthdayValues: {
      day: 12,
      year: 1996,
      month: 'Mart',
      months: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık']
    },
    personalHistory: {
      profile: {
        formShow: true,
        saveStatus: false,
        values: {
          content: 'I am a fourth year student of Computer Engineering. I like learning new things and using them. I am a backend developer. I usually use Python, Django, Celery, Javascript, jQuery, Ajax, PostgreSQL, Docker like technologies. Also i am interested in C ++, Raspberry, Open Source Projects. I like improving myself and trying new things.',
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
        educationList: [{
          agree: 'Bilgisayar Mühendisliği',
          city: 'Erzurum',
          school: 'Ataturk University',
          starter_date: {
            month: 'Month',
            year: 'Year'
          },
          end_date: {
            month: 'Month',
            year: 'Year'
          },
          content: '',
        }],
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
        experienceList: [
          {
            jobTitle: 'Backend Developer',
            city: 'Erzurum',
            employer: 'GreatCode',
            starter_date: {
              month: 'Mart',
              year: 2019
            },
            end_date: {
              month: 'Mart',
              year: 2020
            },
            content: ' <ol><li>Selamet</li><li>ŞAMLI</li></ol>',
          }
        ],
      },
      abilityData: {
        abilityLevel: ['Acemi', 'Başlangıç', 'Yetenekli', 'Deneyimli', 'Uzman'],
        formShow: true,
        abilityList: [
          {
            name: 'Python',
            level: 1
          },
          {
            name: 'VueJs',
            level: 2
          }, {
            name: 'Javascript',
            level: 4
          },
        ],
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
        languageList: [{
          name: 'İngilizce',
          level: 2,
        }, {
          name: 'Türkçe',
          level: 1,
        },],
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
        referenceList: [{
          company: 'İlteris.ml',
          person: 'Ugur Yüce',
          telephone: '+905331968041',
          email: 'ugicim123@ilteris.ml',

        },],
      },
      hobbyData: {
        formShow: true,
        hobbyList: [{
          name: 'Balık Tutmak',
        }, {name: 'Loremcilik Oynamak'},],
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
        courseList: [{
          name: 'Django Rest Framework Eğitim Seti',
          institution: 'Udemy',
          starter_date: {
            month: 'gosterme',
            year: 'gosterme'
          },
          end_date: {
            month: 'gosterme',
            year: 'gosterme'
          },
          content: '30 lirama mal oldu!!!!!!!!! ',
        }, {
          name: 'Django A-Z | Sıfırdan Web Programlama',
          institution: 'Udemy',
          starter_date: {
            month: 'Mart',
            year: 2020
          },
          end_date: {
            month: 'Nisan',
            year: 2020
          },
          content: 'Bu da 30 lira ',
        }],
      },
      achievementData: {
        formShow: true,
        achievementList: [{
          content: 'Django girls Trabzon 2019 (Mentör)',
        }, {
          content: 'PyErzurum(Trainer,Speaker,Promoter)',
        },],
        achievement: {
          content: '',
        },
        isUpdate: {
          status: false,
          index: null
        }
      },
      publicationData: {
        formShow: true,
        publicationList: [{
          content: 'Lorem',
        }],
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
