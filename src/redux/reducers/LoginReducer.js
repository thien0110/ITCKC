import {
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
  } from '../actions/ActionTypes';
  
  const initialState = {
    isFetching: false,
    data: null,
    error: null,
  };
  const loginReducers = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN:
        return {...state, isFetching: true};
      case LOGIN_SUCCESS:
        return {...state, isFetching: false, data: action.data};
      case LOGIN_FAIL:
        return {...state, isFetching: false, error: action.error};
      default:
        return state;
    }
  };
  
  export default loginReducers;
  