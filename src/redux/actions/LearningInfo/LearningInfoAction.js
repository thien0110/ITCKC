export const FORMAT_DATA = 'FORMAT_DATA';
export const GET_SUBJECT = 'GET_SUBJECT';
export const GET_SUBJECT_SUCCESS = 'GET_SUBJECT_SUCCESS';
export const GET_SUBJECT_FAIL = 'GET_SUBJECT_FAIL';


export const getSubjectAction = (input) => {
    return {
      type:GET_SUBJECT,
      input: input,
    };
  };
export const formatData = (input) => {
  return {
    type: FORMAT_DATA,
    input: input,
  };
};
