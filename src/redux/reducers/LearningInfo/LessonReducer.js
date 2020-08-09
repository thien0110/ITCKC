import {
    FORMAT_DATA,GET_LESSON,GET_LESSON_FAIL,GET_LESSON_SUCCESS
  } from '../../actions/LearningInfo/LessonAction';
  
  const initialState = {
    isFetching: false,
    data: null,
    message: null,
  };
  const lessonReducers = (state = initialState, action) => {
    switch (action.type) {
      case FORMAT_DATA:
        return {  ...state,
          message:null,};  
      case GET_LESSON:
        return {...state, isFetching: true};
      case GET_LESSON_SUCCESS:
        return {
          ...state,
          isFetching: false,
          data: action.data,
        };
      case GET_LESSON_FAIL:
        return {...state, isFetching: false, message: action.error};
      default:
        return state;
    }
  };
  
  export default lessonReducers;
  