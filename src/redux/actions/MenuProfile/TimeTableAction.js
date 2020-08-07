export const FORMAT_DATA = 'FORMAT_DATA';
export const GET_TIME_TABLE = 'GET_TIME_TABLE';
export const GET_TIME_TABLE_SUCCESS = 'GET_TIME_TABLE_SUCCESS';
export const GET_TIME_TABLE_FAIL = 'GET_TIME_TABLE_FAIL';

export const getTimeTableAction = (input) => {
  return {
    type: GET_TIME_TABLE,
    input: input,
  };
};
export const formatData = (input) => {
  return {
    type: FORMAT_DATA,
    input: input,
  };
};
