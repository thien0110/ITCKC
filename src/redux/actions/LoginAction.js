import { LOGIN, LOGIN_FAIL, LOGIN_SUCCESS } from './ActionTypes'

export const loginAction = input => {
    return {
      type: LOGIN,
      input: input,
    };
  };
  