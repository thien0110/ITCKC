import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  CHANGE_STATE_LOGIN
} from '../actions/ActionTypes';

const initialState = {
  state: -1,
  isFetching: false,
  data: null,
  message: null,
};
const loginReducers = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_STATE_LOGIN:
      var stateNew = { ...state };
      for (var i = 0; i < action.key.length; i++) {
        stateNew = { ...stateNew, [action.key[i]]: action.state };
      }
      return stateNew;
    case LOGIN:
      return {...state, isFetching: true, state: 0};
    case LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data,
        message: action.message,
        state: 1
      };
    case LOGIN_FAIL:
      return {...state, isFetching: false, message: action.error, state: 2};
    default:
      return state;
  }
};

export default loginReducers;
