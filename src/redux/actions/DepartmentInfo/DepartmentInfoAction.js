export const FORMAT_DATA = 'FORMAT_DATA';
export const GET_DEPARTMENT_INFO = 'GET_DEPARTMENT_INFO';
export const GET_DEPARTMENT_INFO_SUCCESS = 'GET_DEPARTMENT_INFO_SUCCESS';
export const GET_DEPARTMENT_INFO_FAIL = 'GET_DEPARTMENT_INFO_FAIL';


export const getDepartmentInfoAction = (input) => {
    return {
      type:GET_DEPARTMENT_INFO,
      input: input,
    };
  };
export const formatData = (input) => {
  return {
    type: FORMAT_DATA,
    input: input,
  };
};
