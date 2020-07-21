import {LOGIN, LOGIN_FAIL, LOGIN_SUCCESS, FORMAT_DATA} from './ActionTypes';

export const loginAction = (input) => {
  return {
    type: LOGIN,
    input: input,
  };
};
export const formatData = (input) => {
  return {
    type: FORMAT_DATA,
    input: input,
  };
};
