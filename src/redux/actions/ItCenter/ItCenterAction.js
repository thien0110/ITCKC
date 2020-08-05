export const FORMAT_DATA = 'FORMAT_DATA';
export const GET_IT_CENTER_INFO = 'GET_IT_CENTER_INFO';
export const GET_IT_CENTER_INFO_SUCCESS = 'GET_IT_CENTER_INFO_SUCCESS';
export const GET_IT_CENTER_INFO_FAIL = 'GET_IT_CENTER_INFO_FAIL';


export const getItCenterInfoAction = (input) => {
    return {
      type:GET_IT_CENTER_INFO,
      input: input,
    };
  };
export const formatData = (input) => {
  return {
    type: FORMAT_DATA,
    input: input,
  };
};
