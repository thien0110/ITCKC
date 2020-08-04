import {
    FORMAT_DATA,
    GET_IT_CENTER_INFO, GET_IT_CENTER_INFO_FAIL, GET_IT_CENTER_INFO_SUCCESS,

  } from '../../actions/ItCenter/ItCenterAction';
  
  const initialState = {
    isFetching: false,
    data: null,
    message: null,
  };
  const itCenterReducers = (state = initialState, action) => {
    switch (action.type) {
      case FORMAT_DATA:
        return {  ...state,
          message:null,};  
      case GET_IT_CENTER_INFO:
        return {...state, isFetching: true};
      case GET_IT_CENTER_INFO_SUCCESS:
        return {
          ...state,
          isFetching: false,
          data: action.data,
        };
      case GET_IT_CENTER_INFO_FAIL:
        return {...state, isFetching: false, message: action.error};
      default:
        return state;
    }
  };
  
  export default itCenterReducers;
  