import {GET_MENU_NEWS,GET_HOT_POST_IT,GET_NOTI} from './ActionTypes';

export const getMenuNewsAction = (input) => {
  return {
    type: GET_MENU_NEWS,
    input,
  };
};
export const getHotPostItAction = (input) => {
  return {
    type: GET_HOT_POST_IT,
    input,
  };
};
export const getNotiAction = (input) => {
  return {
    type: GET_NOTI,
    input,
  };
};