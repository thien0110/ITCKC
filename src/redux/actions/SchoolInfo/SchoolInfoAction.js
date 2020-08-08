export const FORMAT_DATA = 'FORMAT_DATA';
export const GET_SCHOOL_INFO = 'GET_SCHOOL_INFO';
export const GET_SCHOOL_INFO_SUCCESS = 'GET_SCHOOL_INFO_SUCCESS';
export const GET_SCHOOL_INFO_FAIL = 'GET_SCHOOL_INFO_FAIL';


export const getSchoolInfoAction = (input) => {
    return {
      type:GET_SCHOOL_INFO,
      input: input,
    };
  };
export const formatData = (input) => {
  return {
    type: FORMAT_DATA,
    input: input,
  };
};
