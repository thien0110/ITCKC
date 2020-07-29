import {
    FORMAT_DATA,
    GET_SUBJECT,GET_SUBJECT_FAIL,GET_SUBJECT_SUCCESS
  } from '../../actions/LearningInfo/LearningInfoAction';
  
  const initialState = {
    isFetching: false,
    data: null,
    message: null,
  };
  const learningInfoReducers = (state = initialState, action) => {
    switch (action.type) {
      case FORMAT_DATA:
        return {  ...state,
          message:null,};  
      case GET_SUBJECT:
        return {...state, isFetching: true};
      case GET_SUBJECT_SUCCESS:
        return {
          ...state,
          isFetching: false,
          data: action.data,
        };
      case GET_SUBJECT_FAIL:
        return {...state, isFetching: false, message: action.error};
      default:
        return state;
    }
  };
  
  export default learningInfoReducers;
  