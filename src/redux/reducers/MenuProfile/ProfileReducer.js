import {
  EDIT_PROFILE,
  EDIT_PROFILE_FAIL,
  EDIT_PROFILE_SUCCESS,
  FORMAT_DATA,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAIL,
  GET_PROFILE,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAIL,
  CHANGE_PASSWORD,
} from '../../actions/MenuProfile/ProfileAction';

const initialState = {
  isFetching: false,
  data: null,
  message: null,
};
const profileReducers = (state = initialState, action) => {
  switch (action.type) {
    case FORMAT_DATA:
      return {...state, message: null};
    case EDIT_PROFILE:
      return {...state, isFetching: true};
    case EDIT_PROFILE_SUCCESS:
      let newData = {...state.data, sdt: action.data.input.newPhone};
      return {
        ...state,
        isFetching: false,
        data: newData,
        message: action.message,
      };
    case EDIT_PROFILE_FAIL:
      return {...state, isFetching: false, message: action.error};

    case GET_PROFILE:
      return {...state, isFetching: true};
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data,
      };
    case GET_PROFILE_FAIL:
      return {...state, isFetching: false, message: action.error};
    
      case CHANGE_PASSWORD:
        return {...state, isFetching: true};
      case CHANGE_PASSWORD_SUCCESS:
        return {
          ...state,
          isFetching: false,
          message: action.message,
        };
      case CHANGE_PASSWORD_FAIL:
        return {...state, isFetching: false, message: action.error};
      default:
      return state;
  }
};

export default profileReducers;
