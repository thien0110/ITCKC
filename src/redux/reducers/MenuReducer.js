import {
    GET_MENU_NEWS,GET_MENU_NEWS_FAIL,GET_MENU_NEWS_SUCCESS
  } from '../actions/ActionTypes';
  
  const initialState = {
    isFetching: false,
    data: null,
    message: null,
  };
  const menuReducers = (state = initialState, action) => {
    switch (action.type) {
      case GET_MENU_NEWS:
        return {...state, isFetching: true};
      case GET_MENU_NEWS_SUCCESS:
        return {
          ...state,
          isFetching: false,
          data: action.data,
          message: action.message,
        };
      case GET_MENU_NEWS_FAIL:
        return {...state, isFetching: false, message: action.error};
      default:
        return state;
    }
  };
  
  export default menuReducers;
  