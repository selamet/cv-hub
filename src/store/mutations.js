export const setPersonalDetails = (state, payload) => {
  console.log(payload);
  state.personalDetails.name = payload.name;
}

