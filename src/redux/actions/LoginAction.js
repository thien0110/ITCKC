import {LOGIN, LOGIN_FAIL, LOGIN_SUCCESS, FORMAT_DATA,CHANGE_STATE_LOGIN} from './ActionTypes';

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

export const changeStateLoginAction = (key,state) => {
  return {
    type: CHANGE_STATE_LOGIN,
    key:key,
    state:state,
  };
};

