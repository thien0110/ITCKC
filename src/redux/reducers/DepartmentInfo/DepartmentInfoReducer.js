import {
    FORMAT_DATA,
    GET_DEPARTMENT_INFO, GET_DEPARTMENT_INFO_FAIL, GET_DEPARTMENT_INFO_SUCCESS
  } from '../../actions/DepartmentInfo/DepartmentInfoAction';
  
  const initialState = {
    isFetching: false,
    data: null,
    message: null,
  };
  const departmentInfoReducers = (state = initialState, action) => {
    switch (action.type) {
      case FORMAT_DATA:
        return {  ...state,
          message:null,};  
      case GET_DEPARTMENT_INFO:
        return {...state, isFetching: true};
      case GET_DEPARTMENT_INFO_SUCCESS:
        return {
          ...state,
          isFetching: false,
          data: action.data,
        };
      case GET_DEPARTMENT_INFO_FAIL:
        return {...state, isFetching: false, message: action.error};
      default:
        return state;
    }
  };
  
  export default departmentInfoReducers;
  