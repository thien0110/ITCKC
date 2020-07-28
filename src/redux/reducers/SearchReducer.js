import {
    SEARCH_SUCCESS,SEARCH_FAIL,SEARCH,FORMAT_DATA
  } from '../actions/ActionTypes';
  
  const initialState = {
    isFetching: false,
    data: null,
    message: null,
  };
  const searchReducers = (state = initialState, action) => {
    switch (action.type) {
      case FORMAT_DATA:
        return initialState;
      case SEARCH:
        return {...state, isFetching: true};
      case SEARCH_SUCCESS:
        return {
          ...state,
          isFetching: false,
          data: action.data,
          message: action.message,
        };
      case SEARCH_FAIL:
        return {...state, isFetching: false, message: action.error};
      default:
        return state;
    }
  };
  
  export default searchReducers;
  