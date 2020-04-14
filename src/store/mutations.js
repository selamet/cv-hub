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
