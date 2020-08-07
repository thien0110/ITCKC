export const FORMAT_DATA = 'FORMAT_DATA';
export const GET_SCORE_TABLE = 'GET_SCORE_TABLE';
export const GET_SCORE_TABLE_SUCCESS = 'GET_SCORE_TABLE_SUCCESS';
export const GET_SCORE_TABLE_FAIL = 'GET_SCORE_TABLE_FAIL';

export const getScoreTableAction = (input) => {
  return {
    type: GET_SCORE_TABLE,
    input: input,
  };
};
export const formatData = (input) => {
  return {
    type: FORMAT_DATA,
    input: input,
  };
};
