import {
    FORMAT_DATA,GET_TIME_TABLE_SUCCESS,GET_TIME_TABLE_FAIL,GET_TIME_TABLE
  } from '../../actions/MenuProfile/TimeTableAction';
  
  const initialState = {
    isFetching: false,
    data: null,
    message: null,
  };
  const timeTableReducers = (state = initialState, action) => {
    switch (action.type) {
      case FORMAT_DATA:
        return {  ...state,
          message:null,};
      case GET_TIME_TABLE:
        return {...state, isFetching: true};
      case GET_TIME_TABLE_SUCCESS:
        return {
          ...state,
          isFetching: false,
          data: action.data,
        };
      case GET_TIME_TABLE_FAIL:
        return {...state, isFetching: false, message: action.error};
      default:
        return state;
    }
  };
  
  export default timeTableReducers;
  