import {
    FORMAT_DATA,
    GET_SCHOOL_INFO_SUCCESS,GET_SCHOOL_INFO_FAIL,GET_SCHOOL_INFO
  } from '../../actions/SchoolInfo/SchoolInfoAction';
  
  const initialState = {
    isFetching: false,
    data: null,
    message: null,
  };
  const schoolInfoReducers = (state = initialState, action) => {
    switch (action.type) {
      case FORMAT_DATA:
        return {  ...state,
          message:null,};  
      case GET_SCHOOL_INFO:
        return {...state, isFetching: true};
      case GET_SCHOOL_INFO_SUCCESS:
        return {
          ...state,
          isFetching: false,
          data: action.data,
        };
      case GET_SCHOOL_INFO_FAIL:
        return {...state, isFetching: false, message: action.error};
      default:
        return state;
    }
  };
  
  export default schoolInfoReducers;
  