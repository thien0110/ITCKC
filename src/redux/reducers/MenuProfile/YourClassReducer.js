import {
    FORMAT_DATA,GET_YOUR_CLASS,GET_YOUR_CLASS_FAIL,GET_YOUR_CLASS_SUCCESS
  } from '../../actions/MenuProfile/YourClassAction';
  
  const initialState = {
    isFetching: false,
    data: null,
    message: null,
  };
  const yourClassReducers = (state = initialState, action) => {
    switch (action.type) {
      case FORMAT_DATA:
        return {  ...state,
          message:null,};
      case GET_YOUR_CLASS:
        return {...state, isFetching: true};
      case GET_YOUR_CLASS_SUCCESS:
        return {
          ...state,
          isFetching: false,
          data: action.data,
        };
      case GET_YOUR_CLASS_FAIL:
        return {...state, isFetching: false, message: action.error};
      default:
        return state;
    }
  };
  
  export default yourClassReducers;
  