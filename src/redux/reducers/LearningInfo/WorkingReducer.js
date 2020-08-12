import {
  FORMAT_DATA,
  GET_WORKING_SUCCESS,
  GET_WORKING_FAIL,
  GET_WORKING,
} from '../../actions/LearningInfo/WorkingAction';

const initialState = {
  isFetching: false,
  data: null,
  message: null,
};
const workingReducers = (state = initialState, action) => {
  switch (action.type) {
    case FORMAT_DATA:
      return {...state, message: null};
    case GET_WORKING:
      return {...state, isFetching: true};
    case GET_WORKING_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data,
      };
    case GET_WORKING_FAIL:
      return {...state, isFetching: false, message: action.error};
    default:
      return state;
  }
};

export default workingReducers;
