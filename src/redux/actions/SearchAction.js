import {SEARCH, SEARCH_FAIL, SEARCH_SUCCESS,FORMAT_DATA} from './ActionTypes';

export const searchAction = (input) => {
  return {
    type: SEARCH,
    input,
  };
};
export const formatData = () => {
  return {
    type: FORMAT_DATA,
  };
};