import {GET_MENU_NEWS,GET_HOT_POST_IT} from './ActionTypes';

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