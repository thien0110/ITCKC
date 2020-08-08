export const FORMAT_DATA = 'FORMAT_DATA';
export const EDIT_PROFILE = 'EDIT_PROFILE';
export const EDIT_PROFILE_SUCCESS = 'EDIT_PROFILE_SUCCESS';
export const EDIT_PROFILE_FAIL = 'EDIT_PROFILE_FAIL';
export const GET_PROFILE = 'GET_PROFILE';
export const GET_PROFILE_SUCCESS = 'GET_PROFILE_SUCCESS';
export const GET_PROFILE_FAIL = 'GET_PROFILE_FAIL';
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';
export const CHANGE_PASSWORD_SUCCESS = 'CHANGE_PASSWORD_SUCCESS';
export const CHANGE_PASSWORD_FAIL = 'CHANGE_PASSWORD_FAIL';


export const editProfileAction = (input) => {
  return {
    type: EDIT_PROFILE,
    input: input,
  };
};

export const changePasswordAction = (input) => {
  return {
    type: CHANGE_PASSWORD,
    input: input,
  };
};
export const getProfileAction = (input) => {
    return {
      type:GET_PROFILE,
      input: input,
    };
  };
export const formatData = (input) => {
  return {
    type: FORMAT_DATA,
    input: input,
  };
};
