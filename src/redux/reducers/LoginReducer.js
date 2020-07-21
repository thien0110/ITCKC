import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  FORMAT_DATA,
} from '../actions/ActionTypes';

const initialState = {
  isFetching: false,
  data: null,
  message: null,
};
const loginReducers = (state = initialState, action) => {
  switch (action.type) {
    case FORMAT_DATA:
      return initialState;
    case LOGIN:
      return {...state, isFetching: true};
    case LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data,
        message: action.message,
      };
    case LOGIN_FAIL:
      return {...state, isFetching: false, message: action.error};
    default:
      return state;
  }
};

export default loginReducers;
