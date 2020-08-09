export const FORMAT_DATA = 'FORMAT_DATA';
export const GET_LESSON = 'GET_LESSON';
export const GET_LESSON_SUCCESS = 'GET_LESSON_SUCCESS';
export const GET_LESSON_FAIL = 'GET_LESSON_FAIL';


export const getLessonAction = (input) => {
    return {
      type:GET_LESSON,
      input: input,
    };
  };
export const formatData = (input) => {
  return {
    type: FORMAT_DATA,
    input: input,
  };
};
