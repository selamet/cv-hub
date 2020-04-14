export const setPersonalValue = (state, payload) => {
  state.personalDetails = payload
};

export const setAdditionalInformationValue = (state, payload) => {
  state.additionalInformation = payload

};

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
