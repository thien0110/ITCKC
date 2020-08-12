export const FORMAT_DATA = 'FORMAT_DATA';
export const GET_WORKING = 'GET_WORKING';
export const GET_WORKING_SUCCESS = 'GET_WORKING_SUCCESS';
export const GET_WORKING_FAIL = 'GET_WORKING_FAIL';


export const getWorkingAction = (input) => {
    return {
      type:GET_WORKING,
      input: input,
    };
  };
export const formatData = (input) => {
  return {
    type: FORMAT_DATA,
    input: input,
  };
};
