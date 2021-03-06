import {
  GET_MENU_NEWS,
  GET_MENU_NEWS_FAIL,
  GET_MENU_NEWS_SUCCESS,
  GET_HOT_POST_IT_SUCCESS,
  GET_HOT_POST_IT_FAIL,
  GET_HOT_POST_IT,
  GET_NOTI_SUCCESS,
  GET_NOTI_FAIL,
  GET_NOTI,
} from '../actions/ActionTypes';

const initialState = {
  isFetching: false,
  data: null,
  dataHotKhoa: null,
  dataNoti: null,
  message: null,
};
const menuReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_MENU_NEWS:
      return {...state, isFetching: true};
    case GET_MENU_NEWS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data,
        message: action.message,
      };
    case GET_MENU_NEWS_FAIL:
      return {...state, isFetching: false, message: action.error};
    case GET_HOT_POST_IT:
      return {...state, isFetching: true};
    case GET_HOT_POST_IT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        dataHotKhoa: action.data,
        message: action.message,
      };
    case GET_HOT_POST_IT_FAIL:
      return {...state, isFetching: false, message: action.error};
    case GET_NOTI:
      return {...state, isFetching: true};
    case GET_NOTI_SUCCESS:
      return {
        ...state,
        isFetching: false,
        dataNoti: action.data,
        message: action.message,
      };
    case GET_NOTI_FAIL:
      return {...state, isFetching: false, message: action.error};
    default:
      return state;
  }
};

export default menuReducers;
