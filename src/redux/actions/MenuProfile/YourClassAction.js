export const FORMAT_DATA = 'FORMAT_DATA';
export const GET_YOUR_CLASS = 'GET_YOUR_CLASS';
export const GET_YOUR_CLASS_SUCCESS = 'GET_YOUR_CLASS_SUCCESS';
export const GET_YOUR_CLASS_FAIL = 'GET_YOUR_CLASS_FAIL';

export const getYourClassAction = (input) => {
  return {
    type: GET_YOUR_CLASS,
    input: input,
  };
};
export const formatData = (input) => {
  return {
    type: FORMAT_DATA,
    input: input,
  };
};
