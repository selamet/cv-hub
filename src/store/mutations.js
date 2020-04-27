export const setPersonalValue = (state, payload) => {
  state.personalHistory.personalDetails = payload
};

// Profile

export const addProfile = (state, payload) => {
  let query = payload.length > 0;

  if (query) {
    state.personalHistory.profile.saveStatus = true;
    state.personalHistory.profile.formShow = false;
    state.personalHistory.profile.values.content = payload;

  } else {
    alert('Lütfen Tüm Alanları Doldurduğunuzdan Emin Olun!!!');
  }
};
export const editProfile = (state) => {
  state.personalHistory.profile.formShow = true;
};

// Education //

export const addEducation = (state, payload) => {

  let query = payload.agree.length > 0 && payload.city.length > 0 && payload.school.length > 0
    && payload.starter_date.month != 'Month' && payload.starter_date.year != 'Year'
    && payload.end_date.month != 'Month' && payload.end_date.year != 'Year';

  let myState = state.personalHistory.educationData;

  if (query) {
    /* Tempalte üzerinde gösterirken bir filter yazılacak!!!!! */

    for (var i in myState.education.starter_date) {
      if (myState.education.starter_date[i] == 'gosterme') {
        myState.education.starter_date[i] = null;
      }
    }
    for (var i in myState.education.end_date) {
      if (myState.education.end_date[i] == 'gosterme') {
        myState.education.end_date[i] = null;
      }
    }
    if (myState.isUpdate.status) {
      myState.educationList[myState.isUpdate.index] = myState.education;
      myState.formShow = false;
      myState.isUpdate = {
        status: false,
        index: null
      };
      //   state.personalHistory.setDefaultEducation();
    } else {
      myState.educationList.push(myState.education);
      myState.formShow = false;
      //  state.personalHistory.setDefaultEducation();

    }
  } else {
    alert("Lütfen Tüm Alanları Doldurunuz !!!!");
  }


};
export const addNewEducation = (state) => {
  this.setDefaultEducation(state);
  state.personalHistory.educationData.formShow = true;
};
export const setDefaultEducation = (state) => {
  state.personalHistory.educationData.education = {
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
  };
};
export const destroyEducation = (state, payload) => {
  state.personalHistory.educationData.educationList.splice(payload, 1);
  this.setDefaultEducation(state);
};
export const editEducation = (state, payload) => {
  let myState = state.personalHistory.educationData;
  myState.education = myState.educationList[payload];
  myState.formShow = true;
  myState.isUpdate = {
    'index': payload,
    'status': true
  }


};

// Experience

export const addExperience = (state, payload) => {
  let myState = state.personalHistory.experienceData;

  let query = payload.jobTitle.length > 0 && payload.city.length > 0 && payload.employer.length > 0
    && payload.starter_date.month != 'Month' && payload.starter_date.year != 'Year'
    && payload.end_date.month != 'Month' && payload.end_date.year != 'Year';
  if (query) {
    /* Tempalte üzerinde gösterirken bir filter yazılacak!!!!! */
    for (var i in myState.experience.starter_date) {
      if (myState.experience.starter_date[i] == 'gosterme') {
        myState.experience.starter_date[i] = null;
      }
    }
    for (var i in myState.experience.end_date) {
      if (myState.experience.end_date[i] == 'gosterme') {
        myState.experience.end_date[i] = null;
      }
    }
    if (myState.isUpdate.status) {
      myState.experienceList[myState.isUpdate.index] = myState.experience;
      myState.formShow = false;
      myState.isUpdate = {
        status: false,
        index: null
      };
      this.setDefaultExperience(state);
    } else {
      myState.experienceList.push(myState.experience);
      myState.formShow = false;
      this.setDefaultExperience(state);
    }
  } else {
    alert("Lütfen Tüm Alanları Doldurunuz !!!!");
  }


};
export const addNewExperience = (state) => {
  this.setDefaultExperience(state);
  state.personalHistory.experienceData.formShow = true;
};
export const setDefaultExperience = (state) => {
  state.personalHistory.experienceData.experience = {
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
  };
};
export const destroyExperience = (state, payload) => {
  state.personalHistory.experienceData.experienceList.splice(payload, 1);
  this.setDefaultEducation(state);
};
export const editExperience = (state, payload) => {
  let myState = state.personalHistory.experienceData;
  myState.experience = myState.experienceList[payload];
  myState.formShow = true;
  myState.isUpdate = {
    'index': payload,
    'status': true
  }


};

// Ability

export const addAbility = (state, payload) => {
  let abilityPath = state.personalHistory.abilityData;
  let query = payload.name.length > 0 && payload.level != 'Seç';
  if (query) {
    if (abilityPath.isUpdate.status) {
      /* update */
      abilityPath.abilityList[abilityPath.isUpdate.index] = abilityPath.ability;
      abilityPath.formShow = false;
      abilityPath.isUpdate = {
        status: false,
        index: null
      };
      this.setDefaultAbility(state);


    } else {
      /* create */
      abilityPath.abilityList.push(abilityPath.ability);
      abilityPath.formShow = false;
      this.setDefaultAbility(state);
    }


  } else {
    alert('Lütfen Tüm Alanları Doldurduğunuza Emin Olun')
  }
};
export const addNewAbility = (state) => {
  let abilityPath = state.personalHistory.abilityData;
  this.setDefaultAbility(state);
  abilityPath.formShow = true
};
export const setDefaultAbility = (state) => {
  state.personalHistory.abilityData.ability = {
    name: '',
    level: 'Seç'
  }
};
export const destroyAbility = (state, payload) => {
  let abilityPath = state.personalHistory.abilityData;
  abilityPath.abilityList.splice(payload, 1);
  this.setDefaultAbility(state);
};
export const editAbility = (state, payload) => {
  let abilityPath = state.personalHistory.abilityData;
  abilityPath.ability = abilityPath.abilityList[payload];
  abilityPath.formShow = true;
  abilityPath.isUpdate = {
    'status': true,
    'index': payload
  }

};

// Language

export const addLanguage = (state, payload) => {
  let languagePath = state.personalHistory.languageData;

  let query = payload.name.length > 0 && payload.level != 'Seç';
  if (query) {
    if (languagePath.isUpdate.status) {
      languagePath.languageList[languagePath.isUpdate.index] = languagePath.language;
      languagePath.formShow = false;
      languagePath.isUpdate = {
        status: false,
        index: null
      };
      this.setDefaultLanguage(state);
    } else {
      languagePath.languageList.push(languagePath.language);
      languagePath.formShow = false;
      this.setDefaultLanguage(state);
    }

  } else {
    alert('Tüm kısımları doldurduğunuzdan emin olun!!!');
  }


};
export const addNewLanguage = (state) => {
  let languagePath = state.personalHistory.languageData;
  this.setDefaultLanguage(state);
  languagePath.formShow = true;
};
export const setDefaultLanguage = (state) => {
  state.personalHistory.languageData.language = {
    name: '',
    level: 'Seç',
  }
};
export const destroyLanguage = (state, payload) => {
  let languagePath = state.personalHistory.languageData;
  languagePath.languageList.splice(payload, 1);
  this.setDefaultLanguage(state);
};
export const editLanguage = (state, payload) => {
  let languagePath = state.personalHistory.languageData;
  languagePath.language = languagePath.languageList[payload];
  languagePath.formShow = true;
  languagePath.isUpdate.status = true;
  languagePath.isUpdate.index = payload;
};

// Reference

export const addReference = (state, payload) => {
  let referencePath = state.personalHistory.referenceData;
  let query_1 = payload.company.length > 0 || payload.person.length > 0;
  let query_2 = payload.telephone.length > 0 || payload.email.length > 0;

  if (query_1 && query_2) {
    if (referencePath.isUpdate.status) {
      /*update*/
      referencePath.referenceList[referencePath.isUpdate.index] = referencePath.reference;
      referencePath.formShow = false;
      this.setDefaultReference(state);
      referencePath.isUpdate = {
        status: false,
        index: null
      }
    } else {
      /*create*/
      referencePath.referenceList.push(referencePath.reference);
      referencePath.formShow = false;


      this.setDefaultReference(state);

    }
  } else {
    alert('Şirket veya Kişi Seçiniz ve En az Bir İletişim Şekil Giriniz.')
  }

};
export const addNewReference = (state) => {
  let referencePath = state.personalHistory.referenceData;
  this.setDefaultReference(state);
  referencePath.formShow = true;

};
export const setDefaultReference = (state) => {
  let referencePath = state.personalHistory.referenceData;
  referencePath.reference = {
    company: '',
    person: '',
    telephone: '',
    email: '',
  }
};
export const destroyReference = (state, payload) => {
  let referencePath = state.personalHistory.referenceData;
  referencePath.referenceList.splice(payload, 1);
  this.setDefaultReference(state);

};
export const editReference = (state, payload) => {
  let referencePath = state.personalHistory.referenceData;
  referencePath.reference = referencePath.referenceList[payload];
  referencePath.formShow = true;
  referencePath.isUpdate = {
    status: true,
    index: payload
  }
};

// Hobby

export const addHobby = (state, payload) => {
  let hobbyPath = state.personalHistory.hobbyData;
  let query = payload.name.length > 0;
  if (query) {
    if (hobbyPath.isUpdate.status) {
      hobbyPath.hobbyList[hobbyPath.isUpdate.index] = hobbyPath.hobby;
      hobbyPath.isUpdate = {
        status: false,
        index: null
      };
      hobbyPath.formShow = false;
      this.setDefaultHobby(state);
    } else {
      hobbyPath.hobbyList.push(hobbyPath.hobby);
      hobbyPath.formShow = false;
      this.setDefaultHobby(state);

    }
  } else {
    alert('Lütfen Tüm Alanları Doldurduğunuzdan Emin Olun!!!');
  }
};
export const addNewHobby = (state) => {
  let hobbyPath = state.personalHistory.hobbyData;
  this.setDefaultHobby(state);
  hobbyPath.formShow = true;

};
export const setDefaultHobby = (state) => {
  let hobbyPath = state.personalHistory.hobbyData;
  hobbyPath.hobby = {
    name: '',
  }
};
export const destroyHobby = (state, payload) => {
  let hobbyPath = state.personalHistory.hobbyData;
  hobbyPath.hobbyList.splice(payload, 1);
  this.setDefaultHobby(state);

};
export const editHobby = (state, payload) => {
  let hobbyPath = state.personalHistory.hobbyData;
  hobbyPath.hobby = hobbyPath.hobbyList[payload];
  hobbyPath.formShow = true;
  hobbyPath.isUpdate = {
    status: true,
    index: payload

  }
};

// Course

export const addCourse = (state, payload) => {
  let coursePath = state.personalHistory.courseData;
  let query = payload.name.length > 0 && payload.institution.length > 0
    && payload.starter_date.month != 'Month' && payload.starter_date.year != 'Year'
    && payload.end_date.month != 'Month' && payload.end_date.year != 'Year';

  if (query) {
    /* Tempalte üzerinde gösterirken bir filter yazılacak!!!!! */
    for (var i in coursePath.course.starter_date) {
      if (coursePath.course.starter_date[i] == 'gosterme') {
        coursePath.course.starter_date[i] = null;
      }
    }
    for (var i in coursePath.course.end_date) {
      if (coursePath.course.end_date[i] == 'gosterme') {
        coursePath.course.end_date[i] = null;
      }
    }
    if (coursePath.isUpdate.status) {
      coursePath.courseList[coursePath.isUpdate.index] = coursePath.course;
      coursePath.formShow = false;
      coursePath.isUpdate = {
        status: false,
        index: null
      };
      this.setDefaultCourse(state);
    } else {
      coursePath.courseList.push(coursePath.course);
      coursePath.formShow = false;
      this.setDefaultCourse(state);
    }
  } else {
    alert("Lütfen Tüm Alanları Doldurunuz !!!!");
  }

};
export const addNewCourse = (state) => {
  let coursePath = state.personalHistory.courseData;
  this.setDefaultCourse(state);
  coursePath.formShow = true;

};
export const setDefaultCourse = (state) => {
  let coursePath = state.personalHistory.courseData;
  coursePath.course = {
    agree: '',
    city: '',
    starter_date: {
      month: 'Month',
      year: 'Year'
    },
    end_date: {
      month: 'Month',
      year: 'Year'
    },
  }
};
export const destroyCourse = (state, payload) => {
  let coursePath = state.personalHistory.courseData;
  coursePath.courseList.splice(payload, 1);
  this.setDefaultCourse(state);


};
export const editCourse = (state, payload) => {
  let coursePath = state.personalHistory.courseData;
  coursePath.course = coursePath.courseList[payload];
  coursePath.formShow = true;
  coursePath.isUpdate.status = true;
  coursePath.isUpdate.index = payload;
};

//Achievement

export const addAchievement = (state, payload) => {
  let achievementPath = state.personalHistory.achievementData;

  let query = payload.content.length > 0;
  if (query) {
    if (achievementPath.isUpdate.status) {
      achievementPath.achievementList[achievementPath.isUpdate.index] = achievementPath.achievement;
      achievementPath.isUpdate = {
        status: false,
        index: null
      };
      achievementPath.formShow = false;
      this.setDefaultAchievement(state);
    } else {
      achievementPath.achievementList.push(achievementPath.achievement);
      achievementPath.formShow = false;
      this.setDefaultAchievement(state);

    }
  } else {
    alert('Lütfen Tüm Alanları Doldurduğunuzdan Emin Olun!!!');
  }
};
export const addNewAchievement = (state) => {
  let achievementPath = state.personalHistory.achievementData;
  this.setDefaultAchievement(state);
  achievementPath.formShow = true;
};
export const setDefaultAchievement = (state) => {
  let achievementPath = state.personalHistory.achievementData;
  achievementPath.achievement = {
    content: '',
  }
};
export const destroyAchievement = (state, payload) => {
  let achievementPath = state.personalHistory.achievementData;
  achievementPath.achievementList.splice(payload, 1);
  this.setDefaultAchievement(state);
};
export const editAchievement = (state, payload) => {
  let achievementPath = state.personalHistory.achievementData;
  achievementPath.achievement = achievementPath.achievementList[payload];
  achievementPath.formShow = true;
  achievementPath.isUpdate = {
    status: true,
    index: payload

  }
};

// Publication

export const addPublication = (state, payload) => {
  let publicationPath = state.personalHistory.publicationData;
  let query = payload.content.length > 0;
  if (query) {
    if (publicationPath.isUpdate.status) {
      publicationPath.publicationList[publicationPath.isUpdate.index] = publicationPath.publication;
      publicationPath.isUpdate = {
        status: false,
        index: null
      };
      publicationPath.formShow = false;
      this.setDefaultPublication(state);
    } else {
      publicationPath.publicationList.push(publicationPath.publication);
      publicationPath.formShow = false;
      this.setDefaultPublication(state);

    }
  } else {
    alert('Lütfen Tüm Alanları Doldurduğunuzdan Emin Olun!!!');
  }


};
export const addNewPublication = (state) => {
  let publicationPath = state.personalHistory.publicationData;
  this.setDefaultPublication(state);
  publicationPath.formShow = true;

};
export const setDefaultPublication = (state) => {
  let publicationPath = state.personalHistory.publicationData;
  publicationPath.publication = {
    content: '',
  }

};
export const destroyPublication = (state, payload) => {
  let publicationPath = state.personalHistory.publicationData;
  publicationPath.publicationList.splice(payload, 1);
  this.setDefaultPublication(state);
};
export const editPublication = (state, payload) => {
  let publicationPath = state.personalHistory.publicationData;
  publicationPath.publication = publicationPath.publicationList[payload];
  publicationPath.formShow = true;
  publicationPath.isUpdate = {
    status: true,
    index: payload

  }
};
